import Image from "next/image";

type ImageTextProps = {
  imageSrc: string;
  heading: string;
  text: string;
  width: number;
  height: number;
  className?: string;
};

const ImageText = ({
  imageSrc,
  heading,
  text,
  width,
  height,
  className,
}: ImageTextProps) => {
  return (
    <div
      className={`flex flex-row justify-center md:justify-evenly items-center gap-16 flex-wrap md:flex-nowrap text-center md:text-left ${className}`}
    >
      <Image
        className="rounded-md md:w-1/2"
        src={imageSrc}
        width={width}
        height={height}
        alt="hero image"
      />
      <div className="flex flex-col justify-center items-center md:justify-between md:items-start gap-8">
        <h1 className="text-4xl">{heading}</h1>
        <p className="text-lg text-slate-300">{text}</p>
      </div>
    </div>
  );
};

export default ImageText;
