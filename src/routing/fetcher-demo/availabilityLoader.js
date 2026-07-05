import { usernames } from "./usernames";

export function availabilityLoader({ request }) {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  const available = !usernames.includes(username?.toLowerCase());

  return { available };
}
