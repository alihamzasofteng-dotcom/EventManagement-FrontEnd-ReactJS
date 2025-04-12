import React, { useState } from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Input,
  Flex,
  VStack,
  Heading,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import { GiChickenOven } from "react-icons/gi";
import rc1 from "../assets/rc1.avif";
import rc2 from "../assets/rc2.jpg";
import plaza from "../assets/plaza.webp";
import floral4 from "../assets/floral4.webp";
import light4 from "../assets/floral4.webp";
import gm1 from "../assets/gm1.jpeg";
import prewedding from "../assets/prewedding.jpg";
import TC6 from "../assets/tc6.webp";
import wecare1 from "../assets/wecare1.jpg";
import papapic2 from "../assets/wecare1.jpg";
import vision2 from "../assets/wecare1.jpg";
import map from "../assets/map.jpeg";
import review from "../assets/review.png";

const blogs = [
  {
    title: "Catering Services",
    image: rc2,
    path: "catering",
  },
  {
    title: "Venue Selection",
    image: plaza,
    path: "venue-selection",
  },
  {
    title: "Floral Arrangements",
    image: floral4,
    path: "floral-arrangements",
  },
  {
    title: "Lighting and Ambiance",
    image: light4,
    path: "lighting-and-ambiance",
  },
  {
    title: "Guest Management",
    image: gm1,
    path: "guest-management",
  },
  {
    title: "Pre-Wedding Activities",
    image: prewedding,
    path: "pre-wedding-activities",
  },
  {
    title: "Theme Conceptualization",
    image: TC6,
    path: "theme-conceptualization",
  },
  { title: "Meet Us", image: map, path: "meet-us" },
  { title: "Our Vision", image: vision2, path: "our-vision" },
  {
    title: "Testimonials and Reviews",
    image: review,
    path: "testimonials-and-reviews",
  },
  { title: "We Care", image: wecare1, path: "we-care" },
  { title: "Why Us", image: papapic2, path: "why-us" },
];

const BlogsPage = () => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredBlogs(
      blogs.filter((blog) => blog.title.toLowerCase().includes(query))
    );
  };

  const handleTitleClick = (title: string) => {
    setSearchQuery(title.toLowerCase());
    setFilteredBlogs(
      blogs.filter((blog) => blog.title.toLowerCase() === title.toLowerCase())
    );
  };

  return (
    <Box>
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
        marginBottom="50px"
        // top="-40px"
        zIndex="1"
        marginTop="60px"
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
          <Icon as={GiChickenOven} color="#0A003C" boxSize={12} />
        </Box>

        {/* Center Section: Image and Text */}
        <Flex align="center" flexDirection="row">
          <Image
            src={rc1}
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
            Our Famous Blogs
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={MdOutlineFastfood} color="#0A003C" boxSize={12} />
      </Box>

      <Flex
        justify="center"
        align="flex-start"
        gap="8"
        px="4"
        marginLeft="80px"
      >
        {/* Left Section: Blog Cards */}
        <Box flex="3">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {filteredBlogs.map((blog, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p={4} // Add padding to the cards
                // onClick={() => handleCardClick(`/${blog.path}`)} // Pass type to navigate
                cursor="pointer"
              >
                <Box overflow="hidden" height="270px" borderRadius="2xl">
                  <Image
                    src={blog.image}
                    alt={blog.title}
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
                    {blog.title}
                  </Text>
                  {/* Horizontal Divider */}
                  <Divider
                    orientation="horizontal"
                    borderColor="gray.300"
                    width="100%"
                    // my={1}
                  />
                  <Link to={`/${blog.path}`}>
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
                  </Link>
                </VStack>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Right Section: Search and Titles */}
        <Box
          flex="1"
          //bg="gray.50"
          boxShadow="lg"
          borderRadius="lg"
          p="4"
          bg="white"
          // p={4}
          // boxShadow="lg"
          // borderRadius="lg"
          minW="250px"
          maxW="300px"
          textAlign="left"
          marginTop="100px"
          border="2px solid"
        >
          <VStack spacing="4">
            <Input
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={handleSearch}
              variant="outline"
              focusBorderColor="blue.500"
            />
            <Text fontSize="sm" color="gray.500" fontFamily="Helvetica-Bold">
              Found {filteredBlogs.length} blogs
            </Text>
            <Box w="100%">
              <VStack align="start" spacing={3}>
                {blogs.map((blog, index) => (
                  <Button
                    key={index}
                    variant="link"
                    onClick={() => handleTitleClick(blog.title)}
                    //color="blue.600"
                    textAlign="left"
                    fontSize="lg"
                    color="#0A0050"
                    _hover={{ textDecoration: "underline" }}
                    fontFamily="Helvetica-Bold"
                  >
                    {blog.title}
                  </Button>
                ))}
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default BlogsPage;
