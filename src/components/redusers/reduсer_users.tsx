import { v1 } from "uuid";

const FOLLOW_FALSE = "FOLLOW_FALSE";
const FOLLOW_TRUE = "FOLLOW_TRUE";
const ADD_STATE = "ADD_STATE";

type User = {
  id: string;
  img: string;
  following: boolean;
  location: string;
  name: string;
  surname: string;
  status: string;
};

export type InitState = {
  users: User[];
};

const initStateUsers: InitState = {
  users: [
    {
      id: v1(),
      img: "https://static8.tgstat.ru/channels/_0/c8/c8fcdb7e4656ff95aa29067c6ce4dc85.jpg",
      following: false,
      location: "New York",
      name: "John",
      surname: "Doe",
      status: "Active",
    },
    {
      id: v1(),
      img: "https://static8.tgstat.ru/channels/_0/c8/c8fcdb7e4656ff95aa29067c6ce4dc85.jpg",
      following: true,
      location: "Los Angeles",
      name: "Mary",
      surname: "Smith",
      status: "Inactive",
    },
    {
      id: v1(),
      img: "https://static8.tgstat.ru/channels/_0/c8/c8fcdb7e4656ff95aa29067c6ce4dc85.jpg",
      following: false,
      location: "Chicago",
      name: "Peter",
      surname: "Johnson",
      status: "Active",
    },
  ],
};

export const reducerUsers = (
  state = initStateUsers,
  action: ActionUsers
): InitState => {
  switch (action.type) {
    case FOLLOW_FALSE:
      return {
        ...state,
        users: state.users.map((el) =>
          el.id === action.payload.id ? { ...el, following: false } : el
        ),
      };
    case FOLLOW_TRUE:
      return {
        ...state,
        users: state.users.map((el) =>
          el.id === action.payload.id ? { ...el, following: true } : el
        ),
      };
    case ADD_STATE:
      return {
        ...state,
        users: [...state.users, ...action.payload.state.users],
      };
    default:
      return state;
  }
};

export const actionFollowFalseAC = (idUser: string) => {
  return {
    type: FOLLOW_FALSE,
    payload: {
      id: idUser,
    } 
  } as const;
};

export const actionFollowTrueAC = (idUser: string) => {
  return {
    type: FOLLOW_TRUE,
    payload: {
      id: idUser,
    } 
  } as const;
};

export const actionAddStateAC = (state: InitState) => {
  return {
    type: ADD_STATE,
    payload: {
      state: state,
    } 
  } as const;
};

type ActionFollowFalseType = ReturnType<typeof actionFollowFalseAC>;
type ActionFollowTrueType = ReturnType<typeof actionFollowTrueAC>;
type ActionAddStateType = ReturnType<typeof actionAddStateAC>;

type ActionUsers =
  | ActionFollowFalseType
  | ActionFollowTrueType
  | ActionAddStateType;
