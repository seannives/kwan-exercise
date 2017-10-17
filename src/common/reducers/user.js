/* user reducer

Associated with the current application user (in other apps this is sometimes
a child of a 'session' object), either a teacher or student.
*/

export const initialUserState = () => ({
  id: '',
  name: '',
  is_teacher: false,
  is_student: false
});

export default function userReducer(state = initialUserState(), action = {}) {
  switch (action.type) {
    default:
      return state;
    }
  }
