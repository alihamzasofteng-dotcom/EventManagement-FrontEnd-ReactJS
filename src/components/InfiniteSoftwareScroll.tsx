import React from "react";
import { Box, Image } from "@chakra-ui/react";
import brand11 from "../assets/brands/appifytech.png";
import brand12 from "../assets/brands/arbisoft.png";
import brand13 from "../assets/brands/pso.png";
import brand14 from "../assets/brands/emporium.png";
import brand15 from "../assets/brands/meezan.png";
import brand16 from "../assets/brands/mastertiles.png";
import brand17 from "../assets/brands/jazz.png";
import brand18 from "../assets/brands/jalalsons.png";
import brand19 from "../assets/brands/hbl.png";
import brand20 from "../assets/brands/devsinc.png";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Define the scroll animation - MODIFIED for giht-to-left movement
const scroll = keyframes`
  100% { transform: translateX(0); }
  0% { transform: translateX(-50%); } /* Ensure it moves to the left */
`;

// Apply the scroll animation to the container
const AnimatedContainer = styled(Box)`
  animation: ${scroll} 20s linear infinite;
  display: flex;
  width: 200%; /* Adjust width to accommodate all images + duplicate */
  overflow: hidden;
`;

const InfiniteSoftwareScroll = () => {
  const images = [
    brand11,
    brand12,
    brand13,
    brand14,
    brand15,
    brand16,
    brand17,
    brand18,
    brand19,
    brand20,
  ];

  const imageWidth = 120;
  const marginRight = 50;

  return (
    <Box marginTop="50px" overflow="hidden" width="100%">
      <AnimatedContainer>
        {/* Duplicate images to create a seamless loop */}
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

export default InfiniteSoftwareScroll;
