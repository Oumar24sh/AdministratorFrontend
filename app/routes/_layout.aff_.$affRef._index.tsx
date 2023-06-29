import {LoaderArgs, redirect} from "@remix-run/server-runtime";

export async function loader({ request,params }: LoaderArgs) {
    const {affRef} = params
    return redirect(`/aff/${affRef}/plots`);
}
export default function AffRefIndex() {
    return "AffIndex"
}