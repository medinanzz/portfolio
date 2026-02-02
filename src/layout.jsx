import { useState } from "react";
import { Outlet } from "react-router-dom";
import { HeaderPage } from "./components/header";
import { NavBarPage } from "./components/navBar";
import { FooterPage } from "./components/footer";

export function LayoutApp() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPage onOpenMenu={() => setMenuOpen(true)} />
      <NavBarPage open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Outlet />
      <FooterPage />
    </>
  );
}