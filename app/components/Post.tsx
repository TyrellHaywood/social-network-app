export default function Post({ id, title, content, authorName }) {
  return (
    <div className="border-solid border white p-6">
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
