import { Typography } from "./Typography";

interface IProps {
  remoteType: string;
  withHostApp?: boolean;
}

export const RemotePage = ({ remoteType, withHostApp }: IProps) => {
  return (
    <div
      style={{
        border: "5px dotted transparent",
        padding: "1rem",
        ...(withHostApp
          ? {
              borderColor: "#065c15",
              background: "#d9ffe0",
              color: "#065c15",
            }
          : {
              borderColor: "#472404",
              background: "#f0bc8d",
              color: "#472404",
            }),
      }}
    >
      <Typography as="h2">
        Remote Page {withHostApp ? "" : "(without Host App)"} - {remoteType}
      </Typography>
    </div>
  );
};
