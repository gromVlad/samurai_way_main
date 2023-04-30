import s from "./newPost.module.css";
import { Post } from "./post/post";
import { dataMesAndLikeType } from "../../../App";
import { Action, addPostsActCreator, addTextsActCreator } from "../../../data";
import { ChangeEvent } from "react";

type NewPostType = {
  dataMesAndLike: Array<dataMesAndLikeType>;
  dispatch: (action: Action) => void;
  textPost: string;
};

export function NewPost(props: NewPostType) {
  const arrdataMesAndLike = props.dataMesAndLike.map((el) => (
    <Post message={el.mes} like={el.like} />
  ));

  const onChangetext = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(addTextsActCreator(e.currentTarget.value));
  };

  const addPost = () => {
    props.dispatch(addPostsActCreator());
  };

  return (
    <div className={s.block}>
      <textarea value={props.textPost} onChange={onChangetext}></textarea>
      <div>
        <button className={s.button} onClick={addPost}>
          Click
        </button>
      </div>
      {arrdataMesAndLike}
    </div>
  );
}
