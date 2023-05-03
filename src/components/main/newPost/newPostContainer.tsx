import { addPostsActCreator, addTextsActCreator } from "../../redusers/reduсer_post";
import { StateType } from "../../..";
import { NewPost } from "./newPost";

type NewPostType = {
  store: StateType;
  dispatch: (action: any) => void;
};

export function NewPostContainer (props: NewPostType) {

  const onChangetext = (text:string) => {
    props.dispatch(addTextsActCreator(text));
  };

  const addPost = () => {
    props.dispatch(addPostsActCreator());
  };

  return (
    <div >
      <NewPost
        store={props.store}
        onChangetext={onChangetext}
        addPost={addPost}
      />
    </div>
  );
}
