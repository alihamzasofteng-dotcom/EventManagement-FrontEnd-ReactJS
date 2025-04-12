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
import { IoIosPeople } from "react-icons/io";
import { MdPeople } from "react-icons/md";

import { CiLight } from "react-icons/ci";
import light1 from "../assets/light1.avif";
import light2 from "../assets/light2.jpg";
import light3 from "../assets/light3.webp";
import light4 from "../assets/light4.jpg";
import light5 from "../assets/light5.jpg";
import light6 from "../assets/light6.jpg";

import gm1 from "../assets/gm1.jpeg";
import gm2 from "../assets/gm2.jpeg";
import gm3 from "../assets/gm3.jpeg";
import gm4 from "../assets/gm4.avif";
import gm5 from "../assets/gm5.jpg";
import gm6 from "../assets/gm6.jpg";

import fahad from "../assets/fahad.jpg";

const GuestManagementPage = () => {
  const sections = [
    {
      id: "section1",
      title: "Guest Management: A Seamless Experience",
      content: `Guest management is the cornerstone of a successful event. At The Graceful Company, we understand the importance of making every guest feel valued and ensuring smooth coordination from start to finish. From RSVPs to on-site assistance, we deliver personalized solutions that cater to your event’s specific needs.
    
    Our approach begins with understanding your guest list. Whether it’s a close-knit gathering or a grand celebration, we tailor our services to suit your preferences. We handle invitations, track responses, and provide real-time updates to keep you informed.
    
    On the event day, our team ensures flawless execution. We greet your guests with professionalism, guide them to their designated areas, and address any questions or concerns. For large-scale events, we use advanced technologies like digital check-ins and interactive seating charts to streamline the process.
    
    The Graceful Company also excels in creating memorable guest experiences. From personalized welcome gifts to engaging activities, we go the extra mile to make every attendee feel special.
    
    Trust us to manage your guest list with precision, care, and efficiency. With our expertise, you can focus on enjoying your event while we take care of every detail behind the scenes.`,
      images: [gm2],
    },
    {
      id: "section2",
      title: "Customized Guest Services for Unique Events",
      content: `Every event is unique, and guest management should reflect its individuality. At The Graceful Company, we offer tailored guest services that align with your event’s theme, scale, and objectives. Whether it’s a private celebration or a corporate gala, we ensure a seamless and enjoyable experience for all.
    
    Our process begins with detailed planning. We collaborate closely with you to create a comprehensive guest list, manage invitations, and implement efficient RSVP tracking. Our team prioritizes clear communication, keeping you informed at every stage.
    
    On-site, we provide personalized assistance to make guests feel welcome. From professional greeters to multilingual support for international attendees, we adapt our services to suit the occasion. Advanced tools like QR code check-ins and live updates further enhance efficiency.
    
    We also focus on creating memorable interactions. Custom name tags, seating arrangements, and guest engagement activities add a personal touch. For VIPs, we ensure exceptional care with dedicated support and exclusive perks.
    
    Let The Graceful Company handle your guest management with expertise and innovation. Our attention to detail guarantees an experience that exceeds expectations and leaves your guests impressed.`,
      images: [],
    },
    {
      id: "section3",
      title: "Personalized Welcome Experiences",
      content: `A warm welcome sets the tone for an unforgettable event. At The Graceful Company, we specialize in creating personalized welcome experiences that make a lasting impression. Whether it’s a wedding, anniversary, or corporate gathering, our guest management services ensure every attendee feels special.
    
    We start by understanding your vision and the nature of your event. From elegant welcome stations with curated gifts to digital welcome messages tailored to each guest, we customize every detail to match your theme.
    
    For formal events, our team arranges seamless registration and check-in processes with minimal wait times. For more relaxed gatherings, we create interactive and engaging welcome moments, such as photo opportunities or live performances.
    
    Our expertise extends to hospitality. Trained staff members greet guests with professionalism, guide them to their seats, and provide information as needed. Special accommodations for children, seniors, and differently-abled guests ensure everyone feels comfortable and included.
    
    Let The Graceful Company elevate your event’s first impression. Our personalized welcome experiences set the stage for a memorable occasion and leave guests feeling valued from the moment they arrive.`,
      images: [],
    },
    {
      id: "section4",
      title: "Efficient Check-In Solutions",
      content: `Streamlining guest check-ins is crucial for creating a hassle-free event experience. At The Graceful Company, we provide efficient check-in solutions that blend technology and hospitality. Whether your event is intimate or large-scale, we ensure smooth entry for every guest.
    
    Our services begin with comprehensive planning. We coordinate with you to organize guest lists, confirm RSVPs, and prepare name badges or digital passes in advance. For corporate events, we offer branded check-in counters that reflect your company’s professionalism.
    
    On the day of the event, our team uses advanced tools like QR codes and mobile apps for quick and accurate check-ins. This not only reduces wait times but also enhances security and ensures a seamless flow.
    
    For VIP guests, we provide exclusive check-in lanes and personalized assistance. Our staff is trained to handle last-minute changes or additions, ensuring that no guest feels overlooked.
    
    Trust The Graceful Company to manage your event check-ins with precision and efficiency. Our innovative solutions guarantee a stress-free experience for both you and your guests.`,
      images: [gm3],
    },
    {
      id: "section5",
      title: "Interactive Seating Arrangements",
      content: `Seating arrangements play a vital role in guest comfort and event success. At The Graceful Company, we offer innovative solutions to ensure your guests are seated with care and consideration. Our expertise transforms seating into an opportunity for seamless interaction and engagement.
    
    We begin by understanding your event’s layout and purpose. Whether it’s a formal dinner, a theater-style presentation, or an open-concept celebration, we design seating plans that maximize functionality and aesthetic appeal.
    
    Using interactive tools, we create visual seating charts that allow you to approve or adjust placements. This ensures that family groups, VIPs, and other key attendees are appropriately positioned.
    
    On the event day, our team implements the seating plan with precision. From clear signage to guided escort services, we make it easy for guests to find their places. We also accommodate special requests, such as wheelchair-accessible seating or reserved spots for late arrivals.
    
    With The Graceful Company, seating arrangements become an integral part of your event’s success. Let us create a seamless and enjoyable experience for your guests.`,
      images: [],
    },
    {
      id: "section6",
      title: "Streamlined RSVP Management",
      content: `Guest management begins with efficient RSVP handling. At The Graceful Company, we provide end-to-end solutions to simplify this process, ensuring every invitee’s response is captured seamlessly.

Our team leverages the latest technology to create personalized invitation systems that include RSVP links. These systems allow your guests to confirm attendance, select meal preferences, and communicate special requests effortlessly.

We ensure that each RSVP is recorded in a central database for easy tracking. Need updates on attendee numbers or dietary preferences? Our solutions provide real-time insights to keep you informed and in control.

For events with large guest lists, we offer multi-platform options, such as email invitations, website links, and even mobile app integration. This versatility ensures every guest can respond conveniently.

With a focus on reliability and ease of use, The Graceful Company ensures that no detail is overlooked. From creating elegant invitations to following up on missing responses, we manage the entire RSVP process so you can focus on other aspects of your event.

Let us streamline your guest list with precision and professionalism, setting the foundation for a well-organized event.`,
      images: [],
    },
    {
      id: "section7",
      title: "Personalized Guest Experiences",
      content: `Every guest is unique, and their experience should reflect that. At The Graceful Company, we specialize in creating personalized touches that make each attendee feel valued and appreciated.

From custom welcome kits to tailored seating arrangements, our approach begins with understanding your guests’ needs and preferences. We design experiences that resonate with their tastes, ensuring comfort and enjoyment throughout the event.

Our team works closely with you to incorporate personal touches like handwritten notes, thoughtful gifts, or customized menus. For cultural or themed events, we pay special attention to traditions and preferences to create a seamless experience for everyone.

Technology plays a key role in personalization. We use data insights to enhance guest interactions, such as sending personalized reminders or curating playlists based on attendee preferences.

Whether it’s a wedding, corporate event, or private celebration, The Graceful Company elevates the guest experience with creativity and care. Let us transform your event into a memorable occasion that leaves every guest feeling special.`,
      images: [gm4],
    },
    {
      id: "section8",
      title: "Hassle-Free Check-In Solutions",
      content: `First impressions matter, and a smooth check-in sets the tone for a successful event. The Graceful Company provides hassle-free check-in solutions designed to welcome your guests warmly and efficiently.

Our process begins with pre-event planning, where we prepare a comprehensive check-in system tailored to your needs. Whether it’s a digital solution with QR codes or a traditional guestbook, we ensure a seamless and organized experience.

For large-scale events, we employ advanced technology like facial recognition or NFC-enabled badges to speed up the process. These solutions minimize wait times and allow guests to start enjoying the event immediately.

Our trained staff is always on-site to assist with queries, manage VIP arrivals, and resolve any issues promptly. Additionally, we integrate check-in with security protocols to ensure a safe and secure environment for everyone.

Let The Graceful Company handle the logistics of welcoming your guests, creating a positive first impression that lasts throughout the event.`,
      images: [],
    },
    {
      id: "section9",
      title: "Exceptional Hospitality Services",
      content: `Hospitality is at the heart of every successful event. At The Graceful Company, we pride ourselves on delivering exceptional guest services that cater to every need with professionalism and warmth.

Our team is trained to provide seamless assistance, from guiding guests to their seats to managing special requests. We ensure every attendee feels cared for and valued, creating an atmosphere of comfort and luxury.

For high-profile events, we offer VIP concierge services that handle everything from personalized transportation to exclusive dining experiences. Our hospitality team goes above and beyond to anticipate needs and deliver thoughtful solutions.

Additionally, we incorporate modern amenities like mobile apps for instant assistance and real-time updates. These features ensure guests are always informed and engaged throughout the event.

With The Graceful Company, hospitality extends beyond the basics. We create memorable experiences through attentive service and meticulous attention to detail. Let us make your event unforgettable for every guest.`,
      images: [gm5],
    },
    {
      id: "section10",
      title: " Thoughtful Farewell and Follow-Up",
      content: `The end of an event is as important as the beginning. At The Graceful Company, we ensure that every guest leaves with a positive and lasting impression through thoughtful farewell and follow-up services.

As your event concludes, our team organizes personalized thank-you gifts or mementos that reflect the theme and significance of the occasion. These gestures leave a lasting impact, showing guests your appreciation.

We manage smooth departures with coordinated transportation and clear signage, ensuring everyone exits safely and comfortably. For large events, our staff handles crowd management and ensures a seamless flow.

Post-event, we assist with follow-ups, such as sending personalized thank-you notes or feedback surveys. These efforts not only express gratitude but also provide valuable insights for future events.

At The Graceful Company, we believe every moment matters, from the first invitation to the final goodbye. Let us handle your guest management with expertise and care, creating memories that your attendees will cherish.`,
      images: [gm6],
    },
    // Add remaining sections following the same pattern
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
          <Icon as={IoIosPeople} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={gm1}
            alt="Profile Picture"
            borderRadius="full"
            boxSize="60px"
            mb={2}
            marginRight="20px"
            objectFit="cover"
          />
          <Heading
            textAlign="center"
            my="4"
            fontSize="40px"
            fontFamily="Helvetica-Bold"
            bgGradient="linear-gradient(to top, #141e30, #243b55);"
            bgClip="text"
          >
            Guest Management
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={MdPeople} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={gm1}
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

export default GuestManagementPage;
