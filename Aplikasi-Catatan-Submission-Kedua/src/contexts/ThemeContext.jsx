import React from "react";

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem("theme") || "dark",
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
