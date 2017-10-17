import reducer, { initialAssignmentState } from './assignment';
import { ANSWER_QUESTION_SUCCESS } from '../constants/assignment';

describe('assignment reducer', () => {
  test('initial state', () => {
    expect(reducer()).toEqual(initialAssignmentState());
  });

  test('complete assignment', () => {
    const initialState = {
      id: '123',
      teacher_id: '456',
      due_date: '',
      is_complete: false,
      questions: [],
    };

    const action = {
      type: ANSWER_QUESTION_SUCCESS,
      payload: {
        is_complete: true
      }
    };

    const expected = {
      id: '123',
      teacher_id: '456',
      due_date: '',
      is_complete: true,
      questions: [],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
