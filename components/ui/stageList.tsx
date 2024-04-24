import { StageType } from "@/data/stages";
import { Stage } from "./stageItem";


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
            <Stage key={`ghost-${stage.id}`} variant="ghost" /> 
          </>
        ) : (
          <>
            <Stage key={`ghost-${stage.id}`} variant="ghost" /> 
            <Stage key={stage.id} variant="primary" />
          </>
        )
      )}
    </div>
  )
}

export default StageList