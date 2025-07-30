import "./TemplateCard";
import TemplateCard from "./TemplateCard";

export default function Cards() {
  const templates = [
    {
      id: "1",
      themeClass: "pink-theme",
      emojis: ["🦄", "💜", "🌈"],
      avatarClass: "",
      lineClass: "",
      title: "Purple CV 🐾",
      description: "Design Inspired by Purple Aesthetics 💟",
      btnClass: "pink-btn",
      btnIcon: "🐻‍❄️",
      favIcon: "❤️",
    },
    {
      id: "2",
      themeClass: "green-theme",
      emojis: ["🌼", "💚", "🌳"],
      avatarClass: "green-avatar",
      lineClass: "green-line",
      title: "Nature CV 🌿",
      description: "Fresh Design inspired by nature 🍃",
      btnClass: "green-btn",
      btnIcon: "🐼",
      favIcon: "💚",
    },
    {
      id: "3",
      themeClass: "orange-theme",
      emojis: ["🌻", "🧡", "🌞"],
      avatarClass: "orange-avatar",
      lineClass: "orange-line",
      title: "Sunny CV ☀️",
      description: "Warm & energetic design that radiates positivity 🍂",
      btnClass: "orange-btn",
      btnIcon: "🐻",
      favIcon: "🧡",
    },
  ];

  return (
    <div className="cards-grid">
      {templates.map((template) => (
        <TemplateCard key={template.id} {...template} />
      ))}
    </div>
  );
}
