import { motion } from "framer-motion";
import localFont from "next/font/local";
import { forwardRef } from "react";

export enum FontFamily {
  Warhaven = "Warhaven",
  NanumGothic = "NanumGothic",
}

const WarhavenFont = localFont({
  src: [
    {
      path: "../public/fonts/NEXON_Warhaven_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NEXON_Warhaven_Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const NanumGothicFont = localFont({
  src: [
    {
      path: "../public/fonts/NanumGothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NanumGothicBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const CustomText = forwardRef<
  HTMLParagraphElement, // `p` 태그에 적용할 것이므로 HTMLParagraphElement 사용
  {
    fontFamily: FontFamily;
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
    fontSize: number;
    fontWeight?: number;
    children: React.ReactNode;
  }
>(
  (
    { fontFamily, fontSize, fontWeight = 400, whiteSpace = "normal", children },
    ref
  ) => {
    let fontClassName = "";
    switch (fontFamily) {
      case FontFamily.Warhaven:
        fontClassName = WarhavenFont.className;
        break;
      case FontFamily.NanumGothic:
        fontClassName = NanumGothicFont.className;
        break;
    }

    return (
      <p
        ref={ref}
        className={fontClassName}
        style={{
          fontSize: fontSize,
          fontWeight: fontWeight,
          whiteSpace: whiteSpace,
        }}
      >
        {children}
      </p>
    );
  }
);

export const MotionCustomText = motion.create(CustomText);
