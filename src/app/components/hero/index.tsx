import { Box, Grid, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Card from "../ui/pagelayout/Card";

const Hero = () => {
  return (
    <Card className="shadow-lg shadow-black my-6">
      {/* Profile Photo */}
      <Box className="w-fit mx-auto border-2 rounded-full border-white">
        <Image
          src="/Profile.png"
          alt="Profile Picture"
          width={300}
          height={50}
          className="rounded-full"
        />
      </Box>

      {/* Text */}
      <Grid gap="3" my="4">
        <Text size="9" weight="bold" className="text-yellow text-center">
          Htoo Myat Zaw
        </Text>

        <Text size="8" className=" text-grey-100 text-center">
          React JS Developer
        </Text>
      </Grid>

      {/* Button */}
      <Box className="w-fit mx-auto animate-bounce">
        <Button variant="outline">Contact Me</Button>
      </Box>
    </Card>
  );
};

export default Hero;
