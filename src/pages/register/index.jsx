import { useEffect, useState } from "react";
import { RegisterFake } from "./styles";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export function RegisterFakePage() {
  const [passwordUser, setPassword] = useState("");
  const [confirmPasswordUser, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [ageUser, setAgeUser] = useState("");
  const { t } = useTranslation();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registered = localStorage.getItem("registered");
    if (registered === "true") {
      navigate("/");
    }
  });

  function registerUser() {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = "Nome muito curto";
    } else if (userName.length <= 3) {
      newErrors.userName = "Preencha o campo!";
    }

    if (emailUser && (!emailUser.includes("@") || !emailUser.includes("."))) {
      newErrors.emailUser = "O email deve conter '@' ou '.'";
    } else if (!emailUser.trim()) {
      newErrors.emailUser = "Email inválido";
    }

    if (passwordUser && passwordUser.length < 6) {
      newErrors.passwordUser = "Mínimo 6 caracteres";
    } else if (!passwordUser.trim()) {
      newErrors.passwordUser = "O campo deve ser preenchido";
    }

    if (!confirmPasswordUser.trim()) {
      newErrors.confirmPasswordUser = "Senhas não coincidem";
    }

    if (Number(ageUser) <= 5) {
      newErrors.ageUser = "Você deve ter pelo menos 5 anos!";
    }

    if (confirmPasswordUser && confirmPasswordUser !== passwordUser) {
      newErrors.confirmPasswordUser = "Senhas não coincidem";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    swal("Sucesso!", "Cadastro realizado!", "success");

    setUserName("");
    setAgeUser("");
    setEmailUser("");
    setPassword("");
    setConfirmPassword("");
    localStorage.setItem("registered", "true");
    setIsRegistered(true);
    navigate("/");
  }
  return (
    <RegisterFake>
      <fieldset title="Cadastro fake" autoComplete="off">
        <div className="div divUsernName div1">
          <input
            type="text"
            placeholder=" "
            autoComplete="new-password"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={errors.userName ? "error" : ""}
          />
          <label>{t("userName")}</label>
          {errors.userName && <span>{errors.userName}</span>}
        </div>
        <div className="div divAge div2">
          <input
            type="number"
            placeholder=" "
            autoComplete="off"
            value={ageUser}
            onChange={(e) => setAgeUser(e.target.value)}
            className={errors.ageUser ? "error" : ""}
          />
          <label>{t("age")}</label>
          {errors.ageUser && <span>{errors.ageUser}</span>}
        </div>
        <div className="div divEmail div3">
          <input
            type="text"
            placeholder=" "
            autoComplete="new-password"
            value={emailUser}
            onChange={(e) => setEmailUser(e.target.value)}
            className={errors.emailUser ? "error" : ""}
          />
          <label>Email</label>
          {errors.emailUser && <span>{errors.emailUser}</span>}
        </div>
        <div className="div divPassword div4">
          <input
            type="password"
            placeholder=" "
            autoComplete="off"
            value={passwordUser}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.passwordUser ? "error" : ""}
          />
          <label>{t("password")}</label>
          {errors.passwordUser && <span>{errors.passwordUser}</span>}
        </div>
        <div className="div divConfirm div5">
          <input
            type="password"
            placeholder=" "
            autoComplete="off"
            value={confirmPasswordUser}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={errors.confirmPasswordUser ? "error" : ""}
          />
          <label>{t("confirmPassword")}</label>
          {errors.confirmPasswordUser && (
            <span>{errors.confirmPasswordUser}</span>
          )}
        </div>
        <div className="div divBtn div6">
          <button onClick={registerUser} disabled={isRegistered}>
            {isRegistered ? t('alreadyRegistered') : t("register")}
          </button>
        </div>
      </fieldset>
    </RegisterFake>
  );
}
