import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import React from "react";
import Seperator from "../ui/seperator/Seperator";
import ProgressBar from "../ui/progressbar/ProgressBar";

const SkillsProgress = () => {
  return (
    <Box>
      <Box className="w-fit mx-auto my-4">
        <Text size="8" weight="bold" className="text-grey-100">
          Skills
        </Text>
        <Seperator className="mt-2" />
      </Box>

      <Grid gap="4" my="4" className="text-gray-100">
        <Flex gap="4">
          <Box className="w-full">
            <Text size="5" className="font-semibold ">
              HTML
            </Text>
            <ProgressBar pathClass="bg-red-500" />
          </Box>

          <Box className="w-full">
            <Text size="5" className="font-semibold ">
              CSS
            </Text>
            <ProgressBar pathClass="bg-cyan-200" />
          </Box>
        </Flex>

        <Seperator className="h-0.5 bg-grey-100/10" />

        <Flex gap="4">
          <Box className="w-full">
            <Text size="5" className="font-semibold ">
              JavaScript
            </Text>
            <ProgressBar pathClass="bg-yellow w-[80%]" />
          </Box>

          <Box className="w-full">
            <Text size="5" className="font-semibold ">
              React
            </Text>
            <ProgressBar pathClass="bg-blue-400 w-[60%]" />
          </Box>
        </Flex>

        <Seperator className="h-0.5 bg-grey-100/10" />
      </Grid>
    </Box>
  );
};

export default SkillsProgress;
