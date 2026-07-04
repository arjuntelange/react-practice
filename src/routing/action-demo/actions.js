import { students } from "./data";

export async function studentAction({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");

  if (!name.trim()) return null;

  students.push(name);

  return null;
}
