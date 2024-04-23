export const runtime = "edge";

import { Quest } from "@/components/ui/quest";
import Image from "next/image";
import Link from "next/link";


const QuestPage = () => {
  return (
  <div className="px-4">
    <p className="text-right text-2x">どれを学びたい？</p>
    <div className="mt-5 flex flex-wrap gap-4 justify-center">
    <Quest>
      <Link href="/quests/sql/areas/1" className="flex flex-col items-center">
        <Image
        className="rounded border-2 border-slate-200 p-1"
        src="/icon_SQL.svg"
        alt="SQL_icon"
        width={110}
        height={70}
        />
        <span>SQL</span>
      </Link>
    </Quest>
    <Quest>
      <Link href="/quests/activerecord/areas/1" className="flex flex-col items-center">
        <Image
        className="rounded border-2 border-slate-200 p-1"
        src="/icon_ORM.svg"
        alt="Active_Record_icon"
        width={110}
        height={70}
        />
        <span>Active Record</span>
      </Link>
    </Quest>
    <Quest>
      <Link href="/quests/activerecord/areas/1" className="flex flex-col items-center">
        <Image
        className="rounded border-2 border-slate-200 p-1"
        src="/icon_Ruby.svg"
        alt="Ruby_icon"
        width={110}
        height={70}
        />
        <span>Ruby</span>
      </Link>
    </Quest>
    <Quest>
      <Link href="/quests/activerecord/areas/1" className="flex flex-col items-center">
        <Image
        className="rounded border-2 border-slate-200 p-1"
        src="/icon_Rails.svg"
        alt="Ruby_on_Rails_icon"
        width={110}
        height={70}
        />
        <span>Ruby on Rails</span>
      </Link>
    </Quest>
    </div>
  </div>
  );
};

export default QuestPage;
