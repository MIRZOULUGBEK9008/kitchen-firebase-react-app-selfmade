import ThemeController from "../components/ThemeController";

function ChangeTheme() {
  const themes = [
    "default",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <div className="pt-5">
      <h2 className="mb-4 text-2xl font-semibold">Change theme</h2>
      <ThemeController themes={themes} />
    </div>
  );
}

export default ChangeTheme;
