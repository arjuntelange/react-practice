import { students } from "./data";

export async function studentAction({ request }) {
  const formData = await request.formData();

  const name = formData.get("name");

  if (!name.trim()) {
    return {
      success: false,
      message: "Please enter a name",
    };
  }
  
  await new Promise((resolve) => setTimeout(resolve, 1000));

  students.push(name);

  return {
    success: true,
    message: "Student added successfully!",
  };
}
