import reducer, { initialAssignmentsState } from './assignments';

describe('assignments reducer', () => {
  test('initial state', () => {
    expect(reducer()).toEqual(initialAssignmentsState());
  });
});
