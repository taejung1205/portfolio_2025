import { DevStack } from "@components/DevStack";
import { ProjectsList, ProjectType } from "@components/Project";
import ProjectBox from "@components/ProjectBox";
import { Section, SectionTheme } from "@components/Section";
import { CustomText, FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function ProjectsSection({
  onProjectClick,
  selectedStacks,
  setSelectedStacks,
  selectedProjectType,
  setSelectedProjectType,
}) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);

  // 기술스택 체크박스 변경 핸들러
  const handleDevStackChange = (stack: DevStack) => {
    setSelectedStacks((prev) =>
      prev.includes(stack) ? prev.filter((s) => s !== stack) : [...prev, stack]
    );
  };

  // 프로젝트 타입 체크박스 변경 핸들러
  const handleProjectTypeChange = (projectType: ProjectType) => {
    setSelectedProjectType((prev) =>
      prev == projectType ? undefined : projectType
    );
  };

  // 프로젝트 필터링
  let filteredProjects = ProjectsList.filter((project) => {
    const matchesStack =
      selectedStacks.length === 0 ||
      selectedStacks.every((stack) => project.devStacks.includes(stack));

    const matchesType =
      selectedProjectType === undefined ||
      project.projectType === selectedProjectType;

    return matchesStack && matchesType;
  });

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

          <CustomText
            fontFamily={FontFamily.Warhaven}
            fontSize={80}
            fontWeight={700}
          >
            PROJECTS
          </CustomText>

          {/* DevStack 체크박스 */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {Object.values(DevStack).map((stack) => (
              <label
                key={stack}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  value={stack}
                  checked={selectedStacks.includes(stack)}
                  onChange={() => handleDevStackChange(stack)}
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <div style={{ width: "5px" }} />
                <CustomText fontFamily={FontFamily.Warhaven} fontSize={16}>
                  {stack}
                </CustomText>
              </label>
            ))}
          </div>

          {/* ProjectType 체크박스 */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            {Object.values(ProjectType).map((projectType) => (
              <label
                key={projectType}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  value={projectType}
                  checked={selectedProjectType == projectType}
                  onChange={() => handleProjectTypeChange(projectType)}
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
                <div style={{ width: "5px" }} />
                <CustomText fontFamily={FontFamily.Warhaven} fontSize={20}>
                  {projectType}
                </CustomText>
              </label>
            ))}
          </div>

          <div style={{ height: "60px" }} />
          {/* 필터링된 프로젝트 목록 */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
              gridRowGap: "30px",
            }}
          >
            {filteredProjects.map((project, index) => (
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
