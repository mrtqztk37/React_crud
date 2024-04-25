const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "KAYDOL":
      return state;
    case "GİRİŞ YAP":
      return state;

    default:
      return state;
  }
};
export default userReducer;
