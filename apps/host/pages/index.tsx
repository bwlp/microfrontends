import dynamic from "next/dynamic";
import { Suspense } from "react";

const RemotePage = dynamic(() => import("remote_next/page"), {
  suspense: true,
  ssr: false,
});
const RemoteComponent = dynamic(() => import("remote_next/component"), {
  suspense: true,
  ssr: false,
});

export default function HostApplication() {
  return (
    <div>
      <h1>Host Application - NextJS</h1>
      <Suspense>
        <RemotePage />
      </Suspense>
      <Suspense>
        <RemoteComponent />
      </Suspense>
    </div>
  );
}
