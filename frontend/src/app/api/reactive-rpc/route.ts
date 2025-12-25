export async function POST(request: Request) {
  const body = await request.text();

  const upstream = await fetch("https://lasna-rpc.rnk.dev/", {
    method: "POST",
    headers: {
      "content-type": request.headers.get("content-type") ?? "application/json",
    },
    body,
  });

  return new Response(await upstream.text(), {
    status: upstream.status,
    headers: {
      "content-type": upstream.headers.get("content-type") ?? "application/json",
    },
  });
}
