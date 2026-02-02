import { useTranslation } from "react-i18next";
import { SectionAllStyle } from "../section1/styled";
import { DivProjects } from "./styled";
import { useState } from "react";

export function Section3() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
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
          <ul className={hovered !== null ? "hover-btn" : ""}>
            {projects.map((item, index) => (
            <li key={index}>
              <a
              target="_blank"
                href={item.link}
                className={`a a-projects ${hovered === index ? "link-hover" : ""}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
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
