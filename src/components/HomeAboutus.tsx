import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Icon,
  Image,
  VStack,
  HStack,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiPhone } from "react-icons/hi";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.jpg";

const HomeAboutus = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      marginLeft="200px"
      marginRight="150px"
      marginTop="100px"
    >
      {/* Left side with circles and images */}
      <Box
        position="relative"
        width="450px"
        height="550px"
        borderRadius="0 0 200px 200px"
        //overflow="hidden"
      >
        <Image
          src={about1}
          alt="Main Image"
          objectFit="cover"
          boxSize="100%"
          borderRadius="250px 250px 250px 250px"
        />

        {/* Small circle with animation */}
        <Box
          position="absolute"
          bottom="1px"
          left="50%"
          transform="translateX(-50%)"
          width="250px"
          height="250px"
          borderRadius="50%"
          border="5px solid white"
          style={{
            animation: "bounce 5s infinite linear",
          }}
        >
          <Image
            src={about2}
            alt="Small Image"
            objectFit="cover"
            boxSize="100%"
            borderRadius="50%"
          />
        </Box>
        <style>{`
          @keyframes bounce {
            0% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(50px);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </Box>

      {/* Right side with information */}
      <Box maxWidth="500px">
        <Text fontSize="lg" fontWeight="bold" color="#0071DC">
          ---About
        </Text>
        <Heading as="h1" fontSize="4xl" mt={2} color="#1C0C3D">
          About Company
        </Heading>

        <Text
          mt={4}
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize="19px"
        >
          At The Graceful Company, we take pride in our reputation for
          excellence in event management, built over two years and through
          thousands of successful events. Specializing in a range of
          functions—from weddings and corporate events to birthdays and private
          celebrations—we bring a personalized touch and meticulous attention to
          detail to every occasion.
        </Text>
        <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="19px">
          Our commitment to creating memorable experiences has earned us the
          trust and loyalty of our clients, who continue to rely on us for their
          most important moments. Reach out to us to discover how we can bring
          your vision to life with elegance and professionalism.
        </Text>

        {/* Need any help */}
        <Flex align="center" mb={4}>
          <HStack>
            <VStack>
              <HStack spacing={2}>
                <Icon as={HiPhone} boxSize={6} />
                <VStack marginLeft="5px" marginTop="10px">
                  <Text fontSize="lg" fontWeight="bold" color="#1C0C3D">
                    Need any help
                    <br />
                    +92 (300) 4473421
                  </Text>
                </VStack>
              </HStack>
              <Button
                background="#FFC221"
                width="150px"
                marginLeft="30px"
                height="50px"
                marginTop="-3"
                color="#081F51"
              >
                See More
              </Button>
            </VStack>
            <Box
              bg="gray.100"
              p={4}
              marginLeft="20px"
              borderRadius="md"
              minHeight="125px"
              maxWidth="250px"
            >
              <Text
                fontSize="lg"
                fontWeight="medium"
                fontFamily="serif"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                7, N Commercial, Defence Phase 1, DHA Lahore
              </Text>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomeAboutus;
