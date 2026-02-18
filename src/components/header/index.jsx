import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { BtnOpenMenu, ButtonGlobalStyle, DivHeader, DivTranslation } from "./styles";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const DivThemeMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
  align-items: center;
`;

export function HeaderPage({ onOpenMenu, theme, setTheme }) {
  const { i18n } = useTranslation();

  return (
    <header id="header">
      <DivHeader>
        <h1 className="t1">
          <span className="t-span">&lt;/AM&gt;</span>
        </h1>
        <DivTranslation>
          <ButtonGlobalStyle
            onClick={() => i18n.changeLanguage("pt")}>
            PT
          </ButtonGlobalStyle>
          <ButtonGlobalStyle onClick={() => i18n.changeLanguage("en")}>
            EN
          </ButtonGlobalStyle>
        </DivTranslation>
        <DivThemeMenu>
          <ButtonGlobalStyle onClick={() => setTheme(!theme)} className="btnTheme">
            {theme ? <FiMoon size={20} /> : <FiSun size={20} />}
          </ButtonGlobalStyle>
          <BtnOpenMenu onClick={onOpenMenu}>
            <FiMenu size={20} />
          </BtnOpenMenu>
        </DivThemeMenu>
      </DivHeader>
    </header>
  );
}
