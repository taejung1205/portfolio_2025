import { DevStack, MotionDevicon } from "@components/Devicon";
import { Section, SectionTheme } from "@components/Section";
import { CustomText, FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function IntroSection() {
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

  return (
    <Section theme={SectionTheme.Dark}>
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

          <MotionDevicon
            devStack={DevStack.Unity}
            size={24}
            {...deviconAnimation}
            transition={{ ...deviconAnimation.transition, delay: 2 }}
          />

          <MotionDevicon
            devStack={DevStack.Typescript}
            size={24}
            {...deviconAnimation}
            transition={{ ...deviconAnimation.transition, delay: 2.4 }}
          />
        </>
      )}
    </Section>
  );
}
