import { NextPage } from "next";
import React from "react";
import { Text, Box, Flex } from "@radix-ui/themes";
import Card from "../components/ui/pagelayout/Card";
import Seperator from "../components/ui/seperator/Seperator";
import { Image } from "../components/ui/images";
import ProjectOne from "../components/projects/ProjectOne";
import ProjectTwo from "../components/projects/ProjectTwo";

const Projects: NextPage = () => {
  return (
    <>
      <Box className="w-fit mx-auto my-4">
        <Text size="8" weight="bold" className="text-grey-100">
          My Projects
        </Text>
        <Seperator className="mt-2" />
      </Box>

      <ProjectOne />

      <Seperator className="h-0.5 bg-grey-100" />

      <ProjectTwo />

      <Seperator className="h-0.5 bg-grey-100" />

      <ProjectOne />

      <Seperator className="h-0.5 bg-grey-100" />

      <ProjectTwo />
    </>
  );
};

export default Projects;
