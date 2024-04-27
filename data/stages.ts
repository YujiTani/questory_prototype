export type StageType = {
  id: number;
  target: string;
  index: number;
  complete_case: number; //  1: "全問正解"
  failed_case: number; //  1: "同じ問題を5回間違える"
  area_id: number;
};

export const stages = [
  {
    id: 1,
    target: "正解の単語をえらんでください",
    index: 1,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 2,
    target: "SQLをつくってみよう!(データ取得)",
    index: 2,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 3,
    target: "SQLをつくってみよう!(データ更新)",
    index: 3,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 4,
    target: "SQLをつくってみよう!(データの追加)",
    index: 4,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 5,
    target: "正解の単語をえらんでください2",
    index: 5,
    complete_case: 1,
    failed_case: 1,
    area_id:1,
  },
  {
    id: 6,
    target: "SQLをつくってみよう!(データ更新2)",
    index: 6,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 7,
    target: "正解の単語を選んでください3",
    index: 7,
    complete_case: 1,
    failed_case: 1,
    area_id: 2,
  },
  {
    id: 8,
    target: "SQLをつくってみよう(データ取得2)",
    index: 8,
    complete_case: 1,
    failed_case: 1,
    area_id: 2,
  },
  {
    id: 9,
    target: "SQLをつくってみよう!(データの追加2)",
    index: 9,
    complete_case: 1,
    failed_case: 1,
    area_id: 2,
  },
  {
    id: 10,
    target: "正解の単語をえらんでください3",
    index: 10,
    complete_case: 1,
    failed_case: 1,
    area_id: 2,
  },
  {
    id: 11,
    target: "テーブルをつなげてみよう(データ取得)",
    index: 11,
    complete_case: 1,
    failed_case: 1,
    area_id: 2,
  },
  {
    id: 12,
    target: "テーブルをつなげてみよう(データ取得2)",
    index: 12,
    complete_case: 1,
    failed_case: 1,
    area_id: 2,
  },
] as const satisfies StageType[];
