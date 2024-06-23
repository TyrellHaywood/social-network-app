import DeletePostButton from "./DeletePostButton";

type Post = {
  id: string;
  title: string;
  content: string | null;
  authorName: string | null;
};

export default function Post({ id, title, content, authorName }: Post) {
  return (
    <div className="border-solid border-white p-6">
      <h3>{authorName}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
      <DeletePostButton postId={id} />
    </div>
  );
}
