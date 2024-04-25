import { StageType } from "@/data/stages";
import { Stage } from "./stageItem";
import ImageCenter from "../object/imageCenter";


type Props = {
  stages: StageType[];
};

const StageList = ({ stages }: Props) => {

  return (
    <div className="grid grid-flow-row grid-cols-2 justify-items-center gap-4">
      { stages.map((stage) => 
        stage.id % 2 !== 0 ? (
          <>
            <Stage key={stage.id} variant="primary" />
            <ImageCenter imageURL="/area/grass_a.svg" alt="grass" />
          </>
        ) : (
          <>
            <ImageCenter imageURL="/area/grass_a.svg" alt="grass" />
            <Stage key={stage.id} variant="primary" />
          </>
        )
      )}
    </div>
  )
}

export default StageList