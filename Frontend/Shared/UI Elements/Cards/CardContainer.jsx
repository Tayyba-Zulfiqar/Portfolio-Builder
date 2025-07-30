import "./CardContainer.css";
import Cards from "./Cards";
export default function CardHeader() {
  return (
    <>
      <div className="container">
        <div className="head">
          <h1 className="title">Resume Templates </h1>
          <p className="subtitle">
            Discover stunning resume designs that make you stand out 🌸
          </p>
        </div>

        <div className="cards-grid">
          <Cards />
        </div>
      </div>
    </>
  );
}
