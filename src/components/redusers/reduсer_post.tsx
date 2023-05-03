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
export const reduserPost = (state = initialStatePost, action: ActionPost) => {
  if (action.type === ADD_POST) {
    const newPost = {
      mes: state.textPost,
      like: 0,
    };
    state.dataMesAndLike.push(newPost);
    state.textPost = "";
  } else if (action.type === ADD_TEXT_POST) {
    state.textPost = action.newText;
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
