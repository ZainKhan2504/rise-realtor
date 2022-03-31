import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      {new Date().getFullYear()} Rise Realtor, Inc.
    </Box>
  );
};

export default Footer;
