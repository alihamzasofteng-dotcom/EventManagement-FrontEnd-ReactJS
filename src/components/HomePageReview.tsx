import { useEffect, useState, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Avatar,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoCubeOutline,
  AiOutlineFire,
  RiHeartsLine,
  FaRegHandshake,
  GiBigDiamondRing,
} from "react-icons/all";
import saba from "../assets/saba.png";
import moazam from "../assets/moazam.jpeg";
import laiba from "../assets/laiba.jpeg";
import bilawal from "../assets/bilawal.jpeg";
import aina from "../assets/aina.jpeg";
import usman from "../assets/usman.jpeg";

const reviews = [
  {
    id: 1,
    text: "Rana Tariq's company made our event truly magical! From the moment we walked in, everything was perfectly organized.",
    reviewerImg: saba,
  },
  {
    id: 2,
    text: "We had our Nikah ceremony with Rana Tariq's company, and it was a beautiful experience. The team was extremely respectful.",
    reviewerImg: moazam,
  },
  {
    id: 3,
    text: "For our ring ceremony, we wanted everything to be perfect, and Rana Tariq's team delivered.",
    reviewerImg: laiba,
  },
  {
    id: 4,
    text: "Our birthday celebration was made extraordinary. Everything was done professionally.",
    reviewerImg: bilawal,
  },
  {
    id: 5,
    text: "The team exceeded our expectations with their exceptional service. I’m beyond satisfied with their dedication.",
    reviewerImg: aina,
  },
  {
    id: 6,
    text: "Our Mehendi night was a total hit. Everyone had a blast, and I couldn't be more pleased with how it all turned out!",
    reviewerImg: usman,
  },
];

const icons = [
  RiHeartsLine,
  GiBigDiamondRing,
  FaRegHandshake,
  AiOutlineFire,
  IoCubeOutline,
];

const HomePageReview = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMoreClick = () => {
    setShowMore(true);
  };

  return (
    <Flex
      ref={sectionRef}
      mx="auto"
      maxW="80%"
      marginLeft="100px"
      marginTop="130px"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
    >
      {/* Left Side Content */}
      <Box marginLeft="50px" maxW="500px" mr={{ base: 0, md: 4 }}>
        <Text fontSize="lg" fontWeight="bold" color="#0071DC">
          ---Reviews
        </Text>
        <Heading as="h1" fontSize="4xl" mt={2} color="#1C0C3D">
          What our client say
        </Heading>
        <Text
          mt={4}
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize="19px"
          textAlign="justify"
        >
          With over 25 years of experience in the event management industry, we
          take pride in making every event a memorable one. Our dedicated team
          works hard to ensure every detail is perfect, leaving our clients
          fully satisfied. Here’s what they have to say about their experiences
          with us.
          {showMore && (
            <>
              <br />
              We value every moment, ensuring it becomes a cherished memory for
              years to come. Our commitment to excellence is unwavering, making
              every event stand out.
            </>
          )}
        </Text>
        {!showMore && (
          <Button
            background="#FFC221"
            width="180px"
            marginLeft="30px"
            height="50px"
            color="#081F51"
            mt={4}
            onClick={handleMoreClick}
          >
            More
          </Button>
        )}
      </Box>

      {/* Right Side: Reviews Section */}
      <Box
        position="relative"
        w="450px"
        h="450px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Outer Circle */}
        <Box
          position="absolute"
          w="450px"
          h="450px"
          borderRadius="full"
          bg="white"
          border="2px solid #E1E0E6"
          zIndex="1"
        >
          {isVisible &&
            icons.map((IconComponent, index) => {
              const angle = 270 - index * 72; // Position icons around the circle
              const rad = (angle * Math.PI) / 180;
              const x = 225 * Math.cos(rad); // 225 is the radius
              const y = 225 * Math.sin(rad);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  style={{
                    position: "absolute",
                    left: `${x + 225 - 30}px`, // 30 = icon size / 2
                    top: `${y + 225 - 30}px`,
                  }}
                >
                  <Box
                    boxSize="60px"
                    borderRadius="full"
                    bg="#1C0C3D"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={IconComponent} boxSize={8} color="white" />
                  </Box>
                </motion.div>
              );
            })}
        </Box>

        {/* Inner Circle */}
        <Box
          position="relative"
          w="315px"
          h="315px"
          borderRadius="full"
          bg="#1C0C3D"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReviewIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                position: "absolute",
              }}
            >
              <Avatar
                src={reviews[currentReviewIndex].reviewerImg}
                size="lg"
                mb={2}
              />
              <Text textAlign="center" color="white" mt={4} maxW="140px">
                {reviews[currentReviewIndex].text}
              </Text>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Flex>
  );
};

export default HomePageReview;
