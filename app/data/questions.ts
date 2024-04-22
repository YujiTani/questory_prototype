export type Question = {
  id: number;
  question: string;
  answer: string;
  stage_id: number;
};

// 問題は、全部で11問ある、全てデータ取得の問題となっている
export const questions = [
  {
      id: 1,
      question: "IDが1のユーザーの名前を取得する",
      answer: "SELECT name FROM users WHERE id = 1;",
      stage_id: 1,
  },
  {
    id: 2,
    question: "IDが3のユーザーの年齢を取得する",
    answer: "SELECT age FROM users WHERE id = 3;",
    stage_id: 1,
  },
  {
    id: 3,
    question: "IDが1のユーザーの登録日を取得する",
    answer: "SELECT created_at FROM users WHERE id = 1;",
    stage_id: 1,
  },
  {
    id: 4,
    question: "IDが1のユーザーの名前と年齢と登録日を取得する",
    answer: "SELECT name, age, created_at FROM users WHERE id = 1;",
    stage_id: 1,
  },
  {
    id: 5,
    question: "全ユーザーの名前を取得する",
    answer: "SELECT name FROM users;",
    stage_id: 1,
  },
  {
    id: 6,
    question: "全ユーザーの全ての情報を取得する",
    answer: "SELECT * FROM users;",
    stage_id: 1,
  },
  {
    id: 7,
    question: "名前が登録されていないユーザーを全員を取得する",
    answer: "SELECT * FROM users WHERE name IS NULL;",
    stage_id: 1,
  },
  {
    id: 8,
    question: "名前が登録されているユーザー全員を取得する",
    answer: "SELECT * FROM users WHERE name IS NOT NULL;",
    stage_id: 1,
  },
  {
    id: 9,
    question: "年齢が登録されていないユーザー全員の名前を取得する",
    answer: "SELECT name FROM users WHERE age IS NULL;",
    stage_id: 1,
  },
  {
    id: 10,
    question: "名前と年齢が登録されているユーザー全員の名前を取得する",
    answer: "SELECT name FROM users WHERE name IS NOT NULL AND age IS NOT NULL;",
    stage_id: 1,
  },
  {
    id: 11,
    question: "ユーザーの総数を取得する",
    answer: "SELECT COUNT(*) FROM users;",
    stage_id: 1,
  },
] as const satisfies Question[]
