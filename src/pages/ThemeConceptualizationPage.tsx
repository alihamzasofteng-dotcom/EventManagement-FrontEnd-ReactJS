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
import { GiBigDiamondRing } from "react-icons/gi";
import { GiEngagementRing } from "react-icons/gi";
import TC1 from "../assets/TC1.webp";
import TC2 from "../assets/tc2.webp";
import TC3 from "../assets/tc3.jpg";
import TC4 from "../assets/tc4.jpg";
import TC5 from "../assets/tc5.avif";
import TC6 from "../assets/tc6.webp";
import fahad from "../assets/fahad.jpg";

import { GiVikingLonghouse } from "react-icons/gi";

const ThemeConceptualizationPage = () => {
  const sections = [
    {
      id: "section1",
      title: "Understanding the Client’s Vision",
      content: `Theme conceptualization begins with understanding the client’s unique vision for their event. Whether it’s a wedding, corporate gathering, or birthday celebration, every event should reflect the personality, values, and expectations of the host. Our team engages in in-depth consultations to learn about your preferences, cultural significance, and desired atmosphere.

We help you articulate your ideas by providing examples, mood boards, and brainstorming sessions. For weddings, this could mean incorporating cultural traditions like Mehndi or Barat ceremonies with modern aesthetics. For corporate events, it could involve aligning the theme with your brand identity. For birthdays, we design themes ranging from whimsical to elegant.

Our expertise ensures that your ideas are transformed into a cohesive vision. We balance practicality and creativity, considering the event's scale, venue constraints, and budget. Whether you envision a vintage theme, a floral paradise, or a minimalist design, we ensure every detail aligns with your concept.

Once the vision is clear, we outline a roadmap detailing the theme elements, including décor, color palette, lighting, and entertainment. This structured approach ensures a unified look and feel for the event, leaving no room for last-minute surprises. By collaborating closely, we bring your dream event to life with elegance and precision.`,
      images: [TC2],
    },
    {
      id: "section2",
      title: "Selecting the Perfect Color Palette",
      content: `Colors set the mood and tone of an event, making them a crucial aspect of theme conceptualization. A thoughtfully chosen palette can transform a space, evoke emotions, and create lasting memories. At The Graceful Company, we guide you through selecting the perfect colors for your event, tailored to the occasion and your preferences.

For weddings, we suggest palettes that resonate with the cultural and ceremonial significance. Vibrant colors like maroon, gold, and emerald green are popular for Mehndi and Barat functions, while pastels and whites are ideal for Walima. For corporate events, we emphasize brand colors to reinforce identity. Birthdays and anniversaries might call for playful or sophisticated combinations.

Our team provides digital visualizations and physical swatches to help you envision the final look. We ensure that the color palette is consistently applied across all elements, including décor, floral arrangements, table settings, and attire.

Beyond aesthetics, we consider lighting and the venue’s natural features. For instance, outdoor events may benefit from lighter shades to complement natural light, while indoor gatherings might require bolder tones for dramatic effects.

By harmonizing your chosen colors with other thematic elements, we create an immersive and visually stunning experience. Our expertise in color psychology ensures the palette aligns with the mood you wish to convey, enhancing the overall impact of your event.`,
      images: [],
    },
    {
      id: "section3",
      title: "Defining the Event Style",
      content: `Defining the style of your event is key to creating a memorable experience. Whether it’s a rustic outdoor wedding, a formal gala, or a chic birthday party, the event style sets the foundation for every other design element. At The Graceful Company, we help you refine and implement your chosen style.

For weddings, we explore styles ranging from traditional and royal to modern and minimalist. A Mehndi ceremony might feature bohemian décor with colorful drapes and lanterns, while a Walima could emphasize elegance with chandeliers and floral centerpieces. Corporate events, on the other hand, often require clean, professional aesthetics with innovative setups.

We provide curated style options with mood boards, layouts, and sample décor setups to help you visualize the outcome. Once the style is chosen, we align every detail—from invitation cards to stage design—to ensure consistency.

Our expertise extends to blending styles for unique results. For instance, we can create a fusion of traditional and contemporary elements to cater to diverse tastes. We also account for trends, sustainability, and cultural appropriateness in every design.

By defining the event style with precision, we lay the groundwork for a cohesive, visually stunning celebration that reflects your unique personality and vision.`,
      images: [],
    },
    {
      id: "section4",
      title: "Curating Décor Elements",
      content: `The décor is at the heart of event theme conceptualization, turning ideas into tangible, awe-inspiring settings. Our team specializes in curating décor elements that elevate your event’s ambiance and create lasting impressions.

For weddings, we design breathtaking setups tailored to each ceremony. A Mehndi stage may feature colorful fabrics, floral swings, and traditional props, while a Barat stage could exude grandeur with gold accents and intricate backdrops. For corporate events, we prioritize sleek, innovative designs that align with brand identity, such as logo displays and modern centerpieces.

We work closely with clients to select the perfect elements, including flowers, drapery, furniture, lighting, and table settings. Our team sources high-quality materials and collaborates with skilled vendors to ensure exceptional craftsmanship.

Innovative design techniques, such as the use of mirrors, LED lighting, and geometric patterns, add a contemporary touch to traditional events. We also incorporate sustainable décor options, like reusable props and biodegradable materials, for environmentally conscious clients.

Through meticulous planning and attention to detail, we ensure that every corner of the venue reflects your theme. From grand entrances to photo booths, every element is thoughtfully curated to create a cohesive and visually stunning experience.`,
      images: [TC3],
    },
    {
      id: "section5",
      title: "Designing the Invitation Cards",
      content: `The invitation card sets the tone for your event, offering guests a glimpse of the theme and style. Our team helps you design custom invitations that reflect your event’s personality and leave a lasting impression.

We start by discussing your preferences, from traditional designs featuring intricate patterns to modern minimalist layouts. For weddings, we incorporate cultural motifs and vibrant colors for Mehndi and Barat cards, while opting for elegant designs for Walima invites. Corporate event invitations may feature sleek typography and professional branding elements.

Our design process includes creating digital mockups, ensuring every detail—from font style to envelope design—is perfect. We also offer innovative options like digital invitations, video invites, and QR-coded RSVPs for tech-savvy clients.

Beyond aesthetics, we ensure that the invitation conveys all necessary information clearly, including the event date, time, venue, and dress code. For multi-day events, we design coordinated sets that maintain thematic consistency.

To add a personal touch, we can include customized elements such as monograms, wax seals, or embossed patterns. Our team also manages printing and delivery, ensuring timely and high-quality results.

With our expertise, your invitations will not only communicate the details of your event but also create anticipation and excitement among your guests.`,
      images: [],
    },
    {
      id: "section6",
      title: "Integrating Cultural Elements into the Theme",
      content: `Cultural elements add depth and authenticity to any event, making it unique and memorable. At The Graceful Company, we specialize in incorporating traditional practices and cultural nuances into the event theme, ensuring they blend seamlessly with modern design elements.

For weddings, cultural integration can include traditional rituals like Rasm-e-Mehndi, Joota Chhupayi, or Mayoon. These elements are not just part of the ceremonies but are reflected in the décor, attire, and even food selection. For instance, vibrant colors, intricate patterns, and cultural motifs can transform the Mehndi venue into a celebration of heritage.

In corporate and community events, we explore ways to honor the company’s or community’s roots. This might involve incorporating regional art, music, or cuisine into the event’s setup. For birthdays or personal milestones, we design themes that celebrate family traditions or ancestral origins, creating an emotional connection with attendees.

Our team collaborates with cultural experts and artisans to ensure authenticity. We source traditional materials, props, and artwork, blending them with contemporary aesthetics for a balanced, visually appealing design. We also educate ourselves about specific rituals and traditions to ensure every detail is executed respectfully.

By weaving cultural elements into your event, we create a celebration that not only resonates with your guests but also honors your heritage, leaving a lasting impact.`,
      images: [],
    },
    {
      id: "section7",
      title: "Lighting Design for Ambiance",
      content: `Lighting is a critical element in theme conceptualization, shaping the mood and transforming spaces into captivating environments. Our team uses lighting design to highlight key areas, create ambiance, and enhance the overall event theme.

For weddings, we design lighting schemes tailored to each function. A Mehndi might feature colorful fairy lights, chandeliers, and LED backdrops to create a festive atmosphere, while a Walima demands a softer, more elegant setup with warm white lights and accent lighting.

Corporate events benefit from strategic lighting that emphasizes the stage, branding elements, or presentation areas. For birthday celebrations, we incorporate playful lighting effects like neon signs, spotlights, or projection mapping.

Our approach involves using a mix of lighting techniques, including uplighting, downlighting, and pin-spotting, to create layers of illumination. We also consider the venue’s natural light and use dimmers to adjust brightness throughout the event.

Technology plays a key role in our lighting designs. We use programmable systems to synchronize lighting with music or other elements, creating dynamic effects that captivate guests. Sustainable lighting options, such as LED fixtures, are also available for environmentally conscious clients.

With precise planning and execution, our lighting designs ensure that your event is not only well-lit but also visually stunning, enhancing the thematic elements and setting the desired mood.`,
      images: [],
    },
    {
      id: "section8",
      title: "Creating Unique Focal Points",
      content: `Focal points are the visual highlights of any event, drawing attention and reinforcing the theme. At The Graceful Company, we specialize in designing unique focal points that serve as conversation starters and photo-worthy moments.

For weddings, focal points might include a grand entrance arch, an intricately designed stage, or a floral canopy for the bride and groom. For Mehndi events, we create vibrant backdrops with colorful fabrics and traditional props, while Walima receptions often feature sophisticated centerpieces and cascading floral arrangements.

Corporate events often require brand-centric focal points, such as illuminated logos, creative product displays, or interactive installations. For birthday parties, we design custom setups like themed dessert tables, balloon walls, or life-sized cutouts of characters.

Our team works closely with clients to conceptualize and design focal points that align with the event’s theme. We use high-quality materials and innovative techniques to ensure each element stands out. Lighting, textures, and placement are carefully considered to maximize impact.

By creating stunning focal points, we not only elevate the aesthetic appeal of your event but also give guests a memorable experience. These elements often become the highlight of photographs and videos, leaving a lasting impression on attendees.`,
      images: [TC4],
    },
    {
      id: "section9",
      title: "Personalizing the Guest Experience",
      content: `Personalization is key to making guests feel valued and engaged. At The Graceful Company, we integrate personalized touches into the event theme to create a unique and memorable experience for each attendee.

For weddings, we design custom place cards, welcome kits, and thank-you notes featuring the couple’s monogram or a meaningful message. In Mehndi and Barat ceremonies, we incorporate cultural symbols that resonate with the families, such as embroidered favors or traditional sweets.

Corporate events benefit from branded giveaways, customized seating arrangements, and interactive activities like photo booths with company-themed props. For birthdays, we design personalized party favors, custom playlists, or interactive games that reflect the host’s personality.

Our team ensures that personalization is subtle yet impactful. We consider guest demographics and preferences to tailor every detail, from the food menu to the entertainment lineup. Technology, such as digital check-ins or personalized event apps, adds a modern touch to the guest experience.

By focusing on personalization, we create a warm, welcoming atmosphere where guests feel appreciated. These thoughtful details leave a lasting impression, making your event stand out as one that truly values its attendees.`,
      images: [TC5],
    },
    {
      id: "section10",
      title: "Seamlessly Merging Traditional and Modern Themes",
      content: `Merging traditional and modern themes allows us to create events that honor cultural heritage while embracing contemporary design. At The Graceful Company, we excel in striking the perfect balance between the two.

For weddings, we integrate traditional rituals like Rasm-e-Mehndi with modern décor elements. Vibrant drapes and antique props blend harmoniously with LED lighting and floral installations. Similarly, Barat and Walima events feature royal motifs with a modern twist, such as minimalist table settings or sleek stage designs.

Corporate events often require blending traditional formalities with modern branding. We incorporate elegant setups alongside high-tech elements like interactive screens and digital displays. Birthday celebrations might combine nostalgic themes with trendy décor, ensuring they appeal to guests of all ages.

Our process begins by understanding your cultural and aesthetic preferences. We collaborate with artisans, designers, and tech experts to bring your vision to life. Attention to detail is key—whether it’s selecting fabrics, choosing lighting styles, or creating interactive experiences.

By seamlessly merging traditional and modern elements, we create events that are both meaningful and visually stunning. This approach ensures that your celebration resonates with all generations, creating an unforgettable experience for everyone.

`,
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
          <Icon as={GiVikingLonghouse} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={TC1}
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
            Theme Conceptualization
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={GiEngagementRing} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={TC6}
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

export default ThemeConceptualizationPage;
