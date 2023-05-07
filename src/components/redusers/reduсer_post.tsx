//import { DataMesAndLike } from "../../data";

//const 
const ADD_POST = "ADD_POST";
const ADD_TEXT_POST = "ADD_TEXT_POST";

//action type
type AddPostAction = {
  type: "ADD_POST";
};

type AddTextPostAction = {
  type: "ADD_TEXT_POST";
  newText: string;
};

export type ActionPost = AddPostAction | AddTextPostAction;

//type init state
type DataMesAndLike = {
  mes: string;
  like: number;
};

export type DataPostType = {
  textPost: string;
  dataMesAndLike: DataMesAndLike[];
};

//init state
export const initialStatePost: DataPostType = {
  textPost: "hello",
  dataMesAndLike: [
    {
      mes: "hello world",
      like: 23,
    },
    {
      mes: "What your name?",
      like: 15,
    },
  ],
};

//reduser
export const reduserPost = (
  state = initialStatePost,
  action: ActionPost
): DataPostType => {
  if (action.type === ADD_POST) {
    return {
      ...state,
      dataMesAndLike: [
        ...state.dataMesAndLike,
        { mes: state.textPost, like: 0 },
      ],
      textPost: "",
    };
  } else if (action.type === ADD_TEXT_POST) {
    return { ...state, textPost: action.newText };
  }
  return state;
};

//action create
export const addPostsActCreator = (): AddPostAction => ({ type: ADD_POST });

export const addTextsActCreator = (text: string): AddTextPostAction => {
  return {
    type: ADD_TEXT_POST,
    newText: text,
  };
};
