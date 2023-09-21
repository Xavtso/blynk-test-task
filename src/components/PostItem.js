import { useDispatch, useSelector } from "react-redux";
import  { postsActions } from "../actions/posts-slice";

export default function PostItem({ id, text, comments }) {
  const dispatch = useDispatch();
  const activeId = useSelector((state) => state.posts.activeItem);

  const deletePost = function () {
    dispatch(
      postsActions.deletePost({
        id: id,
      }),
    );
  };

  const handleActive = function () {
    dispatch(
      postsActions.makeActive({
        id: id,
      }),
    );
    dispatch(
      postsActions.showActiveComments({
        id: id,
      }),
    );
  };

  return (
    <div
      className={`post-item ${id === activeId ? "active" : null}`}
      key={id}
      onClick={handleActive}
    >
      <p className="post-text">{text}</p>
      <span className="commentsAmount">{comments}</span>
      <button onClick={deletePost} className="delete-btn">
        Delete
      </button>
    </div>
  );
}
