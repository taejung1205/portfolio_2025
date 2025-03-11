import { DevStack } from "./DevStack";

export type Project = {
  title: string;
  about: string; //프로젝트에 대한 간단한 설명
  period: string; //프로젝트 기간
  devStacks: DevStack[]; //기술 스택
  images: string[]; //프로젝트 이미지
  implementation: string; //구현 내용
};
