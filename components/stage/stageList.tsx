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
            <Link href={`stage/${stage.index}`}>
              <Stage variant="primary" />
            </Link>
            <ImageCenter imageURL={area_image} alt="grass" />
          </>
        ) : (
          <>
            <ImageCenter imageURL={area_image} alt="grass" />
            <Link href={`stage/${stage.index}`}>
              <Stage variant="primary" />
            </Link>
          </>
        )
      )}
    </div>
  );
};

export default StageList;
