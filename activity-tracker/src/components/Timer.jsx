import React, { useState } from "react";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { BsFillPauseFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Radio,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Draggable, { DraggableCore } from "react-draggable";
function Timer() {
  const [time, setTime] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const startTimer = () => {};

  const handleClick = () => {
    if (time) {
    }
    setTime(!time);
  };

  return (
    <>
      ḥ{" "}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <FormLabel>Description</FormLabel>
            <Input type="text" placeholder="Describe the activity" />
          </ModalHeader>
          <ModalHeader>
            <FormLabel>Project</FormLabel>
            <Input type="text" placeholder="Add or select project name" />
          </ModalHeader>
          <ModalHeader>
            <FormLabel>Task</FormLabel>
            <Input type="text" placeholder="Add or select task name" />
          </ModalHeader>
          <ModalHeader>
            <Radio isInvalid>Productive</Radio>
          </ModalHeader>
          <ModalHeader>
            <Radio isInvalid>Unproductive</Radio>
          </ModalHeader>
          <ModalHeader>
            <Radio isInvalid>Neutral</Radio>
          </ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              CANCEL
            </Button>
            <Button variant="ghost">START</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex mt="50px" justify={"center"} className="mydiv">
        <Draggable>
          <Flex
            // cursor="move"
            w="170px"
            className="mydivheader"
            draggable="auto"
            borderRadius={"7px"}
            background={"#333c43"}
            justifyContent={"space-between"}
            padding={"12px  14px"}
            alignItems={"center"}
          >
            <HiOutlineArrowsExpand
              fontWeight={"600"}
              color="white"
              fontSize={"20px"}
              onClick={onOpen}
            />
            {time ? (
              <BsFillPauseFill
                fontSize={"25px"}
                color="#4ea819"
                onClick={handleClick}
              />
            ) : (
              <BsFillPlayFill
                fontSize={"25px"}
                color="#4ea819"
                onClick={handleClick}
              />
            )}
            <Text color="white">00:00:00</Text>
          </Flex>
        </Draggable>
      </Flex>
    </>
  );
}

export default Timer;
