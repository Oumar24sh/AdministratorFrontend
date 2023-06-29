//https://www.mattstobbs.com/remix-authentication/
import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import authenticator from "~/utils/auth.server";


export async function action({ request }: ActionArgs) {
    return authenticator.logout( request, {redirectTo:'/login'});
}

export async function loader() {
    return redirect("/login");
} 