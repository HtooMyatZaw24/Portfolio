import React from "react";
import Card from "../ui/pagelayout/Card";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { Text } from "@radix-ui/themes";
import Seperator from "../ui/seperator/Seperator";
import { Icons, Image } from "../ui/images";

const Hobbies =() => {
 return(
    <Box>
        <Box className="w-fit mx-auto my-4">
        <Text size="8" weight="bold" className="text-grey-100">
          Hobbies
        </Text>
        <Seperator className="mt-2" />
      </Box>

    <Flex align="center" gap="9" justify="between">
        <Card className="shrink-0 shadow-lg shadow-black my-6">
            <Icons.code className="text-yellow w-[60px] h-[60px]"/>
        </Card>

        <Card className="shrink-0 shadow-lg shadow-black my-6">
            <Icons.game className="text-yellow w-[60px] h-[60px]"/>
        </Card>

        <Card className="shrink-0 shadow-lg shadow-black my-6">
            <Icons.movie className="text-yellow w-[60px] h-[60px]"/>
        </Card>

        <Card className="shrink-0 shadow-lg shadow-black my-6">
            <Icons.music className="text-yellow w-[60px] h-[60px]"/>
        </Card>
    </Flex>
    </Box>
 )
}

export default Hobbies