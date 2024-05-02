import type { selectQuestion, buildQuestion} from "@/data/questions";
import { useRandomShuffle } from "./randomShuffle";
import { wordsList } from "@/data/words";

// 選択系の解答を作成して返す
export function useAnswerForSelectQuestion(question: selectQuestion) {
  const shuffleAnswers = useRandomShuffle;

  if (!question.answer) {
    throw new Error("Answer is required");
    return [];
  }

  const answer = question.answer;
  const falseAnswers = question.falseAnswers;
  const answers = [answer, ...falseAnswers];
  return shuffleAnswers(answers);
}

// 並列系の解答を作成して返す
export function useAnswerForBuildQuestion(question: buildQuestion) {
  const shuffleAnswers = useRandomShuffle;

  const answers = question.answer.split(" ");
  const words = wordsList.filter((word) => word.question_id === question.id)

  const synonymsList: string[] = []

  words.forEach((word) => {
    const synonyms = word.synonyms.split(",");
    const index = Math.floor(Math.random() * synonyms.length);
    const randomSynonym = synonyms[index]
    synonymsList.push(randomSynonym)
  })

  // ランダムに配列を短くする
  const randomAnswers = synonymsList.slice(0, Math.floor(synonymsList.length / 2))
  const newAnswers = shuffleAnswers([...randomAnswers, ...answers])

  // 単語の重複を覗いたものを返す
  return newAnswers.filter((item, index, self) => self.findIndex((t) => t === item) === index);
}
