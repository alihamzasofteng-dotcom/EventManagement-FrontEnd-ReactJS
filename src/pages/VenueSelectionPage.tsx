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
import venue3 from "../assets/venue3.webp";
import venue4 from "../assets/venue4.avif";
import venue5 from "../assets/venue5.webp";
import fahad from "../assets/fahad.jpg";

const VenueSelectionPage = () => {
  const sections = [
    {
      id: "section1",
      title: "Discover the Perfect Venue",
      content: `Finding the perfect venue is the cornerstone of a memorable event. At The Graceful Company, we specialize in curating venues that match your vision and elevate your celebration. Whether you dream of an elegant ballroom, a rustic countryside retreat, or a chic rooftop setting, our extensive network of venues offers something for every style and occasion.
    
            Our team begins the process by understanding your preferences, event size, and desired ambiance. We then present a curated list of options tailored to your unique requirements. From intimate gatherings to large-scale celebrations, we ensure every venue meets your expectations in terms of aesthetics, logistics, and amenities.
    
            Venue selection isn’t just about beauty—it’s about functionality. We evaluate practical considerations such as accessibility, parking facilities, and available services like catering and AV equipment to ensure your event runs smoothly. Our goal is to provide a venue that complements your theme while creating a comfortable and inviting atmosphere for your guests.
    
            Whether you’re planning a dreamy wedding, a milestone celebration, or a corporate event, we’re here to make the process seamless. With our expertise and personalized approach, finding the right venue becomes an exciting part of your event planning journey. Trust The Graceful Company to deliver a venue that sets the stage for unforgettable moments.`,
      images: [venue3],
    },
    {
      id: "section2",
      title: "Why Venue Selection Matters",
      content: `The venue you choose sets the stage for your event, influencing everything from its ambiance to its overall success. At The Graceful Company, we recognize the importance of selecting a venue that aligns with your vision and enhances the guest experience. A well-chosen venue does more than provide a space—it transforms your event into an unforgettable celebration.
    
            Venue selection is about finding a balance between aesthetics and practicality. The right venue should not only reflect your style but also accommodate your guests comfortably. Whether it’s a sprawling garden for an outdoor wedding or a modern conference hall for a corporate event, the venue becomes the canvas for your event’s theme.
    
            Practical considerations like location, capacity, and facilities play a crucial role in ensuring your event unfolds seamlessly. We work closely with you to assess these factors and recommend venues that meet your requirements. Our team also considers details like acoustics for entertainment, lighting for photography, and catering arrangements to ensure your event exceeds expectations.
    
            A thoughtfully selected venue can elevate your celebration, leaving a lasting impression on your guests. Let us guide you through this important decision with our expertise and extensive network. With The Graceful Company by your side, venue selection becomes a smooth and enjoyable process, setting the foundation for an extraordinary event.`,
      images: [],
    },
    {
      id: "section3",
      title: "Tailored Venue Recommendations",
      content: `Every event is unique, and so should be the venue it’s hosted in. At The Graceful Company, we specialize in providing personalized venue recommendations that align with your vision, budget, and preferences. Our tailored approach ensures that each venue suggestion is a perfect match for your needs.
    
            We start by understanding your event’s purpose, size, and style. Are you hosting an intimate wedding ceremony, a grand reception, or a professional corporate gathering? Based on these factors, we curate a selection of venues that offer the perfect balance of elegance and functionality.
    
            Our recommendations include detailed insights into each venue, such as its layout, amenities, and visual appeal. We also arrange site visits, allowing you to experience the atmosphere firsthand. During this process, we collaborate with venue managers to secure the best terms and packages, ensuring that your event remains within budget without compromising quality.
    
            For themed events, we excel at finding venues that seamlessly integrate with your vision. Whether you’re envisioning a vintage barn wedding, a sleek urban loft party, or a serene beachfront celebration, our team ensures your chosen venue feels custom-made for your occasion.
    
            Let us take the guesswork out of venue selection. With our personalized recommendations, you’ll find a space that perfectly reflects your style and sets the stage for an unforgettable experience.`,
      images: [],
    },
    {
      id: "section4",
      title: "Attention to Venue Details",
      content: `At The Graceful Company, we believe that the smallest details make the biggest difference. When it comes to venue selection, we pay meticulous attention to every aspect to ensure your chosen location exceeds expectations. From the moment you step into your venue, every detail should align seamlessly with your vision.
    
            We carefully assess key elements such as the venue’s layout, lighting, and acoustics. These factors are crucial for creating the right ambiance and ensuring that your event flows effortlessly. Whether it’s setting up an elegant stage, arranging dining layouts, or designing a stunning entrance, our team ensures that every detail is considered.
    
            Practical aspects like accessibility, parking, and vendor compatibility are also prioritized. We work closely with venue managers and vendors to coordinate logistics, ensuring that the space is fully equipped to handle your event’s needs. From power supply for lighting and sound systems to ensuring smooth guest movement, we leave no stone unturned.
    
            Our commitment to detail extends to your unique preferences. Whether you want a specific decor theme or need adjustments to the venue’s setup, we collaborate with you to make it happen. With The Graceful Company, every venue detail is handled with precision, allowing you to focus on enjoying your special day.`,
      images: [venue2],
    },
    {
      id: "section5",
      title: "Trusted Venue Partnerships",
      content: `Over the years, The Graceful Company has cultivated strong relationships with some of the most renowned venues in the industry. These trusted partnerships allow us to provide you with exclusive access to premium locations and ensure that every aspect of your venue experience is seamless.
    
            Our network includes a diverse range of venues, from historic landmarks and luxurious resorts to contemporary event spaces and scenic outdoor locations. These partnerships enable us to negotiate favorable terms and offer you the best value for your investment. We collaborate closely with venue managers to ensure that every detail aligns with your event’s needs and vision.
    
            By working with reliable venue partners, we can guarantee high-quality service and professionalism. Whether it’s coordinating setup, arranging on-site amenities, or handling last-minute adjustments, our partners share our commitment to excellence. This ensures that your event unfolds smoothly and exceeds your expectations.
    
            With our trusted partnerships, you gain access to a curated selection of venues that are not only beautiful but also equipped to handle all your event’s requirements. Let us leverage these relationships to create an exceptional venue experience that sets the stage for unforgettable memories.`,
      images: [],
    },
    {
      id: "section6",
      title: "Innovative Venue Concepts",
      content: `Innovation is at the heart of what we do at The Graceful Company. When it comes to venue selection, we go beyond the ordinary to bring you fresh and unique concepts that elevate your event. Our approach ensures that your venue is not just a space but a statement.
    
            Whether it’s transforming a rustic barn into a romantic wedding venue or turning an industrial loft into a chic party space, our team thrives on creativity. We collaborate with venues to customize layouts, lighting, and decor, creating a setting that feels tailor-made for your celebration. 
    
            We also stay ahead of trends, offering you the latest in venue design and technology. From interactive lighting displays to eco-friendly setups, our innovative concepts add a wow factor to your event. For those seeking something truly extraordinary, we explore unconventional venues like vineyards, museums, or even private estates.
    
            Our goal is to create a venue experience that captivates and inspires. With our innovative approach, your venue becomes a memorable part of your event, leaving a lasting impression on your guests. Trust us to bring your vision to life in ways you never imagined.`,
      images: [venue4],
    },
    {
      id: "section7",
      title: "Seamless Venue Coordination",
      content: `Coordinating the logistics of a venue can be a daunting task, but with The Graceful Company, it’s a breeze. Our team specializes in seamless venue coordination, ensuring that every element comes together flawlessly for your event.
    
            From the initial booking to the final walkthrough, we handle all the details so you don’t have to. This includes coordinating with venue managers, vendors, and service providers to ensure a smooth setup and execution. We oversee timelines, manage deliveries, and address any potential challenges, allowing you to focus on enjoying your special day.
    
            Our expertise extends to on-the-day coordination, where we ensure that everything runs according to plan. Whether it’s setting up tables, arranging decor, or managing technical equipment, our team is on-site to oversee every aspect. This meticulous attention to detail ensures that your event flows seamlessly from start to finish.
    
            With The Graceful Company managing your venue coordination, you can relax knowing that every detail is under control. Let us take the stress out of the process, allowing you to enjoy a flawless and unforgettable event.`,
      images: [],
    },
    {
      id: "section8",
      title: "Venue Catering Excellence",
      content: `Catering is an integral part of the venue experience, and at The Graceful Company, we ensure it’s nothing short of exceptional. Our catering services are designed to complement your chosen venue, offering a culinary experience that delights your guests and enhances your event.
    
            We collaborate with the venue’s catering team or bring in our trusted partners to create menus tailored to your preferences. Whether you prefer traditional dishes, fusion cuisine, or bespoke gourmet creations, our chefs use the finest ingredients to craft meals that are as visually stunning as they are delicious.
    
            Our attention to detail extends to the presentation, ensuring that every dish is served beautifully. From elegant plated dinners to lavish buffets, we customize the setup to match your event’s theme and style. Beverage services, including signature cocktails and premium wines, are also coordinated seamlessly with the venue.
    
            Let us elevate your event with catering that impresses both the palate and the eye. With our expertise, your venue becomes a complete experience, where every detail—from the decor to the dining—is flawlessly executed.`,
      images: [venue5],
    },
    {
      id: "section9",
      title: "Sustainability in Venue Selection",
      content: `At The Graceful Company, we believe in celebrating responsibly. Our commitment to sustainability extends to venue selection, where we prioritize eco-friendly practices and spaces that align with modern values.
    
            Many of our partner venues are leaders in sustainability, incorporating green initiatives such as solar energy, rainwater harvesting, and waste reduction. By choosing these venues, you contribute to environmental conservation without compromising on elegance or quality.
    
            Our team also emphasizes eco-conscious planning within the venue. This includes using biodegradable materials, minimizing food waste, and integrating sustainable decor options. Whether it’s energy-efficient lighting or locally sourced ingredients for catering, we work closely with venues to reduce the environmental impact of your event.
    
            By choosing a sustainable venue, you create a celebration that is both memorable and meaningful. Let The Graceful Company guide you toward venues that reflect your values and set an example for future events.`,
      images: [],
    },
    {
      id: "section10",
      title: "Client Testimonials on Venues",
      content: `Our clients’ words speak volumes about the impact of our venue selection services. Over the years, we’ve had the privilege of creating unforgettable experiences in stunning locations, and our clients’ testimonials reflect their satisfaction.
    
            From heartfelt thank-you notes to glowing reviews, our clients consistently praise our ability to find venues that perfectly match their vision. Many highlight how we took the stress out of the process, providing them with options that exceeded their expectations. Others commend our attention to detail, ensuring that every aspect of the venue was flawless.
    
            These testimonials are a testament to our dedication to excellence. They inspire us to continue delivering personalized service and innovative solutions, helping each client create an event they’ll cherish forever. When you choose The Graceful Company, you’re not just selecting a venue—you’re partnering with a team that’s committed to making your dream event a reality.`,
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
            Venue Selection
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={FaLaptopHouse} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={plaza}
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

export default VenueSelectionPage;
