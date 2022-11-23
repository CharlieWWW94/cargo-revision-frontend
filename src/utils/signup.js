export default async function signup(username, password, email, loginState) {
  const res = await fetch("http://localhost:5001/sign-up", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  });

  if (res.data.accountCreated) {
    loginState(true);
  } else {
    loginState(false);
    throw new Error("SignUp failed");
  }
}
