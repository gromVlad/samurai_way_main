import { combineReducers,createStore } from "redux";
import { reduserPost } from "./reduсer_post";
import { reduserMessages } from "./reduсer.messages";
import { reduserName} from "./reduсer_name";
import { reduserSudabar } from "./reduсer_sibebar";

//add reduser in one Box
let reduserBox = combineReducers({
  dataPost: reduserPost,
  mesOBJ: reduserMessages,
  names: reduserName,
  sidebar: reduserSudabar,
});

//create store in redux
export let store = createStore(reduserBox);