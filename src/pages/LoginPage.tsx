import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { MdPerson, MdLock } from "react-icons/md";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css";
import Gracelogo2 from "../assets/logonobg.png";
import plaza from "../assets/plaza.webp";
import m3 from "../assets/m3.jpg";
import m2 from "../assets/m2.jpg";
import useLogin from "../hooks/useLogin";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { mutate, isLoading } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.name)); // Save user data
          toast({
            title: "Login successful!",
            status: "success",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
          navigate(from); // Redirect to previous page or home
        },
        onError: (error: any) => {
          toast({
            title: "Login failed!",
            description: error.message,
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        },
      }
    );
  };

  const handleSocialLogin = (platform: string) => {
    alert(`Sign in with ${platform}`);
  };

  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <Box position="absolute" bottom="20px" left="0" right="0" zIndex="10">
        <HStack justify="center">{dots}</HStack>
      </Box>
    ),
    customPaging: () => (
      <Box
        width="10px"
        height="10px"
        borderRadius="50%"
        bg="white"
        opacity="0.7"
        _hover={{ opacity: "1" }}
      />
    ),
  };

  return (
    <Box
      bg="#0A003C"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Main Container */}
      <Box
        bg="#2c2638"
        color="white"
        width="880px"
        height="600px"
        boxShadow="2xl"
        borderRadius="lg"
        display="flex"
        overflow="hidden"
      >
        {/* Left Side: Image Slider */}
        <Box width="50%" bg="#2c2638" position="relative" padding="5px">
          <Slider {...sliderSettings}>
            {[plaza, m3, m2].map((image, index) => (
              <Box key={index} padding="10px">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  borderRadius="lg"
                  height="570px"
                  objectFit="cover"
                />
              </Box>
            ))}
          </Slider>

          {/* Logo */}
          <Box position="absolute" top="10px" left="10px">
            <Image
              src={Gracelogo2}
              alt="Grace Logo"
              borderRadius="lg"
              height="90px"
              objectFit="cover"
            />
          </Box>

          {/* Back to Website Button */}
          <Button
            position="absolute"
            top="30px"
            right="20px"
            size="sm"
            bg="transparent"
            color="white"
            _hover={{ bg: "whiteAlpha.300" }}
            onClick={() => (window.location.href = "/")}
          >
            &larr; Back to Website
          </Button>

          {/* Heading */}
          <Box
            position="absolute"
            bottom="60px"
            width="100%"
            textAlign="center"
          >
            <Heading fontSize="30px" color="white" fontFamily="inter">
              Capturing Moments
            </Heading>
            <Heading fontSize="30px" color="white" fontFamily="inter">
              Creating Memories
            </Heading>
          </Box>
        </Box>

        {/* Right Side: Login Form */}
        <Box flex="1" p={8}>
          <Heading textAlign="center" mb={6} fontSize="40px">
            Login
          </Heading>
          <Stack spacing={10}>
            {/* Username Field */}
            <Box>
              <Text fontSize="md" fontWeight="bold" mb={3}>
                Username
              </Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdPerson} color="gray.400" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Type your username"
                  variant="flushed"
                  focusBorderColor="blue.500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputGroup>
            </Box>

            {/* Password Field */}
            <Box>
              <Text fontSize="md" fontWeight="bold" mb={3}>
                Password
              </Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={MdLock} color="gray.400" />
                </InputLeftElement>
                <Input
                  type="password"
                  placeholder="Type your password"
                  variant="flushed"
                  focusBorderColor="blue.500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </InputGroup>
              <Flex justifyContent="flex-end" mt={2}>
                <Link fontSize="sm" color="#FFC221">
                  Forgot password?
                </Link>
              </Flex>
            </Box>

            {/* Login Button */}
            <Button
              bg="#FFC221"
              color="#081F51"
              size="lg"
              mt={{ base: 4, md: 0 }}
              _hover={{
                bg: "#E6B31D",
                transform: "translateX(7px)",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            {/* Social Sign-Up */}
            <Box textAlign="center" mt={4}>
              <Text fontSize="sm" color="gray.500">
                Or Sign Up Using
              </Text>
              <HStack spacing={4} justify="center" mt={2}>
                <Button
                  size="sm"
                  rounded="full"
                  bg="blue.500"
                  color="white"
                  _hover={{ bg: "blue.600" }}
                  onClick={() => handleSocialLogin("Facebook")}
                >
                  <Icon as={FaFacebook} />
                </Button>
                <Button
                  size="sm"
                  rounded="full"
                  bg="red.500"
                  color="white"
                  _hover={{ bg: "red.600" }}
                  onClick={() => handleSocialLogin("Google")}
                >
                  <Icon as={FaGoogle} />
                </Button>
                <Button
                  size="sm"
                  rounded="full"
                  bg="blue.300"
                  color="white"
                  _hover={{ bg: "blue.400" }}
                  onClick={() => handleSocialLogin("Twitter")}
                >
                  <Icon as={FaTwitter} />
                </Button>
              </HStack>
              <Text fontSize="sm" mt={4}>
                Don’t have an account?{" "}
                <Link color="#FFC221" href="/register">
                  Create an Account
                </Link>
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
