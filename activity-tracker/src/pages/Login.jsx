import {
  VStack,
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Link,
  Heading,
  Flex,
  useToast
} from "@chakra-ui/react";

import {authentication} from '../components/AuthConfig';

import { BsGithub } from "react-icons/bs";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../redux/auth/authAction";
import { login } from "../redux/auth/authType";
import { useEffect } from "react";
import { useState } from "react";

const Login = () => {
const toast = useToast()
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const authData = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    document.title = 'Login | Activity Tracker';
  })

    function signIn(val){
        const provider = new val();
         signInWithPopup(authentication,provider)
         .then((res)=>{
            console.log(res)
            dispatch({type: login, payload: res.user});
            return toast({
              title: 'Account created.',
              description: "We've created your account for you.",
              status: 'success',
              duration: 9000,
              isClosable: true,
    })
         })
         .catch((err)=>{
          console.log(err.message);
         })
       }

       const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello")
        dispatch({type: login, payload: {email, password}});
       }

       useEffect(() => {
        if(authData !== "") navigate("/");
       }, [authData]);

       console.log(email, password)

  return (
    <ChakraProvider>
      <Navbar />
      <VStack p="150px 25px 40px 25px" m="auto" w="400px">
        <Heading mb="24px" as="h1" fontSize="36px" color="#475056">
          Log in to DeskTime
        </Heading>
        <FormControl>
          <FormLabel color="blackAlpha.800" fontSize="14px">
            Email
          </FormLabel>
          <Input
            onChange={({target}) => setEmail(target.value)}
            value={email}
            mb="15px"
            type="email"
            placeholder="Type in your email address"
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
          />
          <Input
           onClick={handleSubmit}
            mb="15px"
            fontSize="14px"
            color="white"
            type="submit"
            cursor="pointer"
            value="LOGIN"
            bg="#4ea819"
            fontWeight="500"
            _hover={{ bg: "#327c04" }}
          />
        </FormControl>
        <Link
          textDecoration="underline"
          fontWeight="bold"
          color="blackAlpha.800"
        >
          I forgot my password
        </Link>
        <Text mb="16px !important">
          Don’t have an account yet?{" "}
          <Link
            textDecoration="underline"
            fontWeight="bold"
            color="blackAlpha.800"
          >
            Sign up here!
          </Link>{" "}
        </Text>
        <Box border="1px solid #ebecec" p="24px">
          <Text mb="24px" fontWeight="bold" color="blackAlpha.800">
            Or connect with
          </Text>
          <Flex gap="10px">
            <Link
              onClick={() => signIn(FacebookAuthProvider)}
              className="authlinks"
              bgColor="#1877f2"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-facebook-white.svg")'
            ></Link>
            <Link onClick={() => signIn(TwitterAuthProvider)}
              className="authlinks"
              bgColor="#1da1f2"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-twitter-white.svg")'
            ></Link>
            <Link onClick={() => signIn(GoogleAuthProvider)}
              className="authlinks"
              bgColor="#f5f5f6"
              border="1px solid #d6d8d9"
              backgroundImage='url("https://desktime.com/assets/img/bs4/icons/social/logo-google-color.svg")'
            ></Link>
            <Link onClick={() => signIn(GithubAuthProvider)} className="authlinks" bgColor="black">
              <Flex h="100%" justifyContent="center" alignItems="center">
                <BsGithub className="apple" color="white" />
              </Flex>
            </Link>
          </Flex>
        </Box>
      </VStack>
      <Footer />
    </ChakraProvider>
  );
};

export default Login;