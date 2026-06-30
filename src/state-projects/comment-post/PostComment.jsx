import React, { useOptimistic, useState } from "react";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";

function PostComment() {
  const [comments, setComments] = useState([]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newComment) => [...currentComments, newComment],
  );

  function PostButton() {
    const { pending } = useFormStatus();

    return <button disabled={pending}>{pending ? "Post..." : "Post"}</button>;
  }

  async function postComment(formData) {
    const comment = formData.get("comment");

    if (!comment) return;

    addOptimisticComment(comment);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setComments((prev) => [...prev, comment]);
  }

  return (
    <>
      <form action={postComment}>
        <input type="text" placeholder="Enter Comment" name="comment" />

        <PostButton />
      </form>

      <ul>
        {optimisticComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </>
  );
}

export default PostComment;
