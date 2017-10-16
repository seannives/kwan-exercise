/* quiz actions
- Fetch a quiz
- Create a quiz (sending a quiz payload, as yet to be defined)

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

export const createQuiz = (quiz) => (
  (dispatch, api) => {
    return api
      .post(`/quiz`, quiz);
  };
);
