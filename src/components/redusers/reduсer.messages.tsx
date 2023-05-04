//import { Message } from "../../data";

//const
const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_TEXT_MESSAGE = "ADD_TEXT_MESSAGE";

//type action
type AddMESAction = {
  type: "ADD_MESSAGE";
};

type AddTextMESAction = {
  type: "ADD_TEXT_MESSAGE";
  newMes: string;
};

export type ActionMessages = AddMESAction | AddTextMESAction;

//type state
export type Message = {
  mes: string;
};

export type InitStateType = {
    textMessage: string;
    messages: Message[];
  };

//init state
export const initstateMes: InitStateType = {
  textMessage: "hello",
  messages: [
    { mes: "Hello my name is Vlad" },
    { mes: "What.." },
    { mes: "Hello" },
    { mes: "Hello my name is Vlad" },
    { mes: "my names.." },
  ],
};

export const reduserMessages = (
  state = initstateMes,
  action: ActionMessages
): InitStateType => {
  if (action.type === ADD_MESSAGE) {
    return {...state,messages:[...state.messages,{mes:state.textMessage}],textMessage:""}
    
  } else if (action.type === ADD_TEXT_MESSAGE) {
    return {...state,textMessage:action.newMes}
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
