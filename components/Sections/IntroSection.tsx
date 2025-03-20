import { MotionDevicon } from "@components/Devicon";
import { DevStack } from "@components/DevStack";
import { Section, SectionTheme } from "@components/Section";
import { FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function IntroSection({ onDeviconClick, screenType }) {
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

  return (
    <Section theme={SectionTheme.Dark}>
      <div style={{ height: 100 }} />
      {fontLoaded && (
        <div style={{textAlign: "center"}}>
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

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: screenType == "mobile" ? "10px" : "30px",
              padding: "30px",
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => onDeviconClick(DevStack.Unity)}
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
              onClick={() => onDeviconClick(DevStack.Typescript)}
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
              onClick={() => onDeviconClick(DevStack.React)}
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
              onClick={() => onDeviconClick(DevStack.Firebase)}
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
              onClick={() => onDeviconClick(DevStack.Remix)}
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
              onClick={() => onDeviconClick(DevStack.Flutter)}
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
              onClick={() => onDeviconClick(DevStack.Nodejs)}
            >
              <MotionDevicon
                devStack={DevStack.Nodejs}
                size={devIconSize}
                {...deviconAnimation}
                transition={{ ...deviconAnimation.transition, delay: 4.4 }}
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
