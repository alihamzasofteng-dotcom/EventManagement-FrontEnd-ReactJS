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
import { MdOutlineFastfood } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { GiChickenOven } from "react-icons/gi";
import { motion } from "framer-motion";
import rc1 from "../assets/rc1.avif";
import rc2 from "../assets/rc2.jpg";
import rc3 from "../assets/rc3.jpg";
import rc5 from "../assets/rc5.jpg";
import rc7 from "../assets/rc7.jpg";
import rc8 from "../assets/rc8.webp";
import imran from "../assets/imran.jpeg";
import hina from "../assets/hina.jpeg";
import shoaib from "../assets/shoaib.jpg";
import sarah from "../assets/sarah.jpg";
import HomePageReview from "../components/HomePageReview";

const CateringPage = () => {
  const sections = [
    {
      id: "section1",
      title: "What Our Clients Say",
      content: `Our clients see us as more than just event planners; they view us as trusted partners in their most cherished moments. From grand weddings to intimate celebrations, they commend our ability to bring their dreams to life with precision and artistry. They speak of our attention to detail, the personal touch we add, and our ability to transform their vision into breathtaking reality. We often hear how our dedication and professionalism have left a lasting impression, creating unforgettable memories for their families and guests. Their words inspire us to continue delivering excellence and innovation in every event.`,
      images: [],
    },
    {
      id: "section2",
      title: "A Legacy of Excellence",
      content: `Over the years, The Graceful Company has built a reputation that stands as a testament to our commitment to quality and creativity. Our clients value the trust and reliability we bring to the table, knowing that we consistently go above and beyond to exceed expectations. They recognize our expertise in blending tradition with modern aesthetics, delivering events that are timeless and elegant. This legacy of excellence is something we hold dear, as it reflects the strong relationships we have forged and the countless moments of joy we have been privileged to create.`,
      images: [],
    },
    {
      id: "section3",
      title: "Crafting Unique Experiences",
      content: `Each client has their own story, and we take pride in crafting unique experiences that reflect their individuality. Our clients appreciate our ability to listen deeply and understand their desires, translating them into events that are as personal as they are stunning. From the smallest details to the grandest designs, they often highlight our innovative approach and seamless execution. Their feedback underscores our dedication to making every celebration truly one of a kind, leaving an indelible mark on their hearts and the hearts of their guests.`,
      images: [],
    },
    {
      id: "section4",
      title: "Building Lasting Relationships",
      content: `The trust and connection we build with our clients extend beyond the events themselves. Many speak of the friendships that have blossomed through the planning process, as we work closely to ensure their satisfaction. They commend our transparency, professionalism, and genuine passion for making their dreams come true. This bond is what makes our work fulfilling and allows us to serve not just as event planners but as partners in their journey of celebration. Their loyalty and referrals are a reflection of the deep trust we have earned over the years.`,
      images: [],
    },
    {
      id: "section5",
      title: "Creating Cherished Memories",
      content: `The ultimate measure of our success is the joy and satisfaction of our clients. They often share how our events have become the highlight of their lives, cherished memories they revisit time and again. Whether it’s the glow of a bride’s smile or the laughter shared by families and friends, these moments of pure happiness define who we are. Our clients celebrate our ability to turn fleeting moments into lifelong memories, and their heartfelt testimonials motivate us to continue delivering events that touch lives and create lasting legacies.`,
      images: [],
    },
  ];
  const testimonials = [
    {
      bg: "pink.100",
      img: imran, // Path to Imran's image
      heading: "Imran Abbas",
      headingBg: "pink.600",
      description:
        "The team exceeded my expectations. Every detail of the event was breathtaking!",
    },
    {
      bg: "blue.100",
      img: hina, // Path to Hina's image
      heading: "Hina Altaf",
      headingBg: "blue.600",
      description:
        "I couldn’t have asked for a better service. They truly know how to make an event special!",
    },
    {
      bg: "green.100",
      img: shoaib, // Path to Shoaib's image
      heading: "Shoaib Akhtar",
      headingBg: "green.600",
      description: "Absolutely flawless! I’ll cherish this experience forever.",
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
          <Icon as={MdReviews} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={rc1}
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
            Testimonials And Reviews
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={MdReviews} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center" marginTop="-80px">
        <HomePageReview />
      </Box>
      <Box gridColumn="1 / span 2" textAlign="center" marginBottom="10px">
        <VStack spacing={10} align="center">
          {testimonials.map((testimonial, index) => (
            <Flex
              key={index}
              bg={testimonial.bg}
              borderRadius="lg"
              boxShadow="xl"
              align="center"
              p={6}
              gap={8}
              w="90%"
              maxW="1200px"
              position="relative"
            >
              {/* Rotating Celebrity Image */}
              <motion.div
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginLeft: "80px",
                  marginRight: "50px",
                }}
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <img
                  src={testimonial.img} // Pass the image directly
                  alt={testimonial.heading}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>

              {/* Testimonial Details */}
              <VStack align="flex-start" spacing={3} flex="1">
                <Heading
                  size="lg"
                  fontFamily="serif"
                  fontWeight="600"
                  textAlign="center"
                  bg={testimonial.headingBg}
                  bgClip="text"
                  fontSize="30px"
                >
                  {testimonial.heading}
                </Heading>
                <Divider
                  borderColor="black"
                  // borderWidth="2px"
                  // borderStyle="dotted"
                  maxW="650px"
                />
                <Text fontSize="lg" color="gray.700" fontFamily="serif">
                  {testimonial.description}
                </Text>
              </VStack>
            </Flex>
          ))}
        </VStack>
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
      {/* <Box gridColumn="1 / span 2" textAlign="center" mb={12}>
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
        </Heading> */}
      {/* <Box bg="gray.100" p={8} borderRadius="lg" maxW="600px" mx="auto">
          <HStack spacing={4} align="center" mb={4}>
            <Image
              src={sarah}
              alt="Client"
              borderRadius="full"
              boxSize="100px"
              // content="fit"
            />
            <VStack align="start" marginLeft="10px">
              <Heading size="lg" fontFamily="inter">
                Sarah Khan
              </Heading>
              <Text fontSize="sm" color="blue.700" fontWeight="medium">
                Celebrity (Our Client)
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
            Their attention to detail and professionalism were outstanding."
          </Text>
        </Box> */}
      {/* </Box> */}

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

export default CateringPage;
