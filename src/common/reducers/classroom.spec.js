import reducer, { initialClassroomState } from './classroom';

describe('classroom reducer', () => {
  test('initial state', () => {
    expect(reducer()).toEqual(initialClassroomState());
  });
});
