/* assignment reducer

A single assignment associated with a particular student.
*/
import { ANSWER_QUESTION_SUCCESS } from '../constants/assignment';

export const initialAssignmentState = () => ({
  id: '',
  teacher_id: '',
  due_date: '',
  is_complete: false,
  questions: [
  ]
});

export default function assignmentReducer(state = initialAssignmentState(), action = {}) {
  switch (action.type) {
    case ANSWER_QUESTION_SUCCESS:
      return {
        ...state,
        is_complete: action.payload.is_complete
      };

    default:
      return state;
  }
}
