import React from "react";
import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

// ye sara built in hi ha
const ColorModeSwitch = () => {
  // buildin hook
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack marginRight={5}>
      <Switch
        colorScheme="green"
        size="md"
        isChecked={colorMode === "dark"} // Check if it's in dark mode
        onChange={toggleColorMode} // Toggle color mode when switch is clicked
        marginTop={1}
      />
      <Text
        fontSize="lg"
        whiteSpace={"nowrap"}
        fontFamily="'Emilys Candy', serif"
        marginTop={5}
      >
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
