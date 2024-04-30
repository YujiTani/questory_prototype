import { QuestType } from "@/data/quests";
import { QuestCard } from "./questCard";
import Image from "next/image";
import Link from "next/link";

type Props = {
  quests: QuestType[];
};

const QuestLists = ({ quests }: Props) => {
  function lowerString(questName: string) {
    return questName.toLowerCase();
  }

  return (
    <div className="mt-5 flex flex-wrap gap-4 justify-center">
      {quests &&
        quests.map((quest) => (
          <Link
            key={quest.id}
            href={`/${lowerString(quest.name)}/1`}
            className="flex flex-col items-center w-[calc(50%-10px)] max-w-[50%]"
          >
            <QuestCard size="default">
              <Image
                className="rounded border-2 border-slate-200 p-1"
                src={quest.image || "/image/NotData.svg"}
                alt={`${quest.name}のicon`}
                width={110}
                height={70}
              />
              <span>{quest.name}</span>
            </QuestCard>
          </Link>
        ))}
    </div>
  );
};

export default QuestLists;
