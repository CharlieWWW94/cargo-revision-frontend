export default async function getSets(username) {
  const userRes = await fetch("http://localhost:5001/reg/getinfo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
    }),
  });
  const resJson = await userRes.json();
  console.log(resJson);
  return resJson;
}
