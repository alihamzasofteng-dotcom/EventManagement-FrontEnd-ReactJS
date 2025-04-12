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
  ListItem,
  List,
} from "@chakra-ui/react";
import { GiMushroomHouse } from "react-icons/gi";
import { FaLaptopHouse } from "react-icons/fa";
import venue from "../assets/venue.jpg";
import papa from "../assets/papa.jpg";
import papapic1 from "../assets/papapic2.jpg";
import papapic2 from "../assets/papapic3.jpg";
import wecare3 from "../assets/wecare3.jpg";
import wecare4 from "../assets/wecare4.avif";
import wecare5 from "../assets/wecare5.jpg";
import wecare6 from "../assets/wecare6.jpeg";
import fahad from "../assets/fahad.jpg";
import years from "../assets/25years.png";

const WeCarePage = () => {
  const sections = [
    {
      id: "section1",
      title: "Rana Tariq: A Leader with 25 Years of Global Experience",
      content: `
          Rana Tariq, the visionary founder of The Graceful Company, has built an empire from the ground up with over 25 years of experience in the event planning industry. Starting from humble beginnings, Rana’s journey to success has been nothing short of inspiring. From initially starting a small operation, he has grown his company into a global leader in event planning, specializing in weddings, corporate events, and celebrity functions.
      
          With a vast network of 100s of connections with top-tier firms, celebrities, and industry leaders, Rana brings unparalleled access to resources and expertise. His extensive international experience allows him to blend diverse cultural influences into his events, creating memorable and unique experiences for clients worldwide.
      
          Rana’s journey from zero to hero is a testament to his dedication, vision, and ability to turn challenges into opportunities. He has cultivated a reputation for delivering high-quality events that exceed expectations. His expertise and relationships across the globe make him a trusted partner in bringing exceptional events to life.
      
          **Points of distinction:**
          - 25 years of event planning experience, from starting with nothing to running a global company  
          - Strong connections with celebrities, top-tier firms, and key industry players  
          - International experience, blending global trends into every event  
          - Renowned for organizing high-profile events, including celebrity gatherings and international functions  
          - A reputation for excellence, professionalism, and outstanding customer service  
          - Under Rana’s leadership, The Graceful Company continues to thrive, bringing his vast knowledge and experience to clients around the world.  
        `,
      images: [years],
    },
    {
      id: "section2",
      title: " Celebrating 25 Years of Excellence in Event Planning",
      content: `At The Graceful Company, we are proud to celebrate 25 years of unparalleled expertise in event planning. Over the years, we’ve had the honor of organizing hundreds of events across all types, from intimate weddings to large corporate functions, and everything in between. Our extensive portfolio includes high-profile events, celebrity functions, and international gatherings, ensuring that we have the experience to cater to a wide range of needs and preferences.

        Our team of experts is one of the largest and most experienced in the industry, comprising specialists with diverse skills and international backgrounds. From creative designers to logistical coordinators, we have professionals who excel in every aspect of event planning. With multiple experts on hand, we ensure that every project is handled with precision, attention to detail, and creativity. Our team's international experience allows us to bring fresh, innovative ideas from all over the world, ensuring that your event is not just memorable but truly exceptional.

        **Points of pride :**

        - 25 years of experience in event planning
        - Hundreds of successful events, including weddings, corporate functions, and celebrity gatherings
        - A team of highly skilled professionals, each with international experience
        - A trusted reputation for organizing high-profile celebrity functions and exclusive events
        - Expertise in handling large-scale events with precision and creativity
        When you choose The Graceful Company, you are choosing a firm with a proven track record of excellence and an unwavering commitment to making every event unforgettable.`,
      images: [],
    },
    {
      id: "section3",
      title: "Unmatched Expertise in Event Planning",
      content: `At The Graceful Company, we bring a wealth of expertise to every event we plan. Our team is made up of industry professionals who have years of experience in organizing diverse events. From weddings to corporate gatherings, we have successfully planned and executed events of all sizes and complexities. We understand the intricacies of event management and know how to handle every detail with precision. Our deep understanding of logistics, design, and coordination ensures that your event runs smoothly, allowing you to enjoy a stress-free celebration. When you choose us, you’re not just hiring a service—you’re gaining a partner who understands the nuances of event planning and knows how to deliver results.`,
      images: [wecare3],
    },
    {
      id: "section4",
      title: "Personalized Service for Every Client",
      content: `We believe every client deserves a unique experience. At The Graceful Company, we take the time to get to know you and understand your vision. We listen to your ideas, preferences, and needs, ensuring that every detail reflects your personality and style. Whether you’re planning an intimate gathering or a grand celebration, our team tailors our services to meet your specific requirements. We offer personalized solutions that are designed to make your event as memorable and unique as you are. Our hands-on approach and attention to detail ensure that your event will be a reflection of your vision.`,
      images: [],
    },
    {
      id: "section5",
      title: "Commitment to Excellence",
      content: `At The Graceful Company, we are committed to delivering the highest standards of service and quality. We understand that your event is a reflection of your style and taste, which is why we go above and beyond to ensure every element is executed flawlessly. From the initial planning stages to the final moments of your celebration, our team is dedicated to excellence in every aspect. Whether it’s selecting the perfect venue, curating the menu, or designing the décor, we ensure that every detail exceeds your expectations. Our commitment to excellence means that we don’t settle for anything less than perfection.`,
      images: [wecare5],
    },
    {
      id: "section6",
      title: "Seamless Event Coordination",
      content: `The success of any event lies in seamless coordination, and this is where The Graceful Company excels. Our team is skilled at managing every aspect of event planning, from logistics and scheduling to vendor coordination and on-site management. We work behind the scenes to ensure everything runs smoothly, allowing you to enjoy your special day without worrying about the details. Our experience in event coordination ensures that all moving parts come together effortlessly, creating a seamless experience for you and your guests. With us handling the coordination, you can relax and focus on making lasting memories.`,
      images: [],
    },
    {
      id: "section7",
      title: "Creative Vision and Innovative Designs",
      content: `Creativity is at the core of what we do at The Graceful Company. We believe every event should be a visual masterpiece that tells a unique story. Our design team specializes in creating innovative and beautiful concepts that bring your vision to life. From stunning décor to unique themes, we infuse creativity into every element of your event. Whether you envision an elegant wedding, a fun birthday party, or a sophisticated corporate gathering, we bring fresh ideas and cutting-edge design to make your event truly unforgettable. Our creative vision ensures that your event stands out and leaves a lasting impression.`,
      images: [wecare6],
    },
    {
      id: "section8",
      title: "Exceptional Vendor Partnerships",
      content: `At The Graceful Company, we have established strong relationships with top-tier vendors across various industries, from florists and photographers to caterers and entertainment providers. Our trusted network ensures that you have access to the best resources for your event, all vetted for quality and reliability. We collaborate with our vendors to ensure that every aspect of your event is executed flawlessly. Whether it’s a gourmet catering experience or breathtaking floral arrangements, our vendor partnerships guarantee that your event is in the hands of professionals who share our commitment to excellence.`,
      images: [],
    },
    {
      id: "section9",
      title: "Attention to Detail",
      content: `Details are what make an event truly exceptional, and at The Graceful Company, we never overlook them. We understand that every small element contributes to the overall experience, and that’s why we meticulously plan every detail. From the choice of linens to the arrangement of seating, we ensure that every aspect of your event is perfectly executed. Our team is dedicated to creating an environment where every detail works together harmoniously, resulting in a cohesive and visually stunning event. With our attention to detail, we guarantee that your event will be seamless and memorable.`,
      images: [wecare4],
    },
    {
      id: "section10",
      title: "Sustainable Event Planning",
      content: `Sustainability is a core value at The Graceful Company, and we are committed to reducing the environmental impact of our events. We incorporate eco-friendly practices into every aspect of our event planning process, from selecting sustainable materials for décor to minimizing waste during the event. We work with vendors who share our commitment to sustainability and ensure that every decision we make is in line with our eco-friendly values. When you choose us, you can be confident that your event will not only be beautiful and memorable but also responsible and environmentally conscious.`,
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
            Why Us
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={FaLaptopHouse} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={papapic2}
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

                {/* Rendering content */}
                <Text
                  fontSize="lg"
                  mb={6}
                  marginLeft="250px"
                  fontFamily="Roboto"
                  letterSpacing="1px"
                  lineHeight="35px"
                >
                  {section.content.split("\n").map((line, i) => (
                    <Text key={i} mb={2}>
                      {line}
                    </Text>
                  ))}
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
                      objectFit="contain"
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
