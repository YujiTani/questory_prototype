export const runtime = "edge";

import { QuestCard } from "@/components/ui/questCard";
import Image from "next/image";
import Link from "next/link";
import { quests as questData, QuestType } from "@/data/quests";

const QuestPage = () => {
  const quests = questData as QuestType[];

  return (
    <div className="px-4">
      <p className="text-right text-2x">どれを学びたい？</p>
      <div className="mt-5 flex flex-wrap gap-4 justify-center">
        {quests &&
          quests.map((quest) => (
            <Link
              key={quest.id}
              href={`/quests/${quest.id}/areas/1`}
              className="flex flex-col items-center"
            >
              <QuestCard>
                <Image
                  className="rounded border-2 border-slate-200 p-1"
                  src={quest.image || "/NotData.svg"}
                  alt={`${quest.name}のicon`}
                  width={110}
                  height={70}
                />
                <span>{quest.name}</span>
              </QuestCard>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default QuestPage;
