type Props = {
  children: React.ReactNode;
  theme: SectionTheme;
};

export enum SectionTheme {
  Light = "light",
  Dark = "dark",
}

export function Section({ children, theme }: Props) {
  return (
    <div
      className="section"
      style={{
        backgroundColor: theme === SectionTheme.Light ? "#ffffff" : "#000F32",
        color: theme === SectionTheme.Light ? "#000F32" : "#ffffff",
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
}
