//import { DataMesAndLike } from "../../data";

//const 
const ADD_POST = "ADD_POST";
const ADD_TEXT_POST = "ADD_TEXT_POST";
const ADD_PROFILE = "ADD_PROFILE";

//type init state
type DataMesAndLike = {
  mes: string;
  like: number;
};

export type ProfileType = {
  aboutMe:string
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: {
    small: string | null;
    large: string | null;
  };
};

//init state
export const initialStatePost = {
  textPost: "hello",
  dataMesAndLike: [
    {
      mes: "hello world",
      like: 23,
    },
    {
      mes: "What your name?",
      like: 15,
    } as DataMesAndLike,
  ],
  profile: null as null | ProfileType,
};

export type DataPostType = typeof initialStatePost;

//reduser
export const reduserPost = (
  state = initialStatePost,
  action: ActionPost
): DataPostType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        dataMesAndLike: [
          ...state.dataMesAndLike,
          { mes: state.textPost, like: 0 },
        ],
        textPost: "",
      };
    case ADD_TEXT_POST:
      return { ...state, textPost: action.newText };
    case ADD_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

//action create
export const addPostsActCreator = () => ({ type: ADD_POST } as const);

export const addTextsActCreator = (text: string) => {
  return {
    type: ADD_TEXT_POST,
    newText: text,
  } as const ;
};

export const addProfileCreator = (profile: null | ProfileType) => {
  return {
    type: ADD_PROFILE,
    profile,
  } as const;
};

//action type
type AddPostAction = ReturnType<typeof addPostsActCreator>

type AddTextPostAction = ReturnType<typeof addTextsActCreator>;

type AddProfileAction = ReturnType<typeof addProfileCreator>;

export type ActionPost = AddPostAction | AddTextPostAction | AddProfileAction;