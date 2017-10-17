/* classroom actions

A teacher's group of student's.  Probably a better name than 'classroom' but
calling it 'class' seems like a recipe for disaster.

*/

import { FETCH_CLASSROOM_SUCCESS } from '../constants/classroom';

// Fetches all of a teacher's students and their current accumulated grade
export const fetchClassroom = (id) => (
  (dispatch, api) => {
    return api
      .get(`/classroom/${id}`)
      .then(result => {
        dispatch(fetchClassroomSuccess(result));
      });
  };
);

export const fetchClassroomSuccess = result => ({
  type: FETCH_CLASSROOM_SUCCESS,
  payload: result
});
