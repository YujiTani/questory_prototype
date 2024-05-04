export type QuestionType = "two_choice" | "select" | "build";

export type Question = {
  id: number;
  question: string;
  answer: string;
  falseAnswer: string;
  stage_id: number;
  type: "two_choice";
  failure: number;
  explanation: string;
};

export type BuildQuestion = {
  id: number;
  question: string;
  answer: string;
  stage_id: number;
  type: "build";
  failure: number;
  explanation: string;
};

export type SelectQuestion = {
  id: number;
  question: string;
  answer: string;
  falseAnswers: string[];
  stage_id: number;
  type: "select";
  failure: number;
  explanation: string;
};

const simpleSQLQuestions = [
  {
    id: 1,
    question: "データベースからすべてのデータを取得するコマンドは何ですか？",
    answer: "SELECT *",
    falseAnswer: "SELECT @",
    explanation: "SELECT * コマンドはテーブルの全データを取得します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 2,
    question: "特定の条件を満たすデータを取得するためには何を使いますか？",
    answer: "WHERE",
    falseAnswer: "WHEN",
    explanation: "WHERE句を使って特定の条件を満たすデータを取得します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 3,
    question: "新しいデータをデータベースに追加するコマンドは何ですか？",
    answer: "INSERT",
    falseAnswer: "ATTACH",
    explanation: "INSERT コマンドを使って新しいデータを追加します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 4,
    question: "データベースのデータを更新するコマンドは何ですか？",
    answer: "UPDATE",
    falseAnswer: "REFRESH",
    explanation: "UPDATE コマンドを使ってデータを更新します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 5,
    question: "データベースからデータを削除するコマンドは何ですか？",
    answer: "DELETE",
    falseAnswer: "REMOVE",
    explanation: "DELETE コマンドを使ってデータを削除します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 6,
    question: "テーブルの特定の列だけを取得するにはどうしますか？",
    answer: "SELECT 列名",
    falseAnswer: "SELECT table",
    explanation: "SELECT 列名 を指定して特定の列だけを取得します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 7,
    question:
      "テーブルから重複する行を除外してデータを取得するにはどうしますか？",
    answer: "DISTINCT",
    falseAnswer: "UNIQUE",
    explanation: "DISTINCT キーワードを使って重複する行を除外します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 8,
    question: "テーブルのデータを並べ替えるにはどうしますか？",
    answer: "ORDER BY",
    falseAnswer: "SORT BY",
    explanation: "ORDER BY を使ってデータを並べ替えます。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 9,
    question: "テーブルのデータをグループ化するにはどうしますか？",
    answer: "GROUP BY",
    falseAnswer: "COLLECT BY",
    explanation: "GROUP BY を使ってデータをグループ化します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 10,
    question: "テーブルのデータの合計を求めるにはどうしますか？",
    answer: "SUM",
    falseAnswer: "TOTAL",
    explanation: "SUM 関数を使ってデータの合計を求めます。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
] as const satisfies Question[];

const twoChoiceQuestions = [
  {
    id: 1,
    question: "データベースでデータを管理するシステムの一種は何ですか？",
    answer: "RDBMS",
    falseAnswer: "RAM",
    explanation:
      "RDBMSはリレーショナルデータベース管理システムの略で、データを管理するシステムです。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 2,
    question: "データベースのデータを表形式で管理するシステムは何ですか？",
    answer: "リレーショナルデータベース",
    falseAnswer: "ノンリレーショナルデータベース",
    explanation: "リレーショナルデータベースは、データを表形式で管理します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 3,
    question: "SQLは何の略ですか？",
    answer: "Structured Query Language",
    falseAnswer: "Simple Query Language",
    explanation:
      "SQLはStructured Query Languageの略で、データベースを操作するための言語です。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 4,
    question:
      "データベースで一意のデータを識別するために使用されるキーは何ですか？",
    answer: "プライマリキー",
    falseAnswer: "セカンダリキー",
    explanation:
      "プライマリキーは、データベース内の各行を一意に識別するために使用されます。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 5,
    question:
      "複数のテーブル間でデータの関連を設定するために使用されるキーは何ですか？",
    answer: "外部キー",
    falseAnswer: "内部キー",
    explanation:
      "外部キーは、他のテーブルのプライマリキーを参照して、テーブル間の関連を設定します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 6,
    question:
      "データベースでデータの整合性を保つために使用される制約は何ですか？",
    answer: "整合性制約",
    falseAnswer: "整合性アルゴリズム",
    explanation:
      "整合性制約は、データベース内のデータが正確で一貫性があることを保証します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 7,
    question:
      "データベースでクエリの実行速度を向上させるために使用される機能は何ですか？",
    answer: "インデックス",
    falseAnswer: "カタログ",
    explanation:
      "インデックスはデータベースの検索速度を向上させるために使用されます。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 8,
    question:
      "リレーショナルデータベースとは異なり、スキーマレスでデータを保存するデータベースは何ですか？",
    answer: "NoSQLデータベース",
    falseAnswer: "SQLデータベース",
    explanation:
      "NoSQLデータベースはスキーマレスで、柔軟なデータ構造を持つデータベースです。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 9,
    question:
      "データベースでトランザクションの完全性を保証する概念は何ですか？",
    answer: "ACID特性",
    falseAnswer: "BASE特性",
    explanation:
      "ACID特性はトランザクションの原子性、一貫性、隔離性、持続性を保証します。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
  {
    id: 10,
    question:
      "データベースでデータのバックアップと復元を管理する機能は何ですか？",
    answer: "リカバリ管理",
    falseAnswer: "パフォーマンス管理",
    explanation:
      "リカバリ管理はデータのバックアップと復元を扱うデータベースの機能です。",
    stage_id: 1,
    type: "two_choice",
    failure: 0,
  },
] as const satisfies Question[];

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
    question:
      "新しいデータをデータベースに追加するために使用するSQLキーワードは何ですか？",
    answer: "INSERT",
    falseAnswers: ["SELECT", "UPDATE", "DELETE"],
    explanation:
      "INSERT文は新しいデータをテーブルに追加するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 5,
    question:
      "データベースのデータを変更するために使用するSQLキーワードは何ですか？",
    answer: "UPDATE",
    falseAnswers: ["SELECT", "INSERT", "DELETE"],
    explanation: "UPDATE文は既存のデータを変更するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 6,
    question:
      "データベースのデータを削除するために使用するSQLキーワードは何ですか？",
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
    question:
      "テーブル間の関係を定義するために使用されるキーワードは何ですか？",
    answer: "FOREIGN KEY",
    falseAnswers: ["PRIMARY KEY", "INDEX", "UNIQUE"],
    explanation:
      "FOREIGN KEYは他のテーブルのカラムを参照し、テーブル間の関係を定義するために使用されます。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 9,
    question:
      "データベース内のデータの一意性を保証するために使用されるキーワードは何ですか？",
    answer: "UNIQUE",
    falseAnswers: ["FOREIGN KEY", "INDEX", "PRIMARY KEY"],
    explanation: "UNIQUE制約はカラムの各行で値が一意であることを保証します。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
  {
    id: 10,
    question:
      "データベースのテーブルから重複する行を除外してデータを取得するために使用するキーワードは何ですか？",
    answer: "DISTINCT",
    falseAnswers: ["UNIQUE", "GROUP BY", "ORDER BY"],
    explanation: "DISTINCTキーワードは重複するデータを除外して結果を返します。",
    stage_id: 1,
    type: "select",
    failure: 0,
  },
] as const satisfies SelectQuestion[];

// 選択しながら並べる問題
const buildQuestions = [
  {
    id: 1,
    question: "IDが1のユーザーの名前を取得する",
    answer: "SELECT name FROM users WHERE id = 1",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 2,
    question: "IDが3のユーザーの年齢を取得する",
    answer: "SELECT age FROM users WHERE id = 3",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 3,
    question: "IDが1のユーザーの登録日を取得する",
    answer: "SELECT created_at FROM users WHERE id = 1",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 4,
    question: "IDが1のユーザーの名前と年齢と登録日を取得する",
    answer: "SELECT name, age, created_at FROM users WHERE id = 1",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 5,
    question: "全ユーザーの名前を取得する",
    answer: "SELECT name FROM users",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 6,
    question: "全ユーザーの全ての情報を取得する",
    answer: "SELECT * FROM users",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 7,
    question: "名前が登録されていないユーザーを全員を取得する",
    answer: "SELECT * FROM users WHERE name IS NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 8,
    question: "名前が登録されているユーザー全員を取得する",
    answer: "SELECT * FROM users WHERE name IS NOT NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 9,
    question: "年齢が登録されていないユーザー全員の名前を取得する",
    answer: "SELECT name FROM users WHERE age IS NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
  {
    id: 10,
    question: "名前と年齢が登録されているユーザー全員の名前を取得する",
    answer: "SELECT name FROM users WHERE name IS NOT NULL AND age IS NOT NULL",
    explanation: "解説はまだありません",
    stage_id: 2,
    type: "build",
    failure: 0,
  },
] as const satisfies BuildQuestion[];

// 2種類の問題を混ぜたコース
const mixQuestions = [
  {
    id: 1,
    question:
      "複数のテーブルから関連するデータを結合して取得するために使用するSQL文は何ですか？",
    answer: "JOIN",
    falseAnswers: ["UNION", "LINK", "COMBINE"],
    explanation:
      "JOIN文は複数のテーブルから関連するデータを結合して取得するために使用されます。",
    stage_id: 3,
    type: "select",
    failure: 0,
  },
  {
    id: 2,
    question: "データベースのテーブルに新しい行を追加するSQL文は何ですか？",
    answer: "INSERT INTO",
    falseAnswers: ["ADD TO", "APPEND TO", "ATTACH TO"],
    explanation:
      "INSERT INTO文はデータベースのテーブルに新しい行を追加するために使用されます。",
    stage_id: 3,
    type: "select",
    failure: 0,
  },
  {
    id: 3,
    question:
      "特定のユーザーの情報をIDを使って取得したいです、以下の◯◯◯に入るものを選んでください SELECT * FROM users WHERE ◯◯◯ = 1;",
    answer: "id",
    falseAnswers: ["users_id", "IP", "use.id"],
    explanation:
      "IDを使って取得する場合、idが一致するものを取得することが出来ます",
    stage_id: 3,
    type: "select",
    failure: 0,
  },
  {
    id: 4,
    question:
      "ユーザーの名前をアルファベット順に並べ替えて表示するSQL文はどれですか？",
    answer: "SELECT name FROM users ORDER BY name ASC;",
    falseAnswers: [
      "SELECT name FROM users ORDER BY name;",
      "ORDER BY name SELECT name FROM users;",
      "SELECT name FROM users SORT BY name ASC;",
    ],
    explanation:
      "ORDER BY カラム名 ASC; は指定したカラムを基に昇順でデータを並べ替えます。",
    stage_id: 3,
    type: "select",
    failure: 0,
  },
  {
    id: 5,
    question: "特定のユーザーの年齢を取得するSQL文はどれですか？",
    answer: "SELECT age FROM users WHERE id = 1",
    falseAnswers: [
      "SELECT user FROM age WHERE age;",
      "SELECT age FROM users WHERE users ORDER BY age;",
      "GET age FROM users WHERE id = 1;",
    ],
    explanation:
      "WHERE句を使って条件を指定することで、特定のデータを絞り込んで取得することができます。",
    stage_id: 3,
    type: "select",
    failure: 0,
  },
  {
    id: 6,
    question: "ユーザーの総数を取得する",
    answer: "SELECT COUNT(*) FROM users",
    explanation: "解説はまだありません",
    stage_id: 3,
    type: "build",
    failure: 0,
  },
  {
    id: 7,
    question: "最も古い登録日のユーザーの名前を取得する",
    explanation: "解説はまだありません",
    answer: "SELECT name FROM users ORDER BY created_at ASC LIMIT 1",
    stage_id: 3,
    type: "build",
    failure: 0,
  },
  {
    id: 8,
    question: "年齢が20歳以上30歳以下のユーザーの名前を取得する",
    answer: "SELECT name FROM users WHERE age BETWEEN 20 AND 30",
    explanation: "解説はまだありません",
    stage_id: 3,
    type: "build",
    failure: 0,
  },
  {
    id: 9,
    question: "最後に登録された3人のユーザーの名前を取得する",
    answer: "SELECT name FROM users ORDER BY created_at DESC LIMIT 3",
    explanation: "解説はまだありません",
    stage_id: 3,
    type: "build",
    failure: 0,
  },
  {
    id: 10,
    question: "名前が'A'で始まるユーザーの全情報を取得する",
    answer: "SELECT * FROM users WHERE name LIKE 'A%'",
    explanation: "解説はまだありません",
    stage_id: 3,
    type: "build",
    failure: 0,
  },
] as const satisfies (SelectQuestion | BuildQuestion)[];

export const questionsList = [
  { id: 1, questions: simpleSQLQuestions },
  { id: 2, questions: selectQuestions },
  { id: 3, questions: buildQuestions },
  { id: 4, questions: mixQuestions },
];
