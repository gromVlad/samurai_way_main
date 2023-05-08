const FOLLOW_FALSE = "FOLLOW_FALSE";
const FOLLOW_TRUE = "FOLLOW_TRUE";
const ADD_STATE = "ADD_STATE";
const CURRENT_PAGE = "CURRENT_PAGE";
const IS_FETCHING = "IS_FETCHING";

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
  isFetching:true
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
        isFetching: action.payload.isFetch
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

type ActionFollowFalseType = ReturnType<typeof actionFollowFalse>;
type ActionFollowTrueType = ReturnType<typeof actionFollowTrue>;
type ActionAddStateType = ReturnType<typeof actionAddState>;
type ActionAddPageType = ReturnType<typeof addCurrentPage>;
type ActionIsFetchingType = ReturnType<typeof actionIsFetching>;

type ActionUsers =
  | ActionFollowFalseType
  | ActionFollowTrueType
  | ActionAddStateType
  | ActionAddPageType
  | ActionIsFetchingType;