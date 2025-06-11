export const GET = (async (ctx) => {
 
  const {id} = ctx.params;

  const response = await fetch(`https://api.sampleapis.com/avatar/characters/${id}`);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });

}) satisfies MarkoRun.Handler;
