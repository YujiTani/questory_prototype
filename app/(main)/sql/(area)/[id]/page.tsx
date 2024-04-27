export const runtime = "edge";

import StageList from "@/components/ui/stageList";
import { areas as areaData } from "@/data/areas";
import { stages as stageData } from "@/data/stages";
import Kanban from "@/components/ui/kanban";

/**
 * TODO: ページ課題
 * area毎にコンポーネント区切れるように修正する (questで絞る)
 * stageの取得方法も検討する (area_idで絞る)
 * stage選択演出を用意する
 * stageの表現が物足りない
 * areaDataにオブジェクト画像をもたせる
 */
const SQLPage = ({ params }: { params: { id: string } }) => {
  // TODO: APIが出来たらFetch処理に変更する
  const areas = areaData;
  const stages = stageData;

  return (
    <div className="divide-y-2">
      {areas.length > 0 ? (
        areas.map((area) => (
          <div className="py-10" key={area.id}>
            <div className="flex justify-end">
              <div className="w-3/4">
                <Kanban
                  title={area.name}
                  subTitle={`Lv.${area.lv}`}
                  description={area.description}
                />
              </div>
            </div>
            <div className="mt-10">
              <StageList
                stages={stages.filter((stage) => stage.area_id === area.id)}
                area_image={area.image_url}
              />
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>Not Found</p>
        </div>
      )}
    </div>
  );
};

export default SQLPage;
