/* assignment actions

Student and teacher actions on a single assignment.

NOTE: `api` is an abstraction of whatever api (axios or whatever) that you've got
*/

import { 
  ANSWER_QUESTION_SUCCESS,
  FETCH_ASSIGNMENT_SUCCESS
} from '../constants/assignment';


// Student Actions

// Fetches an assignment with the student's current assignment state.
// Uses auth_token or similar to identify the student.
export const fetchAssignment = (id) => (
  (dispatch, api) => {
    return api
      .get(`/assignment/${id}`)
      .then(result => {
        dispatch(fetchAssignmentSuccess(result));
      });
  };
);

export const fetchAssignmentSuccess = result => ({
  type: FETCH_ASSIGNMENT_SUCCESS,
  payload: result
});

// Answer question
export const answerQuestion = (assignment_id, question_id, answer_id) => (
  (dispatch, api) => {
    return api
      .put(`/assignment/${id}/question/${question_id}`, answer_id)
      .then(result => {
        dispatch(answerQuestionSuccess(result));
      });
  };  
);

export const answerQuestionSuccess = result => ({
  type: ANSWER_QUESTION_SUCCESS,
  payload: result
});


// Teacher Actions

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
