import { StageType } from "@/data/stages";
import { Stage } from "./stageItem";
import ImageCenter from "../object/imageCenter";
import Link from "next/link";

type Props = {
  stages: StageType[];
  areaImage: string;
};

/**
 * TODO:
 * 1. altの修正
 * 2. keyの修正
 */

const StageList = ({ stages, areaImage: area_image }: Props) => {
  return (
    <div className="grid grid-flow-row grid-cols-2 justify-items-center gap-4">
      {stages.map((stage) =>
        stage.id % 2 !== 0 ? (
          <>
            {stage.state !== "coming_soon" ? (
              <Link href={`stage/${stage.index}`}>
                <Stage variant="primary" />
              </Link>
            ) : (
              <div className="relative">
                <Stage variant="gray" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <span className="text-4xl text-red-500 font-extrabold scale-150">
                    ✕
                  </span>
                </div>
              </div>
            )}
            <ImageCenter imageURL={area_image} alt="grass" />
          </>
        ) : (
          <>
            <ImageCenter imageURL={area_image} alt="grass" />
            {stage.state !== "coming_soon" ? (
              <Link href={`stage/${stage.index}`}>
                <Stage variant="primary" />
              </Link>
            ) : (
              <div className="relative">
                <Stage variant="gray" />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                  <span className="text-4xl text-red-500 font-extrabold scale-150">
                    ✕
                  </span>
                </div>
              </div>
            )}
          </>
        )
      )}
    </div>
  );
};

export default StageList;
