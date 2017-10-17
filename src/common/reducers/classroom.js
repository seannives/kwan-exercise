/* classroom reducer

A classroom, being a collection of students including their accumulated
grade.
*/
import { FETCH_CLASSROOM_SUCCESS } from '../constants/classroom';

export const initialClassroomState = () => ({
  id: '',
  students: {
    // id: {
    //   id: '',
    //   accumulated_grade: ''
    //}
  }
});

export default function classroomReducer(state = initialClassroomState(), action = {}) {
  switch (action.type) {
    case FETCH_CLASSROOM_SUCCESS:
      return {
        ...state,
        ...action.payload.result,
      };

    default:
      return state;
  }
}
