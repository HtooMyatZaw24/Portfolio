import { Flex } from "@radix-ui/themes";
import { NextPage } from "next";
import React from "react";
import Card from "../components/ui/pagelayout/Card";
import { Image } from "../components/ui/images";
import Biography from "../components/about/Biography";
import SkillsProgress from "../components/skills/SkillsProgress";
import Hobbies from "../components/about/Hobbies";

const About: NextPage = () => {
  return (
    <>
      <Card className="shrink-0 shadow-lg shadow-black my-6">
        <Flex gap="4">
          <Image
            src="/Profile.png"
            alt="Profile Picture"
            width={500}
            height={100}
            className="shrink-0 rounded-lg"
          />

          <Biography />
        </Flex>
      </Card>

      <SkillsProgress />

      <Hobbies />
    </>
  );
};

export default About;
