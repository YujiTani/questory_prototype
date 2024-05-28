export type Area = {
  id: number;
  lv: number;
  name: string;
  description: string;
  quest_id: number;
  image_url: string;
};

export const areas = [
  {
    id: 1,
    lv: 1,
    name: "草原",
    description: "最初は簡単なSQLから練習しよう",
    quest_id: 1,
    image_url: "/image/area/grass_a.svg",
  },
  {
    id: 2,
    lv: 2,
    name: "森林",
    description: "少しずつSQLに慣れてきたかな？毎日すこしでも練習しよう",
    quest_id: 1,
    image_url: "/image/area/wood_a.svg",
  },
] as const satisfies Area[];
