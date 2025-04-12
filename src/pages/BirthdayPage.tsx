import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Grid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Lottie from "lottie-react";
import boxAnimation from "../components/lottie/box.json";
import bulb from "../components/lottie/bulb.json";
import boy from "../components/lottie/boy.json";
import b1 from "../assets/birthdays/b1.webp";
import b2 from "../assets/birthdays/b2.jpg";
import b3 from "../assets/birthdays/b3.jpg";
import b4 from "../assets/birthdays/b4.jpg";
import b5 from "../assets/birthdays/b5.jpg";
import b6 from "../assets/birthdays/b6.jpg";
import b7 from "../assets/birthdays/b7.avif";
import b8 from "../assets/birthdays/b8.webp";
import b9 from "../assets/birthdays/b9.jpg";
import bithdaymain from "../assets/birthdays/bm1.jpg";
import eventlist from "../assets/birthdays/eventlist.jpg";
import exevent from "../assets/birthdays/exevent.jpg";
import cater1 from "../assets/birthdays/cater1.jpg";
import insta from "../assets/birthdays/insta.jpg";
import ContactUsDetailedPage from "../components/ContactUsDetailedPage";

const BirthdayPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleReadMore = () => setIsExpanded(true);

  const openImage = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box>
      {/* First Grid Section */}
      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={20}
        paddingLeft={20}
        paddingTop={20}
        alignItems="center"
      >
        {/* Left Side: Content */}
        <VStack align="flex-start" spacing={6} flex="1">
          <Box position="relative">
            {/* Heading Box Animation */}
            <Heading
              fontFamily="Inter"
              fontWeight="700"
              color="rgb(28, 12, 61)"
              fontSize="70px"
              lineHeight="80px"
              as="h1"
              bgGradient="linear(to-r, rgb(28, 12, 61), pink.400, rgb(28, 12, 61))"
              bgClip="text"
            >
              Birthdays
            </Heading>
            <Box
              position="absolute"
              top="-30px"
              left="320px"
              w="150px"
              h="150px"
            >
              <Lottie animationData={boxAnimation} loop autoplay />
            </Box>
          </Box>
          <Text
            fontSize="lg"
            color="gray.700"
            maxWidth="570px"
            fontFamily="Inter"
            fontWeight="350"
            noOfLines={isExpanded ? undefined : 5}
          >
            Celebrate your special day with style and grace. Let us make your
            birthday truly memorable with unique themes and extraordinary
            experiences. From personalized decorations to exquisite catering, we
            provide everything you need to make your birthday celebration
            unforgettable. Join us in crafting a magical day filled with joy,
            laughter, and cherished moments. Every detail will be meticulously
            planned to bring your dream birthday to life, leaving you with
            nothing but happiness and smiles. Choose us to turn your special day
            into a masterpiece of celebration!
          </Text>
          {!isExpanded && (
            <Button
              background="#FFC221"
              width="150px"
              height="50px"
              color="#081F51"
              onClick={handleReadMore}
            >
              Read More
            </Button>
          )}
        </VStack>
        <Grid templateColumns="1fr 1fr" width="100%" justifyItems="center">
          <Box
            background="#F0C4D1"
            borderRadius="40px 40px 2px 2px"
            boxShadow="md"
          >
            <Lottie
              animationData={boy}
              loop
              autoplay
              style={{ marginTop: "20px", marginLeft: "45px" }}
            />
          </Box>
          <Box>
            <Lottie
              animationData={bulb}
              loop
              autoplay
              style={{ marginTop: "30px" }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Full-Screen Image */}
      <Box w="100%" my={10} position="relative">
        <Image
          src={b4}
          alt="Birthday Main"
          objectFit="cover"
          w="100%"
          height="720px"
          borderRadius="20px"
        />
      </Box>

      {/* Grid of 7 Images */}
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
        px={20}
        py={10}
      >
        {[b1, b2, b3, bithdaymain, b5, b6, b7, b8, b9].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Birthday Image ${index + 1}`}
            borderRadius="lg"
            boxShadow="md"
            cursor="pointer"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => openImage(src)}
          />
        ))}
      </Grid>

      {/* Modal for Full-Screen Image */}
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent bg="rgba(0, 0, 0, 0.8)">
          <ModalBody
            p={0}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Full View"
                maxH="90vh"
                maxW="90vw"
                borderRadius="md"
                objectFit="contain"
              />
            )}
            <IconButton
              icon={<CloseIcon />}
              position="absolute"
              top="20px"
              right="20px"
              color="white"
              bg="transparent"
              fontSize="2xl"
              onClick={onClose}
              aria-label={""}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Services Section */}
      {/* Services Section */}
      <Box py={10} px={20}>
        <Heading
          size="md"
          mb={8}
          fontFamily="Inter"
          fontWeight="700"
          color="rgb(28, 12, 61)"
          fontSize="70px"
          lineHeight="80px"
          bgGradient="linear(to-r, rgb(28, 12, 61), pink.400, rgb(28, 12, 61))"
          bgClip="text"
        >
          Services
        </Heading>
        <VStack spacing={12}>
          {/* Event Planning Service */}
          <Flex align="flex-start" gap={8}>
            <Image
              src={eventlist}
              alt="Event Planning"
              borderRadius="lg"
              boxShadow="lg"
              height="485px"
              width="1500px"
              //marginTop="30px"
            />
            <Box
              p={6}
              bg="pink.50"
              borderRadius="lg"
              boxShadow="md"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontSize="3xl" fontWeight="bold" color="purple.600">
                🎉 Event Planning
              </Text>
              <Text fontSize="lg" color="gray.700" mt={1} fontFamily="inter">
                Creating an unforgettable event begins with meticulous planning,
                and that’s where our expertise shines. Our event planning
                services are designed to bring your vision to life with tailored
                themes that reflect your unique personality and preferences.
                From intimate gatherings to grand celebrations, we work closely
                with you to ensure every detail aligns perfectly with your
                expectations. Our team excels in transforming ideas into
                reality, handling everything from venue selection and guest
                management to timeline coordination and vendor negotiations.
                Whether it’s a dreamy wedding, a vibrant birthday party, or a
                sophisticated corporate event, we prioritize your satisfaction
                at every step. With our attention to detail and creative flair,
                you can sit back and enjoy your special day while we take care
                of the rest.
              </Text>
              {/* <Text fontSize="lg" color="gray.700">
                Tailored themes to suit every personality, ensuring your event
                is as unique as you are.
               
              </Text> */}
              {/* <Text fontSize="lg" color="gray.700" mt={2}>
                Our expert team delivers precision and creativity for every
                moment.
              </Text> */}
            </Box>
          </Flex>

          {/* Exquisite Decorations */}
          <Flex
            align="flex-start"
            gap={8}
            flexDirection={{ base: "column", lg: "row-reverse" }}
          >
            <Image
              src={exevent}
              alt="Exquisite Decorations"
              borderRadius="lg"
              boxShadow="lg"
              height="500px"
              width="620px"
              marginTop="10px"
            />
            <Box
              p={6}
              bg="teal.50"
              borderRadius="lg"
              boxShadow="md"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontSize="3xl" fontWeight="bold" color="teal.600">
                🌟 Exquisite Decorations
              </Text>
              <Text fontSize="lg" color="gray.700" mt={1} fontFamily="inter">
                We specialize in crafting breathtaking backdrops, elegant
                centerpieces, and immersive setups that captivate your guests
                from the moment they arrive. Each element of our designs is
                meticulously curated to reflect the theme and mood of your
                event, ensuring a cohesive and visually stunning experience. Our
                team combines artistry with technical expertise to create unique
                and memorable décor tailored to your preferences. Whether you
                envision a fairy-tale wedding, a chic modern gala, or a playful
                themed celebration, we bring your ideas to life with precision
                and creativity. Every detail, from lighting to floral
                arrangements, is designed to elevate your event, leaving a
                lasting impression on you and your guests.
              </Text>
              <Text fontSize="lg" color="gray.700" mt={4}>
                Transform venues into breathtaking spaces with stunning
                backdrops and setups. Every detail designed to perfection for
                unforgettable memories.
              </Text>
              {/* <Text fontSize="lg" color="gray.700" mt={2}>
                Every detail designed to perfection for unforgettable memories.
              </Text> */}
            </Box>
          </Flex>

          {/* Catering Services */}
          <Flex align="flex-start" gap={8}>
            <Image
              src={cater1}
              alt="Catering Services"
              borderRadius="lg"
              boxShadow="lg"
              height="520px"
              width="1500px"
              //marginTop="30px"
            />
            <Box
              p={6}
              bg="blue.50"
              borderRadius="lg"
              boxShadow="md"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                🍴 Catering Services
              </Text>
              <Text fontSize="lg" color="gray.700" fontFamily="inter">
                Delight your guests with an unforgettable culinary experience
                through our top-tier catering services. We believe that great
                food is at the heart of every successful event, and our menu
                offerings are crafted to please every palate. From gourmet
                dishes to comforting classics, our chefs use the freshest
                ingredients to create meals that are as delicious as they are
                visually appealing. Whether you need elegant plated meals,
                vibrant buffet spreads, or creative cocktail hour bites, we
                offer customized menus to suit your event’s theme and
                preferences. We also accommodate dietary restrictions and
                cultural requirements, ensuring that every guest feels valued
                and included. With impeccable service and a passion for
                excellence, our catering team delivers a dining experience that
                complements the magic of your special occasion.
              </Text>
              <Text fontSize="lg" color="gray.700">
                From appetizers to desserts, we ensure culinary excellence.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* Insta Posts Section */}
      <Box
        py={12}
        px={24}
        bg="pink.50"
        borderRadius="lg"
        my={16}
        boxShadow="xl"
      >
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          gap={12}
        >
          {/* Left Content */}
          <VStack
            align="flex-start"
            spacing={6}
            width={{ base: "100%", lg: "50%" }}
          >
            <Heading
              size="md"
              mb={8}
              fontFamily="Inter"
              fontWeight="700"
              color="rgb(28, 12, 61)"
              fontSize="70px"
              lineHeight="80px"
              bgGradient="linear(to-r, rgb(28, 12, 61), pink.400, rgb(28, 12, 61))"
              bgClip="text"
            >
              Stunning Insta Posts Design
            </Heading>
            <Text fontSize="lg" color="gray.700" fontFamily="inter">
              Social media thrives on visuals, and we’re here to make yours
              stand out. With our Insta Posts Design service, we create
              eye-catching, professionally designed posts that not only
              highlight your event but also elevate your Instagram profile to
              the next level.
              <br />
              <br />
              Our team ensures that every post reflects the magic of your event,
              showcasing vibrant colors, elegant layouts, and creative
              decorations. Whether it's a wedding, birthday, or corporate event,
              our designs are tailored to your theme, helping you share the joy
              and inspire your followers. Let us turn your moments into memories
              worth sharing!
            </Text>
          </VStack>

          {/* Right Image */}
          <Image
            src={insta}
            alt="Instagram Design"
            height="500px"
            width="100%"
            maxWidth="700px"
            borderRadius="lg"
            boxShadow="2xl"
          />
        </Flex>
      </Box>
      <ContactUsDetailedPage />
    </Box>
  );
};

export default BirthdayPage;
