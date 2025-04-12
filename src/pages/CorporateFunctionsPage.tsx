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
import ce1 from "../assets/corporate-events/ce1.jpg";
import ce2 from "../assets/corporate-events/ce2.png";
import ce4 from "../assets/corporate-events/ce4.jpg";
import ce5 from "../assets/corporate-events/ce5.png";
import ce6 from "../assets/corporate-events/ce6.jpg";
import ce7 from "../assets/corporate-events/ce7.jpeg";
import ce10 from "../assets/corporate-events/ce10.webp";
import ce11 from "../assets/corporate-events/ce11.jpg";
import ce12 from "../assets/corporate-events/ce12.jpg";
import ce13 from "../assets/corporate-events/ce13.jpg";
import cemain from "../assets/corporate-events/cemain.jpg";
import cedecor from "../assets/corporate-events/cedeor.webp";

const CorporateFunctionsPage = () => {
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
            Corporate Functions
          </Heading>
        </Box>
      </VStack>

      {/* Full-Screen Image */}
      <Box w="100%" my={10} position="relative">
        <Image
          src={ce13}
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
        {[ce1, ce2, ce10, ce4, ce5, ce6, ce7, ce11, cemain].map(
          (src, index) => (
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
          )
        )}
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
          {/* Event Planning Service */}
          <Flex align="flex-start" gap={8}>
            <Image
              src={ce4}
              alt="Event Planning"
              borderRadius="lg"
              boxShadow="lg"
              height="500px"
              width="670px"
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
                🎉 Corporate Event Planning
              </Text>
              <Text fontSize="lg" color="gray.700" fontFamily="inter">
                Planning a corporate event that leaves a lasting impression
                requires a blend of strategy, creativity, and precision. Our
                corporate event planning services are designed to ensure every
                aspect of your event reflects professionalism and excellence.
                Whether it’s a product launch, a team-building retreat, or an
                annual conference, we specialize in creating tailored
                experiences that align with your brand's identity and
                objectives. From venue selection and logistical planning to
                managing guest experiences and vendor coordination, we handle
                every detail to perfection. Let us take the stress out of
                planning so you can focus on what matters most:
                <br />
                - engaging with your team,
                <br /> - clients, <br /> - and stakeholders.
              </Text>
            </Box>
          </Flex>

          {/* Exquisite Decorations */}
          <Flex
            align="flex-start"
            gap={8}
            flexDirection={{ base: "column", lg: "row-reverse" }}
          >
            <Image
              src={cedecor}
              alt="Exquisite Decorations"
              borderRadius="lg"
              boxShadow="lg"
              height="480px"
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
                🌟 Corporate Event Décor
              </Text>
              <Text fontSize="lg" color="gray.700" mt={1} fontFamily="inter">
                Elevate your corporate events with sophisticated and
                professional décor that resonates with your brand's values. Our
                decoration services include designing elegant setups, branded
                visuals, and innovative centerpieces that captivate your
                audience while maintaining a professional atmosphere. Each
                design element is carefully crafted to align with your event's
                theme, creating a cohesive and memorable ambiance. Whether
                you’re hosting a gala dinner, a seminar, or a trade show, our
                team ensures every detail, from stage design to table
                arrangements, enhances the overall experience. Trust us to
                transform your venue into a stunning space that inspires and
                impresses.
              </Text>
              <Text fontSize="lg" color="gray.700" mt={4}>
                Professional and innovative décor solutions tailored for
                impactful corporate events.
              </Text>
            </Box>
          </Flex>

          {/* Catering Services */}
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
              bg="blue.50"
              borderRadius="lg"
              boxShadow="md"
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Text fontSize="3xl" fontWeight="bold" color="blue.600">
                🍴 Corporate Catering Services
              </Text>
              <Text fontSize="lg" color="gray.700" fontFamily="inter">
                Impress your guests with exceptional catering services designed
                to complement your corporate event's theme and tone. Our expert
                chefs craft diverse menus that cater to a range of tastes and
                dietary needs, offering everything from elegant hors d'oeuvres
                to lavish buffets. With an emphasis on quality and presentation,
                our dishes are not only delicious but also a visual delight. We
                provide seamless service that ensures timely delivery, proper
                setup, and a hassle-free experience for you. Whether it’s a
                business breakfast, a formal dinner, or a casual networking
                event, our catering solutions are tailored to enhance your
                corporate gathering.
              </Text>
              <Text fontSize="lg" color="gray.700">
                Customized menus and impeccable service for unforgettable
                corporate dining.
              </Text>
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
          Corporate Event Calendar
        </Heading>

        {/* Event Ribbons */}
        <VStack spacing={10} align="center">
          {[
            {
              bg: "orange.100",
              hexColor: "purple",
              date: "25 Dec",
              heading: "Annual Strategy Meeting",
              headingBg: "purple.600",
              description:
                "Join us for an insightful strategy session where we plan the roadmap for the upcoming year.",
              venue: "Expo Center Rd, Lahore",
            },
            {
              bg: "red.100",
              hexColor: "blue",
              date: "15 Jan",
              heading: "New Product Launch",
              headingBg: "blue.700",
              description:
                "Celebrate the launch of our innovative new product with keynote speakers and a live demo.",
              venue: "Pearl Continental Hotel Lahore",
            },
            {
              bg: "yellow.100",
              hexColor: "green",
              date: "10 Feb",
              heading: "Corporate Team Building",
              headingBg: "green.700",
              description:
                "A day dedicated to building stronger teams through collaborative activities and workshops.",
              venue:
                "University of Engineering & Technology G.T. Rd Lahore, Pakistan",
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

export default CorporateFunctionsPage;
