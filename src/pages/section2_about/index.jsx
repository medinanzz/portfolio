import { SectionAllStyle } from "../section1/styled";
import { useTranslation } from "react-i18next";
import { DivAbout } from "./styled";
export function Section2() {
    const {t} = useTranslation();
    return(
        <>
            <SectionAllStyle id="aboutMe">
                <h1>{t('about')}</h1>
                <DivAbout className="aboutMe-div">
                    <p>{t('titleSection2')}</p>
                    <p>{t('titleSection_2')}</p>
                </DivAbout>
            </SectionAllStyle>
        </>
    )
}