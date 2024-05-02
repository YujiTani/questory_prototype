import { Slot } from "@radix-ui/react-slot";
import Image from "next/image";

type Props = {
  imageURL: string;
  alt: string;
  size?: number;
  handleClick?: () => void;
  asChild?: boolean;
};

const ImageCenter = ({
  imageURL,
  alt,
  size = 14,
  handleClick,
  asChild = false,
}: Props) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
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
    </Comp>
  );
};

export default ImageCenter;
