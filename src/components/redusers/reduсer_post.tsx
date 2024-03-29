import { Dispatch } from "react";
import { Action } from "redux";
import { userAPI } from "../dalAPI/apiAxios";
import { ThunkDispatch } from "redux-thunk";
import { TypeResulCode } from "./reduсer_login";

//const
const ADD_POST = "ADD_POST";
const ADD_PROFILE = "ADD_PROFILE";
const SET_STATUS = "ADD_STATUS";
const SET_PHOTO = "SET_PHOTO";

//type init state
type DataMesAndLike = {
  mes: string;
  like: number;
};

export type ProfileType = {
  aboutMe: string;
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
  },
  photos: {
    small: string | null;
    large: string | null;
  };
};

//init state
export const initialStatePost = {
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
  status: null as null | string,
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
          { mes: action.newText, like: 0 },
        ],
      };
    case ADD_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_PHOTO:
      return {
        ...state,
        profile: state.profile && { ...state.profile, photos: action.photo },
      };
    default:
      return state;
  }
};

//action create

export const addPostsActCreator = (text: string) => {
  return {
    type: ADD_POST,
    newText: text,
  } as const;
};

export const addProfileCreator = (profile: null | ProfileType) => {
  return {
    type: ADD_PROFILE,
    profile,
  } as const;
};

export const setStatusCreator = (status: string) => {
  return {
    type: SET_STATUS,
    status,
  } as const;
};

export const setPhotoCreator = (photo: {
  small: string | null;
  large: string | null;
}) => {
  return {
    type: SET_PHOTO,
    photo,
  } as const;
};

//action type
type AddPostAction = ReturnType<typeof addPostsActCreator>;
type AddProfileAction = ReturnType<typeof addProfileCreator>;
type SetStatusAction = ReturnType<typeof setStatusCreator>;
type SetPhotoAction = ReturnType<typeof setPhotoCreator>;

export type ActionPost =
  | AddPostAction
  | AddProfileAction
  | SetStatusAction
  | SetPhotoAction;

//thunk
export const addProfileThunk = (userID: string) => {
  return (dispatch: Dispatch<Action>) => {
    userAPI
      .addprofile(userID)
      .then((data) => dispatch(addProfileCreator(data)));
  };
};

export const getStatusThunk = (userID: string) => {
  return (dispatch: Dispatch<Action>) => {
    userAPI.addStatus(userID).then((data) => dispatch(setStatusCreator(data)));
  };
};

export const updateStatusThunk = (status: string) => {
  return (dispatch: Dispatch<Action>) => {
    userAPI.updateStatus(status).then((data) => {
      if (data.resultCode === TypeResulCode.success) dispatch(setStatusCreator(status));
    });
  };
};

export const updatePhotoThunk = (photo: File) => {
  return (dispatch: Dispatch<Action>) => {
    userAPI.updatePhoto(photo).then((res) => {
      if (res.resultCode === TypeResulCode.success) {
        dispatch(setPhotoCreator(res.data.photos));
      }
    });
  };
};

type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type ProfileStoreType = {
  aboutMe: string;
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
};

export const updateProfileThunk = (profile: ProfileStoreType, userID: string) => {
  return async (dispatch: ThunkDispatch<DataPostType, void, Action>) => {
    let res = await userAPI.updateProfile(profile);
    if (res.data.resultCode === TypeResulCode.success) {
      dispatch(addProfileThunk(userID));
    }
  };
};
