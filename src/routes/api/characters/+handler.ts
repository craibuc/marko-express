export const GET = (async (ctx) => {
  console.log("GET /api/characters");
  
  const resp = await fetch('https://api.sampleapis.com/avatar/characters');
  const data = await resp.json();
  
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });

}) satisfies MarkoRun.Handler;
