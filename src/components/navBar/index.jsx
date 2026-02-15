// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BtnPerfil, NavContainer, StyledLink, UlContainer } from "./styles";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PerfilPage } from "../../pages/perfil";

export function NavBarPage({ open, onClose }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isRegistered, setIsRegistered] = useState(false);
  const [seePerfil, setSeePerfil] = useState(false);

  useEffect(() => {
    const checkRegistered = () => {
      const registered = localStorage.getItem("registered");
      setIsRegistered(registered === "true");
    };

    checkRegistered(); // verifica ao montar

    window.addEventListener("storage", checkRegistered);

    return () => {
      window.removeEventListener("storage", checkRegistered);
    };
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
  return (
    <NavContainer className={open ? "open" : ""}>
      <button className="close-btn btn-img-menu" onClick={onClose}>
        X
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
          <button
            onClick={() => {
              onClose();
              contactSection();
            }}
          >
            {t("contact")}
          </button>
        </li>
      </UlContainer>
      <ul style={{ listStyle: "none" }}>
        <li>
          <StyledLink onClick={() => {
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
          <BtnPerfil onClick={() => setSeePerfil(!seePerfil)}>Perfil</BtnPerfil>
        </li>

        <li>
          <PerfilPage seePerfil={seePerfil} />
        </li>
      </ul>
    </NavContainer>
  );
}
