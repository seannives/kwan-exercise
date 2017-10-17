/* quiz actions
- Fetch a quiz
- Create a quiz (sending a quiz payload)

NOTE: `api` is an abstraction of whatever api (axios or whatever) that you've got
*/
import { FETCH_QUIZ_SUCCESS } from '../constants/quiz';

export const fetchQuiz = (id) => (
  (dispatch, api) => {
    return api
      .get(`/quiz/${id}`)
      .then(result => {
        dispatch(fetchQuizSuccess(result));
      });
  };
);

export const fetchQuizSuccess = result => ({
  type: FETCH_QUIZ_SUCCESS,
  payload: result
});

// NOTE: quiz payload for multiple choice would typically be a Question, an
// array of possible answers keyed by an id, and then a correct answer
// associated with one of the possible answers.
// The quiz could be associated with the teacher based on auth token or
// explicitly passed.
export const createQuiz = (quiz) => (
  (dispatch, api) => {
    return api
      .post(`/quiz`, quiz);
  };
);
