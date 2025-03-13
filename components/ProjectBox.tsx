import { Project } from "./Project";
import { CustomText, FontFamily } from "./Text";

export default function ProjectBox({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      style={{
        width: "300px",
        height: "350px",
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
          height: "300px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div
        style={{
          display: "flex",
          height: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText fontFamily={FontFamily.Warhaven} fontSize={16}>
          {project.title}
        </CustomText>
      </div>
    </div>
  );
}
