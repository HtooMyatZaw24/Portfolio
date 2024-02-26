import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import React from "react";
import Seperator from "../ui/seperator/Seperator";
import Card from "../ui/pagelayout/Card";

const Projects = () => {
  return (
    <Box my="6">
      <Box className=" w-fit mx-auto my-4">
        <Text size="8" weight="bold" className="text-grey-100">
          My Projects
        </Text>
        <Seperator className="mt-2" />
      </Box>

      <Grid>
        <Grid columns="2" gap="4">
          <Card className="w-full shadow-lg shadow-black transition hover:-translate-y-3">
            Hello
          </Card>
          <Card className="w-full shadow-lg shadow-black transition hover:-translate-y-3">
            Hello
          </Card>
        </Grid>
        <Grid columns="2" gap="4">
          <Card className="w-full shadow-lg shadow-black transition hover:-translate-y-3">
            Hello
          </Card>
          <Card className="w-full shadow-lg shadow-black transition hover:-translate-y-3">
            Hello
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
