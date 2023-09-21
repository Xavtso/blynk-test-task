export default function CommentItem({ color, text }) {
  return (
    <div className="comment-container">
      <div className="colorZone" style={{ backgroundColor: `${color}` }}></div>
      <p className="commentText">{text}</p>
    </div>
  );
}
