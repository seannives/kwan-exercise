/* quiz reducer

*/

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
    default:
      return state;
  }
}
