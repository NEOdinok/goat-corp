import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  console.log("Test Netlify Log");

  return new Response(JSON.stringify({ message: "Hello, world!" }), {
    headers: { "Content-Type": "application/json" },
  });
};
