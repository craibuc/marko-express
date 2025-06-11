export const GET = (async (ctx) => {
  console.log("GET /api/characters/eye_color");
  
  const data = await fetch('https://api.sampleapis.com/avatar/characters')
    .then((resp) => resp.json())
    .then((data) => {
        const set = new Set(
        data
            .map(item => item.physicalDescription?.eyeColor)
            .filter(Boolean)
        );

        return Array.from(set).sort();
    });

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });

}) satisfies MarkoRun.Handler;
