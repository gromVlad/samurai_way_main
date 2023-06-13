import { Dispatch } from "react";
import { Action } from "redux";
import { userAPI } from "../dalAPI/apiAxios";

const FOLLOW_FALSE = "FOLLOW_FALSE";
const FOLLOW_TRUE = "FOLLOW_TRUE";
const ADD_STATE = "ADD_STATE";
const CURRENT_PAGE = "CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";
const PROGRESS_FOLLOW ="PROGRESS_FOLLOW"

type Item = {
  id: number;
  name: string;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

const initSt= {
  items: [] as Item[],
  totalCount: 0,
  error: null,
  pageNumber:6,
  currentPage:1,
  isFetching:true,
  isprogressFollow:[] as number[]
};

export type InitState = typeof initSt

export const reducerUsers = (
  state = initSt,
  action: ActionUsers
): InitState  => {
  switch (action.type) {
    case FOLLOW_FALSE:
      return {
        ...state,
        items: state.items.map((el) =>
          el.id === action.payload.id ? { ...el, followed: false } : el
        ),
      };
    case FOLLOW_TRUE:
      return {
        ...state,
        items: state.items.map((el) =>
          el.id === action.payload.id ? { ...el, followed: true } : el
        ),
      };
    case ADD_STATE:
      return {
        ...state,
        items: [...action.payload.state.items],
        totalCount: action.payload.state.totalCount,
        error: action.payload.state.error,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.numPage,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetch,
      };
    case PROGRESS_FOLLOW:
      return {
        ...state,
        isprogressFollow: action.payload.isProgressFollow ? [...state.isprogressFollow,action.payload.id] : state.isprogressFollow.filter(el => el !== action.payload.id)
      };
    default:
      return state;
  }
};

export const actionFollowFalse = (id: number) => {
  return {
    type: FOLLOW_FALSE,
    payload: {
      id: id,
    },
  } as const;
};

export const actionFollowTrue = (id: number) => {
  return {
    type: FOLLOW_TRUE,
    payload: {
      id: id,
    },
  } as const;
};

export const addCurrentPage = (numPage: number) => {
  return {
    type: CURRENT_PAGE,
    payload: {
      numPage: numPage,
    },
  } as const;
};

export const actionAddState = (state: InitState) => {
  return {
    type: ADD_STATE,
    payload: {
      state: state,
    },
  } as const;
};

export const actionIsFetching = (isFetch: boolean) => {
  return {
    type: IS_FETCHING,
    payload: {
      isFetch
    },
  } as const;
};

export const actionIsProgressFollow = (isProgressFollow: boolean,id:number) => {
  return {
    type: PROGRESS_FOLLOW,
    payload: {
      isProgressFollow,
      id,
    },
  } as const;
};

//old oproach type add in action type before () : 
//export const actionIsProgressFollow = (isProgressFollow: boolean,id:number):TypeАctionIsProgressFollow => {
// . . .
// type TypeАctionIsProgressFollow = {
//   type: typeof PROGRESS_FOLLOW;
//   payload: {
//     isProgressFollow:boolean,
//     id:number
//   };
// };

type ActionFollowFalseType = ReturnType<typeof actionFollowFalse>;
type ActionFollowTrueType = ReturnType<typeof actionFollowTrue>;
type ActionAddStateType = ReturnType<typeof actionAddState>;
type ActionAddPageType = ReturnType<typeof addCurrentPage>;
type ActionIsFetchingType = ReturnType<typeof actionIsFetching>;
type ActionIsProgressFollowType = ReturnType<typeof actionIsProgressFollow>

type ActionUsers =
  | ActionFollowFalseType
  | ActionFollowTrueType
  | ActionAddStateType
  | ActionAddPageType
  | ActionIsFetchingType
  | ActionIsProgressFollowType

//thunk
export const firstLoadUsersThunk = (currentPage:number, pageNumber:number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(actionIsFetching(true));
    userAPI.getUsers(currentPage, pageNumber).then((data) => {
      dispatch(actionIsFetching(false));
      dispatch(actionAddState(data));
    });
  };
};

export const nextLoadUsersThunk = (page:number,pageNumber:number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch(addCurrentPage(page));
    dispatch(actionIsFetching(true));
    userAPI.getUsers(page,pageNumber).then((data) => {
      dispatch(actionIsFetching(false));
      dispatch(actionAddState(data));
    });
  };
};

export const followUsersThunk = (id:number) => {
  return (dispatch: Dispatch<Action>) => {
     dispatch(actionIsProgressFollow(true, id));
     userAPI.addfollow(id).then((data) => {
       if (data.resultCode === 0) {
         dispatch(actionFollowTrue(id));
       }
       dispatch(actionIsProgressFollow(false, id));
     });
  };
};

export const unfollowUsersThunk = (id:number) => {
  return (dispatch: Dispatch<Action>) => {
     dispatch(actionIsProgressFollow(true, id));
     userAPI.deleteUser(id).then((data) => {
       if (data.resultCode === 0) {
         dispatch(actionFollowFalse(id));
       }
       dispatch(actionIsProgressFollow(false, id));
     });
  };
};

