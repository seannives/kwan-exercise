import * as funcs from './assignments';

const state = {
  assignments: [
    {
      id: 7777
    }
  ]
};

describe('assignments selectors', () => {
  test('completed selectors', () => {
    expect(funcs.getAssignments(state)).toEqual(state.assignments);
  });
});
