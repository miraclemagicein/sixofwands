export const runtime = "edge";

const TARGET = "https://sixofwands.pages.dev"; 

export default async function handler(req) {
  const url = new URL(req.url);

  const targetUrl = TARGET + url.pathname + url.search;

  return fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
    redirect: "manual"
  });
}
