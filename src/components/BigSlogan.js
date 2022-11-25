import "./bigslogan.css";

export default function BigSlogan(props) {
  return (
    <section className="column is-full is-flex is-flex-direction-column is-align-items-start">
      <div>
        <h2 className="big-slogan mt-2 ">Work Smarter</h2>
      </div>
      <br></br>
      <div className="purp">
        <h2 className="big-slogan has-text-light">Not Harder</h2>
      </div>
      <div className="test">
        <h2 className="big-slogan mr-4">Not Ever.</h2>
      </div>
    </section>
  );
}
