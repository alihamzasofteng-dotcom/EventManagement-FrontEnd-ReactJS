import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
  Image,
  Checkbox,
  useToast, // Chakra UI Toast
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { MdPerson, MdLock, MdEmail } from "react-icons/md";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useRegister from "../hooks/useRegister"; // Import your hook
import Gracelogo2 from "../assets/logonobg.png";
import floral4 from "../assets/floral4.webp";
import m3 from "../assets/m3.jpg";
import m2 from "../assets/m2.jpg";
import { RegisterResponse, RegisterData } from "../entities/Register";
const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { register, loading, errors } = useRegister(); // Use the register hook
  // Define the scroll animation
  const sparkle = keyframes`
    0% { transform: translateX(0); opacity: 0; }
    50% { transform: translateX(20px); opacity: 1; }
    100% { transform: translateX(0); opacity: 0; }
  `;

  const navigate = useNavigate(); // Navigation hook
  const toast = useToast(); // For general error messages
  const [fieldErrors, setFieldErrors] = useState<
    RegisterResponse | Record<string, string>
  >({});

  const validateFields = () => {
    const errors: Record<string, string> = {};

    if (!firstName.trim()) errors.name = "First name is required.";
    if (!email.match(/^\S+@\S+\.\S+$/)) errors.email = "Invalid email address.";
    if (password.length < 6)
      errors.password = "Password must be at least 6 characters.";
    if (!agreedToTerms)
      errors.terms = "You must agree to the terms and conditions.";

    setFieldErrors(errors); // Update error state dynamically
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "firstName") setFirstName(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "agreedToTerms") setAgreedToTerms(value === "true");

    validateFields(); // Trigger validation on input change
  };

  const handleRegister = async () => {
    if (!validateFields()) return; // Stop execution if validation fails
    if (!agreedToTerms) {
      setFieldErrors({ terms: "You must agree to the terms and conditions." });
      return;
    }
    try {
      const response = await register({ name: firstName, email, password });
      if (response && response._id) {
        toast({
          title: "Registration Successful",
          description: "Welcome! You can now Login.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top", // Place it on top
          containerStyle: {
            animation: `${sparkle} 1.5s infinite`,
            borderRadius: "2px",
            backgroundColor: "#FFD700",
            color: "black",
            padding: "8px",
          },
        });
        navigate("/login");
      }
    } catch (err: any) {
      if (err.response && err.response.data === "user already exist") {
        toast({
          title: "Error",
          description: "user already exist",
          status: "error",
          duration: 3000,
          isClosable: true,
          colorScheme: "red",
          position: "top", // Place it on top
          containerStyle: {
            animation: `${sparkle} 1.5s infinite`,
            borderRadius: "2px",
            backgroundColor: "#FFD700",
            color: "black",
            padding: "8px",
          },
        });
      } else if (err.response && err.response.data) {
        setFieldErrors(err.response.data);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
          colorScheme: "white",
        });
      }
    }
  };

  const handleSocialLogin = (platform: string) => {
    alert(
      ` Currently Sign in not availble with ${platform} 
        kindly manually create account
        Sorry for inconvenience  
        `
    );
  };

  const settings = {
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
      <Box
        bg="#2c2638"
        color="white"
        width="880px"
        height="auto"
        boxShadow="2xl"
        borderRadius="lg"
        display="flex"
        overflow="hidden"
      >
        {/* Left Side Carousel */}
        <Box
          width="50%"
          bg="#2c2638"
          position="relative"
          padding="5px"
          flexShrink={0} // Prevent shrinking on left side
        >
          <Slider {...settings}>
            <Box padding="10px">
              <Image
                src={floral4}
                alt="Slide 1"
                borderRadius="lg"
                height="630px"
                objectFit="cover"
              />
            </Box>
            <Box padding="10px">
              <Image
                src={m3}
                alt="Slide 2"
                borderRadius="lg"
                height="630px"
                objectFit="cover"
              />
            </Box>
            <Box padding="10px">
              <Image
                src={m2}
                alt="Slide 3"
                borderRadius="lg"
                height="630px"
                objectFit="cover"
              />
            </Box>
          </Slider>

          <Box position="absolute" top="10px" left="10px">
            <Image
              src={Gracelogo2}
              alt="Logo"
              borderRadius="lg"
              height="90px"
              objectFit="cover"
            />
          </Box>
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
          <Box
            position="absolute"
            bottom="60px"
            width="100%"
            textAlign="center"
          >
            <Heading fontSize="30px" color="white">
              Capturing Moments
            </Heading>
            <Heading fontSize="30px" color="white">
              Creating Memories
            </Heading>
          </Box>
        </Box>

        {/* Right Side Register Form */}
        <Box flex="1" p={8} minWidth="400px">
          <Heading textAlign="center" mb={10} fontSize="40px">
            Create an Account
          </Heading>
          <Stack spacing={8}>
            {/* First Name */}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdPerson} color="gray.400" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="First Name"
                variant="flushed"
                focusBorderColor="blue.500"
                value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                isInvalid={!!fieldErrors.name}
                errorBorderColor="red.300"
              />
            </InputGroup>
            {fieldErrors.name && (
              <Box
                animation="bounceIn 0.5s ease-out"
                color="red.500"
                mt="-20px"
              >
                <Text>{fieldErrors.name}</Text>
              </Box>
            )}

            {/* Email */}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdEmail} color="gray.400" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email Address"
                variant="flushed"
                focusBorderColor="blue.500"
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
                onChange={(e) => handleInputChange("email", e.target.value)}
                // placeholder="Email"
                isInvalid={!!fieldErrors.email}
                errorBorderColor="red.300"
              />
            </InputGroup>

            {fieldErrors.email && (
              <Box
                animation="bounceIn 0.5s ease-out"
                color="red.500"
                mt="-20px"
              >
                <Text>{fieldErrors.email}</Text>
              </Box>
            )}

            {/* Password */}
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={MdLock} color="gray.400" />
              </InputLeftElement>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                variant="flushed"
                focusBorderColor="blue.500"
                value={password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={(e) => handleInputChange("password", e.target.value)}
                // placeholder="Password"
                // type="password"
                isInvalid={!!fieldErrors.password}
                errorBorderColor="red.300"
              />
              <InputRightElement>
                <Icon
                  as={showPassword ? ViewOffIcon : ViewIcon}
                  cursor="pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputRightElement>
            </InputGroup>

            {fieldErrors.password && (
              <Box
                animation="bounceIn 0.5s ease-out"
                color="red.500"
                mt="-20px"
              >
                <Text>{fieldErrors.password}</Text>
              </Box>
            )}

            {/* Terms and Conditions */}
            <Checkbox
              colorScheme="blue"
              isChecked={agreedToTerms}
              onChange={(e) => {
                const checked = e.target.checked;
                setAgreedToTerms(checked);

                // Remove the error for terms if the checkbox is checked
                if (checked) {
                  const updatedErrors = { ...fieldErrors };
                  delete updatedErrors.terms;
                  setFieldErrors(updatedErrors);
                } else {
                  validateFields(); // Trigger validation when the checkbox is unchecked
                }
              }}
            >
              I agree to the{" "}
              <Link color="#FFC221" href="/terms">
                terms and conditions
              </Link>
            </Checkbox>
            {fieldErrors.terms && (
              <Text color="red.500">{fieldErrors.terms}</Text>
            )}
            {/* Register Button */}
            <Button
              bg="#FFC221"
              color="#081F51"
              size="lg"
              isLoading={loading}
              _hover={{
                bg: "#E6B31D",
                transform: "translateX(7px)",
              }}
              onClick={handleRegister}
            >
              Create Account
            </Button>
          </Stack>
          {/* {errors && <Text color="red.500">{errors}</Text>} */}
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
              Already have an account?{" "}
              <Link color="#FFC221" href="/login">
                Login
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
      <style>
        {`
            @keyframes bounceIn  {
                          0% {
                transform: scale(0.9);
                opacity: 0;
              }
              50% {
                transform: scale(1.1);
                opacity: 0.5;
              }
              100% {
                transform: scale(1);
                opacity: 1;
              }
            }
          `}
      </style>
    </Box>
  );
};

export default RegisterPage;
