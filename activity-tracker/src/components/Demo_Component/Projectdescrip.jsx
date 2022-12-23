import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function Projectdesc() {
  return (
    <Flex
      padding="20px"
      width="90%"
      margin="auto"
      justifyContent={"space-between"}
      flexDirection={{
        base: "column-reverse",
        sm: "column-reverse",
        md: "column-reverse",
        lg: "row",
      }}
    >
      <Flex gap="20px" w={["100%", "100%", "100%", "50%"]}>
        <Flex flexDirection={"column"}>
          <Text
            fontFamily={"Source Sans Pro,sans-serif"}
            color={"#475056"}
            marginBottom="10px"
            fontSize={"16px"}
            textAlign={"left"}
          >
            Projects
          </Text>
          <Text fontSize={"12px"} textAlign={"left"}>
            DeskTime Projects allow you to track the time you and your team
            spend on certain projects and tasks. You can see the actual scope of
            your projects, calculate their costs, and bill your clients
            accordingly.
          </Text>
          <Flex
            fontSize={"12px"}
            flexDirection={"column"}
            color={"#475056"}
            justifyContent="flex-start"
            textAlign={"left"}
          >
            <Flex mb="8px" mt="15px">
              <Text fontWeight="650">Things to know: </Text>
            </Flex>
            <Flex paddingLeft={"12px"} flexDirection={"column"}>
              <Text textAlign={"left"} as="li">
                You can filter and search projects and tasks here.
              </Text>
              <Text textAlign={"left"} as="li">
                To add a project, use the “New Project” button.
              </Text>
              <Text textAlign={"left"} as="li">
                You can assign projects to all company members or specific
                employees, set hourly rates.
              </Text>
              <Text textAlign={"left"} as="li">
                You can start tracking your first project via the desktop app or
                the webtimer.
              </Text>
              <Text textAlign={"left"} as="li">
                It's possible to connect DeskTime projects with your project
                management apps (Asana, JIRA, or others).
              </Text>
            </Flex>
          </Flex>

          <Flex
            mt="15px"
            // border="1px solid red"

            gap="20px"
          >
            <Button
              as="a"
              fontSize={"11px"}
              fontWeight={"500"}
              borderRadius="5px"
              color={"white"}
              background={"#4ea819"}
            >
              GOT IT{" "}
            </Button>
            <Button
              as="a"
              fontSize={"11px"}
              fontWeight={"500"}
              borderRadius="5px"
              color={"#475056"}
              background={"#fff"}
            >
              READ MORE
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={["100%", "100%", "100%", "45%"]}
        justifyContent={"center"}
        alignItems="center"
      >
        <Image
          w="100%"
          src="https://desktime.com/static/app/intro/projects.png?v1"
        ></Image>
      </Flex>
    </Flex>
  );
}

export default Projectdesc;
