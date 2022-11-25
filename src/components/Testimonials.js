import hamilton from "../images/Hamilton.jpg";
import turing from "../images/turing.jpg";
import Testimonial from "./Testimonial";
import { mdiArrowLeftBold, mdiArrowRightBold } from "@mdi/js";
import { Icon } from "@mdi/react";
import { useState } from "react";

const people = [
  {
    image: turing,
    statement:
      "Without Cargo for revision, the enigma code would still be an enigma.",
    name: "Alan Turing",
  },
  {
    image: hamilton,
    statement: "With the help of Cargo, I literally sent someone to the moon.",
    name: "Margaret Hamilton",
  },
  {
    image: turing,
    statement:
      "Without Cargo for revision, the enigma code would still be an enigma.",
    name: "Alan Turing",
  },
];

export default function Testimonials(props) {
  const [currentTest, setCurrentTest] = useState(0);

  function clickHandlerRight(event) {
    if (currentTest < 2) {
      setCurrentTest(currentTest + 1);
    }
  }

  function clickHandlerLeft(event) {
    if (currentTest > 0) {
      setCurrentTest(currentTest - 1);
    }
  }

  return (
    <section className="big-width is-flex is-flex-direction-column is-justify-content-center is-align-items-center spacer">
      <Testimonial
        name={people[currentTest].name}
        statement={people[currentTest].statement}
        image={people[currentTest].image}
      />
      <div className="mt-6">
        <button className="button is-light">
          <Icon
            path={mdiArrowLeftBold}
            size={1}
            onClick={(event) => clickHandlerLeft(event)}
          />
        </button>
        <button
          className="button is-light"
          onClick={(event) => clickHandlerRight(event)}
        >
          <Icon path={mdiArrowRightBold} size={1} />
        </button>
      </div>
    </section>
  );
}
