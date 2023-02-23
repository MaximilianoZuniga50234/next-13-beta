const fetchPostComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());
};

const CommentsPage = async ({ params }) => {
  const { id } = params;
  const comments = await fetchPostComments(id);

  return (
    <ul
      style={{
        fontSize: "10px",
        marginTop: "20px",
        background: "#333",
        borderRadius: "4px",
        padding: "4px",
      }}
    >
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <h3>{comment.email}</h3>
          <p>{comment.body}</p>
          <br />
        </li>
      ))}
    </ul>
  );
};

export default CommentsPage;
