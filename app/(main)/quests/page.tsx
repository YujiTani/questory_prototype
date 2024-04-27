export const runtime = "edge";

import QuestLists from "@/components/ui/questLists";
import { quests as questData, QuestType } from "@/data/quests";

/**
 * TODO:
 * 1. トップテキストをもっと刺さるワードに変更する
 */
const QuestPage = () => {
  const quests = questData as QuestType[];

  return (
    <div className="px-4">
      <p className="text-right text-2x">どれを学びたい？</p>
      <QuestLists quests={quests} />
    </div>
  );
};

export default QuestPage;
