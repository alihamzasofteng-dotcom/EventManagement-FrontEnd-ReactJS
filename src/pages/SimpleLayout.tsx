import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const SimpleLayout = () => (
  <Box>
    <Outlet />
  </Box>
);

export default SimpleLayout;
