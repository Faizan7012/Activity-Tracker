import { ChakraProvider } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Text,
  Heading,
  SimpleGrid,
  Tooltip,
  Input
} from "@chakra-ui/react";
import { IoCalendarSharp, IoInformationCircleSharp } from "react-icons/io5";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { BsFillQuestionCircleFill } from "react-icons/bs";
const MyDesktime = () => {
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
  const d = new Date();
  return (
    <ChakraProvider>
    <Box color="#333C43" w="90%" m="auto" p="30px" bg="#EBECEC" >
      <Flex flexDirection={["column","column","column","row"]} gap="30px" justifyContent="space-between">
        <Heading fontWeight="500">My DeskTime</Heading>
        <Flex justifyContent="center" gap={["5px","5px","10px","15px"]} alignItems="center">
          <Text>
            {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}
          </Text>
          <Input cursor="pointer" color="#EBECEC" width='20px' variant='unstyled' _hover={{outline:"none"}} outline="none" border="none" type="date" />
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
      <SimpleGrid mt="40px" color="#47507C" bg="#EBECEC" columns={["1","2","2","4"]} spacing="40px">
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Text m="0 !important">ARRIVAL TIME</Text>
        </Box>
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Text m="0 !important">LEFT TIME</Text>
        </Box>
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
            <Text pb="1.5px" m="0 !important">PRODUCTIVE TIME</Text>
            <Tooltip color="blackAlpha.700" hasArrow borderRadius="3px" label='Search places' bg="white" p="8px 15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" placement='top'>
            <Text as="span">
            <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
            </Text>
            </Tooltip>
            </Flex>
        </Box>
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
            <Text pb="1.5px" m="0 !important">DESKTIME TIME </Text>
            <Tooltip color="blackAlpha.700" hasArrow borderRadius="3px" label='Search places' bg="white" p="8px 15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" placement='top'>
            <Text as="span">
            <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
            </Text>
            </Tooltip>
            </Flex>
        </Box>
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
            <Text pb="1.5px" m="0 !important">TIME AT WORK</Text>
            <Tooltip color="blackAlpha.700" hasArrow borderRadius="3px" label='Search places' bg="white" p="8px 15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" placement='top'>
            <Text as="span">
            <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
            </Text>
            </Tooltip>
            </Flex>
        </Box>
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
            <Text pb="1.5px" m="0 !important">UNPRODUCTIVE TIME </Text>
            <Tooltip color="blackAlpha.700" hasArrow borderRadius="3px" label='Search places' bg="white" p="8px 15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" placement='top'>
            <Text as="span">
            <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
            </Text>
            </Tooltip>
            </Flex>
        </Box>
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
            <Text pb="1.5px" m="0 !important">EFFECTIVENESS</Text>
            <Tooltip color="blackAlpha.700" hasArrow borderRadius="3px" label='Search places' bg="white" p="8px 15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" placement='top'>
            <Text as="span">
            <IoInformationCircleSharp color="#C2CAD7" fontSize="20px" />
            </Text>
            </Tooltip>
            </Flex>
        </Box>
        <Box textAlign="left" p="15px" bg="white" height="167px">
            <Flex alignItems="center" gap="7px">
            <Text pb="1.5px" m="0 !important">PRODUCTIVITY</Text>
            <Tooltip color="blackAlpha.700" hasArrow borderRadius="3px" label='Search places' bg="white" p="8px 15px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" placement='top'>
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