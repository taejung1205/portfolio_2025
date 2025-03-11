import { DevStack } from "./DevStack";

export type Project = {
  title: string;
  subtitle: string;
  about: string; //프로젝트에 대한 간단한 설명
  period: string; //프로젝트 기간
  devStacks: DevStack[]; //기술 스택
  images: string[]; //프로젝트 이미지
  implementation: string; //구현 내용
};

export function getProjectByTitle(title: string): Project | undefined {
  return ProjectsList.find((project) => project.title === title);
}

export const ProjectsList: Project[] = [
  {
    title: "EUICC Profile Tester",
    subtitle:
      "eSIM 칩셋 프로필의 단말기 호환성을 테스트하기 위한 인프라 프로토타입 구축",
    about:
      "삼성전자 무선사업부 CP Solution 팀에서 인턴으로 활동하며 진행한 프로젝트입니다. 휴대전화 단말기의 구독 정보를 관리하는 eUICC 프로필이 실제 단말기에서 정상적으로 작동하는 지 테스트하기 위한 서비스의 프로토타입을 개발하였습니다. eUICC 프로필을 다운로드하고 설치하여 이상 여부를 확인하는 안드로이드 어플리케이션과, 클라이언트가 QR코드 또는 링크 업로드시 해당 정보를 서버 및 테스트 단말기로 전송하는 웹페이지, 그리고 이들의 통신을 위한 서버로 구성되어 있습니다.",
    period: "2021.07. ~ 2021.08.",
    devStacks: [DevStack.Android, DevStack.Java, DevStack.Javascript],
    images: [
      "/projects/euicc_profile_tester/image_1.png",
      "/projects/euicc_profile_tester/image_2.jpg",
    ],
    implementation: `- Android 단말기 내 설치된 eUICC 프로필 목록 표시 및 프로필 활성/비활성 
    - eUICC 프로필 설치 테스트 결과 통신 및 웹사이트에 결과 표시
    - 웹사이트에서 QR코드 이미지 파일을 통한 코드 입력`,
  },
  {
    title: "PetRun MVP",
    subtitle: "반려동물 종합 어플리케이션 '펫런' 초기 개발",
    about: `스타트업 ‘(주)펫런’에서 활동하며 진행한 프로젝트입니다. 펫런은
              애견인을 위한 종합 플랫폼 어플리케이션입니다. 산책과 관련된 소셜
              콘텐츠 및 보상 시스템, 산책 대리인 중개, 애견인 커뮤니티, 펫샵 등
              다양한 서비스를 제공하는 것을 목표로 하고 있습니다. 저는 이
              프로젝트에서 프론트엔드 개발자로 참여하였으며, 회원가입과 산책
              서비스 기능을 사용할 수 있는 초기의 MVP(Android & iOS)를
              구현하였습니다.`,
    period: "2021.11. ~ 2022.05.",
    devStacks: [DevStack.Flutter, DevStack.Firebase],
    images: [
      "/projects/petrun/petrun1.jpg",
      "/projects/petrun/petrun2.jpg",
      "/projects/petrun/petrun3.jpg",
    ],
    implementation: `- 회원가입 & 산책 MVP의 전체 UI
    - MVP용 임시 회원가입 프로세스
    - 네이버 맵 기반 산책 경로 트래킹 서비스
    - 산책 기록 저장 및 산책 경로 워터마크화 기능
    - 산책 서비스 이용자간 상호작용 기능`,
  },
  {
    title: "Evoclass 웹페이지 리뉴얼",
    subtitle: "랜딩페이지 구현 및 기능 호환성 개선",
    about: `'에보클래스(evoclass)'는 교육관리시스템(LMS)과 화상강의 기능을
              통합해 제공하는 웹 교육 플랫폼입니다. 트랜스버스에서 프론트엔드
              개발자로 참여하며, LMS 웹사이트 내 추가 기능 구현 및 오류 수정
              작업을 진행하였고, 웹페이지 리뉴얼 프로젝트에 참여하여 새로
              만들어지는 랜딩페이지 웹사이트를 구현하고 이를 기존 LMS와
              호환시키는 작업을 수행했습니다.`,
    period: "2022.07. ~ 2022.08.",
    devStacks: [DevStack.React, DevStack.Remix, DevStack.Typescript],
    images: ["/projects/evoclass/evoclass.jpg"],
    implementation: `- LMS 서비스 내 버그 수정 및 기능 추가
    - 랜딩페이지 헤더, 회사 소개 페이지, 사용법 페이지 리뉴얼
    - 화면 크기에 따른 반응형 웹페이지 구현
    - 기존 페이지의 서비스가 호환되도록 만들기 위한 개발 환경 작업`,
  },
  {
    title: "Facewallet 테스트 엔지니어링",
    subtitle: "멀티체인 지갑 API와 웹 서비스에 대한 테스트 엔지니어링",
    about: `'페이스월렛(Facewallet)'은 P2E, NFT 게임 내에서 멀티체인 지갑을 사용할 수 있도록 API를 제공하는 해치랩스(주)의 서비스입니다.
              해치랩스의 테스트 엔지니어로 근무하며 서비스 기능이 배포되기 전 자동으로 수행되는 E2E(End-to-End) 테스트의 유지보수와 QA 업무를 진행했습니다.
              Facewallet API의 주요 기능을 테스트하기 위한 데모 사이트인 샘플댑, 앱 내 이식 없이 페이스월렛의 단독 사용을 위한 스탠드얼론,
              페이스월렛을 사용하는 앱을 고객사가 관리할 수 있게 해주는 대시보드의 테스트 작업을 진행했습니다.`,
    period: "2023.08. ~ 2024.02.",
    devStacks: [DevStack.React, DevStack.Playwright],
    images: [
      "/projects/facewallet/facewallet1.png",
      "/projects/facewallet/facewallet2.png",
    ],
    implementation: `- Facewallet의 기존 E2E 자동화 테스트 시스템 유지보수 
    - Facewallet 테스트 시나리오 관리 및 QA 업무 수행
    - Facewallet의 2단계 보안 인증에 대한 E2E 테스트 시나리오 구현
    - Facewallet 대시보드에 대한 E2E 자동화 테스트 지원`,
  },
];
