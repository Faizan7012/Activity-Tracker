import {
  Flex,
  Box,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  HStack,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";

import { IoEarth } from "react-icons/io5";

import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useSelector } from "react-redux";


function Navbar() {
  const {isAuth} = useSelector((store) => store.auth);

  return (
    <Box
      position="fixed"
      borderTop="4px solid #4ea819"
      boxShadow="0 0 12px rgb(0 0 0 / 12%)"
      w="100%"
      zIndex="10"
      bgColor="white"
    >
      <Flex
        h="82.6px"
        alignItems="center"
        justifyContent="space-around"
        fontWeight="500"
        fontSize="17px"
        zIndex="100"
      >
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
          <Image w="70px" h="50px" src={require("../assets/logo.png")} />
        </Link>

        <BurgerMenu />

        <Flex
          justifyContent="center"
          alignItems="center"
          gap={["10px", "10px", "10px", "20px"]}
          zIndex="100"
          display={["none", "none", "flex", "flex"]}
        >
          <Link
            as={RouterLink}
            to="/demo"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            Demo
          </Link>
           <Link
            className="un"
            _hover={{ textDecoration: "none" }}
            as={RouterLink}
            to="/pricing"
          >
            Pricing
          </Link>

          <Link
            as={RouterLink}
            to="/aboutus"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            About us
          </Link>

          <Link
            as={RouterLink}
            to="/faq"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            FAQ
          </Link>

          <Link
            as={RouterLink}
            to="/blog"
            className="un"
            _hover={{ textDecoration: "none" }}
          ></Link>

          <Link
            as={RouterLink}
            to="/blog"
            className="un"
            _hover={{ textDecoration: "none" }}
          >
            Blog
          </Link>

          {!isAuth ? (
            <>
              <Button
                borderRadius="3px"
                fontSize="13px"
                colorScheme="teal"
                size="md"
                variant="outline"
                _hover={{ bg: "#efefed" }}
              >
                <Link
                  color="black"
                  _hover={{ textDecoration: "none" }}
                  as={RouterLink}
                  to="/login"
                >
                  LOGIN
                </Link>
              </Button>
              <Button
                fontSize="13px"
                borderRadius="3px"
                bg="#4ea819"
                color="white"
                size="md"
                _hover={{ bg: "#327c04" }}
              >
                <Link
                  _hover={{ textDecoration: "none" }}
                  as={RouterLink}
                  to="/signup"
                >
                  SIGN UP
                </Link>
              </Button>
            </>
          ) : (
            <Button
              fontSize="13px"
              borderRadius="3px"
              bg="#4ea819"
              color="white"
              size="md"
              _hover={{ bg: "#327c04" }}
            >
              <Link
                _hover={{ textDecoration: "none" }}
                as={RouterLink}
                to="/dashboard/my"
              >
                MY DESKTIME
              </Link>
            </Button>
          )}

          <HStack>
            <IoEarth />
            <Box color="#555E63" marginLeft="3px !important" as="span">
              EN
            </Box>
            <Menu isLazy>
              {({ isOpen }) => (
                <>
                  <MenuButton>
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </MenuButton>
                  <MenuList>
                    <MenuOptionGroup defaultValue="eng" type="radio">
                      <MenuItemOption value="eng">English</MenuItemOption>
                      <MenuItemOption value="esp">Espanyol</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </>
              )}
            </Menu>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
