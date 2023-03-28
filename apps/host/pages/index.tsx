import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Button } from "ui";

const RemotePage = dynamic(() => import("remote1/page"), {
  suspense: true,
  ssr: false,
});
const RemoteComponent1 = dynamic(() => import("remote1/component1"), {
  suspense: true,
  ssr: false,
});
const RemoteComponent2 = dynamic(() => import("remote1/component2"), {
  suspense: true,
  ssr: false,
});

export default function HostApplication() {
  return (
    <div>
      <h1>Host Application</h1>
      <Button />
      <Suspense>
        <RemotePage />
      </Suspense>
      <Suspense>
        <RemoteComponent1 />
        <RemoteComponent2 />
      </Suspense>
    </div>
  );
}
