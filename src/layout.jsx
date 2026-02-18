import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HeaderPage } from "./components/header";
import { NavBarPage } from "./components/navBar";
import { FooterPage } from "./components/footer";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { GlboalStyle } from "./style/resetStyle";

export function LayoutApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlboalStyle />
      <HeaderPage setTheme={setTheme} theme={theme} onOpenMenu={() => setMenuOpen(true)} />
      <NavBarPage open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Outlet />
      <FooterPage />
    </ThemeProvider>
  );
}