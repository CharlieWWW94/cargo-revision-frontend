import "./hero.css";
import { mdiBrain, mdiTruckFast } from "@mdi/js";
import { Icon } from "@mdi/react";
export default function Hero(props) {
  return (
    <section className="column is-full big-hero is-flex is-flex-direction-column is-justify-content-center">
      <h1 className="title is-1 has-text-light">CARGO</h1>
      <p className="title has-text-light">
        Direct shipping
        <span className="brain-span has-background-white p-1 ml-3">
          to your brain.
        </span>
      </p>
      <div className="mt-2">
        <Icon path={mdiTruckFast} size={2} color={"white"} className="mr-3" />
        <Icon
          path={mdiBrain}
          size={2}
          color={"rgb(192, 76, 250)"}
          className="ml-3"
        />
      </div>
    </section>
  );
}
