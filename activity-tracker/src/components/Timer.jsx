import React from "react";
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
  ModalCloseButton,
} from "@chakra-ui/react";
import Draggable from "react-draggable";
import useTimer from "./useTimer";


//function that converts seconds to hour, min and seconds accordingly
function secondsToHms(d) {
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);
  var hDisplay = h<=9?'0'+h:h
  var mDisplay = m<=9?'0'+m:m
  var sDisplay = s<=9?'0'+s:s
  return {hDisplay,mDisplay,sDisplay}
}

function Timer({projectID, token}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {timer,start,stop,time} = useTimer(0,projectID,token);
  const {hDisplay,mDisplay,sDisplay} = secondsToHms(timer);

  return (
    <>
      {/* <Button >Open Modal</Button> */}
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

      <Flex justify={"center"} className="mydiv">
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
                onClick={stop}
              />
            ) : (
              <BsFillPlayFill
                fontSize={"25px"}
                color="#4ea819"
                onClick={start}
              />
            )}
            <Text color="white">
              {hDisplay}:{mDisplay}:{sDisplay}
            </Text>
          </Flex>
        </Draggable>
      </Flex>
    </>
  );
}

export default Timer;

