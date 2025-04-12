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
import { FaRegLightbulb } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import light1 from "../assets/light1.avif";
import light2 from "../assets/light2.jpg";
import light3 from "../assets/light3.webp";
import light4 from "../assets/light4.jpg";
import light5 from "../assets/light5.jpg";
import light6 from "../assets/light6.jpg";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiEngagementRing } from "react-icons/gi";

import ring from "../assets/pwr.jpg";
import maklawa from "../assets/makalwa.webp";
import jota from "../assets/jota.jpg";
import prewedding from "../assets/prewedding.jpg";
import ubtan from "../assets/ubtan2.webp";
import fahad from "../assets/fahad.jpg";

const PreWeddingActivitiesPage = () => {
  const sections = [
    {
      id: "section1",
      title: "Engagement Ceremony",
      content: `The engagement ceremony marks the official announcement of the couple’s commitment to each other. Families gather to celebrate this joyous occasion with the exchange of rings, blessings, and festive meals.
    
    At The Graceful Company, we help you plan a memorable engagement ceremony tailored to your preferences. From selecting elegant venues to creating stunning décor that matches your theme, we ensure every detail is perfect. Our services include designing invitation cards, organizing a variety of food and drink options, and arranging live music or entertainment to make the day special.
    
    Our professional team works closely with you to manage guest lists, seating arrangements, and even photography and videography to capture the precious moments. With us by your side, your engagement will be a beautiful prelude to your wedding journey.`,
      images: [ring],
    },
    {
      id: "section2",
      title: "Ubtan Ceremony",
      content: `The ubtan ceremony is a traditional ritual where turmeric and herbal pastes are applied to the bride and groom to enhance their glow before the wedding. It’s a colorful and lively event filled with laughter, music, and close family moments.
    
    We help you set up the perfect ambiance for this intimate ceremony, complete with traditional décor like marigold garlands and ethnic backdrops. Our team provides a dedicated space for the ceremony and arranges all necessary materials, including organic ubtan mixtures and beautifully decorated trays.
    
    To enhance the experience, we arrange folk music, dholak players, or even modern playlists to keep the atmosphere lively. Let us handle the details so you can enjoy this heartwarming pre-wedding ritual with your loved ones.`,
      images: [],
    },
    {
      id: "section3",
      title: "Dholki Nights",
      content: `Dholki nights are pre-celebrations filled with singing, dancing, and playing the dholak (drum). Friends and family gather to enjoy traditional songs and create lasting memories.
    
    The Graceful Company ensures your dholki night is an unforgettable experience. We help select an ideal venue or transform your home with vibrant décor, including fairy lights, ethnic cushions, and themed props. Our team can arrange professional dholak players, sound systems, and even choreographers to make the event lively and fun.
    
    We also assist with catering, offering a variety of snacks and drinks that complement the festive mood. With our meticulous planning, your dholki night will be a joyous celebration of music and togetherness.`,
      images: [],
    },
    {
      id: "section4",
      title: "Rasm-e-Mehndi/Henna Ceremony",
      content: `The mehndi ceremony is a vibrant event where the bride’s hands and feet are adorned with intricate henna designs. Traditionally held separately for the bride and groom, this event is often combined for a grand celebration.
    
    We provide complete organization for your mehndi ceremony, from hiring skilled mehndi artists to setting up a colorful stage with traditional props and lighting. Our team can arrange a live band, DJ, or folk performers to keep guests entertained.
    
    Food and drinks are a highlight of this event, and we work with top caterers to serve dishes that align with your theme. Let us handle all the logistics while you focus on enjoying this iconic pre-wedding celebration.`,
      images: [ubtan],
    },
    {
      id: "section5",
      title: "Mayoon Ceremony",
      content: `The mayoon ceremony is an intimate ritual where the bride is pampered by her family while being secluded from household chores. It’s a time for relaxation and preparation before the big day.
    
    Our team helps you create a serene environment for this special occasion. We decorate the venue with floral arrangements, fairy lights, and traditional elements like clay lamps. We also provide soothing music and spa services for the bride to relax and rejuvenate.
    
    To make the event memorable, we arrange light refreshments and coordinate fun activities for the bride’s family and friends. Let us help you celebrate this cherished tradition with elegance and ease.`,
      images: [],
    },
    {
      id: "section6",
      title: "Dress Selection Assistance",
      content: `Choosing the perfect dress for your wedding is an essential part of pre-wedding preparations. It’s a task that involves creativity, patience, and expert advice.
    
    At The Graceful Company, we offer personalized dress selection assistance, connecting you with the best designers and boutiques in the industry. Our team provides guidance on trending styles, fabrics, and colors that align with your wedding theme and preferences.
    
    We can also arrange private appointments with designers and manage alterations to ensure the perfect fit. With our expertise, finding your dream wedding attire becomes a stress-free and enjoyable experience.`,
      images: [],
    },
    {
      id: "section7",
      title: " Food Selection and Tasting",
      content: `Food selection is one of the most exciting pre-wedding activities, as it sets the tone for your guests' experience. Carefully curated menus create unforgettable memories. Whether you prefer a traditional spread or a fusion of modern cuisines, this step involves exploring options and sampling dishes to find the perfect balance of flavors, presentation, and variety.
    
    We at The Graceful Company understand how vital this process is. Our team collaborates with renowned caterers and culinary experts to offer an extensive range of cuisines, from regional delicacies like biryani and kebabs to international dishes such as sushi and pasta. We organize food tasting sessions where you can sample options, provide feedback, and customize the menu to suit your preferences.
    
    Dietary needs are also taken into account. Whether your guests require vegetarian, vegan, or gluten-free dishes, we ensure all dietary restrictions are met without compromising on taste or quality. For desserts, we offer creative ideas like dessert stations, wedding cakes, and customized sweets that add a sweet touch to your celebration.
    
    In addition to menu planning, we assist with the aesthetic presentation of the food. Our expertise in designing buffet layouts and plating styles ensures that your food not only tastes delicious but also looks visually stunning. With our detailed approach, your food selection process will be smooth and enjoyable, ensuring a delectable dining experience for all your guests.`,
      images: [],
    },
    {
      id: "section8",
      title: "Joota Chhupayi Ceremony",
      content: `The Joota Chhupayi ceremony is one of the most lighthearted and entertaining traditions in South Asian weddings. This playful ritual involves the bride’s sisters, cousins, and friends stealing the groom’s shoes during the wedding and hiding them. To retrieve them, the groom must offer a monetary gift, often negotiated with humor and banter. This tradition symbolizes the merging of two families and adds an element of fun to the wedding festivities.
    
    We ensure that this beloved custom is flawlessly executed, enhancing the enjoyment for everyone involved. Our team helps coordinate between the bride’s side and the groom’s side, ensuring no confusion while maintaining the surprise element. From planning the perfect hiding spots for the shoes to creating humorous scripts for the negotiations, we add creativity to the event.
    
    To make the ceremony even more memorable, we provide props, creative cues, and even choreographed acts for the groom’s retrieval process. For instance, we can arrange for a dramatic reveal of the shoes or a fun “treasure hunt” setup to add excitement.
    
    Our photography and videography team ensures that every laugh, negotiation, and priceless reaction is captured beautifully. By incorporating modern twists or sticking to traditional approaches, we help make the Joota Chhupayi ceremony a fun, unforgettable moment for both families.`,
      images: [jota],
    },
    {
      id: "section9",
      title: "Maklava/Bad Phera",
      content: `Maklava, also known as Bad Phera in some regions, is a tradition where the bride returns to her parents’ home after the wedding for a brief stay. This custom, common in Punjabi and Kashmiri cultures, is deeply rooted in ensuring the bride feels comfortable and loved during the transition into her new family. It is a heartwarming occasion where both families come together to celebrate the bond of love and togetherness.
    
    At The Graceful Company, we help you plan this post-wedding ritual with care and attention to detail. Our team ensures that the bride's return is met with warmth and joy by assisting in decorating her parents’ home with flowers, lights, and welcoming elements. We can arrange special gifts, sweets, and meals that reflect the family’s love and traditions.
    
    For families who want to make the event more formal, we organize intimate gatherings where the bride’s closest friends and relatives can join to celebrate. We also provide professional photographers to capture these emotional and candid moments, creating memories that the bride and her family can cherish forever.
    
    Whether you want to keep it simple or make it a grand affair, our team works closely with both families to ensure that the Maklava is a joyous and meaningful experience. With our support, this tradition becomes a cherished memory that honors the bride’s journey into a new phase of life.`,
      images: [maklawa],
    },
    {
      id: "section10",
      title: " Goda Pharai/Guthna Pakrai",
      content: `The Goda Pharai or Guthna Pakrai ceremony is a playful Punjabi tradition filled with fun and laughter. In this custom, the groom’s younger brother (or a close male relative) sits near the bride and holds her knee during the wedding ceremony. He refuses to let go until the bride or her family offers a monetary gift. This humorous and lighthearted act adds a unique charm to the wedding festivities and symbolizes the close bond between families.
    
    We at The Graceful Company ensure this tradition becomes a highlight of your wedding day. Our team works with the groom’s younger relatives to coordinate the ceremony, ensuring everything runs smoothly and no detail is missed. We provide creative ideas for the monetary exchange, such as presenting the gift in a fun or dramatic way to keep the audience entertained.
    
    To enhance the experience, we can arrange for props, such as special chairs or cushions, that add a touch of elegance to the ritual. Additionally, our photography team captures the candid moments and laughter shared during this playful tradition.
    
    For families looking to modernize the tradition, we offer ideas like incorporating games or challenges to make the ceremony even more engaging. With our meticulous planning and creative approach, the Goda Pharai becomes a delightful and unforgettable memory for both families and guests.`,
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
          <Icon as={GiBigDiamondRing} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={prewedding}
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
            Pre Wedding Activities
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={GiEngagementRing} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={prewedding}
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

export default PreWeddingActivitiesPage;
