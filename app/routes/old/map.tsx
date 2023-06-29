import React, { FunctionComponent } from "react";
import { ClientOnly } from "remix-utils";
import MapOverview from "~/components/Map/_.client";

export default function Map() {
  return (
    <ClientOnly
      fallback={
        <div id="skeleton" style={{ height: 400, background: "#d1d1d1" }} />
      }
    >
      {() => <MapOverview />}
    </ClientOnly>
  );
}
 