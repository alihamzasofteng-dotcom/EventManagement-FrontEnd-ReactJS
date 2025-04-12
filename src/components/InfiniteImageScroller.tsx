import { Box, Text, Image, VStack } from "@chakra-ui/react";
import ic1 from "../assets/ic1.webp";
import ic2 from "../assets/ic2.jpg";
import ic3 from "../assets/ic3.jpg";
import ic4 from "../assets/ic4.webp";
import ic5 from "../assets/ic5.webp";
import ic6 from "../assets/ic6.webp";

const images = [
  {
    src: ic3,
    title: "Mehndi",
    bgGradient: "linear-gradient(to right, #fdc830, #f37335)",
  },
  {
    src: ic1,
    title: "Barat",
    bgGradient: "linear-gradient(to right, #f0f2f0, #000c40)",
  },
  {
    src: ic2,
    title: "Walima",
    bgGradient: "linear-gradient(to right, #f0f2f0, #000c40)",
  },
  {
    src: ic4,
    title: "Birthday",
    bgGradient: "linear-gradient(to right, #f4c4f3, #fc67fa)",
  },
  {
    src: ic5,
    title: "Nikkah",
    bgGradient: "linear-gradient(to right, #f7ff00, #db36a4)",
  },
  {
    src: ic6,
    title: "Entrance",
    bgGradient: " linear-gradient(to right, #fffbd5, #b20a2c)",
  },
];

const InfiniteImageScroller = () => {
  return (
    <Box
      position="relative"
      overflow="hidden"
      width="100%"
      height="10cm"
      marginTop="50px"
    >
      {/* Left Blurry Wall */}
      <Box
        position="absolute"
        top="-10"
        left="-10"
        height="100%"
        width="12%"
        bgGradient=" linear-gradient(to right, white, transparent)"
        zIndex="50"
        filter="blur(1px)"
      />

      {/* Right Blurry Wall */}
      <Box
        position="absolute"
        top="-10"
        right="-10"
        height="100%"
        width="12%"
        bgGradient="linear(to-l, white, transparent)"
        zIndex="10"
        filter="blur(1px)"
      />

      {/* Scrolling Content */}
      <Box
        display="inline-flex"
        animation="scroll 20s linear infinite"
        minWidth="max-content"
        gap="40px" // Increased spacing between cards
        willChange="transform" // Optimization hint for smoother scrolling
      >
        {/* Use twice the images for seamless scrolling */}
        {images.concat(images).map((item, index) => (
          <Box key={index} textAlign="left">
            <Box
              key={index}
              bgGradient={item.bgGradient}
              borderRadius="20px"
              boxShadow="xl"
              width="540px"
              height="8cm"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding="20px"
            >
              <Image
                src={item.src}
                alt={item.title}
                boxSize="100%" // Adjust image size within card
                objectFit="cover"
                borderRadius="20px"
                mb={2}
              />
            </Box>
            <Text
              fontSize="20px"
              color="#525252"
              fontWeight="medium"
              marginTop={3}
              marginLeft="20px"
            >
              {item.title}
            </Text>
          </Box>
        ))}
      </Box>

      {/* CSS for the scroll animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default InfiniteImageScroller;
