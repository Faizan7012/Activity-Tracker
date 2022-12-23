import { Box, Flex, Text } from "@chakra-ui/react";
let data = [
  "12 AM",
  "2 AM",
  "4 AM",
  "6 AM",
  "8 AM",
  "10 AM",
  "12 PM",
  "2 PM",
  "4 PM",
  "6 PM",
  "8 PM",
  "10 PM",
];
function Productivity() {
  return (
    <>
      <Box w="90%" m="auto" p="10px 20px">
        <Text textAlign="left" color="#475056" fontSize=".875rem" mb="20px">
          PRODUCTIVITY BAR
        </Text>
        <Box>
          <Box bg="white" p="20px 0px">
            <Box
              w="80%"
              m="auto"
              h="200px !important"
              backgroundSize="cover !important"
              background="url(https://desktime.com/assets/img/employee-empty-productivity-bar.svg)"
            ></Box>
          </Box>
        </Box>
        <Box w="90%" m="auto">
          <Flex justifyContent="space-between" mt="20px">
            {data.map((ele) => {
              return (
                <Box>
                  <Text fontSize="12px" color="#B2B2B2" key={ele}>
                    {ele}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box w="90%" m="auto" mt="50px" p="10px 20px">
        <Box mb="30px">
          <Box bg="#5FB92A" p="13px 20px">
            <Text textAlign="left" color="#fff" fontSize=".875rem">
              PRODUCTIVE APPS
            </Text>
          </Box>
          <Flex
            bg="white"
            h="150px"
            alignItems="center"
            justifyContent="center"
            fontSize="16px"
            color="#B2B2B2"
          >
            No data collected
          </Flex>
        </Box>
        <Box mb="30px">
          <Box bg="#f60" p="13px 20px">
            <Text textAlign="left" color="#fff" fontSize=".875rem">
              UNPRODUCTIVE APPS
            </Text>
          </Box>
          <Flex
            bg="white"
            h="150px"
            alignItems="center"
            justifyContent="center"
            fontSize="16px"
            color="#B2B2B2"
          >
            No data collected
          </Flex>
        </Box>
        <Box mb="30px">
          <Box bg="#999DA1" p="13px 20px">
            <Text textAlign="left" color="#fff" fontSize=".875rem">
              NEUTRAL APPS
            </Text>
          </Box>
          <Flex
            bg="white"
            h="150px"
            alignItems="center"
            justifyContent="center"
            fontSize="16px"
            color="#B2B2B2"
          >
            No data collected
          </Flex>
        </Box>
      </Box>
    </>
  );
}
export default Productivity;
