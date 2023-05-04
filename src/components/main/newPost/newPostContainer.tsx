import { addPostsActCreator, addTextsActCreator } from "../../redusers/reduсer_post";
import { StateType } from "../../..";
import { NewPost } from "./newPost";
import { connect } from "react-redux";



const mapStateToProps = (state:StateType) => {
  return {
    store: state,
  };
};

const mapDispatchToProps = (dispatch:(action:any) => void) => {
  return {
    onChangetext: (text: string) => {
      dispatch(addTextsActCreator(text));
    },
    addPost:() => {
      dispatch(addPostsActCreator());
    }
  };
};

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);
