import Image from "next/image";

type Props = {
  imageURL: string;
  alt: string;
};

const ImageCenter = ({ imageURL, alt }: Props) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src={imageURL}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="w-14 h-auto"
      />
    </div>
  );
};

export default ImageCenter;
