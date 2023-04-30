import { DataMesAndLike } from "../../data";

const ADD_POST = "ADD_POST";
const ADD_TEXT_POST = "ADD_TEXT_POST";

type AddPostAction = {
  type: "ADD_POST";
};

type AddTextPostAction = {
  type: "ADD_TEXT_POST";
  newText: string;
};

export type ActionPost =
  | AddPostAction
  | AddTextPostAction

type dataPostType = {
    textPost: string;
    dataMesAndLike: DataMesAndLike[];
  };

export const reduserPost = (state: dataPostType, action: ActionPost)=> {
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

export const addPostsActCreator = (): AddPostAction => ({ type: ADD_POST });

export const addTextsActCreator = (text: string): AddTextPostAction => {
  return {
    type: ADD_TEXT_POST,
    newText: text,
  };
};