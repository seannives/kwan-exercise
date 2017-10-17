import reducer, { initialAssignmentState } from './assignment';

describe('assignment reducer', () => {
  test('initial state', () => {
    expect(reducer()).toEqual(initialAssignmentState());
  });
});
