/* assignment actions
- Create an individual assignment (a quiz with a due date and maybe some students associated)
- Grade an assignment

NOTE: `api` is an abstraction of whatever api (axios or whatever) that you've got
*/

// Create an assignment.  Pass quiz id, due_date, and an array of student ids.
// NOTE: Some descriptive typing could substitute/improve upon the above commentary.
// NOTE: Teacher's association with this quiz is implied by whatever auth token is used
//   or could be explicitly passed in the payload.
export const createAssignment = (quiz_id, due_date, students) => (
  const payload = {
    quiz_id,
    due_date,
    students,
  };
  (dispatch, api) => {
    return api
      .post(`/assignment`, payload);
  };
);

// Grade an assignment.  Could be used as an override grade in lieu of determining
// correctness on each individual student's question/answer combo.
// In practice, an assignment should be able to grade itself by comparing the
// stored answer to the student's answer.
export const gradeAssignment = (assignment_id, student_id, grade) => (
  const payload = {
    student_id,
    grade,
  };
  (dispatch, api) => {
    return api
      .put(`/assignment/${assignment_id}`, payload);
  };
);
