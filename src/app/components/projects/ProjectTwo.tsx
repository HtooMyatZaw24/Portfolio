import React from "react";
import { Text, Box, Flex } from "@radix-ui/themes";
import Card from "../ui/pagelayout/Card";
import { Image } from "../ui/images";

const ProjectTwo = () => {
  return (
    <Flex gap="4">
      <Box my="6">
        <Text size="6" className="text-yellow font-semibold">
          Project Name
        </Text>

        <Text className="block pt-4 text-grey-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet
          odio voluptates harum in sapiente quisquam, a atque cum hic
          exercitationem iusto, nulla quis minus? Ipsa est possimus perspiciatis
          suscipit aut ea dolores, quidem voluptatem magnam repellendus
          voluptatibus aperiam necessitatibus excepturi nemo vero cum, quas
          vitae corporis praesentium? Incidunt, culpa.
        </Text>
      </Box>

      <Card className="shrink-0 w-[560px] h-[300px] shadow-lg shadow-black my-6">
        <Box className="w-fit mx-auto my-0.5">
          <Image src="/project1.png" alt="project1" width={430} height={100} />
        </Box>
      </Card>
    </Flex>
  );
};

export default ProjectTwo;
