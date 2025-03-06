import localFont from "next/font/local";

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

export function CustomText({
  fontFamily,
  children,
}: {
  fontFamily: FontFamily;
  children: React.ReactNode;
}) {
  var fontClassName = "";
  switch (fontFamily) {
    case FontFamily.Warhaven:
      fontClassName = WarhavenFont.className;
      break;
  }
  return <p className={fontClassName}>{children}</p>;
}
