import React, { useActionState } from "react";

function UseStateActionHook() {
  const [state, formAction] = useActionState(submitFeedback, { message: "" });

  async function submitFeedback(previousState, formData) {
    const name = formData.get("name");
    const feedback = formData.get("feedback");

    if (!feedback.trim()) {
      return { message: "feedback cannot be empty!" };
    }

    return {
      message: `Thank you ${name} for your feedback!`,
    };
  }

  return (
    <>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter Name" />

        <textarea name="feedback" placeholder="Enter feedback" />

        <button>Submit</button>
      </form>

      <p>{state.message}</p>
    </>
  );
}

export default UseStateActionHook;
