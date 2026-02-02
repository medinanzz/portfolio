import { useTranslation } from "react-i18next"
import { Divprojectsbtn, SectionAllStyle } from "./styled";
export function Section1() {
    const {t} = useTranslation();
     const projectsSection = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({behavior:  "smooth"});
    }
  };
    return(
        <>
            <SectionAllStyle id="home">
                <h1 className="t">
                    <span className="t-span">{t('titleSection1')}</span>
                </h1>
                <Divprojectsbtn>
                    <button onClick={() => {projectsSection();}} className="a a-projects">{t('seeProjects')}</button>
                    <span className="shadow shadowBottom shadowBtn"></span>
                </Divprojectsbtn>
            </SectionAllStyle>
        </>
    )
}