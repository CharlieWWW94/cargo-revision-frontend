import RegForm from "../components/RegForm";

export default function SignUpPage(props) {
  return (
    <>
      <h1 className="signup">SignUpPage</h1>
      <RegForm type={"Sign up"} login={props.login} />
    </>
  );
}

