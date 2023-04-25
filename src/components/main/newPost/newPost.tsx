import s from "./newPost.module.css";
import { Post } from "./post/post";
import { dataMesAndLikeType } from "../../../App";

type NewPostType = {
  dataMesAndLike: Array<dataMesAndLikeType>;
  funAddPost: () => void;
  addTextPost:(a: string) => void;
  textPost:string
};


export function NewPost(props: NewPostType) {

  const arrdataMesAndLike = props.dataMesAndLike.map((el) => (
    <Post message={el.mes} like={el.like} />
  ));
  
  return (
    <div className={s.block}>
      <textarea value={props.textPost} onChange={(e) => props.addTextPost(e.currentTarget.value)}></textarea>
      <div>
        <button onClick={() => props.funAddPost()}>Click</button>
      </div>
      {arrdataMesAndLike}
    </div>
  );
}
