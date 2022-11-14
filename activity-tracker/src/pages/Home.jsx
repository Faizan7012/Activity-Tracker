import {
  Flex,
  Box,
  Image,
  Text,
  Link,
  Button,
  VStack,
  ButtonGroup,
  color,
  Heading,
  Stack,
  HStack,
  Input,
  AspectRatio,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import {
  IoRocketSharp,
  IoCalendarSharp,
  IoReceiptSharp,
} from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { BsFillBellFill, BsPersonCircle } from "react-icons/bs";
import { BiCalendarCheck } from "react-icons/bi";
import { TbFlameOff } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect } from "react";

function Home() {
  useEffect(()=>{
    document.title = 'Home | Activity Tracker';
  })
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Box
          p="130px 0 40px 0"
          // h="670px"
          bgSize="cover"
          bg='url("https://desktime.com/static/web/_common/intro-background.png") no-repeat bottom'
        >
          <Flex
            p="15px 0"
            justifyContent="center"
            alignItems="center"
            textAlign="left"
            gap="50px"
            flexDirection={["column", "column", "column", "row"]}
          >
            <Stack w={["80%", "80%", "80%", "43%"]} spacing="20px">
              <Heading as="h1" fontSize="42px" color="#475056">
                The ultimate all-in-one time tracker for your business
              </Heading>
              <Text color="#475056" fontSize="18px">
                A time tracker with additional workforce management features
                that will help you develop a high-performing team that smashes
                goals every time.
              </Text>
              <HStack>
                <Input
                  borderRadius="2px"
                  outline="1px solid grey"
                  w="55%"
                  h="43px"
                  type="text"
                  placeholder="Your work email"
                />
                <Button
                  p="23px"
                  borderRadius="3px"
                  bg="#4ea819"
                  color="white"
                  size="md"
                  fontSize="18px"
                  _hover={{ bg: "#327c04" }}
                >
                  {" "}
                  START FREE TRIAL
                </Button>
              </HStack>
              <Box color="#475056">
                <Text>Try free for 14 days. No credit card required.</Text>
                <Text>
                  By signing up, you agree to our{" "}
                  <Link fontWeight="bold" href="#">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link fontWeight="bold" href="#">
                    privacy policy
                  </Link>
                  .
                </Text>
              </Box>
            </Stack>
            <Box
              w={["70%", "70%", "70%", "40%"]}
              h="100%"
              as="iframe"
              src="https://www.youtube.com/embed/sgmDvqlSMF4?playlist=sgmDvqlSMF4&autoplay=1&mute=1&loop=1&enablejsapi=1&origin=https%3A%2F%2Fdesktime.com"
              sx={{
                aspectRatio: "16/9",
              }}
            />
          </Flex>
          <Flex p="25px 0" justifyContent="center">
            <Image
              // h="94px"
              w="16%"
              src="https://desktime.com/static/web/clients/customer-sixt-logo-white.svg"
            />
            <Image
              // h="94px"
              w="16%"
              src="https://desktime.com/static/web/clients/customer-mapon-logo-white.svg"
            />
            <Image
              // h="94px"
              w="16%"
              src="https://desktime.com/static/web/clients/customer-montway-logo-white.svg"
            />
            <Image
              // h="94px"
              w="16%"
              src="https://desktime.com/static/web/clients/customer-onthemap-logo-white.svg"
            />
            <Image
              // h="94px"
              w="158px"
              src="https://desktime.com/static/web/clients/customer-printful-logo-white.svg"
            />
          </Flex>
        </Box>

        <Flex
          p="70px 0"
          justifyContent="center"
          alignItems="center"
          gap="50px"
          flexDirection={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          <Stack
            w={["80%", "80%", "80%", "52%"]}
            textAlign="left"
            spacing="20px"
          >
            <Heading as="h1" fontSize="36px" color="#475056">
              Use time tracking software to boost productivity by 30%
            </Heading>
            <Text color="#475056" fontSize="18px">
              There are numerous ways how DeskTime improves the day-to-day work
              for managers and employees alike. Here are just a few reasons why
              time tracking with DeskTime is a great choice for your team.
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" fontSize="18px" gap="30px">
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <IoRocketSharp className="homeicon" />
                  <Text fontWeight="bold">Skyrocket effectiveness</Text>
                </Flex>
                <Text>
                  Skyrocket effectiveness Know who's doing what and how it's
                  going all the while eliminating distractions.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <VscGraph className="homeicon" />
                  <Text fontWeight="bold">Minimize business losses</Text>
                </Flex>
                <Text>
                  Get precise insights into projects to determine profitability
                  and allocate resources.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <BiCalendarCheck className="homeicon" />
                  <Text fontWeight="bold">Automate team management</Text>
                </Flex>
                <Text>
                  Organize shifts, absences, and booking-related questions all
                  in one place.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="3px">
                  <TbFlameOff className="homeicon" />
                  <Text fontWeight="bold">Avoid burnout</Text>
                </Flex>
                <Text>
                  Take care of your team and eliminate overworking with break
                  reminders and private time.
                </Text>
              </Box>
            </Grid>
          </Stack>
          <Box w={["50%", "50%", "50%", "30%"]} borderRadius="3px">
            {/* <Image
            w="125px"
            h="125px"
            position="relative"
            top="300px"
            src="https://images.g2crowd.com/uploads/report_medal/image/1003078/medal.svg"
          /> */}
            <Image
              w="100%"
              borderRadius="3px"
              src="https://desktime.com/static/web/new-homepage/boost-productivity/boost-productivity.webp"
            />
          </Box>
        </Flex>

        <Flex
          flexDirection={["column", "column", "column", "row"]}
          p="70px 0"
          justifyContent="center"
          alignItems="center"
          gap="50px"
        >
          <Box maxW="538px" borderRadius="3px">
            <Image
              borderRadius="3px"
              src="https://desktime.com/static/web/new-homepage/seamless-workflow/seamless-workflow.webp"
            />
          </Box>
          <Box w={["70%", "70%", "70%", "45%"]} textAlign="left">
            <Heading as="h1" fontSize="36px" color="#475056" pb="20px">
              A seamless workflow and healthy work-life balance for every
              employee
            </Heading>
            <Stack spacing="20px">
              <Box>
                <Flex alignItems="center" pb="10px" gap="5px">
                  <IoCalendarSharp className="homeicon" />
                  <Text color="#475056" fontSize="18px" fontWeight="bold">
                    Flexible schedule
                  </Text>
                </Flex>
                <Text color="#475056" fontSize="18px">
                  Time tracking is proof-of-work and DeskTime's time tracker
                  gives you just that – you can plan your schedule
                  independently, while your manager can simply follow your
                  progress no matter where you are and when you choose to work.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="5px">
                  <BsFillBellFill className="homeicon" />
                  <Text color="#475056" fontSize="18px" fontWeight="bold">
                    Regular break reminders
                  </Text>
                </Flex>
                <Text color="#475056" fontSize="18px">
                  Our time tracker uses the Pomodoro timer that will keep a
                  cautious eye on your workload and remind you to take regular
                  breaks so you don't lose focus all the while maintaining
                  healthy habits and mental well-being.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="5px">
                  <BsPersonCircle className="homeicon" />
                  <Text color="#475056" fontSize="18px" fontWeight="bold">
                    Private time
                  </Text>
                </Flex>
                <Text color="#475056" fontSize="18px">
                  DeskTime's Private time feature disables the website and time
                  tracker for when you have to take care of non-work-related
                  tasks during office hours. Employees can feel safe knowing
                  their privacy is protected.
                </Text>
              </Box>
              <Box>
                <Flex alignItems="center" pb="10px" gap="5px">
                  <IoReceiptSharp className="homeicon" />
                  <Text color="#475056" fontSize="18px" fontWeight="bold">
                    No more unbilled hours
                  </Text>
                </Flex>
                <Text color="#475056" fontSize="18px">
                  Employee time is pure gold when it comes to resource planning.
                  DeskTime's time tracker even lets you add time spent offline
                  like in meetings, brainstorms, or on work calls so no billable
                  hours go unnoticed.
                </Text>
              </Box>
            </Stack>
            <Text pt="30px">
              All the features can be turned on and off to suit eveyone's needs
            </Text>
          </Box>
        </Flex>

        {/* <CCard
          name="Barrett Kuethen"
          role="Operations Manager at Amtec"
          company="Amtec"
          img="https://desktime.com/static/web/testimonial-images/amtec.png"
          desc="DeskTime has been an invaluable tool not only for managing our growing
          team across the globe but also for raising employees’ awareness and
          increasing their engagement."
        /> */}

        <Box bg="#F5F5F6" p="70px 0">
          <Heading
            maxW="70%"
            m="auto"
            as="h1"
            fontSize="36px"
            color="#475056"
            pb="20px"
          >
            More than 18 000 companies worldwide trust DeskTime with their
            business
          </Heading>
          <Carousel />
        </Box>

        <Box p="70px 10px">
          <Heading
            w={["70%", "70%", "70%", "50%"]}
            m="auto"
            mb="20px"
            as="h1"
            fontSize="36px"
            pb="20px"
            color="#475056"
          >
            Things worth knowing about using a time tracker
          </Heading>

          <Stack w="70%" m="auto" spacing="20px">
            <Accordion border="1px solid #D6D8D9" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      How does using a time tracker improve productivity?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                  This self-analysis will motivate both you and your employees
                  to do better and avoid any unnecessary and unproductive
                  actions like those well-known “fast and easy” 5-minute jobs
                  many of us are often asked to do. Employees who track time can
                  note how much these extra jobs actually take up their day and
                  be able to make better decisions on whether it’s worth
                  interrupting their workflow.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion border="1px solid #D6D8D9" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      Can implementing DeskTime prevent burnout?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                  Yes! Using a time tracker can help highlight overachievers and
                  spot team members who are struggling or might need some extra
                  help. This is a great way to catch and prevent burnout, as
                  well as rethink resource distribution.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion border="1px solid #D6D8D9" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      Is my team's privacy safe when using a time tracker?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                  First thing’s first – DeskTime is not an employee monitoring
                  or spy tool, but it’s no secret that some might use this kind
                  of software in ways that aren’t employee-friendly. Managers
                  have the right to know how their employees get the job done,
                  but it's imperative to also value your team's time and
                  privacy. That's why DeskTime even has a Private time feature
                  that disables the time tracker for when you have to take care
                  of non-work-related tasks during office hours.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Accordion border="1px solid #D6D8D9" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      fontWeight="bold"
                      color="#475056"
                      textAlign="left"
                    >
                      How to communicate using a time tracker with your team?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel textAlign="left" pb={4}>
                  You have to remember that time tracking is a two-way street of
                  communication and lead by example. Yes, it gives managers an
                  overview of what their employees are doing during the workday,
                  but it’s also a tool to help employees show their progress and
                  ask for help if needed. Be transparent and honest about
                  implementing a time tracker and take the time to show its
                  benefits. For example, DeskTime lets you set break reminders,
                  encourage private time, and eliminate overworking so your team
                  members feel rested, valued, and safe.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Box>

        <Box p="60px 10px" bg="#4ea819" color="white">
          <Heading
            w={["70%", "70%", "70%", "50%"]}
            m="auto"
            as="h1"
            fontSize="36px"
            pb="20px"
          >
            Want to get the most out of your time? Try DeskTime for free!
          </Heading>
          <Flex
            flexDirection={["column", "column", "row", "row"]}
            m="auto"
            gap="20px"
            justifyContent="center"
            alignItems="center"
          >
            <Input
              w="300px"
              bg="white"
              borderRadius="2px"
              outline="1px solid grey"
              h="43px"
              type="text"
              placeholder="Your work email"
            />
            <Button
              w={["300px", "300px", "auto", "auto"]}
              p="21px"
              borderRadius="3px"
              bg="#4ea819"
              color="white"
              border="1px solid white"
              size="md"
              fontSize="18px"
              _hover={{ bg: "white", color: "blackAlpha.700" }}
            >
              {" "}
              START FREE TRIAL
            </Button>
          </Flex>
          <Text m="auto" mt="25px">
            Try free for 14 days. No credit card required.
          </Text>
          <Text>
            By signing up, you agree to our{" "}
            <Link textDecoration="underline" fontWeight="bold">
              terms and privacy policy.
            </Link>
          </Text>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default Home;
