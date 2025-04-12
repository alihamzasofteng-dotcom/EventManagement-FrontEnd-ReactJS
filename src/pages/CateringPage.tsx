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
import { GiChickenOven } from "react-icons/gi";
import rc1 from "../assets/rc1.avif";
import rc2 from "../assets/rc2.jpg";
import rc3 from "../assets/rc3.jpg";
import rc5 from "../assets/rc5.jpg";
import rc7 from "../assets/rc7.jpg";
import rc8 from "../assets/rc8.webp";
import sarah from "../assets/sarah.jpg";

const CateringPage = () => {
  const sections = [
    {
      id: "section1",
      title: "Our Legacy",
      content: `The Graceful Company, led by Rana Tariq, has been organizing prestigious events for over 25 years. Our journey began with a passion for curating magical moments and providing unforgettable experiences. We take immense pride in our ability to blend creativity, tradition, and modernity seamlessly. From humble beginnings, we've grown into an industry leader, renowned for our innovative approach and client-focused services. Over the decades, we have built a strong reputation as a company that consistently delivers excellence, whether it’s a grand wedding or a corporate event.
  
      What sets us apart is our unwavering commitment to quality and our personalized approach to each event. We understand that every occasion is unique, and we strive to make it special by paying attention to the smallest details. Whether it’s a traditional Mehndi ceremony or a contemporary corporate gala, our expertise ensures every event leaves an everlasting impression. Our legacy is not just about the events we create but the relationships we build with our clients, making their dreams come to life in the most spectacular ways.`,
      images: [rc3],
    },
    {
      id: "section2",
      title: "Why Choose Us?",
      content: `With thousands of events under our belt, including celebrity weddings and corporate gatherings, we stand out for our commitment to making every event unique. We provide personalized consultations to ensure that your vision is brought to life, down to the smallest details. Our team comprises highly experienced professionals who are passionate about creating memorable events that exceed expectations. Whether you are planning an intimate celebration or a large-scale extravaganza, we offer the expertise and resources to make it a success.
  
      We believe that your event is a reflection of your personality and style. That's why we go the extra mile to ensure every element resonates with your individuality. From bespoke themes to innovative setups, we bring your ideas to life with precision and creativity. Our vast network of reliable vendors and our ability to adapt to your needs ensure that your event unfolds seamlessly, leaving you free to cherish every moment without worry.`,
      images: [],
    },
    {
      id: "section3",
      title: "Tailored Experiences",
      content: `Each event is crafted to reflect the personality and style of our clients. At The Graceful Company, we take the time to understand your preferences, values, and vision, ensuring every detail aligns with your expectations. Whether you desire a glamorous wedding reception or a minimalistic corporate affair, we tailor every aspect to suit your unique requirements.
  
      Our personalized approach extends to every corner of event planning, from selecting the perfect venue to curating custom menus and decor. We believe that every client deserves an event that feels like it was made just for them. By combining your ideas with our expertise, we create experiences that are not only beautiful but also deeply meaningful.`,
      images: [],
    },
    {
      id: "section4",
      title: "Attention to Detail",
      content: `From decor to catering, every detail is meticulously handled to ensure perfection. We understand that it’s the little things that make a big difference, and we leave no stone unturned in planning and execution. Every element, from the color scheme to the table settings, is carefully chosen to create a cohesive and stunning aesthetic.
  
      Our team of professionals is dedicated to making sure that your event flows seamlessly. From pre-event planning to on-the-day coordination, we oversee every aspect with precision. This meticulous approach allows us to deliver events that not only meet but exceed our clients' expectations, leaving a lasting impression on all attendees.`,
      images: [rc5],
    },
    {
      id: "section5",
      title: "Trusted Partnerships",
      content: `Our vendors and partners share our commitment to excellence. Over the years, we have cultivated strong relationships with some of the most reliable and talented professionals in the industry. This allows us to provide top-notch services, whether it's catering, decor, lighting, or entertainment.
  
      By collaborating with trusted partners, we ensure that every aspect of your event is handled with the utmost care and professionalism. Our network of vendors is carefully vetted to meet our high standards, so you can rest assured that you’re in good hands. Together, we work as a cohesive team to bring your vision to life.`,
      images: [],
    },
    {
      id: "section6",
      title: "Innovative Concepts",
      content: `We bring fresh ideas and unique concepts to every event. Innovation is at the heart of what we do, and we thrive on pushing the boundaries of creativity to deliver extraordinary experiences. Whether it’s introducing cutting-edge technology or designing bespoke themes, our approach ensures your event is truly one of a kind.
  
      By staying ahead of trends and embracing new ideas, we create events that captivate and inspire. Our team constantly seeks out new ways to elevate your celebrations, ensuring they stand out for all the right reasons. With The Graceful Company, you’re not just getting an event—you’re getting a masterpiece.`,
      images: [rc7],
    },
    {
      id: "section7",
      title: "Seamless Coordination",
      content: `Our team ensures every element comes together flawlessly. Event planning can be complex, but with The Graceful Company, you can trust that every detail is under control. From coordinating with vendors to managing timelines, we handle it all, so you don’t have to.
  
      Our expertise in seamless coordination allows us to anticipate potential challenges and address them proactively. This ensures your event runs smoothly from start to finish, allowing you and your guests to relax and enjoy the occasion without any distractions.`,
      images: [],
    },
    {
      id: "section8",
      title: "Exceptional Catering",
      content: `Our menus are curated to delight and impress every palate. From traditional dishes to modern culinary creations, we offer a wide variety of options to suit your taste and preferences. Our catering team is dedicated to delivering not just food but an experience that leaves your guests talking about it long after the event.
  
      We use only the freshest ingredients and innovative techniques to create dishes that are as visually stunning as they are delicious. Whether it’s a formal dinner or a casual buffet, our catering services are designed to enhance your event with flavors that are simply unforgettable.`,
      images: [rc8],
    },
    {
      id: "section9",
      title: "Sustainability Practices",
      content: `We prioritize eco-friendly practices and minimal waste. At The Graceful Company, we believe in celebrating responsibly by incorporating sustainability into every aspect of our events. From using biodegradable materials to minimizing food waste, we strive to reduce our environmental impact.
  
      Our commitment to sustainability doesn’t compromise the quality or elegance of our events. In fact, it enhances them by aligning with modern values and creating a positive impact. When you choose us, you’re not just choosing an exceptional event—you’re choosing a greener future.`,
      images: [],
    },
    {
      id: "section10",
      title: "Client Testimonials",
      content: `Hear directly from our satisfied clients. Our clients are at the heart of everything we do, and their feedback is a testament to our dedication and expertise. Over the years, we’ve had the privilege of working with wonderful people who have trusted us with their most important moments.
  
      Their kind words and glowing reviews inspire us to continue delivering excellence. From heartfelt thank-you notes to enthusiastic referrals, our clients’ testimonials reflect the trust and satisfaction we strive to achieve in every project.`,
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
          <Icon as={GiChickenOven} color="#0A003C" boxSize={12} />
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
            Catering
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={MdOutlineFastfood} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={rc2}
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

export default CateringPage;
