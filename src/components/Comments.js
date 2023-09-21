import { useState } from "react";
import CommentItem from "./CommentItem";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../actions/posts-slice";

export default function Comments() {
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const id = useSelector((state) => state.posts.activeItem);
  const comments = useSelector((state) => state.posts.comments);
console.log(id);
  const handleSubmit = function (e) {
    e.preventDefault();

    dispatch(
      postsActions.addComment({
        id: id,
        color: color,
        text: text,
      }),
    );

    dispatch(postsActions.showActiveComments());
    setText("");
    setColor("#000000");
  };

  return (
    <div className="commentsContainer">
      <h2 className="commTitle">Comments for #{id}</h2>

      <form onSubmit={handleSubmit} className="commentForm">
        <input
          type="color"
          className="colorInput"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
        <input
          type="text"
          className="commInput"
          required={true}
          value={text}
          placeholder="Comment it!"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="comment-btn">
          + Add Comment
        </button>
      </form>

      <ul className="commentList">
        {comments?.map((item, index) => (
          <CommentItem text={item.text} key={index} color={item.color} />
        ))}
      </ul>
    </div>
  );
}
