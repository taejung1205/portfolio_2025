import { Accordion } from "@chakra-ui/react";
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
  screenType,
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
            width: "calc(100% - 60px)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: screenType == "mobile" ? "center" : "start",
            marginBottom: "50px",
          }}
        >
          <div style={{ height: "30px" }} />

          <CustomText
            fontFamily={FontFamily.Warhaven}
            fontSize={screenType === "mobile" ? 50 : 80}
            fontWeight={700}
          >
            PROJECTS
          </CustomText>

          <div style={{ height: "30px" }} />

          {/* DevStack 체크박스 */}
          {screenType == "mobile" ? (
            <Accordion.Root collapsible defaultValue={["info"]}>
              <Accordion.Item value={"stack"}>
                <Accordion.ItemTrigger>
                  <CustomText fontFamily={FontFamily.Warhaven} fontSize={20}>
                    기술스택
                  </CustomText>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginBottom: "20px",
                        flexDirection: "column",
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
                          <CustomText
                            fontFamily={FontFamily.Warhaven}
                            fontSize={16}
                          >
                            {stack}
                          </CustomText>
                        </label>
                      ))}
                    </div>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
              <Accordion.Item value={"type"}>
                <Accordion.ItemTrigger>
                  <CustomText fontFamily={FontFamily.Warhaven} fontSize={20}>
                    프로젝트 종류
                  </CustomText>
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginBottom: "20px",
                        flexDirection: "column",
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
                            onChange={() =>
                              handleProjectTypeChange(projectType)
                            }
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                          <div style={{ width: "5px" }} />
                          <CustomText
                            fontFamily={FontFamily.Warhaven}
                            fontSize={20}
                          >
                            {projectType}
                          </CustomText>
                        </label>
                      ))}
                    </div>
                  </Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Accordion.Root>
          ) : (
            <>
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
            </>
          )}

          <div style={{ height: "60px" }} />
          {/* 필터링된 프로젝트 목록 */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns:
                screenType === "mobile"
                  ? "repeat(2, minmax(100px, 1fr))" // 모바일: 최소 2개
                  : "repeat(auto-fill, minmax(300px, 1fr))", // 태블릿/데스크톱: 자동 조절
              gap: screenType == "mobile" ? "10px" : "20px",
              gridRowGap: "30px",
            }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectBox
                project={project}
                key={index}
                onClick={() => onProjectClick(project)}
                screenType={screenType}
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
