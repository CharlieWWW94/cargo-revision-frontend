import turing from "../images/turing.jpg";
export default function Testimonial(props) {
  return (
    <>
      <h3 className="title has-text-black">Testimonials</h3>
      <figure class="image is-128x128 m-6">
        <img class="is-rounded" src={props.image}></img>
      </figure>
      <p className="subtitle is-4 has-text-black mt-6">
        <span className="purple">"</span>
        {props.statement}
        <span className="purple">"</span>
      </p>
      <p className="is-3">
        <strong className="purple">{props.name}</strong>
      </p>
    </>
  );
}
