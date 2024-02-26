import React from "react";
import { cn } from "../utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className: string;
};

const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      {children}
    </div>
  );
};

export default Section;
