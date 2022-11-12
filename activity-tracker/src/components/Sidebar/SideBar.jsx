import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
} from '@chakra-ui/react';
import { Link  } from "react-router-dom";

import {BiDesktop} from 'react-icons/bi';
import {FaBriefcase} from 'react-icons/fa'
import {MdDateRange} from 'react-icons/md'
import {FaCalendarDay} from 'react-icons/fa'
import {AiTwotonePieChart} from 'react-icons/ai'
import {RiFileCopyLine} from 'react-icons/ri'

import {
   FiSettings,
  FiMenu,
  FiHardDrive,
 
} from 'react-icons/fi';
import { IconType } from 'react-icons';
// import { ReactText } from 'react';

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
const LinkItems = [
  { name: 'My DeskTime', icon: BiDesktop ,icon: BiDesktop,link:'/dashboard/my'},
  { name: 'Projects', icon: FiHardDrive ,link:'/dashboard/project'},
  { name: 'Work Schedules', icon: FaBriefcase ,link:'#'},
  { name: 'Booking', icon: MdDateRange ,link:'#'},
  { name: 'Absense Calender', icon: FaCalendarDay,link:'#' },
  { name: 'Reports', icon: AiTwotonePieChart,link:'#'},
  { name: 'Exports', icon: RiFileCopyLine,link:'#' },
  { name: 'Settings', icon: FiSettings ,link:'#'},

];

export default function Sidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="15%" minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('#475056', )}
      borderRight="1px"
      borderRightColor={useColorModeValue('#475056')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text className='sideb' color="#F5F5F6" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Image  width="50%" marginLeft="20%" src="https://api.logo.com/api/v2/images?logo=logo_e8f63e2b-2943-4913-a535-90c46802599b&format=webp&margins=0&quality=60&width=500&background=transparent&u=1667908713" alt="" />
           
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
         <NavItem color="#F5F5F6" link={link.link} key ={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
       
      ))}
    </Box>
  );
};

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
const NavItem = ({ link,icon, children, ...rest }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#4EA819',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Activity-timer
      </Text>
    </Flex>
  );
};