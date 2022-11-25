export default async function login(username, password, email) {
  const res = await fetch("http://localhost:5001/reg/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
    }),
  });

  const resJson = await res.json();
  if (resJson.loggedIn) {
    return true;
  } else {
    throw new Error("login failed");
  }
}
