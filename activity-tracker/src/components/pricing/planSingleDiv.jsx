import { Flex, Text, Stack } from "@chakra-ui/react";
function PlanSingleDiv({ s, ele }) {
  return (
    <Stack key={ele} mt="15px" spacing={"10px"}>
      <Flex gap={3} alignItems={"center"}>
        <img
          width={s ? s : "15%"}
          height="50%"
          src="https://i.ibb.co/s9kPpwq/svgcheck.png"
          alt=""
        />
        <Text color={"#475056"} fontWeight={"400"} textAlign={"left"}>
          {ele}
        </Text>
      </Flex>
    </Stack>
  );
}

export default PlanSingleDiv;
