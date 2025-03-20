type Props = {
  children: React.ReactNode;
  theme: SectionTheme;
  isLong?: boolean;
};

export enum SectionTheme {
  Light = "light",
  Dark = "dark",
}

export function Section({ children, theme, isLong = false }: Props) {
  return (
    <div
      className="section"
      style={{
        backgroundColor: theme === SectionTheme.Light ? "#ffffff" : "#000F32",
        color: theme === SectionTheme.Light ? "#000F32" : "#ffffff",
        position: "relative",
        width: "100%",
        height: isLong ? "auto" : "100vh", // isLong이면 auto, 아니면 100vh
        minHeight: "100vh",
        display: "flex",
        justifyContent: isLong ? "flex-start" : "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px"
      }}
    >
      {children}
    </div>
  );
}
