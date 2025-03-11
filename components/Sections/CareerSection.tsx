import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@components/chakra-ui/timeline";
import { Section, SectionTheme } from "@components/Section";
import { CustomText, FontFamily, MotionCustomText } from "@components/Text";
import { useEffect, useState } from "react";

export default function CareerSection() {
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
          <div style={{ position: "absolute", top: 50, left: 50 }}>
            <MotionCustomText
              fontFamily={FontFamily.Warhaven}
              fontSize={80}
              fontWeight={700}
              {...textAnimation}
            >
              CAREER
            </MotionCustomText>
          </div>

          <TimelineRoot size="sm" variant="outline">
            <TimelineItem>
              <TimelineContent flex="1" />
              <TimelineConnector />
              <TimelineContent flex="1">
                <CareerItem
                  title="삼성전자(주)' 무선사업부 인턴"
                  period="2021.07. ~ 2021.08."
                  projectNames={["EUICC Profile Tester 개발"]}
                />
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent flex="1" alignItems="flex-end">
                <CareerItem
                  title="애견인 종합 플랫폼 스타트업 '(주)펫런' 개발자"
                  period="2021.11. ~ 2022.05."
                  projectNames={["PetRun MVP 개발"]}
                  align="end"
                />
              </TimelineContent>
              <TimelineConnector />
              <TimelineContent flex="1" />
            </TimelineItem>

            <TimelineItem>
              <TimelineContent flex="1" />
              <TimelineConnector />
              <TimelineContent flex="1">
                <CareerItem
                  title="화상교육 플랫폼 스타트업 '(주)트랜스버스' 프론트엔드 개발 인턴"
                  period="2022.07. ~ 2022.08."
                  projectNames={["Evoclass 웹페이지 리뉴얼"]}
                />
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent flex="1" alignItems="flex-end">
                <CareerItem
                  title="블록체인 기업 '해치랩스(주)' 테스트 엔지니어 인턴"
                  period="2023.08. ~ 2024.02."
                  projectNames={["Facewallet 테스트 엔지니어링"]}
                  align="end"
                />
              </TimelineContent>
              <TimelineConnector />
              <TimelineContent flex="1" />
            </TimelineItem>

            <TimelineItem>
              <TimelineContent flex="1" />
              <TimelineConnector />
              <TimelineContent flex="1">
                <CareerItem
                  title="모바일게임 기업 '품게임즈' 개발자 & 기획자"
                  period="2024.05. ~ 2024.06."
                />
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
        </>
      )}
    </Section>
  );
}

function CareerItem({
  title,
  period,
  projectNames = [], // 기본값을 빈 배열로 설정
  align = "start",
}: {
  title: string;
  period: string;
  projectNames?: string[]; // 문자열 배열로 변경
  align?: "start" | "end";
}) {
  return (
    <div style={{ gap: "3px", textAlign: align }}>
      <CustomText
        fontFamily={FontFamily.NanumGothic}
        fontWeight={700}
        fontSize={16}
      >
        {title}
      </CustomText>
      <CustomText fontFamily={FontFamily.NanumGothic} fontSize={16}>
        {period}
      </CustomText>
      <div style={{ height: "8px" }} />
      {projectNames.map((projectName, index) => (
        <div
          key={index} // 각 프로젝트에 고유한 키를 부여
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            width: "fit-content",
            justifyContent: align === "end" ? "flex-end" : "flex-start",
            marginLeft: align === "end" ? "auto" : "0",
            backgroundColor: "white",
            color: "#000F32",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            width={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          <CustomText fontFamily={FontFamily.NanumGothic} fontSize={16} fontWeight={700}>
            {projectName}
          </CustomText>
        </div>
      ))}
      <div style={{ height: "20px" }} />
    </div>
  );
}
