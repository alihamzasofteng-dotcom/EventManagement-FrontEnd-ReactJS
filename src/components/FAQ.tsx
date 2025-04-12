import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "😊 What services do you offer?",
      answer:
        "We offer a variety of event management services including wedding planning, corporate events, and private parties.",
    },
    {
      question: "💼 How do you ensure event quality?",
      answer:
        "Our team ensures quality by following meticulous planning and execution processes, keeping client satisfaction as our priority.",
    },
    {
      question: "🔒 Is my event information secure?",
      answer:
        "Yes, we maintain strict confidentiality for all our clients and their events.",
    },
    {
      question: "🎉 Do you customize events?",
      answer:
        "Absolutely! We tailor each event to meet your unique preferences and requirements.",
    },
    {
      question: "💰 What are your pricing options?",
      answer:
        "We offer flexible pricing packages to fit all budgets. Contact us for more details.",
    },
    {
      question: "📅 How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 months in advance for best availability and planning.",
    },
  ];

  return (
    <Box
      margin="50px auto"
      padding="20px"
      borderRadius="12px"
      boxShadow="lg"
      maxWidth="1000px"
      backgroundColor={useColorModeValue("gray.100", "gray.700")}
    >
      {/* Main Heading */}
      <HStack
        justifyContent="center"
        padding="10px"
        //backgroundColor={useColorModeValue("gray.200", "gray.800")}
        backgroundColor="#FFC221"
        borderRadius="8px"
        marginBottom="20px"
      >
        <Heading as="h2" size="lg" color="#1C0C3D" fontFamily="Inter">
          Frequently Asked Questions
        </Heading>
      </HStack>

      {/* FAQ Grid */}
      <Box display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
        {faqs.map((faq, index) => (
          <Box
            key={index}
            padding="15px"
            borderRadius="10px"
            backgroundColor="white"
            boxShadow="sm"
            _hover={{ boxShadow: "md" }}
          >
            <HStack justifyContent="space-between">
              <HStack>
                <Text fontSize="xl">{faq.question}</Text>
              </HStack>
              <IconButton
                aria-label="Toggle Answer"
                icon={expanded === index ? <MinusIcon /> : <AddIcon />}
                onClick={() => toggleExpand(index)}
                size="sm"
                backgroundColor="transparent"
                _hover={{ backgroundColor: "#FFC221" }}
              />
            </HStack>
            {expanded === index && (
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.800", "gray.500")}
                marginTop="10px"
              >
                {faq.answer}
              </Text>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FAQ;
