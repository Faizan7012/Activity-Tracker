import { Flex, Box, Image, Text, Link, Stack } from "@chakra-ui/react";

const CCard = ({ name, role, company, img, desc }) => {
  return (
    <Box
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
      }
      borderRadius="7px"
      w="322px"
      h="456px"
      padding="16px"
    >
      <Flex justifyContent="flex-start" alignItems="center" gap="20px">
        <Image src={img} h="60px" w="60px" />
        <Stack textAlign="left">
          <Text color="#333C43" fontSize="20px" fontWeight="bold">
            {name}
          </Text>
          <Text color="#5A6267" fontSize="15px" m="0 !important">
            {role}
          </Text>
          <Link
            textDecoration="underline"
            fontSize="15px"
            fontWeight="bold"
            m="0 !important"
          >
            {company}
          </Link>
        </Stack>
      </Flex>
      <Text color="#5A6267" textAlign="left" pt="20px">
        {desc}
      </Text>
    </Box>
  );
};

export default CCard;
