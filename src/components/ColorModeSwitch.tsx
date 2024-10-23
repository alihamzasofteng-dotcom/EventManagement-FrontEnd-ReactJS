import React from "react";
import { HStack, Text, Switch, useColorMode } from "@chakra-ui/react";

// ye sara built in hi ha
const ColorModeSwitch = () => {
  // buildin hook
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"} // Check if it's in dark mode
        onChange={toggleColorMode} // Toggle color mode when switch is clicked
      />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
