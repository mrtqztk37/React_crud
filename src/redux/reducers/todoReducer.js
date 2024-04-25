const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { todos: state.todos.concat(action.payload) };
    case "DELETE":
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      return { todos: filtred };
    case "UPDATE":
      const uptated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { todos: uptated };

    default:
      return state;
  }
};
export default todoReducer;
