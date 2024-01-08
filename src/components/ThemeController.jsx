import { useState } from "react";

function ThemeController({ themes }) {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "default",
  );
  function themeChanger(theme) {
    const root = document.documentElement;
    const attribute = "data-theme";
    const element = "theme";
    root.setAttribute(attribute, theme);
    localStorage.setItem(element, root.dataset[element]);
    setCurrentTheme(() => theme);
  }
  return (
    <ul className="grid grid-cols-4 gap-4">
      {themes
        ? themes.map((theme, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => themeChanger(theme)}
                  className={`btn w-full ${
                    currentTheme === theme && "btn-neutral"
                  }`}
                >
                  {theme}
                </button>
              </li>
            );
          })
        : "Loading..."}
    </ul>
  );
}

export default ThemeController;
