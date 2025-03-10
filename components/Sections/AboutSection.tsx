import { Section, SectionTheme } from "@components/Section";
import { CustomText, FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";
import { Separator, Spacer } from "@chakra-ui/react";

export default function AboutSection() {
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
    <Section theme={SectionTheme.Light}>
      {fontLoaded && (
        <div
          style={{ display: "flex", justifyContent: "center", width: "80%" }}
        >
          {/* 프로필 이미지와 이름, 생년월일 및 연락처*/}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              textAlign: "center",
              justifyContent: "center",
              gap: "10px",
              minWidth: "300px",
            }}
          >
            <img
              src={"/photos/selfie-modified.png"}
              style={{
                userSelect: "none",
                width: "300px",
                objectFit: "contain",
              }}
            />
            <div style={{ height: "20px" }} />
            <CustomText
              fontFamily={FontFamily.Warhaven}
              fontSize={27}
              fontWeight={700}
            >
              김태정
            </CustomText>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#888888",
              }}
            />
            <CustomText fontFamily={FontFamily.Warhaven} fontSize={20}>
              1998.12.05
            </CustomText>
            <div />
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
                width={30}
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              <CustomText
                fontFamily={FontFamily.NanumGothic}
                fontSize={20}
                fontWeight={700}
              >
                경기도 의왕시
              </CustomText>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
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

              <CustomText
                fontFamily={FontFamily.NanumGothic}
                fontSize={20}
                fontWeight={400}
              >
                immcoc1@naver.com
              </CustomText>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                width={30}
              />

              <CustomText
                fontFamily={FontFamily.NanumGothic}
                fontSize={20}
                fontWeight={400}
              >
                github.com/taejung1205
              </CustomText>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                width={30}
              />
              <CustomText
                fontFamily={FontFamily.NanumGothic}
                fontSize={16}
                fontWeight={400}
              >
                linkedin.com/in/1205taejungkim
              </CustomText>
            </div>
          </div>

          <div style={{ minWidth: "50px" }} />

          {/* 소개 문구 */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "start",
              flexGrow: 1,
            }}
          >
            <div style={{ justifyContent: "center" }}>
              <CustomText
                fontFamily={FontFamily.Warhaven}
                fontSize={60}
                fontWeight={700}
              >
                ABOUT ME
              </CustomText>
              <div style={{ height: "20px" }} />

              <CustomText
                fontFamily={FontFamily.NanumGothic}
                fontSize={18}
                fontWeight={700}
              >
                저는 초등학생 시절부터 게임 개발자가 되는 것을 꿈꿔왔습니다.
                <br />
                디지털 장치를 조작하면 즉각적인 피드백이 눈에 보이는 점이 게임
                개발의 가장 큰 매력이라 느꼈고,
                <br />
                이러한 흥미는 웹사이트와 모바일 애플리케이션 등 다양한 개발
                분야로 확장되었습니다.
                <br />
                <br />
                개발자로서 역량을 키우는 가장 효과적인 방법은 풍부한 프로젝트
                경험이라 생각합니다.
                <br />
                여러 회사를 거치며 쌓은 협업 경험을 통해 다양한 개발
                프레임워크를 접할 기회를 가졌고,
                <br />그 과정에서 새로운 프로젝트에 도전하고 새로운 개발 환경에
                적응하는 자신감을 얻을 수 있었습니다.
              </CustomText>
            </div>

            <div style={{ height: "60px" }} />

            <>
              <CustomText
                fontFamily={FontFamily.Warhaven}
                fontSize={40}
                fontWeight={700}
              >
                EDUCATION
              </CustomText>
              <div style={{ height: "20px" }} />
              <CustomText
                fontFamily={FontFamily.NanumGothic}
                fontSize={18}
                fontWeight={700}
              >
                2014.03. ~ 2017.02. 세종국제고등학교
                <br />
                2017.03. ~ 2024.02. 서울대학교 자유전공학부 (컴퓨터공학 주전공,
                정보문화학 부전공)
              </CustomText>
            </>
          </div>
        </div>
      )}
    </Section>
  );
}
