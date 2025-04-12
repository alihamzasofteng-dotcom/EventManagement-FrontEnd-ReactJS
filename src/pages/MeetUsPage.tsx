import React from "react";
import ContactUsDetailedPage from "./../components/ContactUsDetailedPage";
import { Box, Flex, Heading, Icon, Image } from "@chakra-ui/react";
import { MdOutlineFastfood } from "react-icons/md";
import { GiChickenOven } from "react-icons/gi";
import map from "../assets/map.jpeg";

const MeetUsPage = () => {
  return (
    <div>
      <Box
        gridColumn="1 / span 2"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        p={4}
        marginTop="60px"
        borderRadius="2xl"
        boxShadow="lg"
        w="80%"
        mx="auto"
        position="relative"
        marginBottom="20px"
        // top="-40px"
        zIndex="1"
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
            src={map}
            alt="Profile Picture"
            borderRadius="full"
            boxSize="60px"
            mb={2}
            marginRight="20px"
            objectFit="cover"
          />
          <Heading
            textAlign="center"
            my="4"
            fontSize="40px"
            fontFamily="Helvetica-Bold"
            bgGradient="linear-gradient(to top, #141e30, #243b55);"
            bgClip="text"
          >
            We are Looking forward to meeting you !
          </Heading>
        </Flex>

        {/* Right Section: FaEllipsisV Icon */}
        <Icon as={MdOutlineFastfood} color="#0A003C" boxSize={12} />
      </Box>
      <ContactUsDetailedPage />
    </div>
  );
};

export default MeetUsPage;
