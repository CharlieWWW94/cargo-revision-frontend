export default async function login(username, password, loginState) {
  const res = await fetch("http://localhost:5001/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (res.data.loggedIn) {
    loginState(true);
  } else {
    loginState(false);
    throw new Error("Login failed");
  }
}
