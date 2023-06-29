import * as React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { withEmotionCache } from "@emotion/react";
import { unstable_useEnhancedEffect as useEnhancedEffect } from "@mui/material";
import theme from "./utils/theme";
import ClientStyleContext from "./utils/ClientStyleContext";
import Layout from "./components/Layout";
import { LicenseInfo } from "@mui/x-license-pro";
import leafletStyle from "leaflet/dist/leaflet.css";
import myStyles from "~/styles/main.css";
import { GlobalLoading } from "~/components/Loader";
import { json, LoaderArgs } from "@remix-run/server-runtime";
import authenticator from "~/utils/auth.server";
import { commitSession, getSession } from "~/utils/session.server";
import { SnackbarProvider } from "notistack";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

export function links() {
  return [
    { rel: "stylesheet", href: leafletStyle },
    { rel: "stylesheet", href: myStyles },
  ];
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
        </head>
        <body>
          <GlobalLoading />
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const toastMessage = session.get("toastMessage") || null;

  const authentication = await authenticator.isAuthenticated(request);
  return json(
    { authentication, toastMessage },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames

export default function App() {
  LicenseInfo.setLicenseKey(
    "1ce4bcff08f6319c3ce8b2a3c2ef0327Tz02ODUyNixFPTE3MTgyNTY4NTIxMTgsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
  );
  return (
    <Document>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Outlet />
        </LocalizationProvider>
      </SnackbarProvider>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.log({ error });
  return (
    <Document title="Error!">
      {/*<Layout>*/}
      <div>
        <h1>There was an error</h1>
        <p>{error?.message}</p>
        <p>{error}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
      {/*</Layout>*/}
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const session = useLoaderData<typeof loader>();
  const error = useRouteError();
  console.log({ error });
  let message;
  switch (error?.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(error?.data || error?.statusText);
  }

  return (
    <Document title={`${error?.status} ${error?.statusText}`}>
      <Layout user={session?.user}>
        <h1>
          {error?.status}: {error?.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}
