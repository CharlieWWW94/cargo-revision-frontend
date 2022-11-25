import "./productinfo.css";

export default function ProductInfo(props) {
  return (
    <section className="has-background-dark big-width columns spacer is-6">
      <div className="column is-flex is-flex-direction-column is-align-items-start border-line m-4">
        <h3 className="has-text-light info title">
          The Cargo FlashCard system always delivers the goods
          <span className="purple">.</span>
        </h3>
      </div>
      <div className=" column has-background-white is-flex is-flex-direction-column is-align-items-start border-line m-4">
        <h3 className="has-text-black info title">
          Backed by Educational Research
          <span className="purple">.</span>
        </h3>
      </div>
      <div className="column is-flex is-flex-direction-column is-align-items-start border-line m-4">
        <h3 className="has-text-light info title">
          Proven to be effective in exam preparation
          <span className="purple">.</span>
        </h3>
      </div>
    </section>
  );
}
