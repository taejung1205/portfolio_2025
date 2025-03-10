import { Section, SectionTheme } from "@components/Section";
import { CustomText, FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function IntroSection() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);

  return (
    fontLoaded && (
      <Section theme={SectionTheme.Dark}>
        <MotionCustomText
          fontFamily={FontFamily.Warhaven}
          fontSize={80}
          fontWeight={700}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          김태정
        </MotionCustomText>
        <MotionCustomText
          fontFamily={FontFamily.Warhaven}
          fontSize={36}
          fontWeight={400}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          Full-Stack Developer
        </MotionCustomText>
      </Section>
    )
  );
}
