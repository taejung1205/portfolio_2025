import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { Project } from "@components/Project";

export default function ProjectModal({
  isOpen,
  selectedProject,
}: {
  isOpen: boolean;
  selectedProject: Project;
}) {
  return (
    <Dialog.Root
      size="cover"
      placement="center"
      motionPreset="slide-in-bottom"
      open={isOpen}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{selectedProject.title}</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>{selectedProject.about}</Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
