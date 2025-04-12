// Footer.tsx
import { Box, Button, Flex, Heading, HStack, Icon, Input, Stack, Text, VStack } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPlay } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <Box bg="rgb(10, 0, 75)" color="white" position="relative" py="12">
      {/* Light Blue Call-to-Action Box */}
      <Box
        bg="lightblue"
        color="rgb(10, 0, 75)"
        w="80%"
        maxW="600px"
        p="8"
        borderRadius="md"
        position="absolute"
        top="-50px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
      >
        <VStack spacing="4" textAlign="center">
          <Heading size="lg" fontWeight="bold">
            Get Started
          </Heading>
          <Button colorScheme="teal" size="lg">Join With Us</Button>
          <HStack spacing="4" align="center" position="relative">
            <Box
              as="button"
              bg="teal.500"
              borderRadius="full"
              p="4"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ transform: 'scale(1.1)' }}
            >
              <Icon as={FaPlay} boxSize="6" color="white" />
            </Box>
            <Text fontWeight="bold" fontSize="xl">Watch Our Video</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Footer Main Content */}
      <Flex maxW="1200px" mx="auto" px="6" mt="12" justify="space-between" wrap="wrap">
        {/* Column 1: Get Started */}
        <VStack align="start" spacing="4" flex="1" minW="200px">
          <Heading size="md">Get Started</Heading>
          <Text fontSize="sm">
            Integer gravida posuere lacus et suscipit. Pellentesque sed ipsum sollicitudin, fermentum nibh elementum, dignissim leo.
          </Text>
          <HStack>
            <Input placeholder="Email Address" variant="filled" size="sm" bg="gray.100" />
            <Button colorScheme="teal" size="sm">Send</Button>
          </HStack>
        </VStack>

        {/* Column 2: Our Course */}
        <VStack align="start" spacing="2" flex="1" minW="200px">
          <Heading size="md">Our Course</Heading>
          <Text>Development Coach</Text>
          <Text>Web Dev Beginners</Text>
          <Text>Calligraphy Artist</Text>
        </VStack>

        {/* Column 3: Company */}
        <VStack align="start" spacing="2" flex="1" minW="200px">
          <Heading size="md">Company</Heading>
          <Text>About Us</Text>
          <Text>Become an Instructor</Text>
          <Text>Instructor</Text>
          <Text>Contact Us</Text>
          <Text>Courses</Text>
        </VStack>

        {/* Column 4: Information */}
        <VStack align="start" spacing="3" flex="1" minW="200px">
          <Heading size="md">Information</Heading>
          <HStack spacing="2">
            <Icon as={MdPhone} />
            <Text>(+001) 256 689 985</Text>
          </HStack>
          <HStack spacing="2">
            <Icon as={MdEmail} />
            <Text>learnway@gmail.com</Text>
          </HStack>
          <HStack spacing="2">
            <Icon as={MdLocationOn} />
            <Text>9FW6+599 Egham, United Kingdom</Text>
          </HStack>
          <HStack spacing="4" mt="4">
            <Icon as={FaFacebookF} boxSize="5" cursor="pointer" />
            <Icon as={FaTwitter} boxSize="5" cursor="pointer" />
            <Icon as={FaLinkedinIn} boxSize="5" cursor="pointer" />
            <Icon as={FaInstagram} boxSize="5" cursor="pointer" />
          </HStack>
        </VStack>
      </Flex>

      {/* Footer Bottom Line */}
      <Box borderTop="1px" borderColor="gray.700" mt="12" pt="6" textAlign="center">
        <Text fontSize="sm">© 2022. All rights reserved by Themesflat</Text>
        <HStack spacing="4" justify="center" mt="2">
          <Text cursor="pointer">Support</Text>
          <Text cursor="pointer">Privacy</Text>
          <Text cursor="pointer">Policy</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
