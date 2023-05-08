//import { Message } from "../../data";

//const
const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_TEXT_MESSAGE = "ADD_TEXT_MESSAGE";


export type ActionMessages = AddMESAction | AddTextMESAction;

//type state
export type Message = {
  mes: string;
};


//init state
export const initstateMes = {
  textMessage: "hello",
  messages: [
    { mes: "Hello my name is Vlad" },
    { mes: "What.." },
    { mes: "Hello" },
    { mes: "Hello my name is Vlad" },
    { mes: "my names.." },
  ] as Message[],
};

export type InitStateType = typeof initstateMes

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

export const addMesActCreator = () => ({ type: ADD_MESSAGE } as const);

export const addTextMesActCreator = (text: string) => {
  return {
    type: ADD_TEXT_MESSAGE,
    newMes: text,
  } as const
};

type AddMESAction = ReturnType<typeof addMesActCreator>

type AddTextMESAction =  ReturnType<typeof addTextMesActCreator>