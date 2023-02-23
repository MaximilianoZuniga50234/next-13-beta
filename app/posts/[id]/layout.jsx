import Link from "next/link";

const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
};

const PostPage = async ({ children, params }) => {
  const { id } = params;
  const post = await fetchPost(id);

  return (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <br />
      <Link href={`/posts/${id}/comments`}>Comments</Link>
      {children}
    </article>
  );
};

export default PostPage;
