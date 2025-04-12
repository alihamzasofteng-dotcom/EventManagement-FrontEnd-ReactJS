import { Box, HStack, Image, Text, Link } from "@chakra-ui/react";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Gracelogo2 from "../assets/logonobg.png";
import "../components/Navbar/navbar2.css"; // Import the external CSS file

const socialMediaIcons = [FiFacebook, RiInstagramFill, FaTiktok, FaYoutube];

const NavBar2 = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <HStack className="navbar-container">
      <Box className="navbar-logo-box">
        <Image src={Gracelogo2} className="navbar-logo-image" />
      </Box>
      <Box className="navbar-info">
        <HStack>
          <HStack spacing="5px">
            <Box marginBottom="15px">
              <MdLocationPin color="#DAA520" size={19} />
            </Box>
            <Text className="navbar-info-item">
              Address: 7, N Commercial, Defence Phase 1, DHA Lahore
            </Text>
          </HStack>
          <HStack spacing="5px" ml="10px">
            <Text className="navbar-info-item">|</Text>
          </HStack>
          <HStack spacing="5px" ml="10px">
            <Box marginBottom="15px">
              <GoClock color="#DAA520" size={19} />
            </Box>
            <Text className="navbar-info-item">
              Available: Monday to Sunday, 24 hours
            </Text>
          </HStack>
          <HStack spacing="5px" marginLeft={150}>
            <HStack marginBottom={4}>
              <IoPersonOutline color="#DAA520" size={19} />
            </HStack>
            <HStack spacing="10px">
              {user ? (
                <Text className="navbar-user-actions">Hello, {user}</Text>
              ) : (
                <>
                  <Link
                    as={RouterLink}
                    to="/login"
                    className="navbar-user-actions"
                  >
                    Login
                  </Link>
                  <Text>|</Text>
                  <Link
                    as={RouterLink}
                    to="/register"
                    className="navbar-user-actions"
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
          <HStack spacing="12px" className="navbar-social-icons">
            {socialMediaIcons.map((Icon, index) => (
              <Box key={index}>
                <Icon className="navbar-social-icon" />
              </Box>
            ))}
          </HStack>
          {user && (
            <Link
              onClick={handleLogout}
              className="navbar-user-actions"
              marginLeft="3px"
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
