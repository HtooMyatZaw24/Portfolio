import NextImage from "next/image";
import { FaHtml5,FaLaptopCode,FaMusic } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiVideo } from "react-icons/pi";


export const Icons = {
  html: FaHtml5,
  code: FaLaptopCode,
  game: IoGameControllerOutline,
  movie: PiVideo,
  music: FaMusic,
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
