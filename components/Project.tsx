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

export function getProjectsByDevStack(devStacks: DevStack[]): Project[] {
  return ProjectsList.filter((project) =>
    devStacks.some((stack) => project.devStacks.includes(stack))
  );
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
  {
    title: "MatheTe",
    subtitle: "사칙연산을 활용한 Unity 모바일게임",
    about: `정보문화학 전공강의 ‘게임의 이해’를 수강하며 진행한 프로젝트로,
              Unity를 처음 접하며 제작한 작품입니다. Mathe Te는 1인 개발로
              진행된 모바일 게임 프로젝트로, 주어진 숫자들을 사칙연산으로
              조합하여 적들의 숫자로 만들어 제거하는 디펜스 게임입니다. 해당
              프로젝트는 18년도 1학기 정보문화학 과제전에 출품되었습니다.`,
    period: "2018.05. ~ 2018.06.",
    devStacks: [DevStack.Unity],
    images: [
      "/projects/mathete/mathete1.jpg",
      "/projects/mathete/mathete2.png",
    ],
    implementation: `- 숫자 카드 및 사칙연산 해독 알고리즘, 몬스터 생성 알고리즘 
    - 무기 및 스킬 시스템, 공격 시 시각적/청각적 효과`,
  },
  {
    title: "NewBid",
    subtitle: "공예품 경매 서비스 웹페이지 개발",
    about: `'뉴비드'는 공예품 전문매장 '로파서울'((주)따바프레스)에서 기획한
              온라인 예술품 경매 서비스입니다. Remix 프레임워크와 Netlify
              호스팅, 그리고 Firebase를 활용해 별도의 서버 구축 없이 웹서비스를
              배포하였습니다. 해당 사이트에서 10월 중순에 진행된 '크래프트서울'
              전시회에서 선보인 예술품 14점을 대상으로 경매를 진행하였습니다.
              온라인 상에서 약 60%의 제품이 입찰되었으며, 추후 프로젝트 확장을
              위해 지속적으로 따바프레스와 협업 중입니다.`,
    period: "2022.09. ~ 2022.10.",
    devStacks: [
      DevStack.React,
      DevStack.Remix,
      DevStack.Firebase,
      DevStack.Netlify,
    ],
    images: [
      "/projects/newbid/newbid1.jpg",
      "/projects/newbid/newbid2.jpg",
      "/projects/newbid/newbid3.jpg",
    ],
    implementation: `- 폰트업체 '산돌'의 협찬을 받아 Sandoll 그레타샌즈 웹폰트를 적용
    - 경매 입찰시 고객에게 메세지를 주기 위한 알림톡 API 적용
    - 카카오톡 API를 통한 로그인 시스템 및 플러스친구 기능
    - Firebase를 통해 관리되는 경매 시스템`,
  },
  {
    title: "로파 파트너사이트",
    subtitle: "물류 전산 관리 웹페이지 개발",
    about: `로파서울의 물류 처리를 위한 사무 웹사이트를 개발하였습니다. 이전
              뉴비드 프로젝트와 마찬가지로, Remix 프레임워크와 Netlify 호스팅,
              그리고 Firebase의 데이터베이스와 인증시스템을 통해 별도의 서버
              구현 없이 사이트를 구현하였습니다. 사이트의 주요 기능은 엑셀 파일
              인식을 바탕으로 한 정산 및 주문서, 운송장 처리이며, 일부 기능
              사용시 관리자 또는 고객사에게 알림 문자가 발송됩니다. (알리고 API
              사용)`,
    period: "2023.01. ~ 2023.02., 이후 지속 관리 중",
    devStacks: [
      DevStack.React,
      DevStack.Remix,
      DevStack.Firebase,
      DevStack.Netlify,
    ],
    images: [
      "/projects/lofapartner/lofapartner1.png",
      "/projects/lofapartner/lofapartner2.png",
    ],
    implementation: `- Firebase Auth를 활용하여 개발자 없이 사용자가 직접 관리할 수 있는 회원 시스템
    - 고객사 전용 페이지와 다른 기능 및 UI를 지닌 관리자 페이지 
    - 업로드한 엑셀 파일을 읽어 정산내역 또는 운송장 기록을 생성하고 관리할 수 있는 시스템
    - Firestore를 통해 관리되는 고객사 정보와 물류 정보
    - 정산내역 공유 등 업무 발생시 사용자에게 문자 메세지를 주기 위한 알림톡 API 적용`,
  },
  {
    title: "써치라이트",
    subtitle: "전시회 및 출품 작가를 소개하기 위한 웹사이트 개발",
    about: `'써치라이트'는 신진 작가를 소개하기 위해 로파서울에서 기획한 전시회이며, 해당 전시회에 출품한 작가를 소개하기 위한 웹사이트를 개발하였습니다. 기존에 본인이 진행한 웹 프로젝트와 다르게 Next.js 프레임워크와 Vercel 호스팅을 활용하였습니다. 총 35명의 작가들과 200점 이상의 예술품이 사이트에 등록되어 있습니다. 
            `,
    period: "2023.10.",
    devStacks: [DevStack.React, DevStack.Nextjs, DevStack.Vercel],
    images: [
      "/projects/searchlight/searchlight1.png",
      "/projects/searchlight/searchlight2.png",
    ],
    implementation: `- 사이트 내 애니메이션 효과 적용
    - 반응형 디자인을 통해 모바일/PC 양 플랫폼에서 적절한 화면 구성을 보여줌`,
  },
];
