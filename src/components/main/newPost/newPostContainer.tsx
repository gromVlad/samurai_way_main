import { StateType } from "../../redusers/redux-store";
import { addPostsActCreator} from "../../redusers/reduсer_post";
import { NewPost } from "./newPost";
import { connect } from "react-redux";



const mapStateToProps = (state:StateType) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch:(action:any) => void) => {
  return {
    addPost: (text: string) => {
      dispatch(addPostsActCreator(text));
    },
  };
};

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
