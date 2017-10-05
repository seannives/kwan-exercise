export const initialAssignmentState = () => ({
  id: '',
  teacher_id: '',
  student_id: '',
  due_date: '',
  is_complete: false,
  grade: '',
  questions: []
});

export default function assignmentReducer(state = initialAssignmentState(), action = {}) {
  switch (action.type) {
    default:
      return state;
    }
  }
