export default function RegForm(props) {
  function submitHandler(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const email = event.target.email.value;

    //Api call with form data goes here
    props.login(true, username);
  }

  return (
    <card className="card column is-4 is-offset-4 mt-6 is-flex is-flex-direction-column is-justify-content-center has-background-dark">
      <header className="is-flex is-justify-content-center">
        <p className="title is-5 mt-2 has-text-light">{props.type}</p>
      </header>
      <div className="card-content is-flex is-flex-direction-column is-justify-content-center">
        <form onSubmit={(event) => submitHandler(event)}>
          <input
            type="text"
            name="username"
            className="input"
            placeholder="Username"
          ></input>
          <input
            type="text"
            name="email"
            className="input mt-5"
            placeholder="Email"
          ></input>
          <input
            type="password"
            name="password"
            className="input mt-5"
            placeholder="Password"
          ></input>
          <input
            type="submit"
            className="button is-fullwidth mt-5 is-warning"
            value="Submit"
          ></input>
        </form>
      </div>
    </card>
  );
}
