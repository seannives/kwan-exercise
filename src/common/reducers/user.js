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
