import { motion } from "framer-motion";
import localFont from "next/font/local";
import { forwardRef } from "react";

export enum FontFamily {
  Warhaven = "Warhaven",
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

export const CustomText = forwardRef<
  HTMLParagraphElement, // `p` 태그에 적용할 것이므로 HTMLParagraphElement 사용
  {
    fontFamily: FontFamily;
    fontSize: number;
    fontWeight?: number;
    children: React.ReactNode;
  }
>(({ fontFamily, fontSize, fontWeight = 400, children }, ref) => {
  let fontClassName = "";
  switch (fontFamily) {
    case FontFamily.Warhaven:
      fontClassName = WarhavenFont.className;
      break;
  }

  return (
    <p
      ref={ref}
      className={fontClassName}
      style={{ fontSize: fontSize, fontWeight: fontWeight }}
    >
      {children}
    </p>
  );
});

export const MotionCustomText = motion.create(CustomText);
