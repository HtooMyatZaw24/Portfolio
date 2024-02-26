"use client";

import { Box, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <Flex justify="between" align="center" className="py-6">
      <Box>
        <Link href="/" className="text-3xl font-bold text-yellow">
          Portfolio
        </Link>
      </Box>

      <Flex align="center" className="gap-12">
        <NavLinks href="/" label="Home" isActive={pathname === "/"} />
        <NavLinks
          href="/projects"
          label="Projects"
          isActive={pathname === "/projects"}
        />
        <NavLinks
          href="/about"
          label="About"
          isActive={pathname === "/about"}
        />
        <NavLinks
          href="/contact"
          label="Contact"
          isActive={pathname === "/contact"}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
