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
  InputGroup,
  InputLeftAddon,
  Button,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  Divider,
  Box,
  Avatar,
  Skeleton,
} from "@chakra-ui/react";

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useSelector } from "react-redux";
import Model2 from "../Model2";

function Project() {
  const authData = useSelector(store => store.auth.data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setProject] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    setLoading(true);
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
      obj,
      {
        headers: {token: authData.token}
      }
    );
    let createdData = await res.data;
    setProject("");
    createdData.status ? setData(createdData.data) : console.log(createdData);
    setLoading(false);
  };

  const handlesetProject = (val) => {
    setProject(val);
  };

  const handleUpdate = (id, date) => {
    setLoading(true);
    onClose();
    let newData = {
      projectName: project,
      projectDate: date,
    };
    console.log(id, "dfsdf");
    axios
      .patch(`https://upset-teal-duck.cyclic.app/project/${id}`, newData, {
        headers: {token: authData.token}
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });

    setProject("");
  };

  const handledelete = (id) => {
    setLoading(true);
    axios
      .delete(`https://upset-teal-duck.cyclic.app/project/${id}`,{
        headers: {token: authData.token}
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  };

  // const handleOpen2 = (el) => {
  //   setProject(el.projectName);
  //   onOpen();
  //   console.log(el);
  // };

  useEffect(() => {
    setLoading(true);
    axios.get("https://upset-teal-duck.cyclic.app/project",{
        headers: {token: authData.token}
      })
      .then((res) => { 
        res.data.status ? setData(res.data.data) : console.log(res.data);
        setLoading(false);
      })
  }, []);

  return (
    <ChakraProvider>
      <VStack mb="50px">
        <Flex w="90%" px="12px" justifyContent={"space-between"}>
          <Text color="#333c43" fontSize={"26px"}>
            Projects
          </Text>
          <Button
            onClick={onOpen}
            cursor={"pointer"}
            borderRadius={"6px"}
            fontWeight={"600"}
            padding="10px 18px"
            fontSize="12px"
            color={"#fff"}
            background={"#4ea819"}
            _hover={{
              background: "#4ea819",
            }}
          >
            NEW PROJECT
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
                  onClick={handleCreate}
                  color="white"
                  background="#4ea819"
                >
                  CREATE
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
        <Grid w="90%" gap="20px" templateColumns="repeat(3, 1fr)">
          <GridItem>
            <Flex
              margin={"15px"}
              paddingLeft="8px"
              justifyContent={"flex-start"}
              flexDirection={"column"}
              borderLeft="3px solid #d6d8d9"
            >
              <Text
                textAlign={"left"}
                fontWeight="500"
                color="#475056"
                fontSize={"12px"}
              >
                TOTAL AMOUNT OF PROJECTS
              </Text>
              <Text
                fontWeight="500"
                textAlign={"left"}
                fontSize={"26px"}
                color={"#4ea819"}
              >
                {data?.length}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              margin={"15px"}
              paddingLeft="8px"
              justifyContent={"flex-start"}
              flexDirection={"column"}
              borderLeft="3px solid #d6d8d9"
            >
              <Text
                textAlign={"left"}
                fontWeight="500"
                color="#475056"
                fontSize={"12px"}
              >
                TOTAL AMOUNT OF PROJECTS
              </Text>
              <Text
                fontWeight="500"
                textAlign={"left"}
                fontSize={"26px"}
                color={"#4ea819"}
              >
                {data?.length}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex
              margin={"15px"}
              paddingLeft="8px"
              justifyContent={"flex-start"}
              flexDirection={"column"}
              borderLeft="3px solid #d6d8d9"
            >
              <Text
                textAlign={"left"}
                fontWeight="500"
                color="#475056"
                fontSize={"12px"}
              >
                TOTAL AMOUNT OF PROJECTS
              </Text>
              <Text
                fontWeight="500"
                textAlign={"left"}
                fontSize={"26px"}
                color={"#4ea819"}
              >
                {data?.length}
              </Text>
            </Flex>
          </GridItem>
        </Grid>

        {loading ? (
          <Box mt="70px" width={"85%"}>
            <Skeleton
              m="auto"
              mt="20px"
              width={["90%", "90%", "90%", "100%"]}
              height="30px"
            />
            <Skeleton
              m="auto"
              mt="20px"
              width={["90%", "90%", "90%", "100%"]}
              height="30px"
            />
            <Skeleton
              m="auto"
              mt="20px"
              width={["90%", "90%", "90%", "100%"]}
              height="30px"
            />
          </Box>
        ) : (
          data?.map((el, i) => (
            <Box padding="0 10px 0 10px" w="86%" m="auto" key={el._id}>
              <Grid>
                <Grid
                  templateColumns="repeat(5,1fr)"
                  w="100%"
                  alignItems={"center"}
                >
                  <GridItem>
                    <Text fontWeight={"500"} textAlign={"left"}>
                      {el.projectName}
                    </Text>
                  </GridItem>
                  <GridItem>{el.projectDate}</GridItem>
                  <GridItem>
                    <Avatar
                      mixBlendMode="multiply"
                      src="https://i.ibb.co/H7DQjXv/a-t-logo-1.png"
                    />
                  </GridItem>
                  <GridItem>{i + 1}</GridItem>
                  <GridItem>
                    <Flex justifyContent={"right"} height={"20px"} gap="25px">
                      <Flex>
                        <Model2
                          handlesetProject={handlesetProject}
                          project={project}
                          handleUpdate={handleUpdate}
                          el={el}
                        />
                      </Flex>
                      <Flex>
                        <BsTrash cursor="pointer" onClick={() => handledelete(el._id)} />
                      </Flex>
                    </Flex>
                  </GridItem>
                </Grid>
              </Grid>
              <Divider mt="12px" borderTop="1px solid grey" />
            </Box>
          ))
        )}
      </VStack>
    </ChakraProvider>
  );
}

export default Project;
