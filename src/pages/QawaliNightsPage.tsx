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
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ContactUsDetailedPage from "../components/ContactUsDetailedPage";

import ce4 from "../assets/corporate-events/ce4.jpg";

import ce12 from "../assets/corporate-events/ce12.jpg";

import cedecor from "../assets/corporate-events/cedeor.webp";
import q1 from "../assets/qawali-night/q1.jpg";
import q2 from "../assets/qawali-night/q2.jpg";
import q3 from "../assets/qawali-night/q3.jpg";
import q4 from "../assets/qawali-night/q4.jpg";
import q5 from "../assets/qawali-night/q5.jpg";
import q6 from "../assets/qawali-night/q6.jpeg";
import q7 from "../assets/qawali-night/q7.jpg";
import q8 from "../assets/qawali-night/q8.jpg";
import q9 from "../assets/qawali-night/q9.jpeg";
import q10 from "../assets/qawali-night/q10.jpg";
import q11 from "../assets/qawali-night/q11.webp";
import q12 from "../assets/qawali-night/q12.jpg";

const QawaliNightsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openImage = (src: string) => {
    setSelectedImage(src);
    onOpen();
  };

  return (
    <Box>
      <VStack align="center" spacing={6} flex="1" mt={12}>
        <Box position="relative" width="100%">
          {/* Heading Box Animation */}
          <Heading
            fontFamily="Inter"
            fontWeight="700"
            color="rgb(28, 12, 61)"
            fontSize="70px"
            lineHeight="80px"
            as="h1"
            bgGradient="linear(to-r, #0A003C, #1A1A8F, #4A4AE4)"
            bgClip="text"
            textAlign="center"
            mx="auto"
          >
            Qawali Night Functions
          </Heading>
        </Box>
      </VStack>

      {/* Full-Screen Image */}
      <Box w="100%" my={10} position="relative">
        <Image
          src={q1}
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
        {[q4, q3, q10, q5, q9, q7, q8, q9, q2].map((src, index) => (
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
          bgGradient="linear(to-r, #0A003C, #1A1A8F, #4A4AE4)"
          bgClip="text"
          textAlign="center"
        >
          Services
        </Heading>
        <VStack spacing={12}>
          {/* Qawali Night Event Planning */}
          <Flex align="flex-start" gap={8}>
            <Image
              src={q12}
              alt="Event Planning"
              borderRadius="lg"
              boxShadow="lg"
              height="480px"
              width="670px"
            />
            <Box
              p={6}
              bg="purple.100"
              borderRadius="lg"
              boxShadow="lg"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontSize="3xl" fontWeight="bold" color="purple.700">
                🎉 Qawali Night Event Planning
              </Text>
              <Text fontSize="lg" color="gray.700" fontFamily="inter">
                Organizing a Qawali night involves much more than just booking a
                performer. It’s about creating an atmosphere filled with
                tradition, music, and cultural significance that captivates
                every guest. Our team takes the time to understand your vision
                for the event, whether it's an intimate gathering or a grand
                celebration. From selecting the perfect venue that suits the
                traditional vibe of the Qawali performance, to coordinating with
                top-tier artists, every detail is managed with precision. We
                handle every aspect of your event, including the sound systems,
                seating arrangements, guest coordination, and even providing
                live translations for non-native listeners, ensuring everyone
                enjoys the performance fully. Trust us to make your Qawali night
                an unforgettable experience that resonates with the spirit of
                the occasion.
              </Text>
            </Box>
          </Flex>

          {/* Qawali Night Stage Decorations */}
          <Flex
            align="flex-start"
            gap={8}
            flexDirection={{ base: "column", lg: "row-reverse" }}
          >
            <Image
              src={q4}
              alt="Stage Decorations"
              borderRadius="lg"
              boxShadow="lg"
              height="480px"
              width="620px"
              marginTop="10px"
            />
            <Box
              p={6}
              bg="teal.200"
              borderRadius="lg"
              boxShadow="lg"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontSize="3xl" fontWeight="bold" color="teal.700">
                🌟 Qawali Night Stage Décor
              </Text>
              <Text fontSize="lg" color="gray.700" mt={1} fontFamily="inter">
                The décor for a Qawali night must capture the essence of
                tradition while adding a modern twist to enhance the overall
                experience. Our team specializes in designing traditional and
                contemporary décor elements that complement the mesmerizing
                music of the Qawali performance. Imagine an elegantly adorned
                stage with velvet curtains, soft lighting that enhances the
                mood, and stunning floral arrangements that fill the venue with
                rich color and fragrance. From intricate stage backdrops
                showcasing Islamic art to elegantly set tables with cultural
                motifs, we take care of every detail. The ambiance we create
                ensures that your guests feel immersed in the magical world of
                Qawali music, making it a visual and emotional journey they
                won’t forget. Every element is carefully chosen to reflect the
                cultural significance of the event, allowing your guests to
                experience an authentic and beautifully presented evening.
              </Text>
              {/* <Text fontSize="lg" color="gray.700" mt={4}>
                Transform your venue with cultural and artistic elements that
                align perfectly with the spirit of Qawali music.
              </Text> */}
            </Box>
          </Flex>

          {/* Qawali Night Catering Services */}
          <Flex align="flex-start" gap={8}>
            <Image
              src={ce12}
              alt="Catering Services"
              borderRadius="lg"
              boxShadow="lg"
              height="470px"
              width="670px"
            />
            <Box
              p={6}
              bg="orange.100"
              borderRadius="lg"
              boxShadow="lg"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontSize="3xl" fontWeight="bold" color="orange.700">
                🍴 Qawali Night Catering Services
              </Text>
              <Text fontSize="lg" color="gray.700" fontFamily="inter">
                The food at your Qawali night should reflect the richness and
                diversity of the cultural experience you’re offering. Our
                catering services specialize in offering a range of dishes that
                complement the festive and traditional atmosphere of your event.
                From rich biryanis and kebabs to delicate sweets like gulab
                jamun and traditional mithai, we curate a menu that brings the
                flavors of the subcontinent to your table. Whether you are
                hosting a grand feast or an intimate gathering, our chefs ensure
                that each dish is cooked to perfection, offering guests a
                delightful culinary experience. With attention to every detail,
                from portion sizes to elegant presentation, we make sure the
                catering enhances the entire event. The menu is customizable,
                ensuring that dietary restrictions are taken into account
                without compromising on flavor, ensuring your guests are
                well-fed and satisfied throughout the evening.
              </Text>
              {/* <Text fontSize="lg" color="gray.700">
                  A variety of delicious and culturally rich dishes designed to
                  complement your Qawali night.
                </Text> */}
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* Latest Event Section */}
      <Box borderRadius="lg" my={16}>
        {/* Main Heading */}
        <Heading
          size="lg"
          mb={12}
          fontFamily="Inter"
          fontWeight="700"
          textAlign="center"
          bgGradient="linear(to-r, #0A003C, #1A1A8F, #4A4AE4)"
          bgClip="text"
          fontSize="50px"
          lineHeight="60px"
        >
          Qawali Event Calendar
        </Heading>

        {/* Event Ribbons */}
        <VStack spacing={10} align="center">
          {[
            {
              bg: "purple.100",
              hexColor: "purple",
              date: "1 March",
              heading: "Mehfil-e-Samaa Qawali Night",
              headingBg: "purple.600",
              description:
                "Experience a soulful night of Sufi music as talented Qawwals perform live, enchanting the audience with their mesmerizing melodies and spiritual tunes. The night is filled with devotion, unity, and celebration of mysticism, creating an unforgettable atmosphere.",
              venue: "Lahore Fort, Pakistan",
            },
            {
              bg: "indigo.100", // Darker shade reflecting the night sky
              hexColor: "blue",
              date: "3 Apr",
              heading: "Wisdom Qawali Night",
              headingBg: "blue.700",
              description:
                "Join us for an evening filled with wisdom and spiritual awakening. The night features soulful renditions of traditional Qawali performances that invoke deep reflection and contemplation. Let the music guide you through an emotional journey of self-discovery.",
              venue: "Cafe Daastan Askari 11, Bedian Road, Lahore",
            },
            {
              bg: "teal.100", // Teal color for a cool and serene night vibe
              hexColor: "green",
              date: "4 Sep",
              heading: "Night with Rahat Fateh Ali Khan",
              headingBg: "green.700",
              description:
                "A truly magical evening with the legendary Rahat Fateh Ali Khan. Enjoy his mesmerizing voice as he sings timeless Qawalis that have touched hearts across the globe. The night promises to be a spectacular celebration of music, culture, and devotion.",
              venue: "Hall-2, Alhamra Arts Center, Mall Road, Lahore",
            },
          ].map((event, index) => (
            <Flex
              key={index}
              bg={event.bg}
              borderRadius="full"
              boxShadow="md"
              align="center"
              p={6}
              gap={8}
              w="90%"
              maxW="1200px"
              position="relative"
            >
              {/* Hexagon with Date */}
              <motion.div
                style={{
                  width: "130px",
                  height: "130px",
                  background: event.hexColor, // Use "background" instead of "backgroundColor"
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "30px",
                  marginLeft: "80px",
                  marginRight: "50px",
                }}
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {event.date}
              </motion.div>

              {/* Event Details */}
              <VStack align="flex-start" spacing={3} flex="1">
                <Heading
                  size="lg"
                  fontFamily="serif"
                  fontWeight="600"
                  textAlign="center"
                  bg={event.headingBg}
                  bgClip="text"
                  fontSize="30px"
                >
                  {event.heading}
                </Heading>
                <Divider
                  borderColor="black"
                  borderWidth="2px"
                  borderStyle="dotted"
                  maxW="650px"
                />
                <Text fontSize="lg" color="gray.700" fontFamily="serif">
                  {event.description}
                </Text>
                <Text fontSize="md" color="gray.600" fontFamily="serif">
                  Venue: {event.venue}
                </Text>
              </VStack>
            </Flex>
          ))}
        </VStack>
      </Box>

      <ContactUsDetailedPage />
    </Box>
  );
};

export default QawaliNightsPage;
