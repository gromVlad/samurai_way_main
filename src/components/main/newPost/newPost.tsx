import { StateType } from "../../redusers/redux-store";
import s from "./newPost.module.css";
import { Post } from "./post/post";
import { ChangeEvent } from "react";

type NewPostType = {
  store: StateType;
  onChangetext: (text: string) => void;
  addPost:() => void
};

export function NewPost(props: NewPostType) {
  const arrdataMesAndLike = props.store.dataPost.dataMesAndLike.map((el) => (
    <Post message={el.mes} like={el.like} />
  ));

  const onChangetextPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChangetext(e.currentTarget.value);
  };

  const addPostInPost = () => {
    props.addPost();
  };

  return (
    <div className={s.block}>
      <textarea
        value={props.store.dataPost.textPost}
        onChange={onChangetextPost}
      ></textarea>
      <div>
        <button className={s.button} onClick={addPostInPost}>
          Click
        </button>
      </div>
      {arrdataMesAndLike}
    </div>
  );
}
