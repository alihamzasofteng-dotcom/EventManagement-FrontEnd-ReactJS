import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Spinner,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useEvents from "../hooks/useEvents";

import { API_BASE_URL } from "../entities/config";
import { useNavigate } from "react-router-dom";

interface RelatedFunctionsProps {
  type: string;
}

const RelatedFunctions: React.FC<RelatedFunctionsProps> = ({ type }) => {
  const { data, error, isLoading } = useEvents(type || "");
  const [relatedEvents, setRelatedEvents] = useState<any[]>([]);
  const navigate = useNavigate();

  // Update related events when data is fetched
  useEffect(() => {
    if (data?.events) {
      setRelatedEvents(data.events.slice(0, 6)); // Limit to the first 6 functions
    }
  }, [data]);

  if (isLoading) {
    return (
      <Box mt={8} textAlign="center">
        <Spinner size="lg" />
        <Text>Loading related functions...</Text>
      </Box>
    );
  }

  if (error || !relatedEvents.length) {
    return (
      <Box mt={8} textAlign="center">
        <Text color="red.500">
          {error
            ? "Error fetching related functions."
            : "No related functions found."}
        </Text>
      </Box>
    );
  }

  return (
    <Box mt={8}>
      <Heading
        mb={14}
        fontSize="30px"
        fontFamily="Inter"
        color="#1C0C3D"
        textAlign="center"
        marginTop="50px"
      >
        Related {type} Functions
      </Heading>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={8} // Reduced spacing between cards
        slidesPerView={3}
        loop={true}
      >
        {relatedEvents.map((event) => (
          <SwiperSlide key={event._id}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              boxShadow="lg"
              // p={4}
              cursor="pointer"
              maxW="350px"
              height="480px"
              marginLeft="70px"
            >
              <Box overflow="hidden" height="250px" borderRadius="2xl">
                <Image
                  src={`${API_BASE_URL}${event.images[0]}`}
                  alt={event.name}
                  boxSize="100%"
                  objectFit="cover"
                  height="100%"
                  borderRadius="2xl"
                  transform="scale(1)"
                  transition="transform 0.3s ease"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                />
              </Box>
              <VStack p={4} spacing={2} align="center">
                <Text
                  fontSize="25px"
                  fontFamily="Inter"
                  color="#081F51"
                  fontWeight="bold"
                  _hover={{
                    color: "#FFC221",
                  }}
                >
                  {event.name}
                </Text>
                <Divider borderColor="gray.300" width="100%" />
                <Button
                  bg="#FFC221"
                  color="#081F51"
                  size="lg"
                  _hover={{
                    bg: "#E6B31D",
                    transform: "translateX(7px)",
                  }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
                    navigate(`/events/${event._id}`);
                  }}
                >
                  View Details
                </Button>
              </VStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default RelatedFunctions;
