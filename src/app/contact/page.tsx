import { Box, Flex, Text, } from "@radix-ui/themes";
import { NextPage } from "next";
import React from "react";
import Seperator from "../components/ui/seperator/Seperator";
import Form from "../components/contact";
import SocialMedia from "../components/contact/SocialMedia";

const Contact: NextPage = () => {
  return (
    <Box>
      <Box className="w-fit mx-auto my-4">
        <Text size="8" weight="bold" className="text-grey-100">
          Contact Me
        </Text>
        <Seperator className="mt-2" />
      </Box>
        
      <Flex justify="center">
        <Form />
        
        <SocialMedia />
      </Flex>
    </Box>
  );
};

export default Contact;
