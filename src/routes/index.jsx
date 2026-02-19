import { Route, Routes } from "react-router-dom";
import { LayoutApp } from "../layout";
import { HomePage } from "../home";
import { RegisterFakePage } from "../pages/register";
import { useEffect } from "react";
import { ExtraPage } from "../pages/extras";

export function RouteApp() {
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutApp />}>
          <Route index element={<HomePage />} />
          <Route path="registerFake" element={<RegisterFakePage />} />
          <Route path="extras" element={<ExtraPage />} />
        </Route>
      </Routes>
    </>
  );
}
