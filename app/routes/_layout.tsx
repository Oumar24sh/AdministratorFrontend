import Layout from "~/components/Layout";
import { Outlet, useLoaderData } from "@remix-run/react";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import { filterMenuByPermissions } from "~/utils/refactorMenuItems";
import { userList } from "~/utils/menuItems";
import authenticator from "~/utils/auth.server";
import {SnackbarProvider, useSnackbar} from "notistack";
import {useEffect} from "react";
import {commitSession, getSession} from "~/utils/session.server";

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const toastMessage = session.get("toastMessage") || null;

  const authentication = await authenticator.isAuthenticated(request);
  return json(
      { ...authentication, toastMessage },
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
  );
}

export default function MainLayout() {
  const {user,toastMessage} = useLoaderData();
  const menuItems = filterMenuByPermissions(user, userList);
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    if (!toastMessage) {
      return;
    }
    const toast = JSON.parse(toastMessage);
    enqueueSnackbar(toast.message,{...toast.options});
  }, [toastMessage]);
  return (
      <Layout user={user} menuItems={menuItems || null}>
        <Outlet />
      </Layout>
  );
}
