import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import productivity from "../assets/productivity.jpeg";
import { keyframes } from "@emotion/react";

const blinkAnimation = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.5); opacity: 1; }
`;

const WhyChooseUs = () => {
  return (
    <Box
      marginLeft="100px"
      marginRight="100px"
      marginTop="50px"
      padding="20px"
      borderRadius="12px"
      boxShadow="lg"
      backgroundColor="transparent"
    >
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="40px">
        {/* Left Section */}
        <Box
          backgroundColor="#F2F2F2"
          padding="30px"
          borderRadius="18px"
          boxShadow="lg"
        >
          <VStack align="start" spacing={4}>
            <Box
              position="absolute"
              right="800px"
              width="20px"
              height="20px"
              bg="pink.500"
              animation={`${blinkAnimation} 1.5s infinite ease-in-out`}
              _before={{
                content: `''`,
                position: "absolute",
                width: "20px",
                height: "20px",
                bg: "pink.500",
                borderRadius: "50%",
                top: "-10px",
                left: "0",
              }}
              _after={{
                content: `''`,
                position: "absolute",
                width: "20px",
                height: "20px",
                bg: "pink.500",
                borderRadius: "50%",
                top: "0",
                left: "-10px",
              }}
              transform="rotate(-45deg)"
            />
            {/* <HStack
              justifyContent="center"
              padding="10px"
              //backgroundColor={useColorModeValue("gray.200", "gray.800")}
              backgroundColor="#FFC221"
              borderRadius="8px"
              marginBottom="20px"
            > */}
            <Heading as="h3" fontSize="24px" color="#1C0C3D" fontFamily="Inter">
              Why Choose Us?
            </Heading>
            {/* </HStack> */}
            <Text
              fontSize="16px"
              color={useColorModeValue("gray.800", "gray.400")}
            >
              We are dedicated to delivering a seamless event experience. From
              the initial planning stages to the final moments of your event, we
              ensure every detail is perfect. Here's why our clients love us:
            </Text>

            <VStack align="start" spacing={3} mt={1}>
              {/* Subheading 1 */}
              <Box>
                <Heading
                  as="h3"
                  fontSize="20px"
                  color="#1C0C3D"
                  fontFamily="Inter"
                >
                  😊 Customer Satisfaction
                </Heading>
                <Text
                  fontSize="14px"
                  color={useColorModeValue("gray.800", "gray.400")}
                >
                  Our top priority is ensuring that every client walks away
                  satisfied with the service provided, making your event a
                  memorable experience.
                </Text>
              </Box>

              {/* Subheading 2 */}
              <Box>
                <Heading
                  as="h3"
                  fontSize="20px"
                  color="#1C0C3D"
                  fontFamily="Inter"
                >
                  💼 Professional Event Management
                </Heading>
                <Text
                  fontSize="14px"
                  color={useColorModeValue("gray.800", "gray.400")}
                >
                  Our team of professionals handles every aspect of your event,
                  ensuring smooth execution from start to finish.
                </Text>
              </Box>

              {/* Subheading 3 */}
              <Box>
                <Heading
                  as="h3"
                  fontSize="20px"
                  color="#1C0C3D"
                  fontFamily="Inter"
                >
                  🔒 Safety & Security
                </Heading>
                <Text fontSize="14px" color="gray.700">
                  We prioritize the safety of your guests, ensuring every event
                  is executed with the highest level of security and care.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Box>

        {/* Right Section */}
        <Box position="relative">
          <Image
            alignContent="center"
            src={productivity}
            alt="Event Background"
            width="600px"
            height="430px"
            objectFit="cover"
            borderRadius="12px"
            marginTop="20px"
            //padding="10px"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            backgroundColor="blackAlpha.700"
            color="white"
            padding="20px"
            borderRadius="12px"
            textAlign="center"
          >
            <Text fontSize="20px" fontStyle="italic">
              "Productivity is never an accident. It is always the result of a
              commitment to excellence, intelligent planning, and focused
              effort."
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
