import { CustomText, FontFamily } from "./Text";

type HeaderProps = {
  scrollToSection: (sectionId: string) => void;
};

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000F32",
        color: "#ffffff",
        padding: "10px 20px",
        zIndex: 10,
        display: "flex",
        justifyContent: "flex-end",
        gap: "30px",
      }}
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() => scrollToSection("intro")}
      >
        <CustomText fontSize={20} fontFamily={FontFamily.Warhaven}>
          INTRO
        </CustomText>
      </div>

      <div
        style={{ cursor: "pointer" }}
        onClick={() => scrollToSection("about")}
      >
        <CustomText fontSize={20} fontFamily={FontFamily.Warhaven}>
          ABOUT
        </CustomText>
      </div>

      <div
        style={{ cursor: "pointer" }}
        onClick={() => scrollToSection("career")}
      >
        <CustomText fontSize={20} fontFamily={FontFamily.Warhaven}>
          CAREER
        </CustomText>
      </div>

      <div
        style={{ cursor: "pointer" }}
        onClick={() => scrollToSection("projects")}
      >
        <CustomText fontSize={20} fontFamily={FontFamily.Warhaven}>
          PROJECTS
        </CustomText>
      </div>

      <div
        style={{ cursor: "pointer" }}
        onClick={() => scrollToSection("outro")}
      >
        <CustomText fontSize={20} fontFamily={FontFamily.Warhaven}>
          OUTRO
        </CustomText>
      </div>
    </div>
  );
}
