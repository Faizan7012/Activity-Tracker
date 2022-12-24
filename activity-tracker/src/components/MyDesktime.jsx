import { ChakraProvider } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Text,
  SimpleGrid,
  Tooltip,
  Input,
  Select
} from "@chakra-ui/react";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Timer from "./Timer";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function secondsToHms(d) {
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);
  

  let ans = (
    <Flex gap="5px">
      {h !== "0" ? (
        <Text color="#4EA819" fontSize="20px">
          <Text color="#4EA819" fontSize="30px" as="span">
            {h}
          </Text>{" "}
          h
        </Text>
      ) : (
        ""
      )}
      {m !== "0" || h !== "0" ? (
        <Text color="#4EA819" fontSize="20px">
          <Text color="#4EA819" fontSize="30px" as="span">
            {m}
          </Text>{" "}
          m
        </Text>
      ) : (
        ""
      )}
      <Text color="#4EA819" fontSize="20px">
        <Text color="#4EA819" fontSize="30px" as="span">
          {s}
        </Text>{" "}
        s
      </Text>
    </Flex>
  );

  return ans;
}

const MyDesktime = () => {
  const authData = useSelector(store => store.auth.data);
  const [projectID, setProjectID] = useState("");
  const [data, setData] = useState([]);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    axios
      .get("https://upset-teal-duck.cyclic.app/project", {
        headers: {token: authData.token}
      })
      .then((res) => { 
        setData(res.data.data)});
  }, []);


  const d = new Date();
  const status = useSelector((store) => store.ls);
  return (
    <ChakraProvider>
      <Timer projectID={projectID} token={authData.token} />
      <Box color="#333C43" w="90%" m="auto" p="30px" bg="#EBECEC">
        <Flex
          flexDirection={["column", "column", "column", "row"]}
          gap="30px"
          justifyContent="space-between"
        >
          <Select onChange={(e) => {
            const a = e.target.value.split(",");
            setProjectID(a[1])
          }} placeholder='Select option'>
            {
              data?.map(el => (<option key={el._id} value={`${el.projectName},${el._id}`}>{el.projectName}</option>))
            }
          </Select>
          <Flex
            justifyContent="center"
            gap={["5px", "5px", "10px", "15px"]}
            alignItems="center"
          >
            <Text>
              {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}
            </Text>
            <Input
              cursor="pointer"
              color="#EBECEC"
              width="20px"
              variant="unstyled"
              _hover={{ outline: "none" }}
              outline="none"
              border="none"
              type="date"
            />
            <FiChevronLeft color="#475056" fontSize="24px" cursor="pointer" />
            <FiChevronRight color="#475056" fontSize="24px" cursor="pointer" />
            <Flex
              cursor="pointer"
              fontSize="14px"
              fontWeight="500"
              border="1px solid"
              borderRadius="3px"
            >
              <Box bg="#4EA819" color="white" p="11px 16px">
                DAY
              </Box>
              <Box borderRight="1px solid" borderLeft="1px solid" p="11px 16px">
                WEEK
              </Box>
              <Box p="11px 16px">MONTH</Box>
            </Flex>
            <Box border="1px solid" p="11px 10px" borderRadius="3px">
              <BsFillQuestionCircleFill
                color="#475056"
                fontSize="20px"
                cursor="pointer"
              />
            </Box>
          </Flex>
        </Flex>
        <SimpleGrid
          mt="40px"
          color="#47507C"
          bg="#EBECEC"
          columns={["1", "2", "2", "4"]}
          spacing="40px"
        >
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Text m="0 !important">ARRIVAL TIME</Text>
            <Text color="#4EA819" fontSize="30px">
              {!status.arrival.hours
                ? null
                : status.arrival.hours +
                  ":" +
                  status.arrival.min +
                  " " +
                  status.arrival.tmp}
            </Text>
          </Box>
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Text m="0 !important">LEFT TIME</Text>
            <Text color="#4EA819" fontSize="30px">
              {!status.departure.hours
                ? null
                : status.departure.hours +
                  ":" +
                  status.departure.min +
                  " " +
                  status.departure.tmp}
            </Text>
          </Box>
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
              <Text pb="1.5px" m="0 !important">
                PRODUCTIVE TIME
              </Text>
              <Tooltip
                color="blackAlpha.700"
                hasArrow
                borderRadius="3px"
                label="Search places"
                bg="white"
                p="8px 15px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                placement="top"
              >
                <Text as="span">
                  <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
                </Text>
              </Tooltip>
            </Flex>
            <Text>
              {status.totalTime === 0 ? null : secondsToHms(status.totalTime)}
            </Text>
          </Box>
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
              <Text pb="1.5px" m="0 !important">
                DESKTIME TIME{" "}
              </Text>
              <Tooltip
                color="blackAlpha.700"
                hasArrow
                borderRadius="3px"
                label="Search places"
                bg="white"
                p="8px 15px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                placement="top"
              >
                <Text as="span">
                  <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
                </Text>
              </Tooltip>
            </Flex>
            <Text>
              {status.totalTime === 0 ? null : secondsToHms(status.totalTime)}
            </Text>
          </Box>
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
              <Text pb="1.5px" m="0 !important">
                TIME AT WORK
              </Text>
              <Tooltip
                color="blackAlpha.700"
                hasArrow
                borderRadius="3px"
                label="Search places"
                bg="white"
                p="8px 15px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                placement="top"
              >
                <Text as="span">
                  <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
                </Text>
              </Tooltip>
            </Flex>
            <Text>
              {status.totalTime === 0 ? null : secondsToHms(status.totalTime)}
            </Text>
          </Box>
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
              <Text pb="1.5px" m="0 !important">
                UNPRODUCTIVE TIME{" "}
              </Text>
              <Tooltip
                color="blackAlpha.700"
                hasArrow
                borderRadius="3px"
                label="Search places"
                bg="white"
                p="8px 15px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                placement="top"
              >
                <Text as="span">
                  <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
                </Text>
              </Tooltip>
            </Flex>
          </Box>
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
              <Text pb="1.5px" m="0 !important">
                EFFECTIVENESS
              </Text>
              <Tooltip
                color="blackAlpha.700"
                hasArrow
                borderRadius="3px"
                label="Search places"
                bg="white"
                p="8px 15px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                placement="top"
              >
                <Text as="span">
                  <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
                </Text>
              </Tooltip>
            </Flex>
          </Box>
          <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
              <Text pb="1.5px" m="0 !important">
                PRODUCTIVITY
              </Text>
              <Tooltip
                color="blackAlpha.700"
                hasArrow
                borderRadius="3px"
                label="Search places"
                bg="white"
                p="8px 15px"
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                placement="top"
              >
                <Text as="span">
                  <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
                </Text>
              </Tooltip>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};
export default MyDesktime;
