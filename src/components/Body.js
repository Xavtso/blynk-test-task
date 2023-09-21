import Comments from "./Comments";
import Posts from "./Posts";

export default function Body() {
  return (
    <div className="main">
      <Posts />
      <Comments />
    </div>
  );
}
