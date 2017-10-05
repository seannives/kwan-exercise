import { isStudent, isTeacher } from './user';

const state = {
  user: {
    id: 123,
    name: 'Joe Smith',
    is_teacher: true,
    is_student: false
  }
};

describe('user selectors', () => {
  test('teacher/student selectors', () => {
    expect(isTeacher(state)).toBeTruthy();
    expect(isStudent(state)).toBeFalsy();
  });
});
