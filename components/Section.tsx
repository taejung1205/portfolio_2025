type Props = {
  children: React.ReactNode;
  theme: SectionTheme;
  isLong?: boolean;
  screenType?: "mobile" | "tablet" | "desktop";
};

export enum SectionTheme {
  Light = "light",
  Dark = "dark",
}

export function Section({
  children,
  theme,
  isLong = false,
  screenType = "desktop",
}: Props) {
  return (
    <div
      className="section"
      style={{
        backgroundColor: theme === SectionTheme.Light ? "#ffffff" : "#000F32",
        color: theme === SectionTheme.Light ? "#000F32" : "#ffffff",
        position: "relative",
        width: "100%",
        height: isLong || screenType != "desktop" ? "auto" : "100vh",
        minHeight: "100vh",
        display: "flex",
        justifyContent: isLong ? "flex-start" : "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px",
        paddingBottom: "50px"
      }}
    >
      {children}
    </div>
  );
}
