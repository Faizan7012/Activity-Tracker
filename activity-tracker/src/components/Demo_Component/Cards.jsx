import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Grid,
  GridItem,
 
} from "@chakra-ui/react";
import SingleCard from "./SingleCard";

const Content = [
  {
    img: "https://desktime.com/static/web/demo/magnify.svg",
    heading: "Demo account",
    text: "Learn how DeskTime tracks time, explore the dashboard and try all the available features in this self-guided DeskTime demo.",
    buttonText: "EXPLORE",
  },
  {
    img: "https://desktime.com/static/web/demo/chat.svg",
    heading: "Live demo",
    text: "Sign up for a 1:1 demo call with our product expert, take a personalized tour and get answers to any questions you might have.",
    buttonText: "BOOK A DEMO",
  },
  {
    img: "https://desktime.com/static/web/demo/webinar.svg",
    heading: "Webinars",
    text: "Watch on-demand webinars and tutorials to make sure you get the most out of all the features DeskTime has to offer.",
    buttonText: "WATCH NOW",
  },
  {
    img: "https://desktime.com/static/web/demo/form.svg",
    heading: "Sign up",
    text: "Find out what time tracking means, add team members, and test the project feature for effective workflow management.",
    buttonText: "START A FREE TRIAL",
  },
];

function Cards(props) {
  return (
    <Box marginBottom={"60px"}>
      <Box
        w={"80%"}
        marginTop="100px"
        m={"auto"}
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
        >
          {Content.map((el, i) => (
            <GridItem key={i}>
              <SingleCard
                heading={el.heading}
                buttonText={el.buttonText}
                text={el.text}
                img={el.img}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Cards;
