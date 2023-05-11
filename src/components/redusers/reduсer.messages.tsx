//const
const ADD_MESSAGE = "ADD_MESSAGE";

export type ActionMessages = AddMESAction 

//type state
export type Message = {
  mes: string;
};

//init state
export const initstateMes = {
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
    return {...state,messages:[...state.messages,{mes:action.newMes}]}
    
  } 
  return state;
};

export const addMesActCreator = (text: string) => {
  return {
    type: ADD_MESSAGE,
    newMes: text,
  } as const;
};

type AddMESAction = ReturnType<typeof addMesActCreator>
