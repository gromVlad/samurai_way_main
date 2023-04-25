//use fun
let rerenderObserver = () => {}

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
  sidebar:['alex','kate',"andor","han colo"],
  textPost :'hello'
}

//create global function
export const newAddPost = () => {
  const newPost = {
    mes:globalData.textPost,
    like:0
  }
  globalData.dataMesAndLike.push(newPost)
  globalData.textPost =""
  rerenderObserver(globalData)
}

export const addTextPost = (text) => {
  globalData.textPost = text
  rerenderObserver(globalData)
}

//callback observer
export const funRerender = (observer) => {
  rerenderObserver = observer
}