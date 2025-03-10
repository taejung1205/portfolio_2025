import { Section, SectionTheme } from "@components/Section";
import { FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function OutroSection() {
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
    <Section theme={SectionTheme.Dark}>
      {fontLoaded && (
        <>
          <MotionCustomText
            fontFamily={FontFamily.Warhaven}
            fontSize={80}
            fontWeight={700}
            {...textAnimation}
          >
            OUTRO
          </MotionCustomText>
        </>
      )}
    </Section>
  );
}
