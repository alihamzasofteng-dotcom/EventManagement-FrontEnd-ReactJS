import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { useEffect, useRef } from "react";
import { IoMdCall } from "react-icons/io";
import "../components/Navbar/navbar1.css"; // Import the external CSS file

const NavBar1 = () => {
  const scrollingRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const distance = scrollingRef.current
      ? scrollingRef.current.offsetWidth + 1150
      : 0;
    let start: number | null = null;

    const smoothScroll = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = timestamp - start;

      if (numberRef.current) {
        const moveDistance = (progress / 10) % distance;
        numberRef.current.style.transform = `translateX(-${moveDistance}px)`;
      }

      requestAnimationFrame(smoothScroll);
    };

    requestAnimationFrame(smoothScroll);

    return () => {
      if (numberRef.current) {
        numberRef.current.style.transform = "translateX(0)";
      }
    };
  }, []);

  return (
    <HStack
      className="navbar-container"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box ref={scrollingRef}>
        <Text className="navbar-brand">Rana Tariq</Text>
      </Box>

      <Box className="navbar-animated-text-container">
        <Box ref={numberRef} className="navbar-animated-text">
          <HStack spacing={2} alignItems="flex-start">
            <Box>
              <IoMdCall className="call-icon" />
            </Box>
            <Text className="navbar-phone-number">+92 3004473421</Text>
          </HStack>
        </Box>
      </Box>
    </HStack>
  );
};

export default NavBar1;
