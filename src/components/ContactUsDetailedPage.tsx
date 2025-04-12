import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  Icon,
  Circle,
} from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import city3 from "../assets/city3.jpg";

const ContactUsDetailedPage = () => {
  return (
    <Box
      position="relative"
      bgImage={city3} // Replace with your background image
      bgSize="cover"
      bgPos="center"
      p={10}
      color="white"
    >
      {/* Background Overlay for Blur and Opacity */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.6)"
        backdropFilter="blur(1px)"
        zIndex="0"
      ></Box>

      {/* Header Section */}
      <Box textAlign="center" mb={8} position="relative" zIndex="1" mt="70px">
        <Heading as="h1" size="xl" mb={2} fontFamily="inter">
          Contact Us
        </Heading>
        <Text fontSize="lg" fontFamily="inter">
          We'd love to hear from you. <br />
          Feel free to reach out!!
        </Text>
      </Box>

      {/* Main Content */}
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        p={8}
        borderRadius="md"
        position="relative"
        zIndex="1"
      >
        {/* Left Section */}
        <Box flex="1" mr={[0, 0, 8]} mb={[8, 8, 0]}>
          <VStack
            spacing={10}
            align="start"
            marginTop="40px"
            marginLeft="200px"
          >
            {/* Address */}
            <HStack spacing={4}>
              <Circle size="40px" bg="#FFC221">
                <Icon as={MdLocationOn} color="white" w={6} h={6} />
              </Circle>
              <Box>
                <Heading as="h4" size="md" color="#FFC221" fontFamily="Inter">
                  Address
                </Heading>
                <Text fontFamily="Inter">
                  7, N Commercial, Defence Phase 1, DHA Lahore
                </Text>
              </Box>
            </HStack>

            {/* Phone */}
            <HStack spacing={4}>
              <Circle size="40px" bg="#FFC221">
                <Icon as={MdPhone} color="white" w={6} h={6} />
              </Circle>
              <Box>
                <Heading as="h4" size="md" color="#FFC221" fontFamily="Inter">
                  Phone
                </Heading>
                <Text fontFamily="Inter">03004473421</Text>
              </Box>
            </HStack>

            {/* Email */}
            <HStack spacing={4}>
              <Circle size="40px" bg="#FFC221">
                <Icon as={MdEmail} color="white" w={6} h={6} />
              </Circle>
              <Box>
                <Heading as="h4" size="md" color="#FFC221" fontFamily="Inter">
                  Email
                </Heading>
                <Text fontFamily="Inter">Muhammadhamzatari786@gmail.com</Text>
              </Box>
            </HStack>
          </VStack>
        </Box>

        {/* Right Section */}
        <Box
          flex="0.9"
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          maxWidth="480px"
          marginRight="100px"
          //borderBlockEndColor="#FFC221"
          color="#FFC221"
        >
          <Heading as="h2" size="lg" mb={4} color="gray.800" fontFamily="inter">
            Send Message
          </Heading>
          <VStack spacing={6} align="start">
            <Input
              placeholder="Full Name"
              variant="flushed"
              focusBorderColor="#FFC221"
              size="md"
            />
            <Input
              placeholder="Email Address"
              variant="flushed"
              focusBorderColor="#FFC221"
              size="md"
            />
            <Textarea
              placeholder="Type your message..."
              variant="flushed"
              focusBorderColor="#FFC221"
              size="md"
            />
            <Button size="lg" background="#FFC221" color="#081F51">
              Send
            </Button>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUsDetailedPage;
