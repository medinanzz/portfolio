import { NavContainer, UlContainer } from "./styles";
import { useTranslation } from "react-i18next";
export function NavBarPage({ open, onClose }) {
  const {t} = useTranslation();
  const aboutMe = () => {
    const section = document.getElementById('aboutMe');
    if (section) {
      section.scrollIntoView({behavior:  "smooth"});
    }
  };
  const homeSection = () => {
    const section = document.getElementById('home');
    if (section) {
      section.scrollIntoView({behavior:  "smooth"});
    }
  };
  const contactSection = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({behavior:  "smooth"});
    }
  };
  return (
    <NavContainer className={open ? "open" : ""}>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <UlContainer>
        <li>
          <button onClick={() => {onClose(); homeSection();}}>{t('home')}</button>
        </li>
        <li>
          <button onClick={() => {onClose(); aboutMe();}}>{t('about')}</button>
        </li>
        <li>
          <button onClick={() => {onClose(); contactSection();}}>{t('contact')}</button>
        </li>
      </UlContainer>
    </NavContainer>
  );
}
