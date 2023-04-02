import { RemotePage } from "ui";

interface IProps {
  withHostApp?: boolean;
}

const App = ({ withHostApp }: IProps) => {
  return <RemotePage remoteType="Vite React" withHostApp={withHostApp} />;
};

export default App;
