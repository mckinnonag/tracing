import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const response = await fetch("http://backend:5000");
  if (!response.ok) {
    throw new Response("Failed to fetch data", { status: response.status });
  }
  const data = await response.json();
  return {data};
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData
  return <p>{data.message}</p>
}
