import reducer, { initialUserState } from './user';

describe('user reducer', () => {
  test('initial state', () => {
    expect(reducer()).toEqual(initialUserState());
  });
});
