"use client";

import StageList from "@/components/stage/stageList";
import { areas as areaData } from "@/data/areas";
import { stages as stageData } from "@/data/stages";
import Kanban from "@/components/stage/kanban";
import SuspenseBoundary from "@/components/common/suspenseBoundary";
import { useParams } from "next/navigation";

export const runtime = "edge";

const SQLPage = () => {
  return (
    <SuspenseBoundary>
      <InnerSQLPage />
    </SuspenseBoundary>
  );
};

/**
 * TODO:
 * 1. area毎にコンポーネント区切れるように修正する (questで絞る)
 * 2. stageの取得方法も検討する (area_idで絞る)
 * 3. stage選択演出を用意する
 * 4. stageの表現が物足りない
 * 5. areaDataにオブジェクト画像をもたせる
 */
const InnerSQLPage = () => {
  const { id } = useParams<{ id: string }>();
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
                areaImage={area.image_url}
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
