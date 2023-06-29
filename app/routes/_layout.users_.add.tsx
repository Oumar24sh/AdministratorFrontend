import FormPage from "~/components/PageWithBack";
import { validator } from "~/schema/user";
import { ValidatedForm, validationError } from "remix-validated-form";
import { Grid } from "@mui/material";
import { Input, Select } from "~/components/Fields";
import React from "react";
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime";
import { api } from "~/http";
import { useLoaderData } from "@remix-run/react";
import PlotStatusChip from "~/components/PlotStatusChip";
import { ActionArgs } from "@remix-run/node";
import {
  commitSession,
  getSession,
  setToastMessage,
} from "~/utils/session.server";
import { LoadingButton } from "@mui/lab";

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  try {
    const session = await getSession(request.headers.get("Cookie"));
    const response = await validator.validate(await request.formData());
    if (response.error) return validationError(response.error);
    const body: any = {
      userBody: {
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        userName: response.data.userName,
        email: response.data.email,
        roleId: response.data.roleId,
        password: "User@123",
      },
    };
    await api.user.apiUserPost(body);
    const message = {
      options: { variant: "success" },
      message: `User has been added successfully`,
    };
    setToastMessage(session, message);

    return redirect(`/users`, {
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
export let loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const roleList = await api.role.apiRoleGet();

  return json<any>({ roleList });
};

export default function UserAdd() {
  const data = useLoaderData();
  const { roleList } = data;
  return (
    <FormPage title={"Add new user"}>
      <ValidatedForm
        validator={validator}
        method="post"
        id="add-user-form"
        noValidate
      >
        <Grid container spacing={2}>
          <Grid item md={7}>
            <Input required name={`firstName`} label="First Name" />
          </Grid>
          <Grid item md={7}>
            <Input required name={`lastName`} label="Last Name" />
          </Grid>
          <Grid item md={7}>
            <Input required name={`userName`} label="Username" />
          </Grid>
          <Grid item md={7}>
            <Input required name={`email`} label="Email" />
          </Grid>
          <Grid item md={7}>
            <Select
              required
              name={`roleId`}
              label="Role"
              menuItems={roleList}
              customLabelFunc={(item) => item.name}
            />
          </Grid>
          <Grid item md={12}>
            <LoadingButton
              color="success"
              variant={"contained"}
              type={"submit"}
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </ValidatedForm>
    </FormPage>
  );
}
