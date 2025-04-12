import { Box, HStack, Image, Text, Link, Button } from "@chakra-ui/react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import Gracelogo2 from "../assets/logonobg.png";
import { FiFacebook } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

// Social media icons array
const socialMediaIcons = [FiFacebook, RiInstagramFill, FaTiktok, FaYoutube];

const NavBar2 = () => {
  const [user, setUser] = useState<string | null>(null); // Explicitly define the user type
  console.log("user name", user);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    console.log("user data", userData);
    if (userData) {
      setUser(JSON.parse(userData)); // Directly store the string as the user name
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data from localStorage
    setUser(null); // Reset user state
  };

  return (
    <HStack
      padding="5px"
      bg="rgb(10, 0, 60)"
      color="white"
      justifyContent="space-between"
      height="38px"
    >
      <Box
        position="absolute"
        left="49px"
        top="46px"
        height="120px"
        width="195px"
        bg="rgb(10, 0, 80)"
        borderBottomLeftRadius="15%"
        borderBottomRightRadius="15%"
        overflow="hidden"
      >
        <Image
          src={Gracelogo2}
          objectFit="contain"
          maxHeight="115px"
          maxWidth="100%"
        />
      </Box>
      <Box marginLeft="290px" height={5}>
        <HStack>
          <HStack spacing="5px">
            <HStack marginBottom={4}>
              <MdLocationPin color="#DAA520" size={19} />
            </HStack>
            <Text fontSize="md" fontFamily="serif" fontWeight="400">
              Address: 7, N Commercial, Defence Phase 1, DHA Lahore
            </Text>
          </HStack>
          <HStack spacing="5px" ml="10px">
            <Text fontSize="md" fontFamily="serif" fontWeight="400">
              |
            </Text>
          </HStack>
          <HStack spacing="5px" ml="10px">
            <HStack marginBottom={4}>
              <GoClock color="#DAA520" size={19} />
            </HStack>
            <Text fontSize="md" fontFamily="serif" fontWeight="400">
              Available: Monday to Sunday, 24 hours
            </Text>
          </HStack>
          <HStack spacing="5px" marginLeft={150}>
            <HStack marginBottom={4}>
              <IoPersonOutline color="#DAA520" size={19} />
            </HStack>
            <HStack spacing="10px">
              {user ? (
                <Text fontFamily="Robotlo">Hello, {user}</Text>
              ) : (
                <>
                  <Link
                    as={RouterLink}
                    to="/login"
                    fontSize="md"
                    fontFamily="serif"
                    fontWeight="400"
                    _hover={{
                      color: "yellow.300",
                      textDecoration: "underline",
                    }}
                    marginTop="-15px"
                  >
                    Login
                  </Link>
                  <Text>|</Text>
                  <Link
                    as={RouterLink}
                    to="/register"
                    fontSize="md"
                    fontFamily="serif"
                    fontWeight="400"
                    _hover={{
                      color: "yellow.300",
                      textDecoration: "underline",
                    }}
                    marginTop="-15px"
                  >
                    Register
                  </Link>
                </>
              )}
            </HStack>
          </HStack>
          <HStack spacing="5px" ml="20px">
            <Text fontSize="md" fontFamily="serif" fontWeight="400">
              |
            </Text>
          </HStack>
          <HStack spacing="12px" marginLeft={1} marginBottom={4}>
            {socialMediaIcons.map((Icon, index) => (
              <Box key={index}>
                <Icon size="15px" color="white" />
              </Box>
            ))}
          </HStack>
          {user && (
            <Link
              onClick={handleLogout}
              marginLeft="3px"
              fontSize="17px"
              fontFamily="serif"
              fontWeight="500"
              _hover={{
                color: "yellow.300",
                textDecoration: "underline",
              }}
              marginTop="-15px"
            >
              Logout
            </Link>
          )}
        </HStack>
      </Box>
    </HStack>
  );
};

export default NavBar2;
