import {
  Link,
  Box,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Image,
  HStack,
  MenuItemOption,
  MenuOptionGroup,
  Flex,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { IoEarth } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";

import { useRef } from "react";
import { useSelector } from "react-redux";

const BurgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const {isAuth} = useSelector((store) => store.auth);
  

  return (
    <Box display={["flex", "flex", "none", "none"]}>
      <Box onClick={onOpen} ref={btnRef}>
        <GiHamburgerMenu className="burger" />
      </Box>
      <Drawer
        isOpen={isOpen}
        size="lg"
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Link as={RouterLink} to="/home" _hover={{ textDecoration: "none" }}>
            <Image w="70px" h="50px" src={require("../assets/logo.png")} />
          </Link>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="20px"
            zIndex="100"
            fontSize="22px"
            fontWeight="bold"
          >
            <Link
              as={RouterLink}
              to="/demo"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              Demo
            </Link>
            <Divider orientation="horizontal" />
            <Link
              className="un"
              _hover={{ textDecoration: "none" }}
              as={RouterLink}
              to="/pricing"
            >
              Pricing
            </Link>
            <Divider orientation="horizontal" />

            <Link
              as={RouterLink}
              to="/aboutus"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              About us
            </Link>
            <Divider orientation="horizontal" />
            <Link
              as={RouterLink}
              to="/faq"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              FAQ
            </Link>
            <Divider orientation="horizontal" />
            <Link
              as={RouterLink}
              to="/blog"
              className="un"
              _hover={{ textDecoration: "none" }}
            >
              Blog
            </Link>

            <Divider orientation="horizontal" />

            {!isAuth ? (
              <>
                <Button
                  borderRadius="3px"
                  fontSize="16px"
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
                  fontSize="16px"
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
                fontSize="16px"
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
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default BurgerMenu;
