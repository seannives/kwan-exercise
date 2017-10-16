/* quiz actions
- `api` is an abstraction of whatever api (axios or whatever) that you've got

*/
import { FETCH_QUIZ_SUCCESS } from '../constants/quiz.js';

export const fetchQuiz = (id) => 
  (dispatch, api) => {
    return api
      .get(`/quiz/${id}`)
      .then(result => {
        dispatch(fetchQuizSuccess(result));
      });
  };

export const fetchQuizSuccess = result => ({
  type: FETCH_QUIZ_SUCCESS,
  payload: result
});
