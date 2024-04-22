export type Stage = {
  id: number;
  index: number;
  complete_case: number; //  1: "全問正解"
  failed_case: number; //  1: "同じ問題を5回間違える"
  area_id: number;
};

export const stages = [
  {
    id: 1,
    index: 1,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 2,
    index: 2,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 3,
    index: 3,
    complete_case: 1,
    failed_case: 1,
    area_id: 1,
  },
  {
    id: 4,
    index: 4,
    complete_case: 1,
    failed_case: 1,
    area_id: 2,
  },
] as const satisfies Stage[];
