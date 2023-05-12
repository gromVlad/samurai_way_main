import { ThunkDispatch } from "redux-thunk";
import { DataPostType, loginCreatorThunk } from "./reduсer_login";
import { Action } from "redux";

const INIT_LOG ="INIT_LOG"

const initState ={
  initBoolean:false 
}

type InitStateType = typeof initState

export const reducerInitLog = (
  state: InitStateType = initState,
  action: InitLogUser
): InitStateType => {
  switch (action.type) {
    case INIT_LOG:
      return {
        ...state,
        initBoolean: true,
      };
    default:
      return state;
  }
};

export const initLogUser = () => ({ type: INIT_LOG } as const);
type InitLogUser = ReturnType<typeof initLogUser>

//thunk
export const initLogUserThunk = () => {
  return (dispatch: ThunkDispatch<DataPostType, void, Action>) => {
    let promise = dispatch(loginCreatorThunk());
    //dispatch(someOtherThunk() и т.д.... / ожидаем получение promise взяли в [] если будет много / дальше если получили то вызываеться функция initLogUserThunk / пка не получили promise то будет initBoolean:false
    Promise.all([promise]).then(() => {
      dispatch(initLogUser());
    });
  };
};