import Image from "next/image";

type Props = {
  imageURL: string;
  alt: string;
  size?: number;
  handleClick?: () => void;
};

const ImageCenter = ({ imageURL, alt, size = 14, handleClick }: Props) => {
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      onClick={handleClick}
    >
      <Image
        src={imageURL}
        alt={alt}
        width={size * 1}
        height={size * 1}
        sizes="100vw"
        className={`w-${size} h-auto`}
      />
    </div>
  );
};

export default ImageCenter;
