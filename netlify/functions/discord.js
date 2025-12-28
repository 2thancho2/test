exports.handler = async (event) => {
  const url = process.env.DISCORD_BOT_URL;

  const { message } = JSON.parse(event.body);

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: message })
  });

  return {
    statusCode: 200,
    body: "ok"
  };
};
