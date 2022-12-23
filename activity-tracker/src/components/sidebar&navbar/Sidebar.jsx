import {Box,
         Drawer,
         DrawerBody,
         DrawerCloseButton,
         DrawerContent,
         DrawerHeader,
         DrawerOverlay, 
         Flex, 
         Image, 
         Text, 
         } from "@chakra-ui/react";
import {AiOutlineHome , AiOutlineProject}  from 'react-icons/ai'   
import {TbLogin} from 'react-icons/tb';
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import '../../css/sidebar.css'
import { useDispatch } from "react-redux";
import { logoutAPI } from "../../redux/Auth/auth.action";
const  Sidebar = ({isOpen,onClose})=> {
    const dispatch = useDispatch()
    const btnRef = React.useRef()
    const [currentPage , setCP] = useState('/')
     const onClose1 = (val)=>{
       if(val === 'logout'){
         dispatch(logoutAPI())
        }
        else{
        localStorage.setItem('crp',JSON.stringify(val))
        setCP(val);
      }
     }
     const onClose2 = (val)=>{
      if(val === 'logout'){
        dispatch(logoutAPI())
       }
       else{
       localStorage.setItem('crp',JSON.stringify(val))
       setCP(val);
     }
     }
     useEffect(()=>{
       let crp = JSON.parse(localStorage.getItem('crp')) || 'home';
       setCP(crp)
     },[])
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          h='100vh'
          >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton fontSize='16px' mt='18px' mr='10px'/>
            <DrawerHeader>
                <Flex alignItems='center' gap='20px'  mb='30px'>
                <Image maxW='50px' h='50px' borderRadius='50%' src='https://i.ibb.co/H7DQjXv/a-t-logo-1.png' />
                <Text fontWeight='600' fontSize='20px'>Activity Tracker</Text>
            </Flex>
            </DrawerHeader>
  
            <DrawerBody>
            <Flex className="otherPageLink" flexDirection='column' gap='15px'>
             <Link onClick={()=>onClose1('home')} className={currentPage === 'home' ? 'current':'navLink'} to='/dashboard/my'><Flex alignItems='center' gap='20px' fontSize='20px'><AiOutlineHome fontSize='30px' color='orange' /><Text>Dashbaord</Text></Flex></Link>
             <Link onClick={()=>onClose1('project')} className={currentPage === 'project' ? 'current':'navLink'} to='/dashboard/project'><Flex alignItems='center' gap='20px' fontSize='20px'><AiOutlineProject fontSize='30px' color='orange' /><Text>Project</Text></Flex></Link>
             <Link onClick={()=>onClose1('logout')} className={currentPage === 'logout' ? 'current':'navLink'} to='/'><Flex alignItems='center' gap='20px' fontSize='20px'><TbLogin fontSize='30px' color='orange' /><Text>Logout</Text></Flex></Link>
            </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box w='20%' display={['none','none','none','block']} p='30px 10px' bg='#475056' h='100vh' position='fixed'>
            <Flex alignItems='center' gap='20px'  mb='30px'>
                <Image maxW='50px' h='50px' borderRadius='50%' src='https://i.ibb.co/H7DQjXv/a-t-logo-1.png' />
                <Text fontWeight='600' fontSize='20px' color='white'>Activity Tracker</Text>
            </Flex>
            <Box>
            <Flex className="otherPageLink" flexDirection='column' gap='15px'>
             <Link onClick={()=>onClose2('home')} className={currentPage === 'home' ? 'current':'navLink'} to='/dashboard/my'><Flex alignItems='center' gap='20px' fontSize='20px'><AiOutlineHome fontSize='30px' color='orange'  /><Text >Dashbaord</Text></Flex></Link>
             <Link onClick={()=>onClose2('project')} className={currentPage === 'project' ? 'current':'navLink'} to='/dashboard/project'><Flex  alignItems='center' gap='20px' fontSize='20px'><AiOutlineProject color='orange' fontSize='30px'   /><Text >Project</Text></Flex></Link>
             <Link onClick={()=>onClose2('logout')} className={currentPage === 'logout' ? 'current':'navLink'} to='/'><Flex alignItems='center' gap='20px' fontSize='20px'><TbLogin fontSize='30px' color='orange' /><Text>Logout</Text></Flex></Link>
              </Flex>
            </Box>
            </Box>
            </>
    )
  }

  export {Sidebar}