import * as funcs from './assignments';

const state = {
  assignments: {
    7777: {
      id: 7777,
      teacher_id: 2,
      quiz_id: 12345,
      due_date: 1495255666921, // or a UTC date&time
      students: [
        {
          student_id: 98765,
          is_complete: 0
        },
        {
          student_id: 8765,
          is_complete: 1
        }
      ]
    },
    7778: {
      id: 7778,
      teacher_id: 2,
      quiz_id: 2345,
      due_date: 1495255666921, // or a UTC date&time
      students: [
        {
          student_id: 98765,
          is_complete: 0
        },
        {
          student_id: 8765,
          is_complete: 0
        }
      ]
    }
  }
};

describe('assignments selectors', () => {
  test('get all assignments', () => {
    expect(funcs.getAssignments(state)).toEqual(state.assignments);
  });
  test('get one assignment by id', () => {
    expect(funcs.getAssignmentById(state, 7778)).toEqual(state.assignments[7778]);
  });
});
