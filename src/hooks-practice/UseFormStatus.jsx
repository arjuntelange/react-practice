import React from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

async function submitForm(previousState, formData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  const name = formData.get("name");

  return {
    message: `Form submitted successfully by ${name}!`,
  };
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
}

function UseFormStatus() {
  const [state, formAction] = useActionState(submitForm, {
    message: "",
  });

  return (
    <div>
      <h2>useFormStatus Demo</h2>

      <form action={formAction}>
        <input type="text" name="name" placeholder="Enter your name" />

        <SubmitButton />
      </form>

      <p>{state.message}</p>
    </div>
  );
}

export default UseFormStatus;
