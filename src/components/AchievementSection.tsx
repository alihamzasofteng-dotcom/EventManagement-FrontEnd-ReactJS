import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import achievement4 from "../assets/achievemtn4.png";
import m3crop from "../assets/m3-crop.jpg";

import happyWeddingImg from "../assets/ac1.webp";
import corporateFunctionImg from "../assets/corporateFunction.webp";
import concertImg from "../assets/concert.webp";
import partyImg from "../assets/party.webp";

// Counter animation function
const useCounter = (target: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let isMounted = true;
    let start = 0;
    const end = target;
    const duration = 3000;
    const increment = Math.ceil(end / (duration / 100));

    const timer = setInterval(() => {
      if (start < end && isMounted) {
        start += increment;
        if (start > end) start = end;
        setCount(start);
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [target]);

  return count;
};

const AchievementSection = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById("achievement-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      setInView(rect.top < window.innerHeight && rect.bottom > 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const happyWeddings = useCounter(inView ? 353 : 0);
  const corporateFunctions = useCounter(inView ? 129 : 0);
  const concerts = useCounter(inView ? 150 : 0);
  const parties = useCounter(inView ? 152 : 0);

  const images = [happyWeddingImg, corporateFunctionImg, concertImg, partyImg];
  const labels = [
    "Happy Weddings",
    "Corporate Functions",
    "Concerts",
    "Parties",
  ];
  const counts = [happyWeddings, corporateFunctions, concerts, parties];

  return (
    <Box
      id="achievement-section"
      marginTop="100px"
      // marginBottom="1px"
      px={{ base: "4", md: "20" }}
    >
      <Flex
        justify="space-between"
        align="start"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Column */}
        <Box marginLeft="50px" position="relative" mb={{ base: "10", md: "0" }}>
          <Image
            src={m3crop}
            alt="Achievement"
            objectFit="cover"
            position="relative"
            zIndex="1"
            borderRadius="250px 250px 5px 5px" //top-left corner, top-right, bottom-left, bottom-right
            height="620px"
            width="500px"
          />
        </Box>

        {/* Right Column */}
        <Box maxWidth="600px">
          <Text
            fontSize="lg"
            color="#0071DC"
            fontWeight={600}
            fontFamily="inter"
          >
            --- Achievement
          </Text>
          <Heading my="4" fontSize="50px" fontFamily="Inter" color="#1C0C3D">
            Our only concern is making your event unforgettable.
          </Heading>
          <Text
            mb="10"
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize="21px"
          >
            Since 1995, we've successfully organized thousands of remarkable
            events of all types. Our clients are consistently thrilled with the
            unforgettable experiences we create.
          </Text>

          {/* Counters Section */}
          <SimpleGrid columns={2} spacing={4}>
            {counts.map((count, index) => (
              <HStack
                key={index}
                align="center"
                spacing="6"
                w="full"
                justify="flex-start"
              >
                <Box
                  borderRadius="full"
                  border="2px solid grey"
                  width="80px"
                  background="#F7F7F7"
                  height="80px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                  position="relative"
                  transition="transform 0.5s ease-in-out"
                  transform={`rotate(${
                    inView ? 15 * Math.pow(-1, index + 1) : 0
                  }deg)`}
                  _hover={{
                    transform: `rotate(${15 * Math.pow(-1, index)}deg)`,
                  }}
                >
                  <Image
                    src={images[index]}
                    alt={`${labels[index]} Image`}
                    borderRadius="full"
                    boxSize="70px"
                    objectFit="cover"
                  />
                </Box>
                <VStack align="flex-start" spacing="1">
                  <Text
                    fontSize="39px"
                    fontWeight="bold"
                    color="#081F51"
                    lineHeight="1"
                  >
                    {count}
                    <Text
                      as="span"
                      fontSize="39px"
                      fontWeight="bold"
                      color="#081F51"
                      lineHeight="1"
                    >
                      K
                    </Text>
                  </Text>
                  <Text
                    fontSize="20px"
                    color="#354C68"
                    fontWeight="medium"
                    lineHeight="2"
                  >
                    {labels[index]}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default AchievementSection;
