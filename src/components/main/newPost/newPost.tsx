import { Field, reduxForm, reset } from "redux-form";
import { StateType } from "../../redusers/redux-store";
import s from "./newPost.module.css";
import { Post } from "./post/post";
import { FormCustomInput } from "../../UI/formInputCustom";

const required = (value: string) => (value ? undefined : "Required");
const maxLength = (max: number) => (value: string) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

type NewPostType = {
  store: StateType;
  addPost: (text: string) => void;
};

export function NewPost(props: NewPostType) {
  const arrdataMesAndLike = props.store.dataPost.dataMesAndLike.map((el,index) => (
    <Post key={index} message={el.mes} like={el.like} />
  ));


  const addPost = (values: any) => {;
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
          component={FormCustomInput}
          type="textarea"
          placeholder="Type your post"
          className={`${s.field} ${s["s-field"]}`}
          validate={[required, maxLength15]}
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
const PostForm = reduxForm({
  form: "PostForm", destroyOnUnmount: false,
  onSubmitSuccess: (result, dispatch) => dispatch(reset('PostForm') )})(PostReduxForm);