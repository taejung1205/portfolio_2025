import { CloseButton, Dialog, HStack, Portal } from "@chakra-ui/react";
import {
  ExternalLinkButton,
  ExternalLinkType,
} from "@components/ExternalLinkButton";
import { Project } from "@components/Project";
import { CustomText, FontFamily } from "@components/Text";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@components/ui/pagination";
import { useEffect, useState } from "react";

export default function ProjectModal({
  isOpen,
  onOpenChange,
  selectedProject,
  screenType,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedProject: Project;
  screenType: string;
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [selectedProject]);

  return (
    <Dialog.Root
      size={screenType == "mobile" ? "full" : "cover"}
      placement="center"
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(e) => {
        onOpenChange(e.open);
      }}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            style={{
              lineHeight: 1.5,
              backgroundColor: "#000F32",
              color: "white",
            }}
            maxH={"90vh"}
            overflowY="auto"
          >
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" color={"grey"} />
            </Dialog.CloseTrigger>
            {
              <div
                style={{
                  margin: screenType == "mobile" ? "20px" : "30px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div style={{ color: "white" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CustomText
                      fontFamily={FontFamily.Warhaven}
                      fontSize={
                        screenType == "desktop" ? 60 : "clamp(20px, 7vw, 50px)"
                      }
                      fontWeight={700}
                    >
                      {selectedProject.title}
                    </CustomText>
                    <div style={{ width: "30px" }} />
                    <div style={{ display: "flex", gap: "20px" }}>
                      {selectedProject.externalLink &&
                        selectedProject.externalLink.map((item, index) => (
                          <ExternalLinkButton
                            link={item.link}
                            linkType={item.linkType}
                            size={
                              screenType == "desktop"
                                ? 60
                                : "clamp(20px, 7vw, 50px)"
                            }
                          />
                        ))}
                    </div>
                  </div>

                  <div style={{ height: "10px" }} />
                  <CustomText
                    fontFamily={FontFamily.Warhaven}
                    fontSize={
                      screenType == "desktop" ? 20 : "clamp(10px, 2.5vw, 20px)"
                    }
                    fontWeight={400}
                  >
                    {selectedProject.subtitle}
                  </CustomText>
                </div>

                <div style={{ height: "50px" }} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "calc(100% - 300px)",
                    flexDirection: screenType == "mobile" ? "column" : "row",
                  }}
                >
                  <div
                    style={{
                      minWidth: "30%",
                      display: "flex",
                      height: "100%",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={selectedProject.images[page - 1]}
                      style={{
                        maxHeight: screenType == "mobile" ? "50vh" : "100%",
                        maxWidth: "100%",
                      }}
                    />
                    <div style={{ height: "100px" }} />
                    <div
                      style={{
                        position:
                          screenType == "mobile" ? "relative" : "absolute",
                        bottom: "20px",
                      }}
                    >
                      <PaginationRoot
                        count={selectedProject.images.length}
                        pageSize={1}
                        page={page}
                        onPageChange={(e) => {
                          setPage(e.page);
                          console.log(e.page);
                        }}
                        variant="subtle"
                      >
                        <HStack>
                          <PaginationPrevTrigger color={"grey"} />
                          <PaginationItems color={"grey"} />
                          <PaginationNextTrigger color={"grey"} />
                        </HStack>
                      </PaginationRoot>
                    </div>
                  </div>
                  <div style={{ minWidth: "30px" }} />
                  <div
                    style={{ flexGrow: 1, alignItems: "start", height: "100%" }}
                  >
                    <CustomText fontFamily={FontFamily.Warhaven} fontSize={24}>
                      ABOUT
                    </CustomText>
                    <div style={{ height: "10px" }} />
                    <CustomText
                      fontFamily={FontFamily.Warhaven}
                      fontSize={16}
                      fontWeight={400}
                    >
                      {selectedProject.about}
                    </CustomText>

                    <div style={{ height: "40px" }} />

                    <CustomText fontFamily={FontFamily.Warhaven} fontSize={24}>
                      작업 기간
                    </CustomText>
                    <div style={{ height: "10px" }} />
                    <CustomText
                      fontFamily={FontFamily.Warhaven}
                      fontSize={16}
                      fontWeight={400}
                    >
                      {selectedProject.period}
                    </CustomText>

                    <div style={{ height: "40px" }} />
                    <CustomText fontFamily={FontFamily.Warhaven} fontSize={24}>
                      기술 스택
                    </CustomText>
                    <div style={{ height: "10px" }} />
                    <CustomText
                      fontFamily={FontFamily.Warhaven}
                      fontSize={16}
                      fontWeight={400}
                    >
                      {selectedProject.devStacks.join(", ")}
                    </CustomText>
                    <div style={{ height: "40px" }} />
                    {selectedProject.implementation.length > 0 && (
                      <>
                        {" "}
                        <CustomText
                          fontFamily={FontFamily.Warhaven}
                          fontSize={24}
                        >
                          주요 구현
                        </CustomText>
                        <div style={{ height: "10px" }} />
                        <CustomText
                          fontFamily={FontFamily.Warhaven}
                          fontSize={16}
                          fontWeight={400}
                          whiteSpace="pre-line"
                        >
                          {selectedProject.implementation}
                        </CustomText>
                      </>
                    )}
                  </div>
                </div>
              </div>
            }
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
