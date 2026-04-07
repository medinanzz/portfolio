import { useTranslation } from "react-i18next";
import { SectionAllStyle } from "../section1/styled";
import { DivProjects } from "./styled";

export function Section3() {
  const { t } = useTranslation();
  const projects = [
    { name: t('academy'), link: "https://medinanzz.github.io/templo_do_reverendo/" },
    { name: t('origami'), link: "https://medinanzz.github.io/origames/" },
    { name: t('recipes'), link: "https://medinanzz.github.io/Receitas/" },
    { name: "Free fire", link: "https://medinanzz.github.io/free-fire/" },
    { name: "FNAF", link: "https://medinanzz.github.io/FNAFSite/" },
  ];
  return (
    <>
      <SectionAllStyle id="projects">
        <h1>{t("projects")}</h1>
        <DivProjects>
          <ul className='ul'>
            {projects.map((item, index) => (
            <li key={index}>
              <a
              target="_blank"
                href={item.link}
                className={`a a-projects`}
              >
                {item.name}
              </a>
            </li>
          ))}
          </ul>
        </DivProjects>
      </SectionAllStyle>
    </>
  );
}
