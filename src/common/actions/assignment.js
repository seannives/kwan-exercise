/* assignment actions
- An individual assignment (a quiz with a due date and maybe some students associated)

NOTE: `api` is an abstraction of whatever api (axios or whatever) that you've got
*/

// Create an assignment.  Pass quiz id, due_date, and an array of student ids.
// NOTE: Some descriptive typing could substitute/improve upon the above commentary.
// NOTE: Teacher's association with this quiz is implied by whatever auth token is used
export const createAssignment = (quiz_id, due_date, students) => (
  const payload = {
    quiz_id,
    due_date,
    students,
  }
  (dispatch, api) => {
    return api
      .post(`/assignment`, payload);
  };
);
