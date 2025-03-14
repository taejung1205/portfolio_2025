import Head from "next/head";
import Header from "@components/Header";
import IntroSection from "@components/Sections/IntroSection";
import AboutSection from "@components/Sections/AboutSection";
import CareerSection from "@components/Sections/CareerSection";
import ProjectsSection from "@components/Sections/ProjectSection";
import OutroSection from "@components/Sections/OutroSection";
import { useEffect, useRef, useState } from "react";
import ProjectModal from "@components/Modals/ProjectModal";
import { getProjectByTitle, Project, ProjectType } from "@components/Project";
import { DevStack } from "@components/DevStack";

export default function Home() {
  const introSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const careerSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const outroSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const sectionMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
      intro: introSectionRef,
      about: aboutSectionRef,
      career: careerSectionRef,
      projects: projectsSectionRef,
      outro: outroSectionRef,
    };

    const sectionRef = sectionMap[sectionId];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>({
    title: "",
    subtitle: "",
    about: "",
    period: "",
    devStacks: [],
    images: [],
    implementation: "",
    projectType: ProjectType.Personal,
  });
  const [selectedStacks, setSelectedStacks] = useState<DevStack[]>([]);
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType>();

  function onProjectClick(project: Project) {
    setSelectedProject(project);
    setIsOpen(true);
  }

  // AboutSection에서 특정 기술 클릭 시 실행
  function onDeviconClick(stack: DevStack) {
    setSelectedStacks([stack]); // 선택한 기술만 필터
    scrollToSection("projects");
  }

  useEffect(() => {
    const project = getProjectByTitle("EUICC Profile Tester");
    if (project) {
      setSelectedProject(project);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>ABOUT 김태정</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>

      <Header scrollToSection={scrollToSection} />

      <ProjectModal
        isOpen={isOpen}
        onOpenChange={(open: boolean) => setIsOpen(open)}
        selectedProject={selectedProject}
      />

      {/* 각 섹션에 ref 추가 */}
      <div ref={introSectionRef} data-section="intro" />
      <IntroSection onDeviconClick={onDeviconClick} />

      <div ref={aboutSectionRef} data-section="about" />
      <AboutSection />

      <div ref={careerSectionRef} data-section="career" />
      <CareerSection onProjectClick={onProjectClick} />

      <div ref={projectsSectionRef} data-section="projects" />
      <ProjectsSection
        onProjectClick={onProjectClick}
        selectedStacks={selectedStacks}
        setSelectedStacks={setSelectedStacks}
        selectedProjectType={selectedProjectType}
        setSelectedProjectType={setSelectedProjectType}
      />

      <div ref={outroSectionRef} data-section="outro" />
      <OutroSection />
    </div>
  );
}
