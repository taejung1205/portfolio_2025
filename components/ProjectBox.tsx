import { Project } from "./Project";
import { CustomText, FontFamily } from "./Text";

export default function ProjectBox({
  project,
  onClick,
  screenType,
}: {
  project: Project;
  onClick: () => void;
  screenType: "mobile" | "tablet" | "desktop";
}) {
  return (
    <div
      style={{
        width: screenType === "mobile" ? "100%" : "300px", // 모바일에서는 100%로 확장
        height: screenType === "mobile" ? "calc(40vw * 1.2)" : "360px",
        borderRadius: "10px",
        backgroundColor: "#000f32",
        color: "white",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img
        src={project.images[0]}
        style={{
          width: "100%",
          height: screenType === "mobile" ? "40vw" : "300px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          height: screenType === "mobile" ? "calc(40vw * 0.2)" : "60px",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <CustomText
          fontFamily={FontFamily.Warhaven}
          fontSize={"clamp(8px, 2vw, 16px)"}
        >
          {project.title}
        </CustomText>
      </div>
    </div>
  );
}
