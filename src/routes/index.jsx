import { Route, Routes } from "react-router-dom";
import { LayoutApp } from "../layout";
import { HomePage } from "../home";
import { RegisterFakePage } from "../pages/register";
import { PerfilPage } from "../pages/perfil";

export function RouteApp() {
    return(
        <>
            <Routes>
                <Route path="/" element={<LayoutApp />}>
                    <Route index element={<HomePage />} />
                    <Route path="registerFake" element={<RegisterFakePage />}/>
                    {/* <Route path="perfilUser" element={<PerfilPage />}/> */}
                </Route>
            </Routes>
        </>
    )
}