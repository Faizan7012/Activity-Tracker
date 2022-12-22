import {
  VStack,
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  Link,
  Heading,
  Flex,
  useToast
} from "@chakra-ui/react";

import { BsGithub } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { signupAPI } from "../redux/Auth/auth.action";


const Signup = () => {
  const toast = useToast();
  const authData = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
        // console.log(signup)
        dispatch(signupAPI({username: name, email, password})).then((res)=>{
            setEmail("")
            setName("")
            setPassword("")
            console.log(res);
            
            toast(
              {
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              }
            )

            navigate("/login");
  }).catch((e) => {
    return toast(
      {
        title: "Error occured",
        description: `${e.message}`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      }
    )
  })
}

  useEffect(() => {
    document.title = 'Signup | Activity Tracker';
  }, []);


  return (
    <ChakraProvider>
      <Navbar />
      <Heading pt="150px" mb="24px" as="h1" fontSize="36px" color="#475056">
        Sign up for a FREE DeskTime trial
      </Heading>
      <Text fontSize="15px">
        Start tracking your productivity in less than a minute!
      </Text>
      <VStack m="30px auto 50px auto" w="350px">
        <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl >
          <FormLabel color="blackAlpha.800" fontSize="14px">
            First and last name
          </FormLabel>
          <Input
          onChange={({target}) => setName(target.value)}
          value={name}
            mb="15px"
            type="text"
            placeholder="Type in your first and last name"
            isRequired
          />
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Email
          </FormLabel>
          <Input
          onChange={({target}) => setEmail(target.value)}
          value={email}
            mb="15px"
            type="email"
            placeholder="Type in your email address"
            isRequired
          />
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Password
          </FormLabel>
          <Input
          onChange={({target}) => setPassword(target.value)}
          value={password}
            mb="15px"
            type="password"
            placeholder="Type in your password"
            isRequired
          />
          <Input
            mb="15px"
            fontSize="14px"
            color="white"
            type="submit"
            cursor="pointer"
            value="SIGN UP FOR FREE"
            bg="#4ea819"
            fontWeight="500"
            _hover={{ bg: "#327c04" }}
          />
        </FormControl>
        </form>
        <Text mb="16px !important">
          Try free for 14 days. No credit card required. By signing up, you
          agree to our{" "}
          <Link
            textDecoration="underline"
            fontWeight="bold"
            color="blackAlpha.800"
          >
            terms and privacy policy.
          </Link>{" "}
        </Text>
        <Box border="1px solid #ebecec" p="24px">
          <Text mb="24px" fontWeight="bold" color="blackAlpha.800">
            Or connect with
          </Text>
          <Flex gap="10px">
            <Link
            
              className="authlinks"
              bgColor="#1877f2"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-facebook-white.svg")'
            ></Link>
            <Link 
              className="authlinks"
              bgColor="#1da1f2"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-twitter-white.svg")'
            ></Link>
            <Link 
              className="authlinks"
              bgColor="#f5f5f6"
              border="1px solid #d6d8d9"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-google-color.svg")'
            ></Link>
            <Link className="authlinks" bgColor="black">
              <Flex h="100%" justifyContent="center" alignItems="center">
                <BsGithub className="apple" color="white" />
              </Flex>
            </Link>
          </Flex>
        </Box>
        <Text pt="30px" mb="16px !important">
          Are you already registered?{" "}
          <Link
            textDecoration="underline"
            fontWeight="bold"
            color="blackAlpha.800"
          >
            Log in here
          </Link>{" "}
        </Text>
      </VStack>
      <Footer />
    </ChakraProvider>
  );
};

export default Signup;
