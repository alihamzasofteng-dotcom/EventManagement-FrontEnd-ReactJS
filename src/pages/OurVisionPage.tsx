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
import vision1 from "../assets/vision1.jpg";
import vision2 from "../assets/vision2.jpeg";
import sarah from "../assets/sarah.jpg";

const CateringPage = () => {
  const sections = [
    {
      id: "section1",
      title: "Our Vision",
      content: `At The Graceful Company, our vision is to redefine the art of event management by creating experiences that are both extraordinary and unforgettable. As experts in handling all types of events, especially weddings, we aim to set new benchmarks in creativity, precision, and execution. We believe that every event is a unique story waiting to be told, and our role is to craft that story with unparalleled finesse.
      
          Our focus is on understanding the individuality of our clients and transforming their dreams into reality. Whether it's a lavish wedding celebration or an intimate family gathering, we bring the same level of passion and dedication to every project. We aspire to be the go-to event management firm for those who seek perfection, innovation, and a touch of elegance in their celebrations.
      
          Guided by our core values of integrity, creativity, and client satisfaction, we continuously evolve to stay ahead of industry trends. Our team of seasoned professionals is committed to delivering exceptional service and ensuring that each event is a seamless blend of tradition and modernity. By combining our expertise with your vision, we create moments that leave an indelible mark on the hearts of all who attend. This is the essence of our vision: to transform events into cherished memories that stand the test of time.`,
      images: [vision1],
    },
    {
      id: "section2",
      title: "Our Mission",
      content: `Our mission at The Graceful Company is to make every event a masterpiece. We are driven by a deep commitment to excellence and a passion for creating unique experiences that resonate with our clients. As wedding specialists and versatile event managers, we understand the importance of each occasion and treat it with the care and attention it deserves.
      
          Our mission is built on a foundation of innovation, collaboration, and meticulous planning. We strive to bring fresh ideas to the table, tailoring each event to reflect the personal style and preferences of our clients. From selecting the perfect venue to coordinating the finest details, our goal is to ensure that every aspect of the event surpasses expectations.
      
          We take pride in being more than just event planners; we are storytellers, architects of joy, and curators of unforgettable moments. By fostering strong relationships with trusted vendors and utilizing state-of-the-art resources, we provide a seamless experience that allows our clients to focus on celebrating while we handle the rest. Our mission is not only to meet your expectations but to exceed them, delivering events that are as unique and memorable as the people they are for.`,
      images: [],
    },
    {
      id: "section3",
      title: "Crafting Memories",
      content: `At The Graceful Company, we believe that the true essence of event management lies in creating memories that last a lifetime. Our philosophy is simple yet profound: every event should evoke emotions, tell a story, and leave a lasting impression. As wedding experts, we bring a touch of magic to every celebration, ensuring that no detail is overlooked.
      
          From the initial consultation to the final moments of the event, we work closely with our clients to understand their vision and translate it into reality. Our team specializes in blending creativity with practicality, ensuring that each event is as beautiful as it is well-executed. Whether it’s an opulent wedding or a chic corporate gathering, our approach is always centered on delivering excellence.
      
          Our dedication to crafting memories extends beyond the events themselves. We build lasting relationships with our clients, becoming a trusted partner in their journey of celebration. By combining innovative ideas, meticulous planning, and heartfelt execution, we ensure that every event becomes a cherished memory for years to come.`,
      images: [],
    },
    {
      id: "section4",
      title: "Elevating Weddings",
      content: `Weddings are at the heart of what we do at The Graceful Company. We take immense pride in our ability to elevate wedding celebrations into extraordinary experiences that reflect the couple's unique love story. Our team of wedding specialists brings a wealth of experience, creativity, and passion to every project, ensuring that each wedding is nothing short of spectacular.
      
          From traditional Mehndi ceremonies to contemporary receptions, we tailor every aspect of the celebration to suit the couple's preferences and cultural heritage. Our approach combines timeless traditions with modern elegance, creating weddings that are as meaningful as they are beautiful. We understand the emotional significance of weddings and work tirelessly to ensure that every detail is perfect, from the decor and catering to the music and lighting.
      
          At The Graceful Company, we go beyond planning; we create unforgettable experiences that leave a lasting impression on everyone involved. Our commitment to excellence, attention to detail, and personalized service make us the ideal partner for couples looking to celebrate their love in style. Let us help you turn your dream wedding into a reality.`,
      images: [rc5],
    },
    {
      id: "section5",
      title: "Innovative Event Design",
      content: `Innovation is the cornerstone of our approach to event management. At The Graceful Company, we believe in pushing the boundaries of creativity to deliver events that are truly one of a kind. Our team of designers and planners works tirelessly to bring fresh ideas and unique concepts to every project, ensuring that each event stands out for all the right reasons.
      
          Whether it’s incorporating cutting-edge technology or crafting bespoke themes, we thrive on transforming ordinary spaces into extraordinary venues. Our innovative event design process begins with understanding the client’s vision and translating it into a cohesive and captivating experience. From the grandest weddings to the most intimate gatherings, we approach each event with a spirit of innovation and a commitment to excellence.
      
          By staying ahead of industry trends and embracing new ideas, we create events that are not only beautiful but also deeply memorable. With The Graceful Company, you can be confident that your celebration will be a masterpiece of design and execution, leaving a lasting impression on all who attend.`,
      images: [],
    },
    {
      id: "section6",
      title: "Flawless Execution",
      content: `Flawless execution is at the core of everything we do at The Graceful Company. We understand that even the most beautifully designed events can fall short without meticulous planning and seamless coordination. That’s why we dedicate ourselves to ensuring that every element of your event comes together perfectly.
      
          Our team of experienced professionals oversees every detail, from vendor coordination to timeline management, leaving nothing to chance. We pride ourselves on our ability to anticipate challenges and address them proactively, ensuring that your event runs smoothly from start to finish. With our expertise, you can relax and enjoy your celebration, confident that every aspect is under control.
      
          At The Graceful Company, flawless execution means more than just getting things right; it means creating an experience that feels effortless and enjoyable for our clients and their guests. Trust us to bring your vision to life with precision and professionalism, making your event truly unforgettable.`,
      images: [],
    },
    {
      id: "section7",
      title: "Unmatched Expertise",
      content: `With decades of experience in the event management industry, The Graceful Company has built a reputation for unmatched expertise. Our team comprises seasoned professionals who bring a wealth of knowledge, creativity, and passion to every project. As wedding specialists, we have mastered the art of blending tradition and innovation to create celebrations that are as meaningful as they are beautiful.
      
          Our expertise extends beyond weddings to include a wide range of events, from corporate gatherings to private celebrations. We understand the unique challenges of each type of event and are adept at finding creative solutions that ensure success. By staying up-to-date with industry trends and continuously honing our skills, we maintain our position as leaders in the field.
      
          At The Graceful Company, unmatched expertise means more than just experience; it means a commitment to excellence and a passion for creating unforgettable moments. Let us put our expertise to work for you, turning your vision into reality with style and sophistication.`,
      images: [],
    },
    {
      id: "section8",
      title: "A Legacy of Excellence",
      content: `The Graceful Company’s legacy is built on a foundation of excellence and innovation. For over 25 years, we have been at the forefront of the event management industry, setting new standards for quality and creativity. Our journey began with a simple mission: to create extraordinary events that leave a lasting impression.
      
          Over the years, we have grown into a trusted name in the industry, known for our ability to deliver exceptional results. From high-profile weddings to corporate events, our portfolio is a testament to our dedication and expertise. We take pride in our ability to blend tradition and modernity, creating celebrations that are as timeless as they are contemporary.
      
          At The Graceful Company, our legacy is not just about the events we’ve created; it’s about the relationships we’ve built and the memories we’ve helped our clients create. As we look to the future, we remain committed to upholding our legacy of excellence, continuing to innovate and inspire with every event we undertake.`,
      images: [rc7],
    },
    {
      id: "section9",
      title: "Sustainability in Celebrations",
      content: `At The Graceful Company, we believe that celebrating responsibly is not just a choice but a responsibility. That’s why we are committed to incorporating sustainability into every aspect of our events. From using eco-friendly materials to minimizing waste, we strive to create celebrations that are as kind to the planet as they are beautiful.
      
          Our approach to sustainability is rooted in innovation and practicality. We work closely with our clients to incorporate sustainable practices without compromising the quality or elegance of their events. Whether it’s sourcing locally produced goods or implementing energy-efficient solutions, we are constantly finding new ways to reduce our environmental impact.
      
          By choosing The Graceful Company, you are not just creating a memorable event; you are contributing to a greener future. Together, we can celebrate life’s most precious moments while preserving the planet for generations to come.`,
      images: [],
    },
    {
      id: "section10",
      title: "Client-Centric Approach",
      content: `At the heart of The Graceful Company’s success is our unwavering commitment to our clients. We believe that every event is a collaboration, and we take the time to understand our clients’ needs, preferences, and aspirations. This client-centric approach ensures that every celebration we create is a true reflection of their vision.
      
          From the initial consultation to the final moments of the event, we prioritize clear communication, transparency, and attention to detail. Our goal is to make the planning process as enjoyable and stress-free as the event itself. By listening carefully and responding proactively, we build strong relationships that last long after the celebrations are over.
      
          At The Graceful Company, our clients are more than just customers; they are partners in the creative journey. Let us work together to create an event that is not only memorable but also deeply meaningful, celebrating your unique story with style and grace.`,
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
            Our Vision
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={MdOutlineFastfood} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={vision2}
          alt="Main Event"
          borderRadius="lg"
          w="80%"
          mx="auto"
          height="750px"
          marginBottom="20px"
          objectFit="cover"
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
