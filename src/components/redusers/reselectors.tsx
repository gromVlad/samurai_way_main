import { StateType } from "./redux-store"
import { createSelector, Selector } from "reselect";

export const getLogindata =(state:StateType)=>{
  return state.login.data
}

export const getResultCode =(state:StateType)=>{
  return state.login.resultCode
}

interface AppState {
  users: User[];
}

interface User {
  id: number;
  name: string;
}

const getUsers = (state: AppState) => state.users;

//первый параметр примитвный селектор, второй уже используем примитив чтобы делать с ней более сложную логику
export const getFilteredUsers: Selector<AppState, User[]> = createSelector(
  getUsers,
  (users) => users.filter((user) => user.name.startsWith("A"))
);

//вызов где то в коде его users: getFilteredUsers(state)
//также можем указывать через запятую другие зависемости от которых будет рабоать наш reselect
//export const getFilteredUsers: Selector<AppState, User[]> = createSelector( getUsers, getBoolean,...,(users,boolean)=> ...