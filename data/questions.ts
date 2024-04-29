export type questionType = "select" | "sort";

export type selectQuestion = {
  id: number;
  question: string;
  answer: string;
  falseAnswers: string[];
  explanation: string;
  stage_id: number;
  type: "select";
  failure: number;
};

export type sortQuestion = {
  id: number;
  question: string;
  answer: string;
  explanation: string;
  stage_id: number;
  type: "sort";
  failure: number;
};

const selectQuestions = [
  {
    id: 1,
    question: "データベースの基本的な構造で、行を何と呼びますか？",
    answer: "レコード",
    falseAnswers: ["カラム", "フィールド", "テーブル"],
    explanation: "データベースのテーブルにおいて、行はレコードと呼ばれます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 2,
    question: "データベースの基本的な構造で、列を何と呼びますか？",
    answer: "カラム",
    falseAnswers: ["レコード", "フィールド", "テーブル"],
    explanation: "データベースのテーブルにおいて、列はカラムと呼ばれます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 3,
    question: "SQL文でデータを取得するために使用するキーワードは何ですか？",
    answer: "SELECT",
    falseAnswers: ["INSERT", "UPDATE", "DELETE"],
    explanation: "SELECT文はデータを取得するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 4,
    question: "新しいデータをデータベースに追加するために使用するSQLキーワードは何ですか？",
    answer: "INSERT",
    falseAnswers: ["SELECT", "UPDATE", "DELETE"],
    explanation: "INSERT文は新しいデータをテーブルに追加するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 5,
    question: "データベースのデータを変更するために使用するSQLキーワードは何ですか？",
    answer: "UPDATE",
    falseAnswers: ["SELECT", "INSERT", "DELETE"],
    explanation: "UPDATE文は既存のデータを変更するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 6,
    question: "データベースのデータを削除するために使用するSQLキーワードは何ですか？",
    answer: "DELETE",
    falseAnswers: ["SELECT", "INSERT", "UPDATE"],
    explanation: "DELETE文は既存のデータを削除するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 7,
    question: "テーブル全体の行数を合計する関数は何ですか？",
    answer: "count",
    falseAnswers: ["length", "GETCOUNT", "size"],
    explanation: "COUNT() 関数は、指定した列の行数を返します。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 8,
    question: "テーブル間の関係を定義するために使用されるキーワードは何ですか？",
    answer: "FOREIGN KEY",
    falseAnswers: ["PRIMARY KEY", "INDEX", "UNIQUE"],
    explanation: "FOREIGN KEYは他のテーブルのカラムを参照し、テーブル間の関係を定義するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 9,
    question: "データベース内のデータの一意性を保証するために使用されるキーワードは何ですか？",
    answer: "UNIQUE",
    falseAnswers: ["FOREIGN KEY", "INDEX", "PRIMARY KEY"],
    explanation: "UNIQUE制約はカラムの各行で値が一意であることを保証します。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 10,
    question: "データベースのテーブルから重複する行を除外してデータを取得するために使用するキーワードは何ですか？",
    answer: "DISTINCT",
    falseAnswers: ["UNIQUE", "GROUP BY", "ORDER BY"],
    explanation: "DISTINCTキーワードは重複するデータを除外して結果を返します。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 11,
    question: "複数のテーブルから関連するデータを結合して取得するために使用するSQL文は何ですか？",
    answer: "JOIN",
    falseAnswers: ["UNION", "LINK", "COMBINE"],
    explanation: "JOIN文は複数のテーブルから関連するデータを結合して取得するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 12,
    question: "データベースのテーブルに新しい行を追加するSQL文は何ですか？",
    answer: "INSERT INTO",
    falseAnswers: ["ADD TO", "APPEND TO", "ATTACH TO"],
    explanation: "INSERT INTO文はデータベースのテーブルに新しい行を追加するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 13,
    question: "特定のユーザーの情報をIDを使って取得したいです、以下の◯◯◯に入るものを選んでください SELECT * FROM users WHERE ◯◯◯ = 1;",
    answer: "id",
    falseAnswers: [
      "users_id",
      "ID",
      "use.id"
    ],
    explanation: "IDを使って取得する場合、idが一致するものを取得することが出来ます",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 14,
    question: "ユーザーの名前をアルファベット順に並べ替えて表示するSQL文はどれですか？",
    answer: "SELECT name FROM users ORDER BY name ASC;",
    falseAnswers: [
      "SELECT name FROM users ORDER BY name;",
      "ORDER BY name SELECT name FROM users;",
      "SELECT name FROM users SORT BY name ASC;"
    ],
    explanation: "ORDER BY カラム名 ASC; は指定したカラムを基に昇順でデータを並べ替えます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 15,
    question: "特定のユーザーの年齢を取得するSQL文はどれですか？",
    answer: "SELECT age FROM users WHERE id = 1;",
    falseAnswers: [
      "SELECT user FROM age WHERE age;",
      "SELECT age FROM users WHERE users ORDER BY age;",
      "GET age FROM users WHERE id = 1;"
    ],
    explanation: "WHERE句を使って条件を指定することで、特定のデータを絞り込んで取得することができます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
] as const satisfies selectQuestion[]

// 選択しながら並べる問題
const sortQuestions = [
  {
      id: 1,
      question: "IDが1のユーザーの名前を取得する",
      answer: "SELECT name FROM users WHERE id = 1",
      explanation: "解説はまだありません",
      stage_id: 2,
      type: "sort",
      failure: 0,
  },
  {
    id: 2,
    question: "IDが3のユーザーの年齢を取得する",
    answer: "SELECT age FROM users WHERE id = 3",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 3,
    question: "IDが1のユーザーの登録日を取得する",
    answer: "SELECT created_at FROM users WHERE id = 1",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 4,
    question: "IDが1のユーザーの名前と年齢と登録日を取得する",
    answer: "SELECT name, age, created_at FROM users WHERE id = 1",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 5,
    question: "全ユーザーの名前を取得する",
    answer: "SELECT name FROM users",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 6,
    question: "全ユーザーの全ての情報を取得する",
    answer: "SELECT * FROM users",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 7,
    question: "名前が登録されていないユーザーを全員を取得する",
    answer: "SELECT * FROM users WHERE name IS NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 8,
    question: "名前が登録されているユーザー全員を取得する",
    answer: "SELECT * FROM users WHERE name IS NOT NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 9,
    question: "年齢が登録されていないユーザー全員の名前を取得する",
    answer: "SELECT name FROM users WHERE age IS NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 10,
    question: "名前と年齢が登録されているユーザー全員の名前を取得する",
    answer: "SELECT name FROM users WHERE name IS NOT NULL AND age IS NOT NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 11,
    question: "ユーザーの総数を取得する",
    answer: "SELECT COUNT(*) FROM users",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 12,
    question: "最も古い登録日のユーザーの名前を取得する",
    explanation: "解説はまだありません",
    answer: "SELECT name FROM users ORDER BY created_at ASC LIMIT 1",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 13,
    question: "年齢が20歳以上30歳以下のユーザーの名前を取得する",
    answer: "SELECT name FROM users WHERE age BETWEEN 20 AND 30",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 14,
    question: "最後に登録された3人のユーザーの名前を取得する",
    answer: "SELECT name FROM users ORDER BY created_at DESC LIMIT 3",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  },
  {
    id: 15,
    question: "名前が'A'で始まるユーザーの全情報を取得する",
    answer: "SELECT * FROM users WHERE name LIKE 'A%'",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "sort",
    failure: 0,
  }
] as const satisfies sortQuestion[]

export const questionsList = [
  {id: 1, questions: selectQuestions},
  {id: 2, questions: sortQuestions},
]

