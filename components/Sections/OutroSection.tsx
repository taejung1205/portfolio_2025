import { Section, SectionTheme } from "@components/Section";
import { CustomText, FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function OutroSection({ screenType }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "immcoc1@naver.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // 3초 후에 알림 초기화
    });
  };

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
            fontSize={70}
            fontWeight={700}
            {...textAnimation}
          >
            Thanks for Visiting!
          </MotionCustomText>
          <div style={{ height: "50px" }} />
          <a
            href="https://github.com/taejung1205"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="devicon-github-original"
              style={{ fontSize: "35px" }}
            ></i>
            <div style={{ width: "30px" }} />
            <CustomText
              fontFamily={FontFamily.Warhaven}
              fontSize={30}
              fontWeight={700}
            >
              Visit my GitHub
            </CustomText>
          </a>
          <div style={{ height: "20px" }} />
          <a
            href="https://linkedin.com/in/1205taejungkim"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="devicon-linkedin-plain"
              style={{ fontSize: "35px" }}
            ></i>
            <div style={{ width: "30px" }} />
            <CustomText
              fontFamily={FontFamily.Warhaven}
              fontSize={30}
              fontWeight={700}
            >
              Visit my LinkedIn
            </CustomText>
          </a>
          <div style={{ height: "20px" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
              width={30}
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <div style={{ width: "30px" }} />
            <CustomText
              fontFamily={FontFamily.Warhaven}
              fontSize={30}
              fontWeight={700}
            >
              immcoc1@naver.com
            </CustomText>
          </div>
        </>
      )}
      {copied && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            backgroundColor: "white",
            color: "black",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "30px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CustomText fontFamily={FontFamily.Warhaven} fontSize={30}>
            Copied to clipboard!
          </CustomText>
        </div>
      )}
    </Section>
  );
}
