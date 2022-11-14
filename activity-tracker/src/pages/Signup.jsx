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
} from "@chakra-ui/react";

import { BsGithub } from "react-icons/bs";

import {authentication} from '../components/AuthConfig';
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/authType";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";


const Signup = () => {
  const authData = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function signIn(val){
    const provider = new val();
     signInWithPopup(authentication,provider)
     .then((res)=>{
        console.log(res)
        dispatch({type: login, payload: res.user});
     })
     .catch((err)=>{
      console.log(err.message);
     })
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    dispatch({type: login, payload: {email,displayName:name,password,}});
  };

  useEffect(() => {
    document.title = 'Signup | Activity Tracker';

    if (authData !== "") navigate("/");
  }, [authData]);


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
        <FormControl>
          <FormLabel color="blackAlpha.800" fontSize="14px">
            First and last name
          </FormLabel>
          <Input
          onChange={({target}) => setName(target.value)}
          value={name}
            mb="15px"
            type="text"
            placeholder="Type in your first and last name"
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
            value="SIGN UP FOR FREE"
            bg="#4ea819"
            fontWeight="500"
            _hover={{ bg: "#327c04" }}
          />
        </FormControl>
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
