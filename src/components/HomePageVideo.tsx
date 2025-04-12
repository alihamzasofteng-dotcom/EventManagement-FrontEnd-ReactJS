import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface Props {
  videoSrc: string;
  overlayText?: string;
}

const HomePageVideo = ({ videoSrc, overlayText }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useState(100);

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value / 100;
      setVolume(value);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .catch((error) => console.error("Autoplay prevented:", error));
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.muted = false;
            videoRef.current
              .play()
              .catch((error) => console.error("Play failed:", error));
          } else {
            videoRef.current.muted = true;
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box position="relative" width="100%" height="735px" mt="20px">
      <Box
        as="video"
        ref={videoRef}
        src={videoSrc}
        width="100%"
        height="100%"
        autoPlay
        loop
        playsInline
        muted
        objectFit="cover"
        preload="metadata"
        onLoadedData={() => console.log("Video loaded successfully.")}
        onError={() =>
          console.error("Error loading video. Check video source path.")
        }
      />
      {overlayText && (
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          bg="rgba(0, 0, 0, 0.6)"
          p={4}
          borderRadius="md"
        >
          {overlayText}
        </Text>
      )}
      <Slider
        aria-label="Volume slider"
        position="absolute"
        bottom="50px"
        left="20px"
        width="150px"
        colorScheme="pink"
        min={0}
        max={100}
        value={volume}
        onChange={handleVolumeChange}
      >
        <SliderTrack bg="gray.700">
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize={4} />
      </Slider>
    </Box>
  );
};

export default HomePageVideo;
