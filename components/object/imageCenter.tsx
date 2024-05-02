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
        width={size * 16}
        height={size * 16}
        sizes="100vw"
      />
    </Comp>
  );
};

export default ImageCenter;
