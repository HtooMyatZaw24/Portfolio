import React from "react";
import { cn } from "../utils/cn";

type ProgressBarProps = {
  trailClass?: string;
  pathClass?: string;
};
const ProgressBar = ({ trailClass, pathClass }: ProgressBarProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-2 bg-gray-300/30 mt-4 rounded-full",
        trailClass
      )}
    >
      <div
        className={cn("absolute w-[90%]  h-2 rounded-full", pathClass)}
      ></div>
    </div>
  );
};

export default ProgressBar;
