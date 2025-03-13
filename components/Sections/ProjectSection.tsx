import { ProjectsList } from "@components/Project";
import ProjectBox from "@components/ProjectBox";
import { Section, SectionTheme } from "@components/Section";
import { FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function ProjectsSection({ onProjectClick }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  return (
    <Section theme={SectionTheme.Light} isLong>
      {fontLoaded && (
        <div
          style={{
            width: "calc(100% - 100px)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            marginBottom: "50px",
          }}
        >
          <div style={{ height: "50px" }} />

          <MotionCustomText
            fontFamily={FontFamily.Warhaven}
            fontSize={80}
            fontWeight={700}
            {...textAnimation}
          >
            PROJECTS
          </MotionCustomText>

          <div style={{ height: "60px" }} />
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // 최소 200px, 최대 1fr
              gap: "20px", // 간격 조정
              gridRowGap: "30px",
            }}
          >
            {ProjectsList.map((project, index) => (
              <ProjectBox
                project={project}
                key={index}
                onClick={() => onProjectClick(project)}
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
