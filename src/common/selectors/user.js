// In practice, we might make `user` a child of a `session` object
// but this is ok for now.

export const isTeacher = state => state.user.is_teacher;
export const isStudent = state => state.user.is_student;
export const getUserName = state => state.user.name;
