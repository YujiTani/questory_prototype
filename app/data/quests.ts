export type Quest = {
  id: number;
  name: string;
  description: string;
  image: string | null;
  // 公開、非公開、停止中、準備中
  state: "public" | "private" | "stopped" | "coming_soon";
};

export const quests = [
  {
    id: 1,
    name: "SQL",
    description: "SQLを練習しよう！",
    image: null,
    state: "public",
  },
  {
    id: 2,
    name: "ActiveRecord",
    description: "ActiveRecordを練習しよう!",
    image: null,
    state: "coming_soon",
  },
] as const satisfies Quest[];
