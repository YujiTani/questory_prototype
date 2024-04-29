import type { selectQuestion} from "@/data/questions";
import { useRandomShuffle } from "./randomShuffle";

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
