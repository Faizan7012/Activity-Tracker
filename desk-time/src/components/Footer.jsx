import {
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Divider,
  HStack,
  Text,
  Center,
  VStack,
  List,
  ListItem,
  Link,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  GrFacebook,
  GrLinkedin,
  GrSkype,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";

// import { Link as ReactRouterLink } from 'react-router-dom';

function Footer() {
  return (
    <Box pt='40px'>
      <Flex gap="30px" w="100%" justifyContent="center">
        <VStack>
          <List textAlign="left">
            <ListItem className="footerItems firsti">Company</ListItem>
            <ListItem className="footerItems">Home</ListItem>
            <ListItem className="footerItems">Terms</ListItem>
            <ListItem className="footerItems">Privacy</ListItem>
            <ListItem className="footerItems">Cookies</ListItem>
            <ListItem className="footerItems">Affiliate Terms</ListItem>
            <ListItem className="footerItems">Download App</ListItem>
            <ListItem className="footerItems">Pricing</ListItem>
            <ListItem className="footerItems">Affiliate</ListItem>
            <ListItem className="footerItems">Press</ListItem>
            <ListItem className="footerItems">
              DeskTime in your language
            </ListItem>
          </List>
        </VStack>
        <VStack>
          <List textAlign="left">
            <ListItem className="footerItems firsti">Learn more</ListItem>
            <ListItem className="footerItems">All resources</ListItem>
            <ListItem className="footerItems">
              Employee monitoring guide
            </ListItem>
            <ListItem className="footerItems">
              Online employee time clock
            </ListItem>
            <ListItem className="footerItems">DeskTime for business</ListItem>
            <ListItem className="footerItems">
              DeskTime for freelancers
            </ListItem>
            <ListItem className="footerItems">FAQ</ListItem>
            <ListItem className="footerItems">Case studies</ListItem>
            <ListItem className="footerItems">Webinars</ListItem>
            <ListItem className="footerItems">Blog</ListItem>
          </List>
        </VStack>
        <VStack></VStack>
        <List textAlign="left">
          <ListItem className="footerItems firsti">Integrations</ListItem>
          <ListItem className="footerItems">All integrations</ListItem>
          <ListItem className="footerItems">Trello</ListItem>
          <ListItem className="footerItems">Basecamp</ListItem>
          <ListItem className="footerItems">Jira</ListItem>
          <ListItem className="footerItems">Asana</ListItem>
          <ListItem className="footerItems">Outlook Calendar</ListItem>
          <ListItem className="footerItems">Google Calendar</ListItem>
        </List>
        <VStack>
          <List textAlign="left">
            <ListItem className="footerItems firsti">Features</ListItem>
            <ListItem className="footerItems">All features</ListItem>
            <ListItem className="footerItems">Automatic time tracking</ListItem>
            <ListItem className="footerItems">URL &amp; App tracking</ListItem>
            <ListItem className="footerItems">Screenshots</ListItem>
            <ListItem className="footerItems">Project time tracking</ListItem>
            <ListItem className="footerItems">Shift schedule</ListItem>
            <ListItem className="footerItems">Offline time tracking</ListItem>
            <ListItem className="footerItems">Absence calendar</ListItem>
            <ListItem className="footerItems">Mobile app</ListItem>
            <ListItem className="footerItems">Feature request</ListItem>
          </List>
        </VStack>
        <VStack>
          <List textAlign="left">
            <ListItem className="footerItems firsti">Help center</ListItem>
            <ListItem className="footerItems">Contact us</ListItem>
            <ListItem className="footerItems">Schedule a call</ListItem>
            <ListItem className="footerItems">Send us an e-mail</ListItem>
            <ListItem className="footerItems">
              Request In-person training
            </ListItem>
            <ListItem className="footerItems">Open chat</ListItem>
            <ListItem className="footerItems firsti">Phone support</ListItem>
            <ListItem className="footerItems">+1 (315) 6365354</ListItem>
            <ListItem className="footerItems">MON-FRI 9:00-22:00 EET</ListItem>
          </List>
        </VStack>
      </Flex>

      <Box mt='40px' bg='#EBECEC' p='20px 0'>
        <Box w='79%' m='auto'>
        <Flex justifyContent='space-between' mb='20px'>
          <Image src="../assets/logo.jpg" alt="AT Logo" />
          <Flex>
            <Image src="https://desktime.com/assets/design/dist/assets/Google-Play.svg"></Image>
            <Image src="https://desktime.com/assets/design/dist/assets/App-Store.svg"></Image>
          </Flex>
        </Flex>

        <Flex justifyContent='space-between'>
          <Flex justifyContent='center' alignItems='center' gap="20px">
            <GrFacebook className="ficons" />
            <GrTwitter className="ficons" />
            <GrYoutube className="ficons" />
            <GrLinkedin className="ficons" />
            <GrSkype className="ficons" />
            <ImWhatsapp className="ficons" />
          </Flex>
          <Flex justifyContent='center' alignItems='center'gap="20px">
            <Text>Subscribe to our newsletter</Text>
            <Input borderRadius='2px' outline='1px solid grey' w='200px' type="text" placeholder="Type in your email" />
            <Button
              fontSize="13px"
              p="20px 30px"
              borderRadius="3px"
              bg="#4ea819"
              color="white"
              size="md"
              _hover={{ bg: "#327c04" }}
            >
              {" "}
              SUBSCRIBE
            </Button>
          </Flex>
        </Flex>
        </Box>
      </Box>
      <Box bg='#D6D8D9' p='20px 0'>
      <Flex w='79%' m='auto' justifyContent='space-between' alignItems='center'>
        <Text fontSize='12px'>© 2011 - 2022 Activity Tracker</Text>
        <Image src='https://desktime.com/assets/design/dist/assets/dg-logo-group.svg' />
      </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
