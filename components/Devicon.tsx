import { motion } from "framer-motion";
import localFont from "next/font/local";
import { forwardRef } from "react";

export enum DevStack {
  Unity = "Unity",
  Typescript = "Typescript",
}

export const Devicon = forwardRef<
  HTMLImageElement, // `i` 태그를 사용할 것이므로 HTMLElement
  {
    devStack: DevStack; // 사용할 아이콘 기술 스택
    size?: number; // 아이콘 크기
    color?: string; // 아이콘 색상
  }
>(({ devStack, size = 24, color }, ref) => {
  let deviconAddress = "";
  switch (devStack) {
    case DevStack.Unity:
      deviconAddress =
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg";
      break;
    case DevStack.Typescript:
      deviconAddress =
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
      break;
  }

  return <img ref={ref} src={deviconAddress} width={size} />;
});

export const MotionDevicon = motion.create(Devicon);
