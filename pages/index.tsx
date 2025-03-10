import Head from "next/head";
import Header from "@components/Header";
import IntroSection from "@components/Sections/IntroSection";
import AboutSection from "@components/Sections/AboutSection";
import CareerSection from "@components/Sections/CareerSection";
import ProjectsSection from "@components/Sections/ProjectSection";
import OutroSection from "@components/Sections/OutroSection";
import { useRef } from "react";

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

  return (
    <div>
      <Head>
        <title>ABOUT 김태정</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header scrollToSection={scrollToSection} />

      {/* 각 섹션에 ref 추가 */}
      <div ref={introSectionRef} data-section="intro" />
      <IntroSection scrollToSection={scrollToSection} />

      <div ref={aboutSectionRef} data-section="about" />
      <AboutSection />

      <div ref={careerSectionRef} data-section="career" />
      <CareerSection />

      <div ref={projectsSectionRef} data-section="projects" />
      <ProjectsSection />

      <div ref={outroSectionRef} data-section="outro" />
      <OutroSection />
    </div>
  );
}
