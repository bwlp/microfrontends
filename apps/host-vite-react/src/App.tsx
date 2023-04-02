import { lazy, Suspense } from "react";

const RemoteViteReactPage = lazy(() => import("remote_vite_react/page"));
const RemoteViteReactComponent = lazy(
  () => import("remote_vite_react/component")
);

function App() {
  return (
    <div className="App">
      <h1>Host Application - Vite React</h1>
      <Suspense>
        <RemoteViteReactPage />
      </Suspense>
      <Suspense>
        <RemoteViteReactComponent />
      </Suspense>
    </div>
  );
}

export default App;
