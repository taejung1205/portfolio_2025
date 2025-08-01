import { DevStack } from "./DevStack";
import { ExternalLinkType } from "./ExternalLinkButton";

export type Project = {
  title: string;
  subtitle: string;
  about: string; //프로젝트에 대한 간단한 설명
  period: string; //프로젝트 기간
  devStacks: DevStack[]; //기술 스택
  images: string[]; //프로젝트 이미지
  implementation: string; //구현 내용
  externalLink?: ExternalLink[];
  projectType: ProjectType;
};

export type ExternalLink = {
  link: string;
  linkType: ExternalLinkType;
};

export enum ProjectType {
  Business = "회사 프로젝트",
  Freelancer = "프리랜서 작업물",
  Personal = "개인 작업물",
  Undergraduate = "학부 프로젝트",
}

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
    externalLink: [
      {
        link: "https://www.youtube.com/embed/_eSYzxgJ8sE",
        linkType: ExternalLinkType.Video,
      },
    ],
    projectType: ProjectType.Undergraduate,
  },
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
    projectType: ProjectType.Business,
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
    projectType: ProjectType.Business,
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
    projectType: ProjectType.Business,
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
      DevStack.Typescript,
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
    externalLink: [
      {
        link: "https://newbid.netlify.app/",
        linkType: ExternalLinkType.ExternalSite,
      },
    ],
    projectType: ProjectType.Freelancer,
  },

  {
    title: "FlashBack: Pause Ahead",
    subtitle: "언리얼 엔진을 활용한 게임 습작",
    about: `2022-2 정보문화학 강의 '산학연구실습'의 과제물로 제작한 견습 모작 게임입니다. Askiisoft가 2013년에 개발한 플랫포머 플래시게임 'Pause Ahead'의 게임 메카닉을 재현한 플래시게임으로, 일시정지 도중 관성이 유지되는 기믹을 활용해 물리적으로 클리어가 불가능한 레벨을 클리어하는 것이 이 게임의 목표입니다.`,
    period: "2022.10.",
    devStacks: [DevStack.Unreal],
    images: ["/projects/pauseahead/pauseahead.png"],
    implementation: `- 기본적인 횡스크롤 플랫포머 게임 시스템 구현 및 5개의 레벨 디자인
    - 'Pause Ahead' 원작 특유의, 일시정지 상태에서 캐릭터 이동 관성이 유지되는 기믹 구현
    총 플레이 타임: 10분 이내`,
    externalLink: [
      {
        link: "https://taejung1205.itch.io/pauseaheadmockup",
        linkType: ExternalLinkType.ExternalSite,
      },
    ],
    projectType: ProjectType.Undergraduate,
  },
  {
    title: "세 명의 총잡이",
    subtitle: "유니티 엔진을 활용한 기능성 게임 습작",
    about: `2022-2 정보문화학 강의 '시리어스 게임'의 과제물로 제작한 시뮬레이션 게임입니다. 유명한 게임 이론인 '세 명의 총잡이'의 등장인물이 되어, 주어진 규칙에서 생존 확률을 가장 높이는 선택지를 고르는 것이 목표입니다. 직접 자신의 명중률을 조정해서 시험해볼 수 있는 커스텀 모드를 지원합니다.`,
    period: "2022.10.",
    devStacks: [DevStack.Unity],
    images: ["/projects/truel/truel.png"],
    implementation: `- 마우스 조작을 바탕으로 플레이할 수 있는 간단한 게임 구현
    총 플레이 타임: 5분 이내`,
    externalLink: [
      {
        link: "https://taejung1205.itch.io/truel",
        linkType: ExternalLinkType.ExternalSite,
      },
    ],
    projectType: ProjectType.Undergraduate,
  },
  {
    title: "Remote Run",
    subtitle: "아두이노를 활용한 물리적 인터페이스 구현",
    about: `2022-2 정보문화학 강의 '인터랙티브 미디어'의 과제물로 제작한 게임입니다. 초음파 센서를 활용해 만들어진 아두이노 장치를 컨트롤러로 사용하여, 양손과 컨트롤러 사이의 거리를 활용해 캐릭터의 좌우 이동을 조작하여 장애물을 피한 채 완주하는 게임입니다.`,
    period: "2022.10.",
    devStacks: [DevStack.Unity, DevStack.Arduino],
    images: ["/projects/remote_run/remoterun.png"],
    implementation: `- 초음파 센서를 통해 기기 양측의 감지 거리를 입력받아 게임 캐릭터를 조작할 수 있게 하는 물리적 인터페이스 구현
    - 플레이 난이도를 고려한 3D 레벨 디자인 
    총 플레이 타임: 5분 이내`,
    externalLink: [
      {
        link: "https://youtube.com/shorts/I4KB9oM3-PY",
        linkType: ExternalLinkType.Video,
      },
    ],
    projectType: ProjectType.Undergraduate,
  },

  {
    title: "로파 파트너사이트",
    subtitle: "ERP 서비스 제공 웹페이지 개발",
    about: `공예 전문 편집숍 로파서울의 물류 및 정산 처리를 위한 사무용 웹사이트를 개발하였습니다. Remix 프레임워크, Netlify 호스팅, Firebase DB와 클라우드 함수를 활용하여 서버리스 풀스택 구조로 구축하였으며, 관리자와 고객사가 업로드한 엑셀 파일을 인식해 정산 내역, 주문서, 운송장 등을 처리할 수 있도록 설계하였습니다.
    초기 버전 구축 이후 클라이언트의 요청에 따라 상품 등록 관리, 할인 내역 반영, 수익 통계 기능 등을 추가 구현하였습니다.

    2025년 5월에는 리뉴얼 작업을 통해 데모 환경과 운영 환경을 분리하고, 기존 Remix 기반 구조를 React Router로 리뉴얼하였습니다. 해당 서비스는 현재까지 실사용 중이며, 기능 개선 및 운영 이슈 대응을 위해 로파서울과 지속적으로 협업하고 있습니다.`,
    period:
      "2023.01. ~ 2023.02.(최초 개발), 2025.05.~2025.07.(리뉴얼), 이후 지속 관리 중",
    devStacks: [
      DevStack.React,
      DevStack.Remix,
      DevStack.Firebase,
      DevStack.Netlify,
      DevStack.Typescript,
    ],
    images: [
      "/projects/lofapartner/lofapartner1.png",
      "/projects/lofapartner/lofapartner2.png",
      "/projects/lofapartner/lofapartner3.png",
      "/projects/lofapartner/lofapartner4.png",
    ],
    implementation: `- Firebase Auth를 활용하여 개발자 없이 사용자가 직접 관리할 수 있는 회원 시스템
    - 고객사 전용 페이지와 다른 기능 및 UI를 지닌 관리자 페이지 
    - 업로드한 엑셀 파일을 읽어 정산내역 또는 운송장 기록을 생성하고 관리할 수 있는 시스템
    - Firestore를 통해 관리되는 ERP 시스템
    - 정산내역 공유 등 업무 발생시 사용자에게 문자 메세지 또는 안내 메일을 주기 위한 API 적용
  - 클라이언트 요청에 따른 상품등록 관리, 할인내역 반영 등 추가 기능 구현 
    - (리뉴얼) React Router 기반 페이지 구조 개편 및 Mantine UI 도입, i18n 다국어 지원, 모바일 화면 대응`,
    projectType: ProjectType.Freelancer,
  },
  {
    title: "Facewallet 테스트 엔지니어링",
    subtitle: "멀티체인 지갑 API와 웹 서비스에 대한 테스트 엔지니어링",
    about: `'페이스월렛(Facewallet)'은 P2E, NFT 게임 내에서 멀티체인 지갑을 사용할 수 있도록 API를 제공하는 해치랩스(주)의 서비스입니다.
              해치랩스의 테스트 엔지니어로 근무하며 서비스 기능이 배포되기 전 자동으로 수행되는 E2E(End-to-End) 테스트의 유지보수와 QA 업무를 진행했습니다.
              Facewallet API의 주요 기능을 테스트하기 위한 데모 사이트인 샘플댑, 앱 내 이식 없이 페이스월렛의 단독 사용을 위한 스탠드얼론,
              페이스월렛을 사용하는 앱을 고객사가 관리할 수 있게 해주는 대시보드의 테스트 작업을 진행했습니다.`,
    period: "2023.08. ~ 2024.02.",
    devStacks: [DevStack.React, DevStack.Playwright, DevStack.Typescript],
    images: [
      "/projects/facewallet/facewallet1.png",
      "/projects/facewallet/facewallet2.png",
    ],
    implementation: `- Facewallet의 기존 E2E 자동화 테스트 시스템 유지보수 
    - Facewallet 테스트 시나리오 관리 및 QA 업무 수행
    - Facewallet의 2단계 보안 인증에 대한 E2E 테스트 시나리오 구현
    - Facewallet 대시보드에 대한 E2E 자동화 테스트 지원`,
    projectType: ProjectType.Business,
  },

  {
    title: "써치라이트",
    subtitle: "전시회 및 출품 작가를 소개하기 위한 웹사이트 개발",
    about: `'써치라이트'는 신진 작가를 소개하기 위해 로파서울에서 기획한 전시회이며, 해당 전시회에 출품한 작가를 소개하기 위한 웹사이트를 개발하였습니다. 기존에 본인이 진행한 웹 프로젝트와 다르게 Next.js 프레임워크와 Vercel 호스팅을 활용하였습니다. 총 35명의 작가들과 200점 이상의 예술품이 사이트에 등록되어 있습니다. 
            `,
    period: "2023.10.",
    devStacks: [
      DevStack.React,
      DevStack.Nextjs,
      DevStack.Vercel,
      DevStack.Typescript,
    ],
    images: [
      "/projects/searchlight/searchlight1.png",
      "/projects/searchlight/searchlight2.png",
    ],
    implementation: `- 사이트 내 애니메이션 효과 적용
    - 화면 크기에 따른 반응형 웹페이지 구현`,
    externalLink: [
      {
        link: "https://searchlight.vercel.app/",
        linkType: ExternalLinkType.ExternalSite,
      },
    ],
    projectType: ProjectType.Freelancer,
  },

  {
    title: "Tilty Flight",
    subtitle: "자이로센서를 활용하여 조작하는 모바일 캐주얼 게임",
    about:
      "'Tilty Flight'는 스마트폰을 기울여 비행기를 조종하며 장애물을 피하고 최대한 오래 생존하는 것을 목표로 하는 3D 러너 게임입니다. 대부분의 모바일 게임이 터치 조작에 의존하는 것과 달리, 이 게임은 모션 컨트롤을 핵심 조작 방식으로 고정하여, 오직 기기를 기울이는 동작으로만 비행기를 조종할 수 있습니다. 플레이어는 기기를 기울이며 비행기를 조종해 다가오는 장애물을 피하고, 맵에 등장하는 코인을 모으며 최상의 점수를 기록하는 것이 목표입니다.",
    period: "2024.10. ~ 2024.11.",
    devStacks: [DevStack.Unity, DevStack.Android],
    images: [
      "/projects/tilty_flight/tilty_flight_1.jpg",
      "/projects/tilty_flight/tilty_flight_2.jpg",
      "/projects/tilty_flight/tilty_flight_3.jpg",
      "/projects/tilty_flight/tilty_flight_4.jpg",
      "/projects/tilty_flight/tilty_flight_5.jpg",
    ],
    implementation: `- 단말기의 기울기를 조절하여 비행기의 움직임을 조작하는 인터페이스, 기본 기울기 설정 기능
    - 장애물을 포함한 레벨 디자인
    - Google Admob을 활용한 하단 배너 광고 및 전면 광고
    - Google Play Games Service를 활용한 리더보드 및 업적 시스템
    - 원스토어 및 구글플레이에 출시한 상태 
    판당 플레이 타임: 3분 이내`,
    externalLink: [
      {
        link: "https://youtube.com/shorts/o4zDHOoDYPI",
        linkType: ExternalLinkType.Video,
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.KTJGames.TiltyFlight",
        linkType: ExternalLinkType.ExternalSite,
      },
    ],
    projectType: ProjectType.Personal,
  },
  {
    title: "CardSmith: Make Your Own Cards",
    subtitle: "사용자가 직접 카드를 만들어 사용하는 모바일 캐주얼 카드 게임",
    about: `
'CardSmith'는 유저가 직접 카드를 만들고, 그 카드를 활용하여 다른 유저들과 대결을 펼치는 캐주얼 전략 카드 게임입니다.
 주어진 한도 내에서 카드의 스탯과 능력을 조합해 나만의 카드를 만들고, 카드에 사용될 캐릭터 일러스트와 배경, 카드 이펙트 등을 직접 선택해 카드에 개성을 더할 수 있습니다.
 Indie Marc의 TCG Engine 유니티 에셋을 기반으로 하여 온라인 배틀 시스템을 구현하였고, 유저가 직접 만든 카드를 서버에 저장하여 카드를 수집하고 실제 카드 배틀에 사용될 수 있도록 구현하였습니다.
 컴투스 글로벌 게임개발 공모전 '컴:온'에 출시하기 위해 기획 및 개발되었습니다.
    `,
    period: "2024.12. ~ 2025.01.",
    devStacks: [
      DevStack.Unity,
      DevStack.Android,
      DevStack.Nodejs,
      DevStack.Javascript,
    ],
    images: [
      "/projects/cardsmith/cardsmith_1.png",
      "/projects/cardsmith/cardsmith_2.png",
      "/projects/cardsmith/cardsmith_3.png",
      "/projects/cardsmith/cardsmith_4.png",
      "/projects/cardsmith/cardsmith_5.png",
      "/projects/cardsmith/cardsmith_6.png",
    ],
    implementation: `- Indie Marc의 TCG Engine 에셋을 기반으로 한 계정 시스템과 온라인 매치 시스템
    - 자바스크립트 기반의 TCG Engine 서버 API를 개량하여 구현한 카드 제작 및 수집 시스템
    - 플레이어가 직접 자신의 사진을 게임 어플리케이션에 업로드하여 카드의 일러스트로 사용할 수 있게 만드는 기능
    - 기존 웹게임 'Urban Rivals'를 벤치마킹하여 기획한 게임 룰을 유니티로 새롭게 구현
    판당 플레이 타임: 5분 이내`,
    externalLink: [
      {
        link: "https://drive.google.com/file/d/1fM0FGXH22IUTGFDq8Oy9Oj9PdJ3xh--u/view?usp=drive_link",
        linkType: ExternalLinkType.Video,
      },
    ],
    projectType: ProjectType.Personal,
  },
];
