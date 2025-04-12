import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Checkbox,
  Stack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useEvents from "../hooks/useEvents";
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from "../entities/config";
import Event from "../entities/Events";
import { useEffect } from "react";

const Events = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const type = queryParams.get("type") || "All";
  const budget = queryParams.get("budget") || "";
  const page = parseInt(queryParams.get("page") || "1");

  const {
    data: eventsData,
    error,
    isLoading,
  } = useEvents(type || "", budget, page);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading Events.</Text>;

  const events: Event[] =
    eventsData && "events" in eventsData && Array.isArray(eventsData.events)
      ? eventsData.events
      : [];

  const handleBudgetChange = (selectedBudget: string) => {
    const params = new URLSearchParams(search);
    params.set("budget", selectedBudget);
    params.set("page", "1");
    navigate(`/events?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(search);
    params.set("page", newPage.toString());
    navigate(`/events?${params.toString()}`);
  };

  return (
    <HStack p={5} spacing={10} align="top">
      {/* Left Sidebar on Top */}
      <Box
        width="100%"
        maxW="240px"
        p={8}
        marginTop="150px"
        height="100%"
        bg="#F3F1F5"
        borderRadius="md"
        boxShadow="lg"
        border="1px dotted #2F357B"
        // these 3 properties is moving box updown
        position="sticky"
        top="100px" // Adjust as per your header or padding
        alignSelf="start"
      >
        <Heading size="sm" mb={4} textAlign="center" color="#0A0050">
          Pick budgets
        </Heading>
        <Stack direction="column" spacing={4} justify="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={2}
            bg="#F3C623"
            border="2px solid #2F357B"
            borderRadius="50% 10% 50% 10%"
            boxShadow="md"
          >
            <Checkbox
              isChecked={!budget}
              onChange={() => handleBudgetChange("")}
              colorScheme="blue"
              size="md"
            >
              <Text
                fontFamily="Inter"
                color="#081F51"
                ml={2}
                mt={4}
                fontWeight="medium"
              >
                All
              </Text>
            </Checkbox>
          </Box>
          {["Low", "Medium", "High"].map((budgetType) => (
            <Box
              key={budgetType}
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={2}
              bg="#F3C623"
              border="2px solid #2F357B"
              borderRadius="50% 10% 50% 10%"
              boxShadow="md"
              overflow="hidden" // Clips the waves within the box
              position="relative" // Allows the wave box to be positioned absolutely
            >
              {/* Wave Effect */}
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                background="linear-gradient(90deg, #EB8317 10%, #F3C623 100%)" // Blue water effect
                borderRadius="inherit" // Match the box shape
                animation="waveTilt 2s ease-in-out infinite alternate" // Creates a tilting water effect
                zIndex="0" // Keep it behind the content
                sx={{
                  "@keyframes waveTilt": {
                    "0%": {
                      transform: "rotate(-6deg) translateX(-3%)",
                    },
                    "50%": {
                      transform: "rotate(6deg) translateX(3%)",
                    },
                    "100%": {
                      transform: "rotate(-6deg) translateX(-3%)",
                    },
                  },
                }}
              ></Box>

              {/* Checkbox Content */}
              <Checkbox
                isChecked={budget === budgetType}
                onChange={() => handleBudgetChange(budgetType)}
                colorScheme="blue"
                size="md"
                zIndex="1" // Ensures checkbox stays above the wave effect
              >
                <Text
                  fontFamily="Inter"
                  color="#10375C"
                  ml={1}
                  mt={4}
                  fontWeight="medium"
                >
                  {budgetType} Budget
                </Text>
              </Checkbox>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Events Section */}
      <Box width="100%" maxW="1200px">
        {/* Heading */}
        <Text
          textAlign="center"
          fontSize="lg"
          color="#0071DC"
          fontWeight={600}
          fontFamily="inter"
          marginTop="20px"
        >
          Functions
        </Text>
        <Heading
          textAlign="center"
          my="4"
          fontSize="50px"
          fontFamily="Inter"
          color="#081F51"
        >
          {type} Functions
        </Heading>

        {/* Events Grid */}
        <SimpleGrid
          spacing={8}
          columns={[1, null, 3]}
          p={5}
          justifyContent="center"
        >
          {events.map((event: Event) => (
            <Box
              key={event._id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              boxShadow="lg"
              p={4}
              cursor="pointer"
              maxW="350px"
              height="480px"
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
                  onClick={() => navigate(`/events/${event._id}`)}
                >
                  View Details
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Pagination */}
        <HStack mt={8} justify="center" spacing={2}>
          <Button onClick={() => handlePageChange(1)}>&lt;&lt;</Button>
          <Button onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}>
            &lt;
          </Button>
          {eventsData &&
            Array.from({ length: Math.min(5, eventsData.total) }).map(
              (_, index) => (
                <Button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  colorScheme={index + 1 === page ? "blue" : "gray"}
                  borderRadius="full"
                >
                  {index + 1}
                </Button>
              )
            )}
          <Text>...</Text>
          {eventsData && (
            <>
              <Button
                onClick={() =>
                  handlePageChange(page < eventsData.total ? page + 1 : page)
                }
              >
                &gt;
              </Button>
              <Button onClick={() => handlePageChange(eventsData.total)}>
                &gt;&gt;
              </Button>
            </>
          )}
        </HStack>
      </Box>
    </HStack>
  );
};

export default Events;
