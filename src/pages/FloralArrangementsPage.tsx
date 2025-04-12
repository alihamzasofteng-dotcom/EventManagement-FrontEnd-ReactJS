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
import { IoRose } from "react-icons/io5";

import { BsFlower1 } from "react-icons/bs";

import floral1 from "../assets/floral1.jpg";

import floral2 from "../assets/floral2.webp";
import floral3 from "../assets/floral3.jpg";
import floral4 from "../assets/floral4.webp";
import floral5 from "../assets/floral5.jpeg";
import venue5 from "../assets/venue5.webp";
import fahad from "../assets/fahad.jpg";

const FloralArrangementsPage = () => {
  const sections = [
    {
      id: "section1",
      title: "Mastering Floral Decorations",
      content: `At The Graceful Company, we have spent 25 years perfecting the art of floral arrangements. Our expertise spans all types of flowers, including both fresh and artificial varieties. Whether it’s a grand wedding, a corporate event, or a private celebration, we create stunning floral decorations that captivate and inspire. 
      
          Our team understands that flowers are more than just decorations; they set the tone for your event. We use our deep knowledge of color palettes, flower types, and arrangement styles to craft designs that align with your theme and vision. From classic elegance to modern chic, our floral designs are tailored to your unique preferences.
      
          Over the years, we have built strong connections with leading suppliers to source the finest blooms, ensuring quality and freshness. Our artificial flowers are also carefully selected to mimic nature’s beauty while offering versatility and longevity.
      
          Trusted by big celebrities and organizations, we have transformed countless venues with breathtaking floral arrangements. Our commitment to detail, creativity, and professionalism has earned us a reputation as leaders in the industry. Let us bring your vision to life with flowers that leave a lasting impression on your guests.`,
      images: [floral2],
    },
    {
      id: "section2",
      title: "Fresh Flowers for Every Occasion",
      content: `Fresh flowers bring vibrancy, fragrance, and life to any event, and at The Graceful Company, we specialize in sourcing and arranging the finest blooms. Each stem we use is carefully selected for its quality, beauty, and freshness, ensuring that our floral arrangements exceed your expectations.
      
          From weddings to corporate events, we create designs that reflect the essence of your celebration. Our fresh floral arrangements are tailored to your style and preferences, whether you desire soft pastel hues for a romantic theme or bold, vibrant colors for a lively atmosphere.
      
          Our team collaborates closely with you to understand your vision and the unique requirements of your event. We combine this insight with our expertise to design centerpieces, bouquets, garlands, and backdrops that elevate the ambiance of your venue.
      
          Additionally, we work with trusted flower suppliers to ensure that each bloom arrives fresh and pristine. To maintain their beauty throughout your event, we use innovative techniques for preparation and preservation.
      
          With 25 years of experience and countless satisfied clients, we are proud to be a trusted name in fresh floral arrangements. Let us enhance your celebration with flowers that embody elegance, charm, and timeless beauty.`,
      images: [],
    },
    {
      id: "section3",
      title: "Artificial Floral Elegance",
      content: `Artificial flowers offer unmatched versatility and durability, and at The Graceful Company, we specialize in crafting stunning arrangements that look as beautiful as the real thing. Our artificial floral designs are perfect for events that demand long-lasting decor without compromising on aesthetics.
      
          We use premium-quality artificial flowers that are indistinguishable from fresh blooms. These flowers retain their beauty regardless of weather conditions, making them ideal for both indoor and outdoor events. With a wide range of styles and colors available, our artificial arrangements can be customized to match any theme or preference.
      
          From intricate table centerpieces to grand floral installations, our team combines artistry and innovation to create breathtaking designs. We also integrate artificial flowers seamlessly with fresh blooms, greenery, and other elements for a natural yet unique look.
      
          Over the years, we’ve had the honor of designing artificial floral decorations for high-profile clients, including celebrities and renowned organizations. Our dedication to quality and creativity has made us a leader in the field of floral decor. Trust us to deliver floral arrangements that are not only visually stunning but also practical and enduring.`,
      images: [],
    },
    {
      id: "section4",
      title: "Floral Backdrops and Installations",
      content: `Floral backdrops and installations are a show-stopping addition to any event, and at The Graceful Company, we specialize in creating these eye-catching designs. Whether it’s a wedding, a corporate gala, or a private celebration, our floral installations add drama, elegance, and charm to your venue.
      
          Our backdrops range from romantic arches and cascading walls of flowers to modern geometric designs adorned with blooms. We also create ceiling installations, floral chandeliers, and statement pieces that transform spaces into enchanting environments.
      
          With 25 years of experience, we understand the importance of attention to detail. Our team carefully selects flowers, foliage, and structural elements to ensure that every installation is both stunning and structurally sound. We also collaborate with venue managers to ensure our designs complement the space perfectly.
      
          Celebrities and high-profile clients trust us to deliver floral backdrops and installations that are both creative and flawless. Let us create a floral masterpiece that leaves a lasting impression and serves as the perfect backdrop for your unforgettable moments.`,
      images: [floral3],
    },
    {
      id: "section5",
      title: "Luxury Celebrity Floral Designs",
      content: `For over 25 years, The Graceful Company has been the trusted choice for celebrities and high-profile clients seeking luxury floral arrangements. Our exceptional reputation is built on our ability to deliver designs that are as grand and glamorous as the events themselves.
      
          Whether it’s a red-carpet event, a star-studded wedding, or an exclusive celebration, our team is skilled at creating bespoke floral arrangements that exude elegance and sophistication. We work closely with our celebrity clients to understand their vision, ensuring that every detail is tailored to their preferences.
      
          Our connections with top suppliers allow us to source the most exquisite flowers and materials, ensuring that every arrangement is of the highest quality. From elaborate centerpieces to towering installations, our designs reflect the grandeur and exclusivity of the occasion.
      
          Trusted by the biggest names in the industry, The Graceful Company is synonymous with excellence in floral design. Let us bring a touch of celebrity glamour to your event with flowers that make a statement and leave a lasting impression.`,
      images: [],
    },
    {
      id: "section6",
      title: "Seasonal Floral Themes",
      content: `Seasonal flowers bring a natural charm and relevance to any event. At The Graceful Company, we embrace the beauty of nature’s cycles by creating floral arrangements that celebrate the unique essence of each season.
      
          Spring events bloom with fresh tulips, daffodils, and cherry blossoms, while summer celebrations feature vibrant sunflowers, roses, and peonies. For fall, we incorporate warm-toned chrysanthemums, marigolds, and dahlias, and winter brings elegant poinsettias, holly, and frosty white florals.
      
          Our seasonal floral designs are tailored to your event’s theme and location, ensuring that the arrangements complement the ambiance perfectly. We also incorporate greenery, branches, and other natural elements to enhance the seasonal vibe.
      
          With over two decades of expertise, our team knows how to source and arrange seasonal flowers to maximize their beauty and longevity. Let us craft floral decorations that celebrate the time of year and make your event truly special.`,
      images: [floral5],
    },
    {
      id: "section7",
      title: "Floral Table Centerpieces",
      content: `Table centerpieces are the focal point of any dining experience, and at The Graceful Company, we excel at designing floral centerpieces that captivate and delight. Whether it’s a wedding banquet, a corporate dinner, or an intimate celebration, our centerpieces elevate your tablescape to new heights of elegance.
      
          We work with both fresh and artificial flowers, using a blend of colors, textures, and shapes to create designs that complement your event’s theme. From simple and understated arrangements to lavish and intricate designs, our centerpieces are tailored to your preferences.
      
          Our team also takes into account practical considerations like table size, guest seating, and lighting to ensure that the centerpieces enhance the overall dining experience. Let us add a touch of floral magic to your event with centerpieces that leave a lasting impression.`,
      images: [],
    },
    {
      id: "section8",
      title: "Custom Floral Bouquets",
      content: `Custom bouquets are a personal and meaningful addition to any event. At The Graceful Company, we specialize in crafting bouquets that reflect your style and the spirit of the occasion. Whether it’s a bridal bouquet, a gift, or a decorative piece, our designs are made with love and attention to detail.
      
          We use the finest flowers, sourced from trusted suppliers, to ensure that every bouquet is fresh, beautiful, and long-lasting. Let us create a bouquet that tells your story and adds a special touch to your event.`,
      images: [venue5],
    },
    {
      id: "section9",
      title: "Corporate Floral Arrangements",
      content: `Floral arrangements for corporate events require a balance of elegance and professionalism, and at The Graceful Company, we excel at striking that balance. Our floral designs add sophistication and charm to conferences, product launches, and office spaces, creating a welcoming and inspiring atmosphere.
      
          Let us enhance your corporate event with flowers that reflect your brand’s identity and values. From subtle accents to bold installations, we’ll create designs that leave a lasting impression on your guests.`,
      images: [],
    },
    {
      id: "section10",
      title: "Floral Decor for Every Budget",
      content: `At The Graceful Company, we believe that stunning floral arrangements should be accessible to everyone, regardless of budget. Our team works closely with you to create designs that deliver maximum impact while staying within your budget.
      
          Whether you’re planning a lavish celebration or an intimate gathering, we’ll use our expertise and connections to deliver floral arrangements that are beautiful, creative, and cost-effective. Trust us to make your event unforgettable, no matter the budget.`,
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
          <Icon as={IoRose} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={floral1}
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
            Floral Arrangements
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={BsFlower1} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={floral4}
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
                  // mb={1}
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
                      objectFit="cover"
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

export default FloralArrangementsPage;
