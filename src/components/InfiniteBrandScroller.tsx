import React from "react";
import { Box, Image } from "@chakra-ui/react";
import brand1 from "../assets/brands/brand1.png";
import brand2 from "../assets/brands/brand2.png";
import brand3 from "../assets/brands/brand3.png";
import brand4 from "../assets/brands/brand4.png";
import brand5 from "../assets/brands/brand5.png";
import brand6 from "../assets/brands/brand6.png";
import brand7 from "../assets/brands/brand7.webp";
import brand8 from "../assets/brands/brand8.png";
import brand9 from "../assets/brands/brand9.webp";
import brand10 from "../assets/brands/brand10.png";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled"; // Import from `@emotion/styled`

// Define the scroll animation
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Apply the scroll animation to the container
const AnimatedContainer = styled(Box)`
  animation: ${scroll} 20s linear infinite;
  width: 200%; /* Set to double the width to support smooth looping */
  display: flex;
  overflow: hidden;
`;

const InfiniteBrandScroller = () => {
  const images = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
  ];

  const imageWidth = 120;
  const marginRight = 50;

  return (
    <Box marginTop="250px" overflow="hidden" width="100%">
      <AnimatedContainer>
        {images.concat(images).map((src, index) => (
          <Box
            key={`image-${index}`}
            width={`${imageWidth}px`}
            marginRight={`${marginRight}px`}
            height="120px"
          >
            <Image src={src} alt={`Brand ${index + 1}`} objectFit="contain" />
          </Box>
        ))}
      </AnimatedContainer>
    </Box>
  );
};

export default InfiniteBrandScroller;
