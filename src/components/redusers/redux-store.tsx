// redux-store.ts
import { combineReducers, createStore } from "redux";
import { reduserPost } from "./reduсer_post";
import { reduserMessages } from "./reduсer.messages";
import { reduserName } from "./reduсer_name";
import { reduserSudabar } from "./reduсer_sibebar";
import { reducerUsers } from "./reduсer_users";


// add reducer combine
const reduserBox = combineReducers({
  dataPost: reduserPost,
  mesOBJ: reduserMessages,
  names: reduserName,
  sidebar: reduserSudabar,
  usersPage: reducerUsers,
});

export type StateType = ReturnType<typeof reduserBox>;


export const store = createStore(reduserBox);