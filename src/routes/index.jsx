import { Route, Routes } from "react-router-dom";
import { LayoutApp } from "../layout";
import { HomePage } from "../home";
import { Section2 } from "../pages/section2_about";

export function RouteApp() {
    return(
        <>
            <Routes>
                <Route path="/" element={<LayoutApp />}>
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </>
    )
}