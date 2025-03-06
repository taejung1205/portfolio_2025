import { Section, SectionTheme } from "@components/Section";
import { Text } from "@chakra-ui/react";
import { CustomText, FontFamily } from "@components/Text";

export default function IntroSection() {
  return (
    <Section theme={SectionTheme.Dark}>
      <CustomText fontFamily={FontFamily.Warhaven}>Hellso WORLD</CustomText>
    </Section>
  );
}
