export const GET = ((ctx) => {
  console.log(`GET (${ ctx.params.id })`)

  ctx.characterPromise = fetch( new URL(`/api/characters/${ctx.params.id}`,ctx.url.origin) )
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      if (data.length === 0) {
        throw new Error("Character not found");
      }
      return data;
    });

}) satisfies MarkoRun.Handler;
