import { ActionMessages, reduserMessages } from "./components/redusers/reduser.messages";
import { ActionPost, reduserPost } from "./components/redusers/reduser_post";

type Name = {
  name: string;
  id: number;
};

export type Message = {
  mes: string;
};

export type DataMesAndLike = {
  mes: string;
  like: number;
};

type AllGlobalType = {
  names: Name[];
  messages?: Message[]; 
  dataPost: {
    textPost: string;
    dataMesAndLike: DataMesAndLike[];
  };
  sidebar: string[];
  mesOBJ: {
    textMessage: string;
    messages: Message[];
  };
};

type Store = {
  _globalData: AllGlobalType;
  getState: () => AllGlobalType;
  _rerenderObserver: () => void;
  funRerender: (observer: () => void) => void;
  dispatch: (action: Action) => void;
};


export type Action = ActionPost | ActionMessages;
  
export const store: Store = {
  _globalData: {
    names: [
      { name: "Vlad", id: 1 },
      { name: "Alex", id: 2 },
      { name: "Andor", id: 3 },
      { name: "Carl", id: 4 },
      { name: "Jack", id: 5 },
    ],
    dataPost: {
      textPost: "hello",
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
    },
    sidebar: ["alex", "kate", "andor", "han colo"],
    mesOBJ: {
      textMessage: "hello",
      messages: [
        { mes: "Hello my name is Vlad" },
        { mes: "What.." },
        { mes: "Hello" },
        { mes: "Hello my name is Vlad" },
        { mes: "my names.." },
      ],
    },
  },

  getState() {
    return this._globalData;
  },

  _rerenderObserver() {
    console.log("hello");
  },

  funRerender(observer) {
    this._rerenderObserver = observer;
  },

  dispatch(action: Action) {
    //this._globalData.dataPost = reduserPost(this._globalData.dataPost, action);
    //this._globalData.mesOBJ = reduserMessages(this._globalData.mesOBJ, action);

    if (action.type === "ADD_POST" || action.type === "ADD_TEXT_POST") {
      this._globalData.dataPost = reduserPost(this._globalData.dataPost,action);
    } else if (action.type === "ADD_MESSAGE" ||action.type === "ADD_TEXT_MESSAGE") {
      this._globalData.mesOBJ = reduserMessages(this._globalData.mesOBJ,action);
    }

    this._rerenderObserver();
  },
};
