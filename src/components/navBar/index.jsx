// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DivUl, NavContainer, UlContainer } from "./styles";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

export function NavBarPage({ onClose, isOpen }) {
  const MySwal = withReactContent(Swal);
  const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const checkRegistered = () => {
      const registered = sessionStorage.getItem("registered");
      setIsRegistered(registered === 'true');
    };

    checkRegistered();
  }, []);

  const aboutMe = () => {
    const section = document.getElementById("aboutMe");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const homeSection = () => {
    const section = document.getElementById("home");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const SeePerfil = () => {
    if (!user) {
      MySwal.fire({
        title: `${t('perfilError')}`,
      })
    }
    if (user) {
      MySwal.fire({
        title: `Perfil`,
        html: <DivPerfil>
          <p><strong>{t('name')}:</strong> {user?.userName}</p>
          <p><strong>{t('age')}:</strong> {user?.ageUser}</p>
          <p><strong>Email:</strong> {user?.emailUser}</p>
        </DivPerfil>,
      });
    }
  }

  const btnsNav = [
    { text: 'Home', click: () => {
      onClose();
      navigate('/');
      setTimeout(() => homeSection(), 100)
    } },
    { text: t('about'), click: () => {
      onClose();
      aboutMe();
    } },
  ]
  return (
    <NavContainer isOpen={isOpen}>
      <h1 className="t1">
        <span className="t-span">&lt;/AM&gt;</span>
      </h1>
      <DivUl>
        <UlContainer>
          {btnsNav.map((btns, i) => (
            <li key={i}>
              <button onClick={btns.click}>{btns.text}</button>
            </li>
          ))}
          <li>
            <a onClick={onClose} href="https://wa.me/555181637935?text=Olá,%20tenho%20interesse%20em%20te%20contratar%20como%20Jovem%20Aprendiz">{t("contactTitle")}</a>
          </li>
        </UlContainer>
        <UlContainer style={{ listStyle: "none" }}>
          <li>
            <Link
              onClick={() => {
                onClose();
              }}
              title={isRegistered ? 'Já registrado' : ''}
              to="/registerFake"
              style={{
                pointerEvents: isRegistered ? "none" : "auto",
                opacity: isRegistered ? 0.5 : 1,
              }}
            >
              {isRegistered ? t("alreadyRegistered") : t("register")}
            </Link>
          </li>
          <li>
            <button onClick={() => { SeePerfil()}}>
              {t("profile")}
            </button>
          </li>

          <li>
            <Link
              onClick={() => {
                onClose();
              }}
              to="/extras"
            >
              Extras
            </Link>
          </li>
        </UlContainer>
      </DivUl>
    </NavContainer>
  );
}
