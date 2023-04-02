import dynamic from "next/dynamic";
import { Suspense } from "react";

const RemoteNextPage = dynamic(() => import("remote_next/page"), {
  suspense: true,
  ssr: false,
});
const RemoteNextComponent = dynamic(() => import("remote_next/component"), {
  suspense: true,
  ssr: false,
});

export default function HostApplication() {
  return (
    <div>
      <h1>Host Application - NextJS</h1>
      <Suspense>
        <RemoteNextPage />
      </Suspense>
      <Suspense>
        <RemoteNextComponent />
      </Suspense>
    </div>
  );
}
