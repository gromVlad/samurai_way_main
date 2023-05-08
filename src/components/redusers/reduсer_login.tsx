const ADD_LOGIN = "ADD_LOGIN";

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
  resultCode: 0,
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
        data: action.box.data,
        resultCode :action.box.resultCode
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


export type AddisLoginAction = ReturnType<typeof isLoginCreator>;

export type ActionPost = AddisLoginAction;