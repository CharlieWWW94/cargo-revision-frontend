import RegForm from "../components/RegForm";

export default function LoginPage(props) {
  return (
    <>
      <h1>LogInPage</h1>
      <RegForm type={"Log in"} login={props.login} />
    </>
  );
}
