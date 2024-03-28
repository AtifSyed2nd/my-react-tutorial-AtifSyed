import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Default Text",
      completed: false,
    },
  ], // this is the initial state which is an empty array.
};

export const todoSlice = createSlice({
  name: "todo",
  initialState, // which is already initialized at the above at line number 3
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // a text given by the payload parameter.
        completed: false, // a text given by the payload parameter.
      };
      state.todos.push(todo); // this will update the state with the new data.
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); // it is creating a new array which is adding all the data except the id which is passed in the payload.
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions; // these methods are exported because it wil be used in dispatch.

export default todoSlice.reducer; // reducer is exported default so it will bu used in store.

/* 

a little summary... how to create a rtk slice.

1. create a new file in the feature folder of the project with the name of xyzSlice.js.
2. import createSlice from @reduxjs/toolkit.
3. create an initial state like const initialState = {xyz: []}.
4. create a slice with the name of xycSlice which contains the name, initial state and reducer.
5. reducer is a collection of methods like add, remove etc. a method has two parameters state and action.
6. create a reducer like this: const xyzSlice = createSlice({name: "xyz", initialState, reducers: {add: (state, action) => {state.push(action.payload);}, remove: (state, action) => {state = state.filter((todo) => todo.id!== action.payload);}}});
7. reducer methods updates the state with the action.payload.


*/
