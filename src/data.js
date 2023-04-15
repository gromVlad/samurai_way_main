import { rerender } from "./render"

export const globalData = {
  names:[
    { name: "Vlad", id: 1 },
    { name: "Alex", id: 2 },
    { name: "Andor", id: 3 },
    { name: "Carl", id: 4 },
    { name: "Jack", id: 5 },
  ],

  messages:[
    { mes: "Hello my name is Vlad" },
    { mes: "What.." },
    { mes: "Hello" },
    { mes: "Hello my name is Vlad" },
    { mes: "my names.." },
  ],
  dataMesAndLike :[
    {
      mes: "hello world",
      like: 23,
    },
    {
      mes: "What your name?",
      like: 15,
    }
  ],
  sidebar:['alex','kate',"andor","han colo"]
}

//create global function
export const newAddPost = (mesPost) => {
  const newPost = {
    mes:mesPost,
    like:0
  }
  globalData.dataMesAndLike.push(newPost)
  rerender(globalData)
}