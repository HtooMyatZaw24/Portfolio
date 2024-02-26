import React from "react";
import { cn } from "../utils/cn";

type SeperatorProps = {
  className?: string;
};

const Seperator = ({ className }: SeperatorProps) => {
  return (
    <div className={cn("w-full h-1 bg-yellow rounded-full", className)}></div>
  );
};

export default Seperator;
