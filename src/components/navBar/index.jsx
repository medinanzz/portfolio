// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BtnPerfil, NavContainer, StyledLink, UlContainer } from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import styled from "styled-components";

const DivPerfil = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* position: absolute; */
`;

export function NavBarPage({ open, onClose }) {
  const MySwal = withReactContent(Swal);
   const userString = sessionStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isRegistered, setIsRegistered] = useState(false);
  // const [seePerfil, setSeePerfil] = useState(false);

  useEffect(() => {
    const checkRegistered = () => {
      const registered = sessionStorage.getItem("registered");
      setIsRegistered(registered === "true");
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
  const contactSection = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  function SeePerfil() {
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
  return (
    <NavContainer className={open ? "open" : ""}>
      <button className="close-btn btn-img-menu" onClick={onClose}>
        <FiX size={20} />
      </button>
      <h1 className="t1">
        <span className="t-span">&lt;/AM&gt;</span>
      </h1>
      <UlContainer>
        <li>
          <button
            onClick={() => {
              onClose();
              navigate("/");
              setTimeout(() => {
                homeSection();
              }, 100);
            }}
          >
            {t("home")}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onClose();
              aboutMe();
            }}
          >
            {t("about")}
          </button>
        </li>
        <li>
          <a
            target="_blank"
            href="https://wa.me/555181637935?text=Olá,%20tenho%20interesse%20em%20te%20contratar%20como%20Jovem%20Aprendiz"
            rel="noopener noreferrer"
            onClick={() => {
              onClose();
              contactSection();
            }}
          >
            {t("contactTitle")}
          </a>
        </li>
      </UlContainer>
      <ul style={{ listStyle: "none" }}>
        <li>
          <StyledLink
            onClick={() => {
              onClose();
            }}
            to="/registerFake"
            style={{
              pointerEvents: isRegistered ? "none" : "auto",
              opacity: isRegistered ? 0.5 : 1,
            }}
          >
            {isRegistered ? t("alreadyRegistered") : t("register")}
          </StyledLink>
        </li>
        <li>
          <BtnPerfil onClick={() => { SeePerfil()}}>
            {t("profile")}
          </BtnPerfil>
        </li>

        {/* <li>
          <PerfilPage seePerfil={seePerfil} />
        </li> */}

        <li>
          <StyledLink
            onClick={() => {
              onClose();
            }}
            to="/extras"
          >
            Extras
          </StyledLink>
        </li>
      </ul>
    </NavContainer>
  );
}
