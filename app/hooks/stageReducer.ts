import {
  Question,
  OneAnswerQuestion,
  MultipleAnswerQuestion,
} from "@/data/questions";

export type StageState = "prepare" | "selected" | "result";

export interface State {
  snap: number | number | string | null;
  isOpen: boolean;
  questionCount: number;
  totalCount: number;
  questions: (Question | OneAnswerQuestion | MultipleAnswerQuestion)[];
  currentQuestion: Question | OneAnswerQuestion | MultipleAnswerQuestion | null;
  failureQuestion: Question | OneAnswerQuestion | MultipleAnswerQuestion | null;
  stageState: StageState;
  selectedAnswer: string | null;
  answers: string[];
  isCorrectAnswer: boolean;
  isError: string | null;
  showClearScreen: boolean;
}

export type Action =
  | { type: "SET_SNAP"; payload: number | string | null }
  | { type: "TOGGLE_OPEN" }
  | { type: "SET_QUESTION_COUNT"; payload: number }
  | { type: "INCREMENT_QUESTION_COUNT" }
  | { type: "SET_TOTAL_COUNT"; payload: number }
  | {
      type: "SET_QUESTIONS";
      payload: (Question | OneAnswerQuestion | MultipleAnswerQuestion)[];
    }
  | {
      type: "ADD_QUESTION";
      payload: Question | OneAnswerQuestion | MultipleAnswerQuestion;
    }
  | {
      type: "SET_QUESTION";
      payload: Question | OneAnswerQuestion | MultipleAnswerQuestion | null;
    }
  | {
      type: "SET_FAILURE_QUESTION";
      payload: Question | OneAnswerQuestion | MultipleAnswerQuestion | null;
    }
  | { type: "SET_STAGE_STATE"; payload: "prepare" | "selected" | "result" }
  | { type: "SET_SELECTED_ANSWER"; payload: string }
  | { type: "SET_ANSWERS"; payload: string[] }
  | { type: "SET_IS_CORRECT_ANSWER"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SHOW_CLEAR_SCREEN"; payload: boolean };

export const initialState: State = {
  snap: "148px",
  isOpen: true,
  questionCount: 1,
  totalCount: 0,
  questions: [],
  currentQuestion: null,
  failureQuestion: null,
  stageState: "prepare",
  selectedAnswer: null,
  answers: [],
  isCorrectAnswer: false,
  isError: null,
  showClearScreen: false,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SNAP":
      return { ...state, snap: action.payload };
    case "TOGGLE_OPEN":
      return { ...state, isOpen: !state.isOpen };
    case "SET_QUESTION_COUNT":
      return { ...state, questionCount: action.payload };
    case "INCREMENT_QUESTION_COUNT":
      return { ...state, questionCount: state.questionCount + 1 };
    case "SET_TOTAL_COUNT":
      return { ...state, totalCount: action.payload };
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "ADD_QUESTION":
      return { ...state, questions: [...state.questions, action.payload] };
    case "SET_QUESTION":
      return { ...state, currentQuestion: action.payload };
    case "SET_FAILURE_QUESTION":
      return { ...state, failureQuestion: action.payload };
    case "SET_STAGE_STATE":
      return { ...state, stageState: action.payload };
    case "SET_SELECTED_ANSWER":
      return { ...state, selectedAnswer: action.payload };
    case "SET_ANSWERS":
      return { ...state, answers: action.payload };
    case "SET_IS_CORRECT_ANSWER":
      return { ...state, isCorrectAnswer: action.payload };
    case "SET_ERROR":
      return { ...state, isError: action.payload };
    case "SHOW_CLEAR_SCREEN":
      return { ...state, showClearScreen: action.payload };
    default:
      return state;
  }
}
