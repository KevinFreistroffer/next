export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    headers: {
      "Content-Type": "application/json",
      //   "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}

export async function GETWithoutCache(request: Request) {
  const url = new URL(request.url);
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      //   "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
