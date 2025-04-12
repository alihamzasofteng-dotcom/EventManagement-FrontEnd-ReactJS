import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPlay,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaAngleDoubleRight, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg="rgb(10, 0, 75)"
      color="white"
      position="relative"
      pt="32"
      pb="12"
      marginTop="150px"
    >
      {/* Light Blue Call-to-Action Box */}
      <Box
        bg="#2583DC"
        color="white"
        w="95%"
        maxW="1170px"
        h="320px"
        p="8"
        mt="8"
        position="absolute"
        top="-180px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
        display="flex"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
      >
        <VStack alignItems="flex-start" spacing={4}>
          <Heading size="lg" fontWeight="bold" fontFamily="inter">
            Contact Us to Turn Your Vision into Lasting
            <br />
            Memories!
          </Heading>

          <Button
            bg="#FFC221"
            color="#081F51"
            size="lg"
            mt={{ base: 4, md: 0 }}
            rightIcon={<Icon as={FaArrowRight} />}
            _hover={{
              bg: "#E6B31D",
              transform: "translateX(7px)",
              "& .arrowIcon": { transform: "translateX(5px)" },
            }}
          >
            <Text marginTop={4} fontFamily="Inter">
              Contact With Us
            </Text>
          </Button>
        </VStack>

        <Box
          as="button"
          bg="#FFC221"
          borderRadius="full"
          p="9"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          overflow="hidden"
          _hover={{ transform: "scale(1.1)", bg: "transparent" }}
          marginLeft={180}
        >
          <Icon
            as={FaPlay}
            boxSize="10"
            color="#081F51"
            className="playIcon"
            _hover={{ color: "transparent" }}
          />
          {/* Inner circle animation */}
          <Box
            as="span"
            position="absolute"
            borderRadius="50%"
            border="3px solid rgba(255, 255, 255, 0.3)"
            top="0"
            left="0"
            right="0"
            bottom="0"
            animation="growAndFade 3s 1s infinite ease-in-out"
            sx={{
              "@keyframes growAndFade": {
                "0%": { transform: "scale(1)", opacity: 1 },
                "100%": { transform: "scale(1.3)", opacity: 0 },
              },
            }}
          />
        </Box>
      </Box>

      {/* Footer Main Content */}
      <Box maxW="1200px" mx="auto" px="1" pt="40" pb="6">
        <Flex justify="space-between" wrap="wrap" mx="auto" px="12">
          {/* Column 1: Get Started */}
          <VStack
            align="start"
            spacing="4"
            flex="1"
            minW="100px"
            marginLeft={-9}
          >
            <Heading size="lg" fontFamily="Inter">
              Let's Plan Your Event
            </Heading>
            <Text fontSize="lg" fontFamily="Inter">
              Ready to turn your vision into reality? Reach out to us and let’s
              create an unforgettable experience together.
            </Text>
            <HStack>
              <Input
                placeholder="Email Address"
                variant="filled"
                size="lg"
                bg="gray.100"
                _hover={{ bg: "gray.200" }}
              />
              <Button colorScheme="blue" size="lg">
                <Icon as={FaPaperPlane} color="#FFC221" />
              </Button>
            </HStack>
          </VStack>

          {/* Column 2: Our Course */}
          <VStack align="start" spacing="2" flex="1" minW="500px">
            <Heading size="lg" marginLeft={20} fontFamily="Inter">
              Popular Categories
            </Heading>
            {["Catering", "Mehndi", "Barat", "Walima"].map((course) => (
              <HStack
                key={course}
                cursor="pointer"
                _hover={{ color: "teal.300" }}
                role="group"
                spacing="1"
                fontFamily="Inter"
                marginLeft="60px"
              >
                <Icon
                  as={FaAngleDoubleRight}
                  visibility="hidden"
                  transform="translateX(-8px)"
                  transition="all 0.2s ease" // Smooth transition for icon
                  _groupHover={{
                    visibility: "visible",
                    transform: "translateX(0)", // Icon moves to initial position on hover
                  }}
                />
                <Link
                  transition="transform 0.2s ease" // Smooth transition for text
                  fontFamily="Inter"
                  _groupHover={{ transform: "translateX(8px)" }} // Text shifts to the right on hover
                  fontSize="xl"
                >
                  {course}
                </Link>
              </HStack>
            ))}
          </VStack>

          {/* Column 3: Company */}
          <VStack align="start" spacing="2" flex="1" minW="200px">
            <Heading size="lg" marginLeft={5} fontFamily="Inter">
              Company
            </Heading>
            {["About Us", "Blogs", "Services", "Contact Us"].map((item) => (
              <HStack
                key={item}
                cursor="pointer"
                _hover={{ color: "teal.300" }}
                role="group"
                spacing="1" // Align items more closely
                fontFamily="Inter"
                // height="30px"
              >
                <Icon
                  as={FaAngleDoubleRight}
                  visibility="hidden"
                  transform="translateX(-8px)"
                  transition="all 0.2s ease" // Smooth transition for icon
                  _groupHover={{
                    visibility: "visible",
                    transform: "translateX(0)", // Icon moves to initial position on hover
                  }}
                />
                {/* Only show on hover */}
                <Link
                  transition="transform 0.2s ease" // Smooth transition for text
                  fontFamily="Inter"
                  _groupHover={{ transform: "translateX(8px)" }} // Text shifts to the right on hover
                  fontSize="xl"
                >
                  {item}
                </Link>
              </HStack>
            ))}
          </VStack>

          {/* Column 4: Information */}
          <VStack align="start" spacing="3" flex="1" minW="200px">
            <Heading size="lg" marginLeft={5} fontFamily="Inter">
              Information
            </Heading>
            <HStack spacing="2" fontFamily="Inter">
              <Icon as={MdPhone} marginBottom={4} />
              <Text fontSize="lg">(+92) 3004473421</Text>
            </HStack>
            <HStack spacing="2" fontFamily="Inter">
              <Icon as={MdEmail} marginBottom={4} />
              <Box lineHeight="1" mt="-1">
                <Text fontSize="lg" fontFamily="Inter">
                  Muhammadhamzatariq786@gmail.com
                </Text>
              </Box>
            </HStack>
            <HStack spacing="2" fontFamily="Inter">
              <Icon as={MdLocationOn} marginBottom={4} />
              <Text fontSize="lg">
                7, N Commercial, Defence Phase 1, DHA Lahore
              </Text>
            </HStack>
            <HStack spacing="3" mt="4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (icon, index) => (
                  <Box
                    as="button"
                    key={index}
                    // bg="teal.500"
                    bg="#FFC221"
                    p="2"
                    borderRadius="full"
                    _hover={{ bg: "teal.300" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginLeft="20px"
                  >
                    <Icon as={icon} boxSize="4" color="white" />
                  </Box>
                )
              )}
            </HStack>
          </VStack>
        </Flex>
      </Box>

      {/* Footer Bottom Line */}
      <Box
        borderTop="1px"
        borderColor="grey"
        pt="10"
        px="6"
        maxW="1200px"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text fontSize="md">
          © Since 1995 - All rights reserved by Rana Tariq Company
        </Text>
        <HStack spacing="2">
          <Text cursor="pointer">Support</Text>
          <Text>|</Text>
          <Text cursor="pointer">Privacy</Text>
          <Text>|</Text>
          <Text cursor="pointer">Policy</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
