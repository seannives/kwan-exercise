/* quiz reducer

A quiz, being sequence of questions, not associated with a due date or students.
*/
import { FETCH_QUIZ_SUCCESS } from '../constants/quiz';

export const initialQuizState = () => ({
  id: '',
  teacher_id: '',
  questions: [
    // {
    //  question_id: '',
    //  content: {} //structure for multiple choice
    //  answer: '' //the correct answer
    //}
  ]
});

export default function quizReducer(state = initialQuizState(), action = {}) {
  switch (action.type) {
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        ...action.payload.result,
      };

    default:
      return state;
  }
}
