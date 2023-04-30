const ADD_POST = "ADD_POST";
const ADD_TEXT_POST = "ADD_TEXT_POST";
const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_TEXT_MESSAGE = "ADD_TEXT_MESSAGE";

type Name = {
  name: string;
  id: number;
};

type Message = {
  mes: string;
};

type DataMesAndLike = {
  mes: string;
  like: number;
};

export type AllGlobalType = {
  names: Name[];
  messages: Message[];
  dataMesAndLike: DataMesAndLike[];
  sidebar: string[];
  textPost: string;
  textMessage: string;
};

type Store = {
  _globalData: AllGlobalType;
  getState: () => AllGlobalType;
  newAddPost: () => void;
  addTextPost: (text: string) => void;
  _rerenderObserver: () => void;
  funRerender: (observer: () => void) => void;
  dispatch: (action: Action) => void;
  newAddMessage: () => void;
  addTextMessage: (text: string) => void;
};

type AddPostAction = {
  type: "ADD_POST";
};


type AddTextPostAction = {
  type: "ADD_TEXT_POST";
  newText: string;
};

type AddMESAction = {
  type: "ADD_MESSAGE";
};

type AddTextMESAction = {
  type: "ADD_TEXT_MESSAGE";
  newMes: string;
};


export type Action = AddPostAction | AddTextPostAction | AddMESAction | AddTextMESAction

//свойство не типизируем
export const store: Store = {
  _globalData: {
    names: [
      { name: "Vlad", id: 1 },
      { name: "Alex", id: 2 },
      { name: "Andor", id: 3 },
      { name: "Carl", id: 4 },
      { name: "Jack", id: 5 },
    ],
    messages: [
      { mes: "Hello my name is Vlad" },
      { mes: "What.." },
      { mes: "Hello" },
      { mes: "Hello my name is Vlad" },
      { mes: "my names.." },
    ],
    textMessage: "hello",
    dataMesAndLike: [
      {
        mes: "hello world",
        like: 23,
      },
      {
        mes: "What your name?",
        like: 15,
      },
    ],
    sidebar: ["alex", "kate", "andor", "han colo"],
    textPost: "hello",
  },

  getState() {
    return this._globalData;
  },

  newAddPost() {
    const newPost = {
      mes: this._globalData.textPost,
      like: 0,
    };
    this._globalData.dataMesAndLike.push(newPost);
    this._globalData.textPost = "";
    this._rerenderObserver();
  },

  addTextPost(text: string) {
    this._globalData.textPost = text;
    this._rerenderObserver();
  },

  _rerenderObserver() {
    console.log("hello");
  },

  funRerender(observer) {
    this._rerenderObserver = observer;
  },

  newAddMessage() {
    const newPost = {
      mes: this._globalData.textMessage,
    };
    this._globalData.messages.push(newPost);
    this._globalData.textMessage = "";
    this._rerenderObserver();
  },

  addTextMessage(text: string) {
    this._globalData.textMessage = text;
    this._rerenderObserver();
  },

  dispatch(action: Action) {
    if (action.type === ADD_POST) {
      this.newAddPost();
    } else if (action.type === ADD_TEXT_POST) {
      this.addTextPost(action.newText);
    } else if (action.type === ADD_MESSAGE) {
      this.newAddMessage()
    } else if (action.type === ADD_TEXT_MESSAGE){
      this.addTextMessage(action.newMes)
    }
  },
};

export const addPostsActCreator = (): AddPostAction => ({ type: ADD_POST });

export const addMesActCreator = (): AddMESAction => ({ type: ADD_MESSAGE });

export const addTextsActCreator = (text: string): AddTextPostAction => {
  return {
    type: ADD_TEXT_POST,
    newText: text,
  };
};

export const addTextMesActCreator = (text: string): AddTextMESAction => {
  return {
    type: ADD_TEXT_MESSAGE,
    newMes: text,
  };
};
