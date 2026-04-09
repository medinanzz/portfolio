import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderPage } from "./components/header";
import { NavBarPage } from "./components/navBar";
import { FooterPage } from "./components/footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { GlboalStyle } from "./style/resetStyle";
import { ButtonTheme } from "./containers/buttonTheme";

export function LayoutApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Função para alternar (caso queira passar para o ButtonTheme)
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlboalStyle />
      <HeaderPage onOpenMenu={() => setMenuOpen(true)} />
      <NavBarPage open={menuOpen} onClose={() => setMenuOpen(false)} />
      <ButtonTheme
        setTheme={setTheme}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Outlet />
      <FooterPage />
    </ThemeProvider>
  );
}
