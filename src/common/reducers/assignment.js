/* assignment reducer

A single assignment associated with a particular student.
*/

export const initialAssignmentState = () => ({
  assignment: {
    //id: '',
    //teacher_id: '',
    //quiz_id: '',
    //due_date: '',
    //is_complete: ''
    //questions: [],
    // }
  }
});

export default function assignmentReducer(state = initialAssignmentState(), action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
