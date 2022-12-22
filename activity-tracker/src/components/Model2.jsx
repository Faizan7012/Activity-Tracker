import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { BiEdit } from "react-icons/bi";

function Model2({ project, handlesetProject, handleUpdate, el }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <BiEdit onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader fontSize="22px" color="#fff" background="#4ea819">
            Update a Project
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> Project Name</Text>
            <Input
              value={project}
              onChange={(e) => handlesetProject(e.target.value)}
            />
            <Text mt="15px">Project hour rate</Text>
            <InputGroup>
              <InputLeftAddon bg="#ebecec" children="INR" />
              <Input type="number" />
            </InputGroup>
            <Text mt="15px"> Estimate costs</Text>
            <InputGroup>
              <InputLeftAddon bg="#ebecec" children="INR" />
              <Input type="number" />
            </InputGroup>
            <Text mt="15px"> Estimate time</Text>

            <InputGroup>
              <InputLeftAddon bg="#ebecec" children="h" />
              <Input type="text" />
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              border="1px solid grey"
              bg="#fff"
              color="black"
              mr={3}
              onClick={onClose}
            >
              CANCEL
            </Button>
            <Button
              _hover={{
                bg: "#4ea819",
              }}
              onClick={() => handleUpdate(el._id, el.projectDate)}
              color="white"
              background="#4ea819"
            >
              UPDATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Model2;
