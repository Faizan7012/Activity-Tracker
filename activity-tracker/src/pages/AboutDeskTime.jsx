import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Subscribe from '../components/Blog/Subscribe'
import { Box, Button, Center, ChakraProvider, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import { bgImage } from "../assets/images";
import { useState } from "react";
import AboutTimeline from "../components/aboutTimeline";
export default function Box1() {
  useEffect(()=>{
    document.title = 'About | Activity Tracker';
  })
  
  return <ChakraProvider>
   <Box>
   <Navbar />
   <Box pt='90px'>
   <Box
      backgroundImage={['none','none','none',bgImage]}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      h='300px'
       >
      
      <Box w={['100%','100%','100%','40%']} m='auto' textAlign='center'>
      <Heading fontSize={['17px','22px','35px']} lineHeight='2rem' mb='20px' color={['#333c43','#333c43','#333c43','#fff']} pt='60px'>
      About DeskTime
      </Heading>
      <Text fontWeight='600' mb='30px' color={['#333c43','#333c43','#333c43','#fff']} p='10px'>
      We help businesses grow and people become more successful
      </Text>
      <Center>
        <Button bg='#4ea819' 
        fontSize='17px'
        fontWeight='400' lineHeight='1'
        textTransform='uppercase' 
        color='#fff'
        border='1px solid gray'
        p='0.8875rem 1.875rem'
        borderRadius='3px'
        _hover={{bg:'#4ea819'}}
        >
          <Heading fontSize='15px'>GO TO MY DESKTIME</Heading>
        </Button>
      </Center>
      
      </Box>
        
   </Box>   

     <Box mt='70px'>
        <Flex w='90%' m='auto' justifyContent='center' flexDirection={['column-reverse','column-reverse','column-reverse','row']} gap='30px'>
         <Flex w={['100%','100%','100%','50%']} flexDirection='column' justifyContent='left' alignItems='center'>
          <Box>
          <Heading textAlign='left' fontSize={['17px','22px','35px']} lineHeight='40px' mb='30px' color='#333c43'>
            Built first for us, then made available to others
            </Heading>
            <Text textAlign='left' lineHeight='20px' color='#475056' mb='30px'>
            DeskTime was born out of the need for the Draugiem Group to manage their many employees. An internal application was developed, and we soon realized that we'd made a tool that could be useful for many other companies. Why not offer it to them? - we thought. And so, the development began.
            </Text>
            <Text textAlign='left' lineHeight='20px' color='#475056'>At DeskTime, we’re committed to accountability, transparency, and fairness. DeskTime is a product designed to increase productivity in an open and empowering environment. The added benefit? Boosting your employees and motivating them to perform at 100% of their potential.

            </Text>
          </Box>
          
         </Flex>
         <Flex w={['100%','100%','100%','50%']} m='auto' justifyContent='center'>
           <Image maxW='100%' src='https://desktime.com/static/web/about/team.jpg' />
         </Flex>

        </Flex>
     </Box>



     <Box w='90%' m='auto' mt='100px'>

      <Box mb='70px'>
        <Heading fontSize={['17px','22px','35px']} lineHeight='40px' mb='30px' color='#333c43'>Our milestones and how it all began</Heading>
      </Box>



      <Box>
      <Box>

       <AboutTimeline
        img='https://desktime.com/static/web/about/booking.png'
         date='April 2022' heading='DeskTime introduces the new Booking feature' 
          text='Users can now book desks, meeting rooms, parking spaces,
           and much more. All bookings are updated in real-time and can be viewed from a 
           single booking grid. Its the best way to manage shared and hybrid workspaces , and another step closer to DeskTime becoming an all-in-one office management system.'
           tmp={true}
           isA={true}
        />
     
     <AboutTimeline 
     img='https://desktime.com/static/web/about/web-timer.png'
     date='December 2021'
     heading='DeskTime provides web-based time tracking'
     text='The new manual web timer lets users enjoy DeskTime from any browser without downloading and installing any software. You can use it as an alternative to automated time tracking or together with the DeskTime app.'
     tmp={true}
     isA={false}

     />
       <AboutTimeline 
     img='https://desktime.com/static/web/about/pricing.png'
     date='December 2021'
     heading='Per-user pricing model introduced'
     text='We gave up all pricing plans that were based on specific user count amplitudes and instead opted for per-user pricing. This lets you make easy calculations about how much you will pay based on the number of people using DeskTime.'
     tmp={true}
     isA={true}

     />
       <AboutTimeline 
     img='https://desktime.com/static/web/about/spanish.png'
     date='September 2021'
     heading='DeskTime is now fully available in Spanish'
     text='The full-system localization, which has been in the works for a while, is finalized. Its a step that makes our website and productivity tips more accessible to Spanish-speaking communities across the globe.'
     tmp={true}
     isA={false}

     />
       <AboutTimeline 
     img='https://desktime.com/static/web/about/electron.png'
     date='July 2021'
     heading='Mac and Linux users get an upgrade in the Electron software framework'
     text='The new and improved functionality for Mac and Linux users in the Electron software framework has made using DeskTime faster and more convenient. The update introduced user interface improvements in the app and Project Manager, a passwordless magic link login, and a project Quick menu for added user experience.'
     tmp={true}
     isA={true}

     />
       <AboutTimeline 
     img='https://desktime.com/static/web/about/bootstrap4.png'
     date='May 2021'
     heading='Bootstrap 4 is implemented'
     text='We have always been about efficiency, and a good user experience is one of the cornerstones of that goal. Thats why we implemented Bootstrap 4 in our system. It improved our websites accessibility ratings, making it perceivable, understandable, as well as easier to navigate and operate for all our users.'
     tmp={true}
     isA={false}

     />
       <AboutTimeline 
     img='https://desktime.com/static/web/about/on-demand.png'
     date='March 2021'
     heading='On-demand webinars are live'
     text='When it comes to software demonstration video tutorials work wonders. Its the easiest way to make sure our customers get the most out of all the features DeskTime has to offer. On-demand webinars do just that. We redesigned our webinar landing page and made the short and easy how-to videos available for anyone at any time.'
     tmp={true}
     isA={true}

     />
       <AboutTimeline 
     img='https://desktime.com/static/web/about/support.png'
     date='January 2021'
     heading='¡Hola! ¿Necesita ayuda? Support is now available in Spanish'
     text='Its all about the best customer support these days, and were up for the challenge. DeskTime achieves one of our biggest goals for 2021 – our support is now available in the Spanish language. Next up – a full system localization. ¡vamos!'
     tmp={true}
     isA={false}

     />
         <AboutTimeline 
     img='https://desktime.com/static/web/about/homepage.png'
     date='December 2020'
     heading='New Year, new us! Making first impressions count'
     text="To close out 2020 and kick-off 2021 fresh, DeskTime's homepage receives a dapper redesign that better captures who we are, what we do, and what we stand for. And it's also prettier. Much prettier. Which is just as important!"
     tmp={true}
     isA={true}

     />

<AboutTimeline 
     img='https://desktime.com/static/web/about/eu-company.svg'
     date='October 2020'
     heading='Coming home: DeskTime is now an EU-based company'
     text="Even though, legally speaking, we've been a US-based company from the very beginning, our main center of operations has always been Latvia. Now, we're just changing our legal address and legal name to have everything in one place."
     tmp={true}
     isA={false}

     />

<AboutTimeline 
     img='https://desktime.com/static/web/about/server.svg'
     date='July 2020'
     heading='Faster, better, stronger'
     text="We upgraded our physical infrastructure by deploying new servers in the USA and India to meet the needs of our growing user base in these and nearby markets. DeskTime users from these areas now have an even smoother and faster DeskTime experience."
     tmp={true}
     isA={true}

     />

<AboutTimeline 
     img='https://desktime.com/static/web/about/world.svg'
     date='June 2020'
     heading='Reaching every corner of the world - Reseller program launched!'
     text="DeskTime begins working with resellers and distributors worldwide to make payments easier and break down language and communication barriers for new users in countries beyond our main base of operations, thus ensuring broader and better accessibility to DeskTime."
     tmp={true}
     isA={false}

     />

<AboutTimeline 
     img='https://desktime.com/static/web/about/mobile-app.png'
     date='April 2020'
     heading='Update of the year – a brand new mobile app'
     text="The DeskTime mobile app gets a major update, both UX and feature-wise. The renewed app now includes a mobile timer for time tracking on the go, allows you to assign time to individual projects, and log offline time."
     tmp={true}
     isA={true}

     />

<AboutTimeline 
     img='https://desktime.com/static/web/about/pricing-plans.png'
     date='March 2020'
     heading='Prime plans for prime customers'
     text="Two new pricing plans are introduced to fit the needs of our premium and enterprise-level customers. The new plans – Premium and Enterprise – offer clients a bunch of extra features and functionalities, as well as priority support."
     tmp={true}
     isA={false}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/8000bc.png'
     date='December 2019'
     heading='81 million hours tracked – thats 9268 years'
     text="The total time tracked by all DeskTime users reaches 81 million hours – that’s 9268 years. In linear time, that's as if DeskTime had tracked every minute since homo sapien domesticated cats in around 8000 BC. DeskTime now works in 203 countries, serving 184 000 users in 8600 companies."
     tmp={true}
     isA={true}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/youtube.png'
     date='October 2019'
     heading='The re-birth of DeskTime YouTube channel'
     text="The DeskTime team sets a goal to create entertaining and practically useful content on YouTube to have an even more open conversation about productivity, management, and time tracking and the benefits behind it."
     tmp={true}
     isA={false}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/gitlab.png'
     date='January 2019'
     heading='New integrations – Trello and Gitlab'
     text="DeskTime continues to add integrations with popular work tools. The Trello and Gitlab integrations allow users to automatically import their cards and issues to DeskTime and track time."
     tmp={true}
     isA={true}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/pyramid.png'
     date='December 2018'
     heading='We’ve tracked 63 million hours or 7228 years'
     text="DeskTime now works in 174 countries, serving 144 000 users in 6700 companies. Until this time, we’ve tracked 63 million hours - that’s 7228 years."
     tmp={true}
     isA={false}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/pomodor.png'
     date='July 2018'
     heading='DeskTime introduces the Pomodoro Timer'
     text="The most requested feature of 2017/2018 is here! Users can now enable the built-in Pomodoro timer to remind themselves to take regular breaks - every 52, 60 or 90 minutes."
     tmp={true}
     isA={true}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/integrations.png'
     date='June 2018'
     heading='Integrations with major project management apps'
     text="DeskTime now integrates with Jira, Asana, Basecamp, and Zapier. Users can pull their projects into DeskTime and log their time within the apps. Additionally, My DeskTime gets a new Messaging feature. Users can now leave notes for their colleagues right inside DeskTime."
     tmp={true}
     isA={false}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/speed.png'
     date='January 2018'
     heading='DeskTime picks up speed'
     text="DeskTime changes its database servers and doubles their speed and capacity. The same month, the DeskTime desktop app gets new design icons on Windows, MAC, and Linux."
     tmp={true}
     isA={true}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/calendar.png'
     date='September 2017'
     heading='DeskTime launches its first integration - with Google Calendar'
     text="The DeskTime + Google Calendar integration automatically logs users' offline time - the time they've been away from their computer, in meetings or for other work-related reasons. That way, users now can see how much time they spend in meetings, business lunches, work-related trainings, and more."
     tmp={true}
     isA={false}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/100000.png'
     date='July 2017'
     heading='The 100,000th user joins DeskTime'
     text="Today, over 100K people in 98 countries use DeskTime to optimize their work time and get more things done. Which, apparently, works: the stats show that DeskTime users have an average productivity of 80.9%. It means, out of an 8-hour workday, almost 6.5 hours are spent on work-related tasks."
     tmp={true}
     isA={true}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/screenshot.png'
     date='March 2017'
     heading='Here come Screenshots - the most requested feature of all time'
     text="After insistent customer requests, DeskTime adds the Screenshots feature. The new feature lets managers capture employees’ screens in random 15-minutes intervals to follow the work in progress. It is mostly used to manage remote teams, where employees are paid by the hour."
     tmp={true}
     isA={false}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/v3.png'
     date='July 2015'
     heading='The team starts its work on DeskTime new version'
     text="The long work on DeskTime's third version begins. By paying a great attention to detail, the new version aims to improve user experience and make the software's user interface more comprehensive."
     tmp={true}
     isA={true}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/profit.png'
     date='October 2013'
     heading='DeskTime becomes profitable'
     text="At the end of 2013 DeskTime stands on its own feet and starts working with profit. The startup can now cover its own expenses and doesn't needs no help from other companies within the Draugiem Group."
     tmp={true}
     isA={false}

     />
     <AboutTimeline 
     img='https://desktime.com/static/web/about/loyal.png'
     date='January 2012'
     heading='Meeting DeskTime most loyal customer'
     text="A USA based company, 121 USA LLC, signs up and becomes DeskTime’s customer in January 2012. Five years later, the team of 63 people is still using the app, which makes it our most loyal customer. Since the launch of the app, over 6000 other companies have joined and use DeskTime."
     tmp={false}
     isA={true}

     />





        </Box>
      </Box>


      <Box w={['90%','80%','65%','50%']} m='auto' mt='80px'>
      <Box
      w='100%'
      h={['200px','250px','300px','300px']}
        as='iframe'
        allowFullScreen="true"
        allowTransparency="true"
        allow-aria-modal="true"
        border="none"
        src="https://www.youtube.com/embed/HZEtIzb89I0?autoplay=1"
                
        ></Box>
      </Box>

     </Box>

   </Box>
    <Box>
      <Subscribe />
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
  </ChakraProvider>
}
