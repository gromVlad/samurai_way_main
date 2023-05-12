import { StateType } from "./redux-store"

export const getLogindata =(state:StateType)=>{
  return state.login.data
}

export const getResultCode =(state:StateType)=>{
  return state.login.resultCode
}

