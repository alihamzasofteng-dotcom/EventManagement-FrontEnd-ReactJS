import { Box, Text, Button, VStack, HStack, Icon } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaCheckCircle } from "react-icons/fa";

import { useState } from "react";

const PricingSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null); // Track the hovered card

  return (
    //bg="#F3F1F5"
    <Box py={12}>
      {/* // <Box py={12}> */}
      <VStack spacing={2} align="center" mb={8}>
        <Text fontSize="lg" color="#0071DC" fontWeight={600} fontFamily="inter">
          Pricing & Packages
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="bold"
          fontFamily="Inter"
          color="#081F51"
        >
          Our Services and Pricing
        </Text>
        <Text
          fontSize="lg"
          color="gray.600"
          maxWidth="600px"
          textAlign="center"
        >
          We offer a range of customizable packages to suit every event, from
          intimate gatherings to grand celebrations. Let us help you create a
          memorable experience within your budget.
        </Text>
      </VStack>

      <HStack spacing={10} justify="center">
        {/* Card 1 */}
        <Box
          bg="#081F51"
          borderRadius="md"
          boxShadow={hoveredCard === 0 ? "lg" : "md"} // Apply stronger shadow when hovered
          transform={hoveredCard === 0 ? "translateY(-40px)" : "translateY(0)"}
          transition="transform 0.3s, box-shadow 0.3s"
          overflow="hidden"
          width="266px"
          height="453px"
          p={2}
          mt={-6} // Slightly raise the card
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Box>
            <Text
              fontSize="22px"
              fontWeight="medium"
              color="white"
              marginTop="20px"
              align="center"
              fontFamily="Inter"
            >
              WEDDING PARTY
            </Text>
            <Text
              fontSize="40px"
              fontWeight="medium"
              color="#FFC221"
              marginLeft="30px"
              marginTop="-5"
              fontFamily="inter"
            >
              $850
            </Text>
            <VStack spacing={0} align="start" mb={4} marginLeft="30px">
              <HStack>
                <Icon as={FaCheckCircle} color="#0CECDD" marginTop="-4" />
                <Text fontFamily="Inter" color="white" marginLeft="10px">
                  6 Hours
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#0CECDD" marginTop="-4" />
                <Text fontFamily="Inter" color="white" marginLeft="10px">
                  Decoration
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#0CECDD" marginTop="-4" />
                <Text fontFamily="Inter" color="white" marginLeft="10px">
                  Photographer
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#0CECDD" marginTop="-4" />
                <Text fontFamily="Inter" color="white" marginLeft="10px">
                  Catering
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#0CECDD" marginTop="-4" />
                <Text fontFamily="Inter" color="white" marginLeft="10px">
                  Entertainment
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#0CECDD" marginTop="-4" />
                <Text fontFamily="Inter" color="white" marginLeft="10px">
                  Up to 100 Persons
                </Text>
              </HStack>
            </VStack>
            <Button
              background="#EDEDED"
              width="180px"
              marginLeft="30px"
              height="50px"
              marginTop="-3"
              color="#0071DC"
            >
              Get in Touch
            </Button>
          </Box>
        </Box>

        {/* Card 2 */}
        <Box
          bg="white"
          borderRadius="md"
          boxShadow={hoveredCard === 1 ? "lg" : "md"} // Apply stronger shadow when hovered
          transform={hoveredCard === 1 ? "translateY(-40px)" : "translateY(0)"}
          transition="transform 0.3s, box-shadow 0.3s"
          overflow="hidden"
          width="266px"
          height="453px"
          p={2}
          mt={20} // Slightly raise the card
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Box>
            <Text
              fontSize="22px"
              fontWeight="medium"
              color="#081F51"
              marginTop="20px"
              align="center"
              fontFamily="Inter"
            >
              Birthday PARTY
            </Text>
            <Text
              fontSize="40px"
              fontWeight="medium"
              color="#081F51"
              marginLeft="30px"
              marginTop="-5"
              fontFamily="inter"
            >
              $145
            </Text>
            <VStack spacing={0} align="start" mb={4} marginLeft="30px">
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  6 Hours
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Decoration
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Photographer
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Catering
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Entertainment
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Up to 20 Persons
                </Text>
              </HStack>
            </VStack>
            <Button
              background="#FFC221"
              width="180px"
              marginLeft="30px"
              height="50px"
              marginTop="-3"
              color="#081F51"
            >
              Get in Touch
            </Button>
          </Box>
        </Box>

        {/* Card 3 */}
        <Box
          bg="white"
          borderRadius="md"
          boxShadow={hoveredCard === 2 ? "lg" : "md"} // Apply stronger shadow when hovered
          transform={hoveredCard === 2 ? "translateY(-40px)" : "translateY(0)"}
          transition="transform 0.3s, box-shadow 0.3s"
          overflow="hidden"
          width="266px"
          height="453px"
          p={2}
          mt={-6} // Slightly raise the card
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Box>
            <Text
              fontSize="22px"
              fontWeight="medium"
              color="#081F51"
              marginTop="20px"
              align="center"
              fontFamily="Inter"
            >
              PARTY & EVENTS
            </Text>
            <Text
              fontSize="40px"
              fontWeight="medium"
              color="#081F51"
              marginLeft="30px"
              marginTop="-5"
              fontFamily="inter"
            >
              $650
            </Text>
            <VStack spacing={0} align="start" mb={4} marginLeft="30px">
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  8 Hours
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Decoration
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Photographer
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Catering
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Entertainment
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Up to 100 Persons
                </Text>
              </HStack>
            </VStack>
            <Button
              background="#FFC221"
              width="180px"
              marginLeft="30px"
              height="50px"
              marginTop="-3"
              color="081F51"
            >
              Get in Touch
            </Button>
          </Box>
        </Box>

        {/* Card 4 */}
        <Box
          bg="white"
          borderRadius="md"
          boxShadow={hoveredCard === 3 ? "lg" : "md"} // Apply stronger shadow when hovered
          transform={hoveredCard === 3 ? "translateY(-40px)" : "translateY(0)"}
          transition="transform 0.3s, box-shadow 0.3s"
          overflow="hidden"
          width="266px"
          height="453px"
          p={2}
          mt={20} // Slightly raise the card
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <Box>
            <Text
              fontSize="22px"
              fontWeight="medium"
              color="#081F51"
              marginTop="20px"
              align="center"
              fontFamily="Inter"
            >
              FESTIVAL EVENTS
            </Text>
            <Text
              fontSize="40px"
              fontWeight="medium"
              color="#081F51"
              marginLeft="30px"
              marginTop="-5"
              fontFamily="inter"
            >
              $1200
            </Text>
            <VStack spacing={0} align="start" mb={4} marginLeft="30px">
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  12 Hours
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Decoration
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Photographer
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Catering
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Entertainment
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaCheckCircle} color="#081F51" marginTop="-4" />
                <Text fontFamily="Inter" color="#9C8D8D" marginLeft="10px">
                  Up to 500 Persons
                </Text>
              </HStack>
            </VStack>
            <Button
              background="#FFC221"
              width="180px"
              marginLeft="30px"
              height="50px"
              marginTop="-3"
              color="081F51"
            >
              Get in Touch
            </Button>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
};

export default PricingSection;
