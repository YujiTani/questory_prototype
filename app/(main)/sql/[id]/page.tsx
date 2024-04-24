export const runttime = "edge";

import StageList from "@/components/ui/stageList";
import { stages } from "@/data/stages";

const SQLPage = ({ params }: { params: { id: string } }) => {
  // TODO: APIが出来たらFetch処理に変更する
  const stageData = stages

  return (
    <>
      <h1>
        SQLPage: {params.id}
      </h1>
      <StageList stages={stageData} />
    </>
  )
}

export default SQLPage