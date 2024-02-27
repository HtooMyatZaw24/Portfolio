import React from "react";
import { Box, Text } from "@radix-ui/themes";

const Biography = () => {
  return (
    <Box>
      <Text size="6" className="text-white font-semibold">
        Biography
      </Text>

      <Text className="block text-grey-100 pt-4">
        Meet Htoo Myat Zaw, a computer science enthusiast who kicked off his
        journey at{" "}
        <span className="text-yellow">
          the University of Computer Studies, Yangon
        </span>
        . Just when he was diving deep into the tech world during his{" "}
        <span className="text-yellow">fourth year</span>, the Covid-19 wave hit,
        hitting pause on his university adventures. But did that stop him? Not a
        chance.
        <br />
        Instead of twiddling his thumbs, Htoo Myat Zaw decided to take the bull
        by the horns. He dived headfirst into{" "}
        <span className="text-yellow">
          self-learning, sharpening his coding skills in the midst of the
          pandemic chaos
        </span>
        .
        <br />
        When life threw the unexpected military crisis curveball in Myanmar,
        Htoo Myat Zaw decided to{" "}
        <span className="text-yellow">switch lanes</span>. Enter{" "}
        <span className="text-yellow">QHRM HR Software</span>, where he jumped
        into the world of Business Development as an Intern. For nearly a year,
        he hustled hard, proving his mettle in the professional arena.
        <br />
        But hey, life's all about twists and turns, right? Htoo Myat Zaw felt
        the call of <span className="text-yellow">Software Development</span>,
        and guess what? He heeded it. Transitioning to the{" "}
        <span className="text-yellow">Software Development Team</span>, he
        strapped on his{" "}
        <span className="text-yellow">ReactJs Developer Intern</span> hat, ready
        to rock the front-end tech scene.
        <br />
        In a nutshell, Htoo Myat Zaw’s journey is a rollercoaster of resilience,
        adaptability, and a dash of tech wizardry. From university lecture halls
        to the coding trenches, he's embracing the chaos and carving his path in
        the ever-evolving world of computer science.
      </Text>
    </Box>
  );
};

export default Biography;
