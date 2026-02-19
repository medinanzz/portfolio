import { useTranslation } from "react-i18next";
import { ContainerExtras, Hr, SectionExtras, TechnologiesDiv } from "./styles";

export function ExtraPage() {
  const { t } = useTranslation();
  return (
    <>
      <SectionExtras>
        <TechnologiesDiv>
          <h1>{t("technologies")}</h1>
          <p>HTML | CSS | JavaScript | React | Styled-Components | Git</p>
        </TechnologiesDiv>


        <Hr />
        
        <ContainerExtras>
          <h2>{t("skills")}</h2>
          <ul>
            <li>{t("pSkills1")}</li>
            <li>{t("pSkills2")}</li>
            <li>{t("pSkills3")}</li>
            <li>{t("pSkills4")}</li>
            <li>{t("pSkills5")}</li>
          </ul>
        </ContainerExtras>

        <Hr />

        <ContainerExtras>
          <h2>{t("contribute")}</h2>
          <ul>
            <li>{t("pContribute1")}</li>
            <li>{t("pContribute2")}</li>
            <li>{t("pContribute3")}</li>
            <li>{t("pContribute4")}</li>
          </ul>
        </ContainerExtras>
      </SectionExtras>
    </>
  );
}
