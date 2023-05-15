import { Dispatch } from "react";
import { userAPI } from "../dalAPI/apiAxios";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { stopSubmit } from "redux-form";

const ADD_LOGIN = "ADD_LOGIN";
const GET_CAPTCH = "GET_CAPTCH";
const NULL_CAPTCH = "NULL_CAPTCH";

export type DataType = {
  id: null | number;
  email: null | string
  login: null | string
};

//init state
export const initialStateLogin = {
  data: {
    id: null,
    email: null,
    login: null,
  } as DataType,
  resultCode: 1,
  captch: null as null | string
};

export type DataPostType = typeof initialStateLogin;

//reduser
export const reduserLogin = (
  state = initialStateLogin,
  action: ActionPost
): DataPostType => {
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        data: action.box.data,
        resultCode: action.box.resultCode,
      };
    case GET_CAPTCH:
      return {
        ...state,
        captch: action.box.captch,
      };
    case NULL_CAPTCH:
      return {
        ...state,
        captch: null,
      };
    default:
      return state;
  }
};

//action create

export const isLoginCreator = (data: DataType, resultCode:number) => {
  return {
    type: ADD_LOGIN,
    box: {
      data,
      resultCode,
    },
  } as const;
};

export const getCaptchCreator = (captch: null | string) => {
  return {
    type: GET_CAPTCH,
    box: {
      captch,
    },
  } as const;
};

export const nullCaptchCreator = () => {
  return {
    type: NULL_CAPTCH,
  } as const;
};

export type AddisLoginAction = ReturnType<typeof isLoginCreator>;
export type GetCaptchAction = ReturnType<typeof getCaptchCreator>;
export type NullCaptchhAction = ReturnType<typeof nullCaptchCreator>;
export type ActionPost = AddisLoginAction | GetCaptchAction | NullCaptchhAction

//thunk
export const loginCreatorThunk = () => (dispatch: Dispatch<Action>) => {
    return userAPI.loginUser()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(isLoginCreator(data.data, data.resultCode));
      }
    })
  }


export const loginOnPageThunk = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: null | string 
) => {
  return (dispatch: ThunkDispatch<DataPostType, void, Action>) => {
    userAPI
      .loginUserOnPage(email, password, rememberMe, captcha)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(loginCreatorThunk());
          dispatch(nullCaptchCreator());
        } else {
          if (data.resultCode === 10) {
            dispatch(getCaptchThunk());
          }
          let messageError =
            data.messages.length > 0 ? data.messages[0] : "some error";
          dispatch(stopSubmit("login", { _error: messageError }));
        }
      });
  };
};

const nullLogin = {
    id: null,
    email: null,
    login: null,
}

export const logoutOnPageThunk = () => {
  return (dispatch: Dispatch<Action>) => {
    userAPI.logoutUserOnPage().then((data) => {
      if (data.resultCode === 0) {
        dispatch(isLoginCreator(nullLogin, 1));
      }
    });
  };
};

export const getCaptchThunk = () => {
  return async (dispatch: Dispatch<Action>) => {
    const resultCaptch = await userAPI.getCaptchUser()
    dispatch(getCaptchCreator(resultCaptch.data.url));
  };
};

export const logoutOnPageThunk2 = () => {
  return (dispatch: Dispatch<Action>) => {
    try {
      userAPI.logoutUserOnPage().then((data) => {
        if (data.resultCode === 0) {
          dispatch(isLoginCreator(nullLogin, 1));
        }
      });
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
    }
  };
};