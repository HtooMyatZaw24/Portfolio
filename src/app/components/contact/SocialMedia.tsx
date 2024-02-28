import React from "react";
import { Grid,Box } from "@radix-ui/themes";
import { Link } from "@radix-ui/themes";
import { Icons } from "../ui/images";

const SocialMedia = () => {
    return(
        <Grid  columns="2" className="w-full">

            <Grid className="w-full" align="center" justify="center">

                <Box className="w-fit mx-auto">
                    <Link href="https://www.facebook.com/htoo.myat.9480111/" className="w-fit mx-auto ">
                        <Icons.facebook className="text-[70px] animate-pulse text-blue-500 hover:-translate-y-2 transition duration-75" />
                    </Link>
                </Box>

                <Box className="w-fit mx-auto">
                    <Link href="https://www.linkedin.com/in/htoomyat-zaw-ab536b265/" className="w-fit mx-auto">
                        <Icons.linkedIn className="text-[70px] animate-pulse text-blue-800 hover:-translate-y-2 transition duration-75"  />
                    </Link>
                </Box>

            </Grid>

            <Grid  className="w-full" align="center">

                <Box className="w-fit mx-auto">
                    <Link href="" className="w-fit mx-auto">
                        <Icons.instagram className="text-[70px] animate-pulse text-red-500 hover:-translate-y-2 transition duration-75"  />
                    </Link>
                </Box>

                <Box className="w-fit mx-auto">
                    <Link href="htoom394@gmail.com" className="w-fit mx-auto">
                        <Icons.mail className="text-[70px] animate-pulse text-yellow-500 hover:-translate-y-2 transition duration-75"  />
                    </Link>
                </Box>

            </Grid>

        </Grid>
    )
}

export default SocialMedia;