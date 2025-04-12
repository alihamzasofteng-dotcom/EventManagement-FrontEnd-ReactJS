import React from "react";
import { Flex, Heading, Text, Icon, Box } from "@chakra-ui/react";
import { IoManOutline } from "react-icons/io5";
import { CgInfinity } from "react-icons/cg";
import { IoMdOptions } from "react-icons/io";

import { motion } from "framer-motion";

const items = [
  {
    icon: IoManOutline,
    title: "Experienced Event Planners",
    description:
      "Our team of professionals brings expertise to every detail of your event.",
  },
  {
    icon: CgInfinity,
    title: "End-to-End Support",
    description:
      "From planning to execution, we're with you every step of the way.",
  },
  {
    icon: IoMdOptions,
    title: "Flexible Event Options",
    description:
      "We offer both in-person and virtual event solutions tailored to your needs.",
  },
];

const DarkBlueBox = () => {
  return (
    <Box
      bg="rgb(10, 0, 75)"
      color="white"
      py={12}
      w="97vw"
      height="230px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-around"
        w="full"
        maxW="1200px"
        px={6}
        textAlign="center"
      >
        {items.map((item, index) => (
          <Flex key={index} align="center" mx={3} mb={{ base: 8, md: 0 }}>
            <motion.div
              style={{
                background: "white",
                color: "rgb(10, 0, 75)",
                height: "80px",
                width: "130px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "100%", // Corrected for circle
                marginRight: 14, // Add margin to separate from text
                marginBottom: "10px",
              }}
              animate={{ rotateY: 0 }} // Initial state
              whileHover={{ rotateY: 720 }} // Double flip on hover
              whileTap={{ rotateY: 720 }} // Double flip on touch
              transition={{ duration: 0.5, ease: "linear" }} // Faster transition
            >
              <Icon as={item.icon} boxSize={8} />
            </motion.div>
            <Flex direction="column">
              <Heading as="h1" fontSize="17px" fontFamily="Inter">
                {item.title}
              </Heading>
              <Text fontSize="15px" color="gray.200" fontFamily="Inter">
                {item.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default DarkBlueBox;
