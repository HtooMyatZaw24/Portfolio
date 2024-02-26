import { Box, Grid, Text } from "@radix-ui/themes";
import React from "react";
import Seperator from "../ui/seperator/Seperator";
import Card from "../ui/pagelayout/Card";
import { Image } from "../ui/images";

const Skills = () => {
  return (
    <Box>
      <Box className=" w-fit mx-auto my-4">
        <Text size="8" weight="bold" className="text-grey-100">
          Skills
        </Text>
        <Seperator className="mt-2" />
      </Box>

      <Grid columns="4" gap="4">
        <Box className="w-fit mx-auto my-4">
          <Image src="/Html.png" alt="HTML Logo" width={200} height={200} />
        </Box>

        <Box className="w-fit mx-auto ">
          <Image src="/Css.png" alt="CSS Logo" width={200} height={200} />
        </Box>

        <Box className="w-fit mx-auto">
          <Image
            src="/Javascript.png"
            alt="Javascript Logo"
            width={180}
            height={180}
          />
        </Box>

        <Box className="w-fit mx-auto my-2">
          <Image src="/React.png" alt="React Logo" width={200} height={200} />
        </Box>
      </Grid>
    </Box>
  );
};

export default Skills;
