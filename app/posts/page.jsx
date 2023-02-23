import Link from "next/link";
import { Suspense } from "react";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
};

const PostsPage = async ({ params }) => {
  const posts = await fetchPosts();

  return (
    <section>
      <Suspense fallback={<p>CARGANDO...</p>}>
        {posts.map((post) => (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
            <br />
          </article>
        ))}
      </Suspense>
    </section>
  );
};

export default PostsPage;
