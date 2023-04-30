import { Message } from "../../data";

const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_TEXT_MESSAGE = "ADD_TEXT_MESSAGE";

type AddMESAction = {
  type: "ADD_MESSAGE";
};

type AddTextMESAction = {
  type: "ADD_TEXT_MESSAGE";
  newMes: string;
};

export type ActionMessages = AddMESAction | AddTextMESAction;

type reduserPostType = {
  textMessage: string;
  messages: Message[];
};

export const reduserMessages = (state: reduserPostType, action: ActionMessages):reduserPostType => {
  if (action.type === ADD_MESSAGE) {
    const newmes = {
      mes: state.textMessage,
    };
    state.messages.push(newmes);
    state.textMessage = "";
  } else if (action.type === ADD_TEXT_MESSAGE) {
    state.textMessage = action.newMes;
  }
  
  return state;
};

export const addMesActCreator = (): AddMESAction => ({ type: ADD_MESSAGE });

export const addTextMesActCreator = (text: string): AddTextMESAction => {
  return {
    type: ADD_TEXT_MESSAGE,
    newMes: text,
  };
};
