import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaPlay,
  FaPause,
  FaRedo,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import poster1 from "../videos/poster1.jpg";
import poster2 from "../videos/poster2.jpg";
import video1 from "../videos/more1.mp4";
import video2 from "../videos/more2.mp4";

// Project data
const projects = [
  {
    id: 1,
    title: "Grand Wedding Extravaganza - 2025",
    description:
      "This lavish wedding featured an expansive setup in a grand hall, with a team of hundreds working meticulously to bring every detail to life. From intricate floral displays to immersive lighting, we created a luxurious experience for the couple and their guests.",
    videoSrc: video1,
    poster: poster1,
  },
  {
    id: 2,
    title: "Rustic Farmhouse Outdoor Wedding - 2025",
    description:
      "Set on a picturesque farmhouse, this open-air wedding embraced natural beauty and rustic charm. Our team designed a warm and intimate celebration under the sky, perfectly suited to the scenic surroundings and the couple’s vision.",
    videoSrc: video2,
    poster: poster2,
  },
];

const LatestProject = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handlePlayClick = (videoSrc: string) => {
    const videoElement = videoRefs.current[videoSrc];
    if (videoElement) {
      if (playingVideo === videoSrc) {
        videoElement.pause();
        setPlayingVideo(null);
      } else {
        if (playingVideo && videoRefs.current[playingVideo]) {
          videoRefs.current[playingVideo]?.pause();
        }
        videoElement.play();
        setPlayingVideo(videoSrc);
      }
    }
  };

  const handleReplayClick = (videoSrc: string) => {
    const videoElement = videoRefs.current[videoSrc];
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play();
      setPlayingVideo(videoSrc);
    }
  };

  const handleMuteClick = (videoSrc: string) => {
    const videoElement = videoRefs.current[videoSrc];
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (playingVideo && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo]!.volume = value / 100;
    }
  };

  return (
    <Box py={12} px={{ base: 4, md: 8 }} marginTop="50px">
      <Text textAlign="center" fontSize="lg" fontWeight="bold" color="#0071DC">
        ---Projects
      </Text>
      <Heading textAlign="center" fontSize="4xl" mb={8} color="#1C0C3D">
        Explore Some of Our Latest Events
      </Heading>
      <Text
        textAlign="center"
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize="19px"
        mb={12}
      >
        The Graceful Company has transformed countless celebrations into <br />
        unforgettable experiences, bringing our clients' visions to life with{" "}
        <br />
        creativity, precision, and dedication.
      </Text>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        mb={12}
        mx="auto"
        maxW="80%"
      >
        {projects.map((project) => (
          <Box
            key={project.id}
            flex="1"
            mb={{ base: 8, md: 0 }}
            position="relative"
            maxW="500px"
            textAlign="center"
          >
            <Box
              position="relative"
              cursor="pointer"
              h="400px"
              w="500px"
              overflow="hidden"
              borderRadius="8px"
              bg="black"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <video
                ref={(el) => (videoRefs.current[project.videoSrc] = el)}
                width="500px"
                height="auto"
                preload="metadata"
                poster={project.poster}
                muted={isMuted}
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
              >
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay Controls */}
              {playingVideo !== project.videoSrc ? (
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  w="100%"
                  h="100%"
                  background="rgba(0, 0, 0, 0.3)"
                  onClick={() => handlePlayClick(project.videoSrc)}
                >
                  <FaPlay size={50} color="white" />
                </Box>
              ) : (
                <Flex
                  position="absolute"
                  bottom="10px"
                  left="10px"
                  zIndex="10"
                  align="center"
                  gap="4"
                >
                  <IconButton
                    aria-label="Play/Pause"
                    icon={
                      playingVideo === project.videoSrc ? (
                        <FaPause />
                      ) : (
                        <FaPlay />
                      )
                    }
                    onClick={() => handlePlayClick(project.videoSrc)}
                    colorScheme="whiteAlpha"
                    variant="ghost"
                    color="white"
                  />
                  <IconButton
                    aria-label="Replay"
                    icon={<FaRedo />}
                    onClick={() => handleReplayClick(project.videoSrc)}
                    colorScheme="whiteAlpha"
                    variant="ghost"
                    color="white"
                  />
                  <IconButton
                    aria-label="Mute/Unmute"
                    icon={isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                    onClick={() => handleMuteClick(project.videoSrc)}
                    colorScheme="whiteAlpha"
                    variant="ghost"
                    color="white"
                  />
                  <Slider
                    aria-label="Volume"
                    defaultValue={50}
                    value={volume}
                    onChange={handleVolumeChange}
                    width="100px"
                    focusThumbOnChange={false}
                    colorScheme="whiteAlpha"
                  >
                    <SliderTrack bg="whiteAlpha.600">
                      <SliderFilledTrack bg="white" />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                </Flex>
              )}
            </Box>

            {/* Project Title and Description */}
            <Heading
              as="h3"
              size="lg"
              mt={4}
              mb={5}
              color="#1C0C3D"
              fontFamily="Inter"
            >
              {project.title}
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {project.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default LatestProject;
