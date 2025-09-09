import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Lottie from "lottie-react";
import animation1 from "./lottie/Marriage animation.json";
// import animation1 from "./lottie/animation1.json";
// import animation2 from "./lottie/animation2.json";
import animation2 from "./lottie/Butterfly hearts.json";
import animation3 from "./lottie/animation3.json";
import animation4 from "./lottie/animation4.json";

const blinkAnimation = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.5); opacity: 1; }
`;

const HeroSection = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap={3}
      paddingLeft={20}
      paddingTop={10} // Add padding to avoid touching the navbar
      alignItems="center"
    >
      {/* Left Side: Text Section */}
      <VStack align="flex-start">
        <Heading
          //fontFamily="Helvetica-Bold"
          fontFamily="inter"
          fontWeight="700"
          color="rgb(28, 12, 61)"
          fontSize="70px"
          lineHeight="80px"
          as="h1"
        >
          We Plan Events That Reflect Your Unique Style
        </Heading>
        <Text
          fontSize="lg"
          color="gray.700"
          maxWidth="570px"
          fontFamily="inter"
          fontWeight="350"
        >
          We create events that bring your vision to life! Every detail is
          crafted to reflect your unique style, making your celebration truly
          unforgettable. From intimate gatherings to grand occasions, we ensure
          each experience is a beautiful expression of who you are, leaving
          lasting memories for you and your guests. Our dedicated team works
          closely with you to personalize every element, ensuring your event is
          as seamless as it is stunning.
          <br />
          Only Professional Company of Pakistan.
        </Text>

        {/* Rectangular Box with Blinking Dot and Button */}
        <Box
          bg="#A4A8B2"
          color="white"
          p={4}
          mt={1}
          borderRadius="md"
          width="full"
          position="relative"
        >
          <HStack>
            {/* Blinking Dot */}
            <Box
              position="absolute"
              top="8px"
              left="8px"
              width="12px"
              height="12px"
              bg="pink.500"
              borderRadius="50%"
              animation={`${blinkAnimation} 1.5s infinite ease-in-out`}
            />

            <Heading
              fontSize="20px"
              fontWeight="bold"
              mb={2}
              marginLeft="25px"
              fontFamily="Inter"
            >
              Book services of The Graceful Event Company today!
            </Heading>
            <Button
              bg="#F94A82"
              color="white"
              _hover={{ bg: "#323533" }}
              mt={1}
              marginLeft="35px"
            >
              Contact Us
            </Button>
          </HStack>
        </Box>
      </VStack>

      {/* Right Side: Animations Section */}
      <Grid
        templateColumns="1fr 1fr"
        columnGap="1px"
        width="100%"
        justifyItems="center"
      >
        <Box
          width="299px"
          height="299px"
          background="#FFD183"
          borderRadius="40px 40px 2px 2px"
          boxShadow="md"
          marginTop="50px"
        >
          <Lottie
            animationData={animation1}
            loop
            autoplay
            style={{
              marginTop: "0px",
              // marginBottom: "5px",
              marginLeft: "40px",
              marginRight: "20px",
            }}
          />
        </Box>
        <Box
          width="299px"
          height="299px"
          background="#F0C4D1"
          borderRadius="40px 40px 2px 2px"
          boxShadow="md"
          marginRight={2}
        >
          <Lottie
            animationData={animation2}
            loop
            autoplay
            style={{
              marginTop: "30px",
              marginLeft: "40px",
              marginRight: "20px",
            }}
          />
        </Box>
        <Box
          width="299px"
          height="299px"
          background="#94755C"
          borderRadius="2px 2px 40px 40px"
          boxShadow="md"
          marginTop="41px"
        >
          <Lottie
            animationData={animation3}
            loop
            autoplay
            style={{ marginTop: "45px" }}
          />
        </Box>
        <Box
          width="299px"
          height="299px"
          background="#5AA9B0"
          borderRadius="2px 2px 40px 40px"
          boxShadow="md"
        >
          <Lottie
            animationData={animation4}
            loop
            autoplay
            style={{ marginTop: "40px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
