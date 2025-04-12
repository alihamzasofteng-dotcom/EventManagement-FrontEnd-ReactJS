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
import fahad from "../assets/fahad.jpg";

const LightingAndAmbiancePage = () => {
  const sections = [
    {
      id: "section1",
      title: "Lighting and Ambiance: The Soul of Every Event",
      content: `Lighting sets the mood and creates the ambiance for any event. At The Graceful Company, we recognize that the right lighting transforms an ordinary space into an extraordinary experience. Whether it’s a wedding, corporate gala, or private celebration, we design lighting schemes that resonate with your event's theme and atmosphere.

Lighting is more than just illumination; it tells a story. Soft, warm glows evoke romance and intimacy, while bold, colorful lights energize the space. Our expertise ranges from elegant chandeliers to dynamic LED installations. We tailor every detail to suit the event’s purpose and your personal preferences.

The interplay of light with decor elements like floral arrangements, drapery, and furniture adds depth and drama. Highlighting key areas, such as stages, dance floors, and dining spaces, ensures a seamless and functional flow throughout the event.

With over 25 years of experience, we blend innovation with artistry. Using state-of-the-art technology, we incorporate projection mapping, synchronized lighting, and eco-friendly solutions to create captivating effects.

Let The Graceful Company craft the soul of your event with lighting that captivates, inspires, and leaves your guests mesmerized. From subtle sophistication to grand statements, our designs promise an unforgettable ambiance.`,
      images: [light2],
    },
    {
      id: "section2",
      title: "Custom Lighting Solutions for Unique Events",
      content: `Every event is unique, and lighting should reflect its individuality. At The Graceful Company, we specialize in personalized lighting solutions tailored to your theme, venue, and preferences. Whether it’s an intimate gathering or a grand affair, we bring your vision to life with bespoke designs.

We begin by understanding your event’s purpose and mood. Want a romantic candlelit ambiance? Or perhaps an electrifying party atmosphere? Our team uses a combination of techniques—uplighting, downlighting, fairy lights, and LEDs—to create the desired effect.

We also prioritize functionality alongside aesthetics. For instance, strategically placed lighting enhances visibility and guides guests to focal areas like stages, entrances, and seating arrangements. Our designs are seamless, blending with decor and maximizing the visual impact of the venue.

Incorporating modern technology, we offer features like color-changing lights, synchronized effects, and programmable displays that add an interactive touch. We also value sustainability by using energy-efficient equipment and environmentally conscious practices.

Trust The Graceful Company to deliver lighting solutions that are as unique as your event. From conception to execution, our expertise ensures a flawless experience that exceeds expectations. Let us make your special occasion unforgettable.`,
      images: [],
    },
    {
      id: "section3",
      title: "Ambient Lighting for Romantic Settings",
      content: `Romantic events demand an ambiance that exudes warmth and intimacy. At The Graceful Company, we specialize in ambient lighting that creates the perfect atmosphere for weddings, engagements, anniversaries, and other love-filled celebrations.

Soft, warm tones are the essence of romantic lighting. We use a blend of candles, fairy lights, and elegant chandeliers to bathe your venue in a gentle glow. These elements enhance floral arrangements, drapery, and other decor, elevating the overall aesthetic.

For outdoor events, our designs include illuminated pathways, hanging lanterns, and glowing canopies that evoke a dreamy, magical feel. Indoors, we use dimmable lights and subtle accent lighting to create cozy, intimate spaces.

Our team collaborates closely with you to understand your vision. We ensure that every element, from table centerpieces to the dance floor, is lit to perfection. Safety and reliability are paramount, and we use the latest equipment to deliver flawless results.

Let The Graceful Company illuminate your romantic moments with lighting that touches hearts and creates unforgettable memories. Experience the magic of ambiance designed with love and care.`,
      images: [],
    },
    {
      id: "section4",
      title: "Dynamic Lighting for High-Energy Celebrations",
      content: `For vibrant and energetic events, lighting must match the energy of the occasion. At The Graceful Company, we excel at creating dynamic lighting setups that infuse life and excitement into parties, concerts, and corporate events.

Our designs use cutting-edge technology to synchronize lighting effects with music, speeches, or performances. Moving beams, strobe effects, and color-changing lights add a sense of motion and rhythm, turning dance floors and stages into captivating focal points.

We also create dramatic entrances and transitions. Imagine walking into a venue illuminated with pulsating lights, setting the tone for a night of celebration. Our designs use gobo projections, LED walls, and advanced effects to keep guests engaged and entertained.

Beyond aesthetics, functionality is key. We ensure every corner of your venue is well-lit while highlighting areas like stages, dining spaces, and photo booths. Our team’s expertise ensures seamless execution and a safe, reliable setup.

From corporate galas to birthday bashes, let The Graceful Company deliver lighting that amplifies the energy of your celebration and creates lasting impressions.`,
      images: [light3],
    },
    {
      id: "section5",
      title: "Transforming Venues with Lighting Design",
      content: `Lighting can completely transform a venue, turning ordinary spaces into stunning environments. At The Graceful Company, we specialize in using light as a design element to elevate your event and bring your vision to life.

Our team highlights architectural features and decor with precision. Uplighting walls, spotlighting centerpieces, and creating dramatic shadows add depth and drama. For outdoor events, we use illuminated pathways, glowing trees, and dynamic projections to create enchanting atmospheres.

Projection mapping is another innovative tool we use to add visual storytelling. By projecting custom designs onto walls or ceilings, we create a one-of-a-kind experience that immerses guests in the event’s theme.

With 25 years of expertise, we prioritize both aesthetics and practicality. Our lighting designs are safe, reliable, and tailored to your venue’s specific layout. Let The Graceful Company transform your space into a masterpiece of light and ambiance.`,
      images: [],
    },
    {
      id: "section6",
      title: "Eco-Friendly Lighting Solutions",
      content: `Sustainability is a growing priority for event planning, and lighting plays a significant role in reducing the environmental impact. At The Graceful Company, we are committed to eco-friendly lighting solutions that deliver stunning effects while minimizing energy consumption.

We use energy-efficient LED lights that consume significantly less power compared to traditional lighting. These versatile lights come in a variety of colors and designs, offering endless creative possibilities while reducing your event's carbon footprint.

For outdoor events, solar-powered lighting is an excellent choice. We use solar lanterns, string lights, and path markers to create an enchanting ambiance without relying on conventional power sources.

Incorporating smart lighting systems allows us to program and control lights efficiently. Features like dimming, timers, and motion sensors ensure that energy is used only when and where it is needed.

Our commitment to sustainability doesn’t compromise aesthetics. We integrate eco-friendly materials and innovative designs to create visually captivating setups. Whether it’s an intimate gathering or a large-scale event, we ensure that our eco-conscious approach enhances the overall experience.

Choose The Graceful Company for lighting solutions that are as kind to the planet as they are beautiful. Together, we can create memorable events while protecting the environment.`,
      images: [light5],
    },
    {
      id: "section7",
      title: "Luxury Lighting for Elite Events",
      content: `Elite events demand a touch of opulence, and lighting is the perfect medium to create a luxurious ambiance. At The Graceful Company, we specialize in crafting high-end lighting designs that reflect sophistication and grandeur for exclusive gatherings.

Crystal chandeliers, golden uplighting, and intricate light installations are some of the elements we use to exude elegance. Our designs highlight the finer details of your event, such as floral arrangements, table settings, and architectural features.

For high-profile clients, we offer custom lighting designs that are truly one-of-a-kind. From personalized projections to branded light displays, we ensure that every aspect of the lighting aligns with your event’s exclusivity and prestige.

Luxury lighting is not just about aesthetics—it’s also about precision and professionalism. We use state-of-the-art equipment and work closely with your event team to ensure flawless execution.

Let The Graceful Company transform your elite event with lighting that embodies sophistication and leaves your guests in awe.`,
      images: [],
    },
    {
      id: "section8",
      title: "Lighting for Cultural and Themed Celebrations",
      content: `Cultural and themed events require lighting that complements their unique identity and traditions. At The Graceful Company, we blend creativity with cultural sensitivity to design lighting that enhances the essence of your celebration.

For cultural events, we incorporate traditional elements such as lanterns, patterned projections, and warm tones to honor the occasion’s significance. Whether it’s a Mehndi, Baraat, Walima, Diwali, Christmas, or Chinese New Year, our lighting designs celebrate the richness of your heritage.

For themed celebrations, we immerse guests in the chosen concept through innovative lighting. From enchanting fairytale weddings to futuristic corporate galas, our designs include color coordination, dynamic effects, and props that bring your vision to life.

Our team collaborates closely with you to ensure that every detail aligns with your theme or cultural values. With expertise in diverse traditions and modern trends, we create a harmonious blend of tradition and innovation.

Trust The Graceful Company to illuminate your cultural or themed celebration with lighting that tells a story and leaves a lasting impression.`,
      images: [light6],
    },
    {
      id: "section9",
      title: "Innovative Projection Mapping",
      content: `Projection mapping is revolutionizing event lighting, turning any surface into a dynamic canvas for visuals. At The Graceful Company, we use this cutting-edge technology to create immersive experiences that captivate guests and elevate your event.

From projecting your brand logo onto a building to displaying mesmerizing visuals on walls, ceilings, or even tables, the possibilities are endless. Projection mapping allows us to customize designs that align with your event’s theme and message.

For weddings, imagine a romantic animation projected onto the dance floor, or for corporate events, a product launch visualized on a grand scale. This technology brings creativity to life and engages guests in a way traditional lighting cannot.

We use the latest equipment and software to ensure sharp, vibrant projections that leave a lasting impression. Our team handles every detail, from concept creation to technical execution, ensuring a seamless experience.

Let The Graceful Company transform your event with projection mapping that combines technology and artistry for unforgettable results.`,
      images: [],
    },
    {
      id: "section10",
      title: "Mood Lighting for Intimate Gatherings",
      content: `Intimate gatherings call for lighting that creates a cozy, welcoming atmosphere. At The Graceful Company, we excel at designing mood lighting that enhances the warmth and charm of smaller events.

Soft, diffused lighting is key to setting the mood. We use candles, fairy lights, and lampshades to create a relaxed ambiance. For outdoor gatherings, hanging lanterns and glowing pathways add a magical touch.

Accent lighting highlights key elements such as table settings, floral arrangements, or a fireplace. We also incorporate dimmers and adjustable lighting to adapt the mood as the evening progresses.

Our team works closely with you to understand the tone and purpose of your gathering. Whether it’s a family dinner, an engagement party, or a milestone celebration, we ensure the lighting reflects your vision and enhances the experience for your guests.

Let The Graceful Company illuminate your intimate moments with lighting that feels personal and unforgettable.`,
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
          <Icon as={FaRegLightbulb} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={light1}
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
            Lighting And Ambiance
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={CiLight} color="#0A003C" boxSize={12} />
      </Box>
      {/* Centered Big Image */}
      <Box gridColumn="1 / span 2" textAlign="center">
        <Image
          src={light4}
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

export default LightingAndAmbiancePage;
