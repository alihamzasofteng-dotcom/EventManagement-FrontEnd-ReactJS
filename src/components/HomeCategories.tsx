import React from "react";
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Button,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useHomeCategories from "../hooks/useHomeCategories";
import Category from "../entities/Categories";



const HomeCategories = () => {
  const { data, error, isLoading } = useHomeCategories(); // Default data to empty array if undefined
  const navigate = useNavigate(); // Initialize navigate
  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading categories.</Text>;

  // Ensure data is treated as an array
  const categories = Array.isArray(data) ? data : [];

  console.log(categories);

  const categoryOrder = [
    "Mehndi",
    "Barat",
    "Walima",
    "Corporate Functions",
    "Birthdays",
    "Dawat",
    "Mehfils",
  ];

  // Sort categories according to the specified order
  const sortedData = categories
    .slice() // Copy array to avoid mutating original
    .sort((a, b) => {
      const indexA = categoryOrder.indexOf(a.name);
      const indexB = categoryOrder.indexOf(b.name);
      // Place categories not found in categoryOrder at the end
      return (
        (indexA === -1 ? Infinity : indexA) -
        (indexB === -1 ? Infinity : indexB)
      );
    });

  // Split categories into big and small
  const bigCategories = sortedData.slice(0, 3); // First three for big cards
  const smallCategories = sortedData.slice(3); // Remaining for small cards
  const handleCardClick = (type: string) => {
    navigate(`/events?type=${encodeURIComponent(type)}`);
  };

  return (
    <VStack spacing={8} width="100%" marginTop="50px">
      {/* <Box marginLeft="90px"> */}
      <Box>
        <Text
          textAlign="center"
          fontSize="lg"
          color="#0071DC"
          fontWeight={600}
          fontFamily="inter"
        >
          Categories
        </Text>
        <Heading
          textAlign="center"
          my="4"
          fontSize="50px"
          fontFamily="Inter"
          color="#081F51"
        >
          Popular Categories
        </Heading>
      </Box>
      <SimpleGrid
        columns={[1, null, 3]}
        spacing={10}
        width="1300px"
        padding={5}
        marginLeft="90px"
      >
        {bigCategories.map((category: Category) => (
          <Box
            key={category._id}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="lg"
            p={4} // Add padding to the cards
            onClick={() => handleCardClick(category.type)} // Pass type to navigate
            cursor="pointer"
          >
            <Box overflow="hidden" height="270px" borderRadius="2xl">
              <Image
                src={`http://localhost:3000${category.image_background}`}
                alt={category.name}
                boxSize="100%"
                objectFit="cover"
                height="100%"
                borderRadius="2xl"
                transform="scale(1)"
                transition="transform 0.3s ease"
                _hover={{
                  transform: "scale(1.1)", // Slight zoom effect
                }}
              />
            </Box>
            <VStack p={4} spacing={4} align="center">
              <Text
                fontSize="25px"
                fontFamily="Inter"
                color="#081F51"
                fontWeight="bold"
                _hover={{
                  color: "#FFC221",
                }}
              >
                {category.name}
              </Text>
              {/* Horizontal Divider */}
              <Divider
                orientation="horizontal"
                borderColor="gray.300"
                width="100%"
                // my={1}
              />

              <Button
                bg="#FFC221"
                color="#081F51"
                size="lg"
                mt={{ base: 4, md: 0 }}
                _hover={{
                  bg: "#E6B31D",
                  transform: "translateX(7px)",
                }}
              >
                See Details
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Heading
        textAlign="center"
        my="4"
        fontSize="40px"
        fontFamily="Inter"
        color="#081F51"
      >
        Other Categories
      </Heading>

      <SimpleGrid
        columns={[2, null, 4]}
        spacing={5}
        width="1300px"
        marginLeft="90px"
        // height="400px"
      >
        {smallCategories.map((category: Category) => (
          <Box
            key={category._id}
            bg="gray.100"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            p={4} // Add padding to the cards
            onClick={() => handleCardClick(category.type)} // Pass type to navigate
            cursor="pointer"
            // marginLeft="50px"
          >
            <Box overflow="hidden" height="270px" borderRadius="2xl">
              <Image
                src={`http://localhost:3000${category.image_background}`}
                alt={category.name}
                boxSize="100%"
                objectFit="cover"
                height="100%"
                borderRadius="2xl"
                transform="scale(1)"
                transition="transform 0.3s ease"
                _hover={{
                  transform: "scale(1.1)", // Slight zoom effect
                }}
              />
            </Box>
            <VStack p={3} spacing={2} align="center">
              <Text
                fontSize="25px"
                fontFamily="Inter"
                color="#081F51"
                fontWeight="bold"
                _hover={{
                  color: "#FFC221",
                }}
              >
                {category.name}
              </Text>
              {/* Horizontal Divider */}
              <Divider
                orientation="horizontal"
                borderColor="gray.300"
                width="100%"
                my={2}
              />

              <Button
                bg="#FFC221"
                color="#081F51"
                size="lg"
                mt={{ base: 4, md: 0 }}
                _hover={{
                  bg: "#E6B31D",
                  transform: "translateX(7px)",
                }}
              >
                See Details
              </Button>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default HomeCategories;
