import React from "react";
import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import RanaTariq from "../assets/tm1.jpeg";
import HijabLady from "../assets/tm2.webp";
import HamzaAli from "../assets/tm3.jpg";
import Lady from "../assets/tm4.webp";
import LighteningMan from "../assets/tm5.jpg";
import Girl from "../assets/tm6.jpeg";
import Shah from "../assets/tm7.webp";
import Abubakar from "../assets/tm8.jpeg";
const teamData = [
  {
    src: RanaTariq,
    name: "Rana Tariq",
    description: "CEO and visionary leader with a talent for innovative ideas.",
  },
  {
    src: HijabLady,
    name: "Miss Gulshan",
    description: "Team Head who ensures smooth operations and coordination.",
  },
  {
    src: HamzaAli,
    name: "Hamza Ali",
    description: "Designer with an exceptional eye for aesthetics and detail.",
  },
  {
    src: Lady,
    name: "Maha Khalid",
    description: "Event Specialist leading a skilled technical team.",
  },
  {
    src: LighteningMan,
    name: "Shabir Ali",
    description: "Lighting Technician and DJ, master of ambiance and sound.",
  },
  {
    src: Girl,
    name: "Dana Ismail",
    description: "Lead Decorator overseeing a talented decorating team.",
  },
  {
    src: Shah,
    name: "Danial Shah",
    description: "Transport Incharge managing all transportation logistics.",
  },
  {
    src: Abubakar,
    name: "Abubakar",
    description: "Sound Engineer with expertise in audio perfection.",
  },
];

const HomeTeam = () => {
  return (
    <Box display="flex" flexDirection="column" minH="100vh" marginTop="1px">
      <Box textAlign="left" w="100%" marginBottom="250px">
        <Text
          textAlign="center"
          fontSize="lg"
          fontWeight="bold"
          color="#0071DC"
        >
          --- MeetTeam
        </Text>
        <Heading
          textAlign="center"
          as="h1"
          fontSize="4xl"
          mt={2}
          color="#1C0C3D"
        >
          My Dedicated Team
        </Heading>
        <Text
          textAlign="center"
          mt={4}
          color={useColorModeValue("gray.600", "gray.400")}
          fontSize="19px"
        >
          Rana Tariq, our CEO with 25 years of experience in event management,
          <br />
          has given life to this field with his visionary approach. Together
          <br />
          with skilled leaders who inspire their teams, they bring creativity,
          <br />
          expertise, and dedication to each project, transforming dreams into
          reality.
        </Text>
      </Box>

      {/* 3D Rotating Image Gallery */}
      <Box
        className="container"
        position="relative"
        w="200px"
        h="400px"
        style={{ transformStyle: "preserve-3d" }}
        animation="gallery 30s linear infinite"
        cursor="pointer"
      >
        {teamData.map((member, index) => (
          <Box
            as="span"
            key={index}
            position="absolute"
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              transform: `rotateY(calc(${
                index + 3
              } * 45deg)) translateZ(500px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={member.src}
              alt={member.name}
              h="250px"
              w="200px"
              borderRadius="5px"
              border="5px ridge #1C0C3D"
              boxShadow="0px 2.5px 10px rgba(3,3,3,0.2)"
              style={{
                WebkitBoxReflect:
                  "below 2.5px linear-gradient(transparent, transparent, rgba(3,3,3,0.2))",
              }}
            />
            <Text
              mt={2}
              fontWeight="bold"
              textAlign="center"
              fontFamily="inter"
            >
              {member.name}
            </Text>
            <Text
              fontSize="sm"
              textAlign="center"
              maxW="180px"
              fontFamily="inter"
            >
              {member.description}
            </Text>
          </Box>
        ))}
      </Box>

      <style>
        {`
            @keyframes gallery {
              0% {
                transform: perspective(1000px) rotateY(0deg);
              }
              100% {
                transform: perspective(1000px) rotateY(360deg);
              }
            }
          `}
      </style>
    </Box>
  );
};

export default HomeTeam;
