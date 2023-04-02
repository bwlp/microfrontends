interface IProps {
  remoteType: string;
}

export const RemoteComponent = ({ remoteType }: IProps) => {
  return (
    <button
      style={{
        border: "2px dotted transparent",
        borderColor: "#065c15",
        background: "#d9ffe0",
        padding: "5px 10px",
        cursor: "pointer",
      }}
    >
      Remote Component - {remoteType}
    </button>
  );
};
