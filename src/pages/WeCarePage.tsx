import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Image,
  Link,
  Divider,
  Input,
  Textarea,
  Button,
  HStack,
  Grid,
  Icon,
} from "@chakra-ui/react";
import { GiMushroomHouse } from "react-icons/gi";
import plaza from "../assets/plaza.webp";
import { FaLaptopHouse } from "react-icons/fa";
import venue from "../assets/venue.jpg";
import venue2 from "../assets/venue2.jpeg";
import wecare1 from "../assets/wecare1.jpg";
import wecare2 from "../assets/wecare2.jpg";
import wecare3 from "../assets/wecare3.jpg";
import wecare4 from "../assets/wecare4.avif";
import wecare5 from "../assets/wecare5.jpg";
import wecare6 from "../assets/wecare6.jpeg";
import venue3 from "../assets/venue3.webp";
import venue4 from "../assets/venue4.avif";
import venue5 from "../assets/venue5.webp";
import fahad from "../assets/fahad.jpg";

const WeCarePage = () => {
  const sections = [
    {
      id: "section1",
      title: "We Care About Your Comfort",
      content: `At The Graceful Company, we prioritize your comfort above all else. Our dedicated team works tirelessly to ensure every element of your experience is designed with care and attention to detail. Whether you’re planning a large-scale event or an intimate gathering, we strive to make every moment stress-free and enjoyable.
    
            Comfort extends beyond physical amenities; it’s about creating an atmosphere where you and your guests feel at ease. From selecting the perfect venue to arranging seamless logistics, our goal is to make your event planning journey as smooth as possible. Let us take the burden off your shoulders so you can focus on cherishing unforgettable moments with your loved ones.`,
      images: [wecare2],
    },
    {
      id: "section2",
      title: "We Care About Your Experience",
      content: `Your experience is at the heart of everything we do at The Graceful Company. We believe that every client deserves a journey filled with joy, excitement, and ease as they plan their special event. That’s why we focus on crafting an experience that is as memorable as the event itself.
    
            From the moment you contact us to the final moments of your celebration, we are by your side, ensuring everything is executed to perfection. At The Graceful Company, we care about creating not just events but experiences that leave lasting impressions.`,
      images: [],
    },
    {
      id: "section3",
      title: "We Care About Your Memories",
      content: `Memories are what stay with us long after the event is over, and at The Graceful Company, we are passionate about helping you create unforgettable ones. We work tirelessly to ensure every detail of your celebration is picture-perfect and aligned with your vision.
    
            From breathtaking décor to seamless execution, we aim to turn your dream into reality. Every smile, every laugh, and every special moment is carefully crafted to leave a lasting impression on you and your guests.`,
      images: [wecare3],
    },
    {
      id: "section4",
      title: "We Care About Your Budget",
      content: `Planning a memorable event shouldn't mean compromising on your budget. At The Graceful Company, we care deeply about providing you with the best value for your investment. We work closely with you to create a plan that respects your financial goals without sacrificing quality or elegance.
    
            Our team specializes in delivering high-quality results tailored to budgets of all sizes. Whether you’re planning an intimate gathering or an extravagant event, we focus on cost-effective solutions that never compromise on excellence.`,
      images: [],
    },
    {
      id: "section5",
      title: "We Care About Your Vision",
      content: `Your vision is the foundation of everything we create at The Graceful Company. We take the time to understand your dreams, preferences, and style, ensuring that your event is a true reflection of who you are. Our team works collaboratively with you, turning your ideas into reality.
    
            From conceptual design to flawless execution, we prioritize your input and satisfaction at every step. With us, your vision isn't just respected—it’s celebrated.`,
      images: [wecare5],
    },
    {
      id: "section6",
      title: "We Care About Your Guests",
      content: `Your guests deserve to feel valued and cared for, and at The Graceful Company, we ensure they do. We create a warm, welcoming environment that leaves a lasting impression on everyone who attends your event. From personalized touches to impeccable hospitality, we aim to make each guest feel special.
    
            Our team considers every detail, from seating arrangements to dietary needs, ensuring that your guests are as delighted as you are.`,
      images: [],
    },
    {
      id: "section7",
      title: "We Care About Innovation",
      content: `Innovation is at the heart of our services. At The Graceful Company, we embrace creativity and cutting-edge techniques to make your event truly unique. Whether it's incorporating the latest trends or using advanced technologies, we bring fresh ideas to every project.
    
            Our innovative approach ensures your event stands out, leaving a lasting impact on your guests and creating memories unlike any other.`,
      images: [wecare6],
    },
    {
      id: "section8",
      title: "We Care About Sustainability",
      content: `At The Graceful Company, we understand the importance of protecting our planet. That’s why we take sustainable practices seriously. From eco-friendly décor to reducing waste, we integrate green initiatives into our event planning process.
    
            We strive to minimize our environmental footprint while delivering events that are as beautiful as they are responsible.`,
      images: [],
    },
    {
      id: "section9",
      title: "We Care About Every Detail",
      content: `Details matter, and at The Graceful Company, we ensure no detail goes unnoticed. From color palettes to table settings, every aspect of your event is meticulously planned and executed with precision. 
    
            Our commitment to excellence means that each element works in harmony to create a seamless, stunning experience for you and your guests.`,
      images: [wecare4],
    },
    {
      id: "section10",
      title: "We Care About You",
      content: `Above all, we care about you. At The Graceful Company, our mission is to make you feel supported, valued, and celebrated. We listen to your needs, prioritize your satisfaction, and go above and beyond to make your event everything you’ve dreamed of and more.
    
            Your happiness is our ultimate goal, and every step we take is rooted in our commitment to making your special moments truly unforgettable.`,
      images: [],
    },
  ];

  return (
    <Grid templateColumns="1fr" gap={4} marginTop="40px">
      <Box
        gridColumn="1 / span 2"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        p={4}
        borderRadius="2xl"
        boxShadow="lg"
        w="80%"
        mx="auto"
        position="relative"
        marginBottom="20px"
        marginTop="10px"
        // top="-40px"
        zIndex="1"
        // border="1px"
      >
        {/* Left Section: FaEquals Icon */}
        <Box
          // border="2px solid gray"
          // borderRadius="50%"
          p={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon as={GiMushroomHouse} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={venue}
            alt="Profile Picture"
            borderRadius="full"
            boxSize="60px"
            mb={2}
            marginRight="20px"
          />
          <Heading
            textAlign="center"
            my="4"
            fontSize="40px"
            fontFamily="Helvetica-Bold"
            bgGradient="linear-gradient(to top, #141e30, #243b55);"
            bgClip="text"
          >
            We Care
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={FaLaptopHouse} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={wecare1}
          alt="Main Event"
          borderRadius="lg"
          w="80%"
          mx="auto"
          height="750px"
          marginBottom="20px"
        />
      </Box>

      {/* Main Content */}
      <Flex justifyContent="center">
        <HStack alignItems="flex-start" spacing={10} w="100%">
          {/* Main Content */}
          <Box flex="1" textAlign="left">
            {sections.map((section, index) => (
              <Box
                id={section.id}
                textAlign="left"
                mb={12}
                key={index}
                maxWidth="1200px"
                mx="auto"
              >
                <Heading
                  mb={4}
                  textAlign="center"
                  marginLeft="250px"
                  fontFamily="Helvetica-Bold"
                  color="#081F51"
                >
                  {section.title}
                </Heading>
                <Text
                  fontSize="lg"
                  mb={6}
                  marginLeft="250px"
                  fontFamily="Roboto"
                  letterSpacing="1px"
                  lineHeight="35px"
                  // color="#081F51"
                >
                  {section.content}
                </Text>
                <Flex wrap="wrap" gap={4}>
                  {section.images.map((image, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={image}
                      alt={`Image for ${section.title}`}
                      borderRadius="lg"
                      w="920px"
                      mx="250px"
                      maxH="600px"
                      maxW="920px"
                    />
                  ))}
                </Flex>
              </Box>
            ))}
          </Box>

          {/* Quick Navigation */}
          <Box
            bg="white"
            p={4}
            boxShadow="lg"
            borderRadius="lg"
            minW="250px"
            textAlign="left"
            marginTop="100px"
            border="2px solid"
          >
            <Heading
              as="h4"
              size="md"
              mb={4}
              fontFamily="Helvetica-Bold"
              color="#081F51"
            >
              Quick Navigation
            </Heading>
            <VStack align="start" spacing={3}>
              {sections.map((section, index) => (
                <Link
                  key={index}
                  href={`#${section.id}`}
                  fontSize="md"
                  color="#0A0050"
                  _hover={{ textDecoration: "underline" }}
                  fontFamily="Helvetica-Bold"
                >
                  {section.title}
                </Link>
              ))}
            </VStack>
          </Box>
        </HStack>
      </Flex>

      {/* Feedback Section */}
      <Box gridColumn="1 / span 2" textAlign="center" mb={12}>
        <Divider
          my={12}
          borderColor="black"
          borderWidth="1px"
          maxW="950px"
          marginLeft="300px"
        />
        <Heading
          as="h3"
          size="lg"
          mb={4}
          fontFamily="Helvetica-Bold"
          color="#081F51"
        >
          Feedback from Clients
        </Heading>
        <Box bg="gray.100" p={8} borderRadius="lg" maxW="600px" mx="auto">
          <HStack spacing={4} align="center" mb={4}>
            <Image
              src={fahad}
              alt="Client"
              borderRadius="full"
              boxSize="100px" // Ensures the image is a consistent circular size
              objectFit="cover" // Ensures the image fits within the box without stretching
            />
            <VStack align="start" marginLeft="10px">
              <Heading size="lg" fontFamily="inter">
                Fahad Mustafa
              </Heading>
              <Text fontSize="sm" color="blue.700" fontWeight="medium">
                Tv Star (Our Client)
              </Text>
            </VStack>
          </HStack>
          <Text
            fontSize="lg"
            fontFamily="inter"
            textAlign="left"
            marginTop="20px"
          >
            "The Graceful Company made our special day truly unforgettable.
            Their attention to detail and professionalism were second to none.
            Highly recommended!"
          </Text>
        </Box>
      </Box>

      {/* Get in Touch Section */}
      <Box gridColumn="1 / span 2" textAlign="center" mb={12}>
        <Divider
          my={12}
          borderColor="black"
          borderWidth="1px"
          maxW="950px"
          marginLeft="300px"
        />
        <Text
          textAlign="center"
          fontSize="lg"
          color="#0071DC"
          fontWeight={600}
          fontFamily="inter"
        >
          Get in Touch
        </Text>
        <Heading
          as="h3"
          size="lg"
          mb={4}
          fontFamily="Helvetica-Bold"
          color="#081F51"
        >
          Feel Free to Contact Us
        </Heading>
        <Text fontSize="lg" mb={6} fontFamily="Helvetica-Bold">
          Reach out to us today and let us make it unforgettable.
        </Text>
        <Box maxW="600px" mx="auto">
          <HStack spacing={4} mb={4}>
            <Input
              placeholder="Your Name *"
              isRequired
              focusBorderColor="blue.500"
            />
            <Input
              placeholder="Your Email *"
              isRequired
              focusBorderColor="blue.500"
            />
          </HStack>

          <Textarea
            placeholder="Your Request *"
            mb={4}
            isRequired
            focusBorderColor="blue.500"
            h="220px" // Increase the height of the textarea vertically
          />

          <Button
            w="full"
            bg="#FFC221"
            color="#081F51"
            size="lg"
            mt={{ base: 4, md: 0 }}
            _hover={{
              bg: "#E6B31D",
              transform: "translateX(7px)",
            }}
          >
            Send Response
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default WeCarePage;
