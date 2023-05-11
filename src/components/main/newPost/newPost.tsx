import { Field, reduxForm } from "redux-form";
import { StateType } from "../../redusers/redux-store";
import s from "./newPost.module.css";
import { Post } from "./post/post";

type NewPostType = {
  store: StateType;
  addPost: (text: string) => void;
};

export function NewPost(props: NewPostType) {
  const arrdataMesAndLike = props.store.dataPost.dataMesAndLike.map((el) => (
    <Post message={el.mes} like={el.like} />
  ));


  const addPost = (values: any) => {
    props.addPost(values.textMessagePost);
  };

  return (
    <div className={s.block}>
      <PostForm onSubmit={addPost} />
      {arrdataMesAndLike}
    </div>
  );
}

const PostReduxForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div>
        <Field
          name="textMessagePost"
          component="textarea"
          type="text"
          placeholder="Type your post"
          className={`${s.field} ${s["s-field"]}`}
        />
      </div>
      <div>
        <button className={s.button} type="submit">
          Add message
        </button>
      </div>
    </form>
  );
};
const PostForm = reduxForm({ form: "PostForm" })(PostReduxForm);