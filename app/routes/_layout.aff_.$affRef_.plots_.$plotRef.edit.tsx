import {ActionFunction, json, LoaderFunction, redirect} from "@remix-run/server-runtime";
import {ActionArgs} from "@remix-run/node";
import {commitSession, getSession, setToastMessage} from "~/utils/session.server";
import {validator} from "~/schema/plot";
import {validationError} from "remix-validated-form";
import {api} from "~/http";
import {useLoaderData, useParams} from "@remix-run/react";
import React from "react";
import PlotEdit from "~/components/PlotEdit";

export const action: ActionFunction = async ({ request,params }: ActionArgs) => {
    try {
        const {affRef} = params
        const session = await getSession(request.headers.get("Cookie"));
        const response = await validator.validate(await request.formData());
        if (response.error) return validationError(response.error);
        const body: any = {
            id:response.data.id,
            plotBody: {
                approverId: response.data.approverId,
                plotStatusId: response.data.plotStatusId,
            },
        };
        await api.plot.apiPlotIdPut(body);
        const message = {
            options: { variant: "success" },
            message: `Plot change has been requested successfully`,
        };
        setToastMessage(session, message);

        return redirect(`/aff/${affRef}/plots`, {
            headers: { "Set-Cookie": await commitSession(session) },
        });
    } catch (e) {
        if (e?.response) {
            return e.response;
        } else {
            return { error: true };
        }
    }
};

export let loader: LoaderFunction = async ({ request,params }) => {
    const {plotRef}:any = params

    const plot = await api.plot.apiPlotPlotRefGet({plotRef});
    const approverList = await api.approver.apiApproverGet()
    const plotStatusList = await api.plotStatus.apiPlotStatusGet()

    return json<any>({ plot,approverList ,plotStatusList});
};
export default function PlotEditPage() {
    const data: any = useLoaderData();
    // const response = useActionData<typeof action>();
    const {plotRef} = useParams()
    const { plot, approverList,plotStatusList } = data;
    return (
        <PlotEdit title={`Edit Plot ${plotRef}`} plot={plot} approverList={approverList} plotStatusList={plotStatusList}/>
    );
}