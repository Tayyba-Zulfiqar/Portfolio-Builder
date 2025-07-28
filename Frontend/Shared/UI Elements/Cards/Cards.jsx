import "./Cards.css";
import PurpleCard from "./PurpleCard";
import NatureCard from "./NatureCard";
import SunnyCard from "./SunnyCard";

export default function Cards() {
  return (
    <div className="cards-grid">
      <PurpleCard />
      <NatureCard />
      <SunnyCard />
    </div>
  );
}
