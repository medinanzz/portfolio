import { Section1 } from "../../pages/section1";
import { Section2 } from "../../pages/section2_about";
import { Section3 } from "../../pages/section3_projects";

export function MainPage() {
    return(
        <main>
            <Section1 />
            <Section2 />
            <Section3 />
        </main>
    )
}