import { DevStack, MotionDevicon } from "@components/Devicon";
import { Section, SectionTheme } from "@components/Section";
import { FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function IntroSection({ scrollToSection }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const deviconAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
  };

  const devIconSize = 100;

  const handleDeviconClick = (stack: string) => {
    // 클릭 시 aboutSection으로 스크롤
    scrollToSection("projects");
    //TODO: Projects에서 검색
    console.log(stack);
  };

  return (
    <Section theme={SectionTheme.Dark}>
      <div style={{ height: 100 }} />
      {fontLoaded && (
        <>
          <MotionCustomText
            fontFamily={FontFamily.Warhaven}
            fontSize={80}
            fontWeight={700}
            {...textAnimation}
          >
            김태정
          </MotionCustomText>

          <MotionCustomText
            fontFamily={FontFamily.Warhaven}
            fontSize={36}
            fontWeight={400}
            {...textAnimation}
            transition={{ ...textAnimation.transition, delay: 1 }}
          >
            Full-Stack Developer
          </MotionCustomText>

          <div style={{ height: 100 }} />

          <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeviconClick(DevStack.Unity)}
            >
              <MotionDevicon
                devStack={DevStack.Unity}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 2 }}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeviconClick(DevStack.Typescript)}
            >
              <MotionDevicon
                devStack={DevStack.Typescript}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 2.4 }}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeviconClick(DevStack.React)}
            >
              <MotionDevicon
                devStack={DevStack.React}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 2.8 }}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeviconClick(DevStack.Firebase)}
            >
              <MotionDevicon
                devStack={DevStack.Firebase}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 3.2 }}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeviconClick(DevStack.Remix)}
            >
              <MotionDevicon
                devStack={DevStack.Remix}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 3.6 }}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeviconClick(DevStack.Flutter)}
            >
              <MotionDevicon
                devStack={DevStack.Flutter}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 4 }}
              />
            </div>

            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeviconClick(DevStack.Nodejs)}
            >
              <MotionDevicon
                devStack={DevStack.Nodejs}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 4.4 }}
              />
            </div>
          </div>
        </>
      )}
    </Section>
  );
}
