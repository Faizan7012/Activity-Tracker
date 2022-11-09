import Carousel from "react-bootstrap/Carousel";
import { Grid, GridItem } from "@chakra-ui/react";
import FounderCard from "./FounderCard";

function CarouselSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <FounderCard />
          </GridItem>
          <GridItem>
            <FounderCard />
          </GridItem>
          <GridItem>
            <FounderCard />
          </GridItem>
        </Grid>
      </Carousel.Item>
      <Carousel.Item>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <FounderCard />
          </GridItem>
          <GridItem>
            <FounderCard />
          </GridItem>
          <GridItem>
            <FounderCard />
          </GridItem>
        </Grid>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
