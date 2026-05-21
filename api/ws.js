export const runtime = "edge";

const TARGET = "https://sixofwands.pages.dev"; 

export default async function handler(req) {
  const url = new URL(req.url);

  const target = TARGET + url.pathname + url.search;

  const newRequest = new Request(target, {
    method: req.method,
    headers: req.headers,
    body: req.body
  });

  return fetch(newRequest);
}
