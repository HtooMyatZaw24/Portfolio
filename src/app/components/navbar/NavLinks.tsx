"use client";

import React from "react";
import Link from "next/link";

type NavLinksProps = {
  href: string;
  label: string;
  isActive: boolean;
};

const NavLinks = ({ href, label, isActive }: NavLinksProps) => {
  return (
    <>
      <Link
        href={href}
        className={`font-semibold text-grey-100 hover:text-yellow ${
          isActive ? "text-yellow border-b-4 border-yellow" : ""
        }`}
      >
        {label}
      </Link>
    </>
  );
};

export default NavLinks;
