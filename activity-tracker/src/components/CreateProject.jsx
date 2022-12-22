import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import axios from "axios";


//Create project modal
function CreateProject() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [project, setProject] = useState("");

  const handleClick = async () => {
    onClose();
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let obj = {
      projectName: project,
      projectDate: `${year}-${month}-${day}`,
    };

    let res = await axios.post(
      `https://upset-teal-duck.cyclic.app/project`,
      obj
    );
    let data = await res.data;
    setProject("");
  };

  return (
    <ChakraProvider>
      {" "}
      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="22px" color="#fff" background="#4ea819">
            Create a Project
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> Project Name</Text>
            <Input
              value={project}
              onChange={(e) => setProject(e.target.value)}
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
              onClick={handleClick}
              color="white"
              background="#4ea819"
            >
              CREATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default CreateProject;
