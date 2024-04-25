export const runtime = "edge";

import StageList from "@/components/ui/stageList";
import { areas } from "@/data/areas";
import { stages } from "@/data/stages";
import Kanban from "@/components/ui/kanban";

const SQLPage = ({ params }: { params: { id: string } }) => {
  // TODO: APIが出来たらFetch処理に変更する
  const area = areas[0]
  const stageData = stages

  return (
    <>
    <div className="flex justify-end">
      <div className="w-3/4">
        <Kanban title={area.name} subTitle={`Lv.${area.lv}`} description={area.description} />
      </div>
    </div>
    <div className="mt-10">
      <StageList stages={stageData} />
    </div>
    </>
  )
}

export default SQLPage