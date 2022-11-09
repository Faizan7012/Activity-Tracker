import React from "react";
import About from "./About.css";

import { HStack , Container ,Image, Box,Text ,Input,Button ,Link} from '@chakra-ui/react';
export default function Box1(){
    return <Container  centerContent >
      <HStack backgroundColor="#333C43" h="360px" width="1440px" borderBottomRadius="30%" borderBottom="14px solid #4EA819" centerContent>
        <Box>
        <Text color="white" fontSize={40} fontWeight="bold" marginLeft="540px" marginTop="50px" >About DeskTime</Text>
        <Text color="white" marginBottom="20px" paddingLeft="20px" fontSize={20} fontWeight="normal" marginLeft="400px" marginTop="50px" >We help businesses grow and people become more successful</Text>
        <HStack marginLeft="500px" >
        <Input type='Text' bg='white' size='lg' w='lg'   placeholder="Your work email"></Input><Button bg='#4EA819' fontWeight="bold" color='white'>START FREE TRIAL</Button>

        </HStack>
        <HStack >
            <Box >
            <Text id="trial" color="white"  textAlign="center" paddingLeft="20px" fontSize={15} fontWeight="normal" marginLeft="400px" >Free 14-day trial. No credit card required.<br/>By signing up, you agree to our <Link textDecoration="underline" fontWeight="bold" >terms</Link> and <Link fontWeight="bold" textDecoration="underline">privacy policy.</Link></Text>

            </Box>
        
        </HStack>
        
        
        </Box>
       
        
        
      
      </HStack>

      {/* 2nd thing */}
      
      <HStack >
        <Box marginLeft="70px" >
            <Text id="build">Built first for us, then made available to others</Text>
            <Text id="para">DeskTime was born out of the need for the <Link fontWeight="590" textDecoration="underline">Draugiem Group</Link> to manage<br/>their many employees. An internal application was developed, and we<br/>soon realized that we'd made a tool that could be useful for many other<br/>companies. Why not offer it to them? - we thought. And so, the<br/>development began.</Text>
            <p id="para2">At DeskTime, we’re committed to accountability, transparency, and <br/>fairness. DeskTime is a product designed to increase productivity in an<br/> open and empowering environment. The added benefit? Boosting your <br/>employees and motivating them to perform at 100% of their potential.</p>

        </Box>
        <Box id="first-image">
            <img src="https://desktime.com/static/web/about/team@2x.jpg"/>
        </Box>
      </HStack>

     
      

     
      
     
    </Container>
    
    
    
}