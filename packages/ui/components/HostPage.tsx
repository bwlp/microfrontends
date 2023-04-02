import { PropsWithChildren, ReactNode } from "react";
import { Typography } from "./Typography";

interface IProps extends PropsWithChildren {
  hostType: string;
  remoteComponents: ReactNode;
}

export const HostPage = ({ hostType, children, remoteComponents }: IProps) => {
  return (
    <main
      style={{
        background: "#999",
        height: "100%",
      }}
    >
      <section
        style={{
          background: "white",
          padding: "1rem 2rem",
          color: "#555",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography as="h1">Host Page - {hostType}</Typography>
        {remoteComponents}
      </section>
      <section style={{ padding: "1rem" }}>{children}</section>
    </main>
  );
};
