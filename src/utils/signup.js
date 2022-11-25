export default async function signup(username, password, email) {
  const res = await fetch("http://localhost:5001/reg/sign-up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  });

  const resJson = await res.json();
  if (resJson.loggedIn) {
    return true;
  } else {
    throw new Error("SignUp failed");
  }
}
