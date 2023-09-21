import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../actions/posts-slice";
import { useState } from "react";
import PostItem from "./PostItem";

export default function Posts() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();

    dispatch(
      postsActions.addPost({
        id: Math.round(Math.random() * 9999),
        text: text,
      }),
    );

    setText("");
  };

  const posts = useSelector((state) => state.posts.itemsList);

  return (
    <div className="items-container">
      <form className="textForm" onSubmit={handleSubmit}>
        <input
          className="nameInput"
          type="text"
          onChange={(e) => setText(e.target.value)}
          required={true}
          value={text}
          placeholder="e.g. Find Work"
        />
        <button className="form-btn" type=" submit">
          + Add New
        </button>
      </form>

      <ul className="posts-list">
        {posts?.map((item) => (
          <PostItem
            key={item.id}
            id={item.id}
            text={item.text}
            comments={item.comments?.length}
          />
        ))}
      </ul>
    </div>
  );
}
