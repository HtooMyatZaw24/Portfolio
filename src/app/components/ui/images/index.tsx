import NextImage from "next/image";
import { FaHtml5 } from "react-icons/fa";

export const Icons = {
  html: FaHtml5,
};

type Image = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};

export const Image: React.FC<Image> = ({
  src,
  width,
  className,
  height,
  alt,
  ...props
}: Image) => {
  return (
    <NextImage
      className={className}
      src={src}
      width={width || 0}
      height={height || 0}
      alt={alt}
      {...props}
    />
  );
};
