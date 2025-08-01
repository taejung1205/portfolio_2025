import { Section, SectionTheme } from "@components/Section";
import { CustomText, FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";
import { Separator, Spacer, useMediaQuery } from "@chakra-ui/react";

export default function AboutSection({ screenType }) {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));

    const handleResize = () => {
      if (window.innerWidth < 400) {
        setIsSmallMobile(true);
      } else {
        setIsSmallMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section theme={SectionTheme.Light} screenType={screenType}>
      {fontLoaded && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: screenType == "mobile" ? "column" : "row",
          }}
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
              minWidth: isSmallMobile ? "240px" : "300px",
            }}
          >
            {screenType == "mobile" && (
              <CustomText
                fontFamily={FontFamily.Warhaven}
                fontSize={isSmallMobile ? 45 : 55}
                fontWeight={700}
              >
                ABOUT ME
              </CustomText>
            )}

            <img
              src={"/photos/selfie-modified.png"}
              style={{
                userSelect: "none",
                width: isSmallMobile ? "240px" : "300px",
                objectFit: "contain",
                alignSelf: "center",
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
                fontFamily={FontFamily.Warhaven}
                fontSize={20}
                fontWeight={400}
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
                fontFamily={FontFamily.Warhaven}
                fontSize={isSmallMobile ? 16 : 20}
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
                fontFamily={FontFamily.Warhaven}
                fontSize={isSmallMobile ? 16 : 20}
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
                fontFamily={FontFamily.Warhaven}
                fontSize={isSmallMobile ? 12 : 16}
                fontWeight={400}
              >
                linkedin.com/in/1205taejungkim
              </CustomText>
            </div>
          </div>

          <div style={{ minWidth: "50px", minHeight: "50px" }} />

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
              {screenType != "mobile" && (
                <CustomText
                  fontFamily={FontFamily.Warhaven}
                  fontSize={60}
                  fontWeight={700}
                >
                  ABOUT ME
                </CustomText>
              )}

              <div style={{ height: "20px" }} />

              <CustomText
                fontFamily={FontFamily.Warhaven}
                fontSize={18}
                fontWeight={400}
              >
                저는 초등학생 시절부터 게임 개발자를 꿈꿔왔습니다.
                {screenType == "desktop" && <br />}
                디지털 장치를 조작하면 즉각적인 피드백이 눈에 보인다는 점이 매력적으로 다가왔고,
                {screenType == "desktop" && <br />}
                이러한 흥미는 자연스럽게 웹과 모바일 등 다양한 개발 분야로 확장되었습니다.
                <br />
                <br />
                Unity에서 출발해 Flutter와 React 기반 웹까지 경험하며,
                {screenType == "desktop" && <br />}
                실사용 서비스와 게임 프로젝트 개발에 모두 참여해왔습니다.
                {screenType == "desktop" && <br />}
                스타트업과 중견 기업에서의 협업 경험뿐 아니라, 1인 게임 기획·출시 및 공모전 출품 이력도 보유하고 있습니다.
                <br />
                <br />
                Firebase·Netlify 등 서버리스 환경에서의 풀스택 구현,
                {screenType == "desktop" && <br />}
                그리고 Unity 기반 클라이언트 개발을 주력 영역으로 삼고 있으며,
                {screenType == "desktop" && <br />}
                기획 초기부터 참여해 사용자 경험을 개선하는 개발을 중요하게 생각합니다.
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
                fontFamily={FontFamily.Warhaven}
                fontSize={18}
                fontWeight={400}
              >
                <b>2014.03. ~ 2017.02.</b> {screenType != "desktop" && <br />}
                세종국제고등학교
                <br />
                {screenType != "desktop" && <br />}
                <b>2017.03. ~ 2024.02.</b> {screenType != "desktop" && <br />}
                서울대학교 자유전공학부 {screenType != "desktop" && <br />}
                <span style={{ fontSize: isSmallMobile ? 12 : 16 }}>
                  (컴퓨터공학 주전공, 정보문화학 부전공)
                </span>
              </CustomText>
            </>
          </div>
        </div>
      )}
    </Section>
  );
}
