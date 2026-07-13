import React from "react";
import { dictionary } from "../utils/dictionary";

const LocaleContext = React.createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = React.useState(
    () => localStorage.getItem("se_lang") || "id",
  );

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("se_lang", newLocale);
      return newLocale;
    });
  };

  const text = dictionary[locale];

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale, text }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => React.useContext(LocaleContext);
