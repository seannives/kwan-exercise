import reducer, { initialQuizState } from './quiz';

describe('quiz reducer', () => {
  test('initial state', () => {
    expect(reducer()).toEqual(initialQuizState());
  });
});
