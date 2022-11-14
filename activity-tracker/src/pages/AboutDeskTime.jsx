import React, { useEffect } from "react";

// import styles from "../css/About.module.css";

import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  HStack,
  Container,
  Image,
  Box,
  Text,
  Input,
  Button,
  Link,
  ChakraProvider,
  Flex,
} from "@chakra-ui/react";
export default function Box1() {
  useEffect(()=>{
    document.title = 'About | Activity Tracker';
  })
  return (
    <>
      {" "}
      <Container>
        <ChakraProvider>
          <Navbar />
        </ChakraProvider>

        <HStack
          width="100%"
          backgroundImage="url(https://desktime.com/static/web/_common/hero-block.svg)"
          paddingTop={"100px"}
          paddingBottom={"70px"}
          backgroundSize={"cover"}
          backgroundRepeat="no-repeat"
        >
          <Box>
            <Text
              id="sen2"
              color="white"
              fontSize={40}
              fontWeight="bold"
              marginLeft="500px"
              marginTop="50px"
            >
              About DeskTime
            </Text>
            <Text
              id="sen1"
              color="white"
              marginBottom="20px"
              paddingLeft="20px"
              fontSize={20}
              fontWeight="normal"
              marginTop="50px"
            >
              We help businesses grow and people become more successful
            </Text>
            <HStack marginLeft="500px">
              <div id="inputSec">
                <Input
                  type="Text"
                  bg="white"
                  size="lg"
                  w="lg"
                  placeholder="Your work email"
                ></Input>
                <Button
                  backgroundColor="#4EA819"
                  fontWeight="bold"
                  color="white"
                >
                  START FREE TRIAL
                </Button>
              </div>
            </HStack>
            <HStack>
              <Box>
                <Text
                  id="trial"
                  color="white"
                  textAlign="center"
                  paddingLeft="20px"
                  fontSize={15}
                  fontWeight="normal"
                  marginLeft="400px"
                >
                  Free 14-day trial. No credit card required.
                  <br />
                  By signing up, you agree to our{" "}
                  <Link textDecoration="underline" fontWeight="bold">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link fontWeight="bold" textDecoration="underline">
                    privacy policy.
                  </Link>
                </Text>
              </Box>
            </HStack>
          </Box>
        </HStack>

        {/* 2nd thing */}

        <HStack>
          <Box marginLeft="70px">
            <Text id="build">
              Built first for us, then made available to others
            </Text>
            <Text id="para">
              DeskTime was born out of the need for the{" "}
              <Link fontWeight="590" textDecoration="underline">
                Draugiem Group
              </Link>{" "}
              to manage
              <br />
              their many employees. An internal application was developed, and
              we
              <br />
              soon realized that we'd made a tool that could be useful for many
              other
              <br />
              companies. Why not offer it to them? - we thought. And so, the
              <br />
              development began.
            </Text>
            <p id="para2">
              At DeskTime, we’re committed to accountability, transparency, and{" "}
              <br />
              fairness. DeskTime is a product designed to increase productivity
              in an
              <br /> open and empowering environment. The added benefit?
              Boosting your <br />
              employees and motivating them to perform at 100% of their
              potential.
            </p>
          </Box>
          <Box id="first-image">
            <img src="https://desktime.com/static/web/about/team@2x.jpg" />
          </Box>
        </HStack>

        {/* 3rd thing */}
        <Box marginTop="50px" width="100%" backgroundColor="#F8F9FA">
          <Text id="para3" fontWeight="bold">
            Our milestones and how it all began
          </Text>
        </Box>
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              April 2022
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime introduces the new Booking feature
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              Users can now book desks, meeting rooms, parking spaces, and much
              <br />
              more. All bookings are updated in real-time and can be viewed from
              a<br />
              single booking grid. It's the best way to manage shared and hybrid
              <br />
              workspaces, and another step closer to DeskTime becoming an
              all-in-one
              <br />
              office management system.
            </Text>
          </Box>
          <Box id="second-image">
            <img src="https://desktime.com/static/web/about/booking@2x.png" />
          </Box>
        </HStack>

        {/* 4th thing */}
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="third-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/web-timer@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              January 2022
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime provides web-based time tracking
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              The new manual web timer lets users enjoy DeskTime from any
              browser
              <br />
              without downloading and installing any software. You can use it as
              an
              <br />
              alternative to automated time tracking or together with the
              DeskTime
              <br />
              app.
            </Text>
          </Box>
        </HStack>

        {/* 5th thing */}
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              December 2021
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Per-user pricing model introduced
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              We gave up all pricing plans that were based on specific user
              count
              <br />
              amplitudes and instead opted for per-user pricing. This lets you
              make
              <br />
              easy calculations about how much you'll pay based on the number of
              <br />
              people using DeskTime.
            </Text>
          </Box>
          <Box id="second-image">
            <img src="https://desktime.com/static/web/about/pricing@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="third-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/spanish@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              January 2022
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime provides web-based time tracking
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              The new manual web timer lets users enjoy DeskTime from any
              browser
              <br />
              without downloading and installing any software. You can use it as
              an
              <br />
              alternative to automated time tracking or together with the
              DeskTime
              <br />
              app.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              July 2021
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Mac and Linux users get an upgrade in the Electron software
              framework
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              The new and improved functionality for Mac and Linux users in the
              <br />
              Electron software framework has made using DeskTime faster and
              more
              <br />
              convenient. The update introduced user interface improvements in
              the
              <br />
              app and Project Manager, a passwordless magic link login, and a
              project
              <br />
              Quick menu for added user experience.
            </Text>
          </Box>
          <Box id="second-image">
            <img src="https://desktime.com/static/web/about/electron@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="fourth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/bootstrap4@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              May 2021
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Bootstrap 4 is implemented
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              We've always been about efficiency, and a good user experience is
              one of
              <br />
              the cornerstones of that goal. That's why we implemented Bootstrap
              4 in
              <br />
              alternative to automated time tracking or together with the
              DeskTime
              <br />
              app.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              March 2021
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              On-demand webinars are live
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              When it comes to software demonstration video tutorials work
              wonders.
              <br />
              It's the easiest way to make sure our customers get the most out
              of all the
              <br />
              features DeskTime has to offer. On-demand webinars do just that.
              We
              <br />
              redesigned our webinar landing page and made the short and easy
              how-
              <br />
              to videos available for anyone at any time.
            </Text>
          </Box>
          <Box id="second-image">
            <img src="https://desktime.com/static/web/about/on-demand@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="third-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/support@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              January 2021
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              ¡Hola! ¿Necesita ayuda? Support is now available in Spanish
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              It's all about the best customer support these days, and we're up
              for the
              <br />
              challenge. DeskTime achieves one of our biggest goals for 2021 ,
              our
              <br />
              support is now available in the Spanish language. Next up – a full
              system
              <br />
              localization. ¡vamos!
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              March 2021
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              New Year, new us! Making first impressions count
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              To close out 2020 and kick-off 2021 fresh, DeskTime's homepage
              receives
              <br />a dapper redesign that better captures who we are, what we
              do, and what
              <br />
              we stand for. And it's also prettier. Much prettier. Which is just
              as
              <br />
            </Text>
          </Box>
          <Box id="second-image">
            <img src="https://desktime.com/static/web/about/homepage@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="fifth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/eu-company.svg" />
          </Box>
          <Box width="50%" id="box1">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              October 2020
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Coming home: DeskTime is now an EU-based company
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              It's all about the best customer support these days, and we're up
              for the
              <br />
              challenge. DeskTime achieves one of our biggest goals for 2021 ,
              our
              <br />
              support is now available in the Spanish language. Next up – a full
              system
              <br />
              localization. ¡vamos!
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              July 2020
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Faster, better, stronger
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              We upgraded our physical infrastructure by deploying new servers
              in the
              <br />
              USA and India to meet the needs of our growing user base in these
              and
              <br />
              nearby markets. DeskTime users from these areas now have an even
              <br />
              smoother and faster DeskTime experience.
            </Text>
          </Box>
          <Box id="fifth-image">
            <img src="https://desktime.com/static/web/about/server.svg" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="fifth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/world.svg" />
          </Box>
          <Box width="50%" id="box1">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2020
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Reaching every corner of the world - Reseller program launched!
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime begins working with resellers and distributors worldwide
              to
              <br />
              challenge. DeskTime achieves one of our biggest goals for 2021 ,
              our
              <br />
              support is now available in the Spanish language. Next up – a full
              system
              <br />
              localization. ¡vamos!
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              April 2020
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Update of the year – a brand new mobile app
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              The DeskTime mobile app gets a major update, both UX and
              feature-wise.
              <br />
              USA and India to meet the needs of our growing user base in these
              and
              <br />
              nearby markets. DeskTime users from these areas now have an even
              <br />
              smoother and faster DeskTime experience.
            </Text>
          </Box>
          <Box id="fifth-image">
            <img src="https://desktime.com/static/web/about/mobile-app@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="fifth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/pricing-plans@2x.png" />
          </Box>
          <Box width="50%" id="box1">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              March 2020
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Prime plans for prime customers
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime begins working with resellers and distributors worldwide
              to
              <br />
              challenge. DeskTime achieves one of our biggest goals for 2021 ,
              our
              <br />
              support is now available in the Spanish language. Next up – a full
              system
              <br />
              localization. ¡vamos!
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              February 2020
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Hello, Exports!
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime adds a new feature, becoming an even more powerful work
              tool
              <br />
              for teams. With Exports, users can now download detailed
              productivity
              <br />
              data as .csv or .xls files.
            </Text>
          </Box>
          <Box id="fourth-image">
            <img src="https://desktime.com/static/web/about/invoicing@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/8000bc@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              December 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              81 million hours tracked – that's 9268 years
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              The total time tracked by all DeskTime users reaches 81 million
              hours –<br />
              that’s 9268 years. In linear time, that's as if DeskTime had
              tracked every
              <br />
              minute since homo sapien domesticated cats in around 8000 BC.
              <br />
              DeskTime now works in 203 countries, serving 184 000 users in 8600
              <br />
              companies.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              February 2020
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              The re-birth of DeskTime's YouTube channel
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              The DeskTime team sets a goal to create entertaining and
              practically
              <br />
              for teams. With Exports, users can now download detailed
              productivity
              <br />
              data as .csv or .xls files.
            </Text>
          </Box>
          <Box id="fourth-image">
            <img src="https://desktime.com/static/web/about/youtube@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/scheduling@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              December 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Introducing Shift Scheduling
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              A new feature is introduced – employee shift scheduling. It allows
              <br />
              that’s 9268 years. In linear time, that's as if DeskTime had
              tracked every
              <br />
              minute since homo sapien domesticated cats in around 8000 BC.
              <br />
              DeskTime now works in 203 countries, serving 184 000 users in 8600
              <br />
              companies.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              April 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Introducing annual billing
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              Users are offered a more convenient and cost-efficient billing
              option. With
              <br />
              the annual payment, users are charged once a year and save a
              month's
              <br />
              worth of fees.
            </Text>
          </Box>
          <Box id="fourth-image">
            <img src="https://desktime.com/static/web/about/annual-billing@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/scheduling@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              March 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Project tracking gets an update
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              One of the most popular features – project tracking – becomes
              easier to
              <br />
              administer. New user-friendly functionalities are added, including
              project
              <br />
              search and time and cost estimation.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              April 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              New integrations – Trello and Gitlab
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime continues to add integrations with popular work tools.
              The
              <br />
              Trello and Gitlab integrations allow users to automatically import
              their
              <br />
              cards and issues to DeskTime and track time.
            </Text>
          </Box>
          <Box id="seventh-image">
            <img src="https://desktime.com/static/web/about/gitlab@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/pyramid@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              March 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              We’ve tracked 63 million hours or 7228 years
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime now works in 174 countries, serving 144 000 users in 6700
              <br />
              companies. Until this time, we’ve tracked 63 million hours -
              that’s 7228
              <br />
              years.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              April 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime introduces the Pomodoro Timer
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime continues to add integrations with popular work tools.
              The
              <br />
              Trello and Gitlab integrations allow users to automatically import
              their
              <br />
              cards and issues to DeskTime and track time.
            </Text>
          </Box>
          <Box id="seventh-image">
            <img src="https://desktime.com/static/web/about/pomodor@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/integrations@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              March 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Integrations with major project management apps
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime now integrates with Jira, Asana, Basecamp, and Zapier.
              Users
              <br /> can pull their projects into DeskTime and log their time
              within the apps.
              <br /> Additionally, My DeskTime gets a new Messaging feature.
              Users can now <br /> leave notes for their colleagues right inside
              DeskTime.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              January 2018
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime picks up speed
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime changes its database servers and doubles their speed and
              <br />
              capacity. The same month, the DeskTime desktop app gets new
              designr
              <br />
              icons on Windows, MAC, and Linux.
            </Text>
          </Box>
          <Box id="seventh-image">
            <img src="https://desktime.com/static/web/about/speed@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/calendar@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              May 2022
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime launches its first integration - with Google Calendar
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              Today, over 100K people in 98 countries use DeskTime to optimize
              their
              <br />
              work time and get more things done. Which, apparently, works: the
              stats
              <br />
              meetings or for other work-related reasons. That way, users now
              can see
              <br />
              how much time they spend in meetings, business lunches,
              work-related
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              April 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              The 100,000th user joins DeskTime
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime continues to add integrations with popular work tools.
              The
              <br />
              Trello and Gitlab integrations allow users to automatically import
              their
              <br />
              cards and issues to DeskTime and track time.
            </Text>
          </Box>
          <Box id="seventh-image">
            <img src="https://desktime.com/static/web/about/100000@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="eighth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/screenshot@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              March 2019
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Here come Screenshots - the most requested feature of all time
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime now integrates with Jira, Asana, Basecamp, and Zapier.
              Users
              <br /> can pull their projects into DeskTime and log their time
              within the apps.
              <br /> Additionally, My DeskTime gets a new Messaging feature.
              Users can now <br /> leave notes for their colleagues right inside
              DeskTime.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2016
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime gets makeover with major functional updates
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime changes its database servers and doubles their speed and
              <br />
              capacity. The same month, the DeskTime desktop app gets new
              designr
              <br />
              icons on Windows, MAC, and Linux.
            </Text>
          </Box>
          <Box id="seventh-image">
            <img src="https://desktime.com/static/web/about/design@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/v3@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2015
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              The team starts its work on DeskTime's new version{" "}
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              Today, over 100K people in 98 countries use DeskTime to optimize
              their
              <br />
              work time and get more things done. Which, apparently, works: the
              stats
              <br />
              meetings or for other work-related reasons. That way, users now
              can see
              <br />
              how much time they spend in meetings, business lunches,
              work-related
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              July 2016
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              A study conducted by DeskTime goes viral
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              DeskTime analyzes the top 10% of its most productive employees and
              <br />
              discovers their one common trait: they work 52 minutes, then break
              for 17
              <br />
              icons on Windows, MAC, and Linux.
            </Text>
          </Box>
          <Box id="seventh-image">
            <img src="https://desktime.com/static/web/about/viral@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="sixth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/profit@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2015
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime becomes profitable
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              At the end of 2013 DeskTime stands on its own feet and starts
              working
              <br />
              work time and get more things done. Which, apparently, works: the
              stats
              <br />
              meetings or for other work-related reasons. That way, users now
              can see
              <br />
              how much time they spend in meetings, business lunches,
              work-related
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2016
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime gets its first major update - fresh design and new
              features
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              Adding various major features, DeskTime launches its second
              version.
              <br />
              From now on, users can track their projects and tasks with the
              Projects
              <br />
              icons on Windows, MAC, and Linux.
            </Text>
          </Box>
          <Box id="ninth-image">
            <img src="https://desktime.com/static/web/about/v2@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="tenth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/blog@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2015
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              DeskTime starts its online "diary"
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              On February 1st, the first article is published on the DeskTime
              blog. The
              <br />
              blog is made as the place to share the latest productivity
              insights and tips
              <br />
              on how to optimize one’s time. Its most popular blog post that
              describes
              <br />
              how office environment affects productivity has since been read
              nearly
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2016
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Meeting DeskTime's most loyal customer
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              A USA based company, 121 USA LLC, signs up and becomes DeskTime’s
              <br />
              customer in January 2012. Five years later, the team of 63 people
              is still
              <br />
              using the app, which makes it our most loyal customer. Since the
              launch
            </Text>
          </Box>
          <Box id="ninth-image">
            <img src="https://desktime.com/static/web/about/loyal@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="tenth-image" marginTop="20px" pt="90px">
            <img src="https://desktime.com/static/web/about/ceo@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2015
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              New CEO takes over the reins
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              After spending 5 years in the pharmacy business and a year
              managing a<br />
              startup, called SportSnaps, Artis Rozentals joins the DeskTime
              team and
              <br />
              becomes its CEO.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2016
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              The team is growing - DeskTime's first full-time employee hired
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              A USA based company, 121 USA LLC, signs up and becomes DeskTime’s
              <br />
              customer in January 2012. Five years later, the team of 63 people
              is still
              <br />
              using the app, which makes it our most loyal customer. Since the
              launch
            </Text>
          </Box>
          <Box id="ninth-image">
            <img src="https://desktime.com/static/web/about/first-employee@2x.png" />
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" w="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box id="tenth-image" marginTop="20px">
            <img src="https://desktime.com/static/web/about/first-user@2x.png" />
          </Box>
          <Box width="50%">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2015
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Welcoming DeskTime's first registered user
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              After spending 5 years in the pharmacy business and a year
              managing a<br />
              startup, called SportSnaps, Artis Rozentals joins the DeskTime
              team and
              <br />
              becomes its CEO.
            </Text>
          </Box>
        </HStack>
        <HStack backgroundColor="#F8F9FA" width="100%" pt="90px">
          {/* <Text id="para3" fontWeight="bold">Our milestones and how it all began</Text> */}
          <Box width="50%" marginLeft="40px">
            <Text fontFamily="18px" fontWeight="700" color="#4EA819">
              June 2016
            </Text>
            <Text fontSize="25px" color="#333C43" fontWeight="700">
              Meet DeskTime - the automatic time tracking software!
            </Text>
            <Text fontSize="17px" lineHeight="28px">
              A USA based company, 121 USA LLC, signs up and becomes DeskTime’s
              <br />
              customer in January 2012. Five years later, the team of 63 people
              is still
              <br />
              using the app, which makes it our most loyal customer. Since the
              launch
            </Text>
          </Box>
          <Box id="ninth-image">
            <img src="https://desktime.com/static/web/about/desktime@2x.png" />
          </Box>
        </HStack>

        {/* player */}

        <HStack id="yt">
          <Box>
            <Flex w="140%" m="auto">
              <Flex w="50%" alignItems={"center"} justifyContent={"center"}>
                <iframe
                  width="820"
                  height="315"
                  allowFullScreen="true"
                  allowTransparency="true"
                  allow-aria-modal="true"
                  border="none"
                  src="https://www.youtube.com/embed/HZEtIzb89I0?autoplay=1"
                ></iframe>
              </Flex>
            </Flex>
          </Box>
        </HStack>

        {/* email */}

        <HStack
          backgroundColor="#4EA819"
          h="360px"
          width="1440px"
          mt="80px"
          borderBottom="14px solid #4EA819"
          boxShadow=" rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          centerContent
        >
          <Box>
            <Text
              id="sen3"
              color="white"
              fontSize={40}
              fontWeight="bold"
              marginTop="50px"
            >
              Join 400,000+ users already managing their
              <br />
              time with the DeskTime app
            </Text>

            <HStack marginLeft="500px">
              <div id="inputSec2">
                <Input
                  type="Text"
                  bg="white"
                  size="lg"
                  w="lg"
                  placeholder="Your work email"
                ></Input>
                <Button
                  backgroundColor="#4EA819"
                  fontWeight="bold"
                  color="white"
                >
                  GET STARTED
                </Button>
              </div>
            </HStack>
            <HStack>
              <Box>
                <Text
                  id="trial"
                  color="white"
                  textAlign="center"
                  paddingLeft="20px"
                  fontSize={15}
                  fontWeight="normal"
                  marginLeft="400px"
                >
                  Free 14-day trial. No credit card required.
                  <br />
                  By signing up, you agree to our{" "}
                  <Link textDecoration="underline" fontWeight="bold">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link fontWeight="bold" textDecoration="underline">
                    privacy policy.
                  </Link>
                </Text>
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Container>
      <ChakraProvider>
        <Footer />
      </ChakraProvider>
    </>
  );
}
