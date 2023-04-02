import { lazy, Suspense } from "react";
import { HostPage } from "ui";
import "./index.css";

const RemoteViteReactPage = lazy(() => import("remote_vite_react/page"));
const RemoteViteReactComponent = lazy(
  () => import("remote_vite_react/component")
);

function App() {
  return (
    <HostPage
      hostType="Vite React"
      remoteComponents={
        <Suspense>
          <RemoteViteReactComponent />
        </Suspense>
      }
    >
      <Suspense>
        <RemoteViteReactPage withHostApp />
      </Suspense>
    </HostPage>
  );
}

export default App;
