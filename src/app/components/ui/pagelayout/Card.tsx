import { Box } from "@radix-ui/themes";
import React from "react";
import { cn } from "../utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <Box
      p="4"
      className={cn(
        "bg-white/10 opacity-60 border-2 border-white rounded-xl my-4",
        className
      )}
    >
      {children}
    </Box>
  );
};

export default Card;
