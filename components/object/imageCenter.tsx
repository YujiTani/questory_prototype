import Image from "next/image";

type Props = {
  imageURL: string;
  alt: string;
}

const ImageCenter = ({ imageURL, alt } : Props) => {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image src={imageURL} alt={alt} width={60} height={60} />
    </div>
  )
}

export default ImageCenter;