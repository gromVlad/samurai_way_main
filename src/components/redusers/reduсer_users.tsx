const FOLLOW_FALSE = "FOLLOW_FALSE";
const FOLLOW_TRUE = "FOLLOW_TRUE";
const ADD_STATE = "ADD_STATE";
const CURRENT_PAGE = "CURRENT_PAGE";

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

export type InitState = {
  items: Item[];
  totalCount: number;
  error: null | string;
  pageNumber: number;
  currentPage: number
};

const initState: InitState = {
  items: [],
  totalCount: 0,
  error: null,
  pageNumber:6,
  currentPage:1
};

export const reducerUsers = (
  state = initState,
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
        currentPage:action.payload.numPage
      };
    default:
      return state;
  }
};

export const actionFollowFalseAC = (id: number) => {
  return {
    type: FOLLOW_FALSE,
    payload: {
      id: id,
    },
  } as const;
};

export const actionFollowTrueAC = (id: number) => {
  return {
    type: FOLLOW_TRUE,
    payload: {
      id: id,
    },
  } as const;
};

export const addCurrentPageAC = (numPage: number) => {
  return {
    type: CURRENT_PAGE,
    payload: {
      numPage: numPage,
    },
  } as const;
};

export const actionAddStateAC = (state: InitState) => {
  return {
    type: ADD_STATE,
    payload: {
      state: state,
    },
  } as const;
};

type ActionFollowFalseType = ReturnType<typeof actionFollowFalseAC>;
type ActionFollowTrueType = ReturnType<typeof actionFollowTrueAC>;
type ActionAddStateType = ReturnType<typeof actionAddStateAC>;
type ActionAddPageType = ReturnType<typeof addCurrentPageAC>;

type ActionUsers =
  | ActionFollowFalseType
  | ActionFollowTrueType
  | ActionAddStateType
  | ActionAddPageType