export const initialAssignmentsState = () => ({
  assignments: [
    //id: '',
    //teacher_id: '',
    //student_id: '',
    //due_date: '',
    //is_complete: false,
    //grade: '',
    //questions: []
  ]
});

export default function assignmentsReducer(state = initialAssignmentsState(), action = {}) {
  switch (action.type) {
    default:
      return state;
    }
  }
