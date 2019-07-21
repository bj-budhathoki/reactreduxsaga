import { useState, useEffect } from "react";

export default () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    console.log("compoenet mount");
    const localThme = window.localStorage.getItem("theme");
    if (localThme) {
      setTheme(localThme);
    }
    return () => {
      console.log("compoennet unmount");
    };
  }, []);

  return [theme, toggleTheme];
};
