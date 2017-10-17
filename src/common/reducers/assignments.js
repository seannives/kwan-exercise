/* assignments reducer
- List of all assignments (quiz's given a due date)
- Potentially used for reporting/aggregate displays
*/

// Consider something like https://github.com/paularmstrong/normalizr for managing multiple,
// redundant student objects under this structure...a dozen quizzes with mostly the same
// kids on all would bloat this badly otherwise.

// See src/common/selectors/assignments.spec.js for structure example

export const initialAssignmentsState = () => ({
  assignments: {
    // id: {
    //id: '',
    //teacher_id: '',
    //quiz_id: '',
    //due_date: '',
    //students: [],
    // }
  }
});

export default function assignmentsReducer(state = initialAssignmentsState(), action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
