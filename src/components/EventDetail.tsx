import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  IconButton,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/useEvent";
import { API_BASE_URL } from "../entities/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import stars from "../assets/stars.gif";
import fireworks from "../assets/fireworks.gif";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import WhyChooseUs from "./WhyChooseUs";
import FAQ from "./FAQ";
import ContactUsDetailedPage from "./ContactUsDetailedPage";
import RelatedFunctions from "./RelatedFunctions";

const EventDetail = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const { data: eventData, error, isLoading } = useEvent(id!);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // For "Read More"

  if (isLoading) return <Text>Loading...</Text>;
  if (error || !eventData) return <Text>Error loading event details.</Text>;

  const event = eventData;

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box padding="1px">
      {/* Event Name */}
      <Heading
        marginTop="30px"
        mb="30px"
        fontSize="40px"
        fontFamily="Inter"
        color="#1C0C3D"
        textAlign="center"
      >
        {event.name}
      </Heading>

      {/* Main Event Image */}
      {event.images && event.images.length > 0 && (
        <Box
          width="100%"
          height="675px"
          position="relative"
          background={`url(${stars}) repeat center center`}
          // background={`url(${fireworks})`}
          backgroundSize="contain" // Maintains GIF aspect ratio
          borderRadius="90px" // Rounds the corners
          boxShadow="0px 0px 20px rgba(0, 0, 0, 0.5)" // Adds a shadow around the box
          //opacity="0.8" // Makes the GIF semi-transparent
          overflow="hidden" // Ensures image stays within rounded corners
          // border="4px dotted #DAA520" // Adds a fancy dashed border
        >
          <Image
            src={`${API_BASE_URL}${event.images[0]}`}
            alt={event.name}
            width="95%" // Adds a margin around the image
            height="95%"
            objectFit="contain"
            borderRadius="100px" // Slightly less rounded for the image itself
            margin="auto" // Centers the image
            boxShadow="0 0 15px rgba(255, 255, 255, 0.5)" // Adds a glowing effect to the image
            // opacity="0.9"
          />
        </Box>
      )}

      <Divider my={8} />

      {/* Two-Column Grid */}
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={8}>
        {/* Left: Description */}
        <VStack align="start" spacing={2} marginLeft="100px">
          <Box
            mt="8"
            width="100%"
            padding="16px"
            backgroundColor="#F9F9F9"
            borderRadius="12px"
            boxShadow="lg"
          >
            <Heading my="4" fontSize="40px" fontFamily="Inter" color="#1C0C3D">
              Description:
            </Heading>
            <Text
              noOfLines={isExpanded ? undefined : 15}
              color={useColorModeValue("gray.800", "gray.400")}
              fontSize="21px"
            >
              {event.description}
            </Text>
            <Button
              bg="#FFC221"
              color="#081F51"
              size="sm"
              mt={{ base: 4, md: 0 }}
              _hover={{
                bg: "#E6B31D",
                transform: "translateX(7px)",
              }}
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </Button>
          </Box>
        </VStack>

        {/* Right: Image Slider */}
        {event.images && event.images.length > 1 && (
          <Swiper
            modules={[EffectCards, Autoplay]}
            effect="cards"
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
            loop={true}
            style={{
              width: "420px",
              height: "450px",
              marginTop: "100px",
            }}
          >
            {event.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  position="relative"
                  width="100%"
                  height="100%"
                  borderRadius="15px"
                  overflow="hidden"
                  onClick={() => handleImageClick(index)} // Open modal on click
                  cursor="pointer"
                >
                  <Image
                    src={`${API_BASE_URL}${image}`}
                    alt={`Slide ${index}`}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>

      {/* Modal for Fullscreen Image View */}
      <Modal isOpen={isModalOpen} onClose={closeModal} size="full">
        <ModalOverlay />
        <ModalContent background="black">
          <ModalBody position="relative">
            <Image
              src={`${API_BASE_URL}${event.images[currentImageIndex]}`}
              alt={`Full view ${currentImageIndex}`}
              width="100%"
              height="100vh"
              objectFit="contain"
            />
            {/* Close Button */}
            <IconButton
              aria-label="Close"
              icon={<CloseIcon />}
              position="absolute"
              top="10px"
              right="10px"
              onClick={closeModal}
              background="whiteAlpha.800"
            />
            {/* Left Button */}
            <IconButton
              aria-label="Previous"
              icon={<ArrowLeftIcon />}
              position="absolute"
              left="10px"
              top="50%"
              transform="translateY(-50%)"
              onClick={showPrevImage}
              background="whiteAlpha.800"
            />
            {/* Right Button */}
            <IconButton
              aria-label="Next"
              icon={<ArrowRightIcon />}
              position="absolute"
              right="10px"
              top="50%"
              transform="translateY(-50%)"
              onClick={showNextImage}
              background="whiteAlpha.800"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <RelatedFunctions type={event.type} />
      <WhyChooseUs />
      <FAQ />
      <ContactUsDetailedPage />
    </Box>
  );
};

export default EventDetail;
