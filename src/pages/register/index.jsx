import { useEffect, useState } from "react";
import { RegisterFake } from "./styles";
// import swal from "sweetalert";
// import { Swal } from 'sweetalert2';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";

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
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirm: false,
  });
  
  useEffect(() => {
    const registered = sessionStorage.getItem("registered");
    if (registered === "true") {
      navigate("/");
    }
  }, [navigate]);

  function registerUser() {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = "errorName";
    } else if (userName.length <= 3) {
      newErrors.userName = "errorName2";
    }

    if (!emailUser.trim()) {
      newErrors.emailUser = "errorEmail";
    }

    if (passwordUser && passwordUser.length < 6) {
      newErrors.passwordUser = "Mínimo 6 caracteres";
    } else if (!passwordUser.trim()) {
      newErrors.passwordUser = "errorPassword";
    }

    if (!confirmPasswordUser.trim()) {
      newErrors.confirmPasswordUser = "errorConfirm";
    }

    if (Number(ageUser) <= 5) {
      newErrors.ageUser = "errorAge";
    }

    if (confirmPasswordUser && confirmPasswordUser !== passwordUser) {
      newErrors.confirmPasswordUser = "errorConfirm";
    }

    if (!emailUser.trim()) {
      newErrors.emailUser = "O e-mail não pode estar vazio";
    }

    // Uma regex simples para validar o formato básico de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailUser)) {
      newErrors.emailUser = "Formato de e-mail inválido";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        userName,
        emailUser,
        ageUser,
        passwordUser,
      }),
    );

    sessionStorage.setItem("registered", "true");

    Swal.fire({
      title: t('successRegister'),
      text: t('successRegister2') + ' ' + t('registerAgain'),
      icon: 'success',
      timer: 1000,
    })

    setIsRegistered(true);
    navigate("/");
  }

  function togglePassword(field) {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  }

  console.log(showPassword);

  return (
    <RegisterFake className="registerFake">
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
          {errors.userName && <span>{t(errors.userName)}</span>}
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
          {errors.ageUser && <span>{t(errors.ageUser)}</span>}
        </div>

        <div className="div divEmail div3">
          <input
            type="email"
            placeholder=" "
            value={emailUser}
            onChange={(e) => setEmailUser(e.target.value)}
            className={errors.emailUser ? "error" : ""}
          />
          <label>Email</label>
          {errors.emailUser && <span>{t(errors.emailUser)}</span>}
        </div>

        <div className="div divPassword div4">
          <input
            type={showPassword.password ? "text" : "password"}
            placeholder=" "
            autoComplete="off"
            value={passwordUser}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.passwordUser ? "error" : ""}
          />
          <label>{t("password")}</label>
          <button
            type="button"
            onClick={() => togglePassword("password")}
            className={!passwordUser ? "disabledBtn" : ""}
            disabled={!passwordUser}
          >
            <span className="icon">
              {showPassword.password ? <FiEyeOff /> : <FiEye />}
            </span>
          </button>
          {errors.passwordUser && <span>{t(errors.passwordUser)}</span>}
        </div>

        <div className="div divConfirm div5">
          <input
            type={showPassword.confirm ? "text" : "password"}
            placeholder=" "
            autoComplete="off"
            value={confirmPasswordUser}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={errors.confirmPasswordUser ? "error" : ""}
          />
          <label>{t("confirmPassword")}</label>
          <button
            type="button"
            onClick={() => togglePassword("confirm")}
            className={!passwordUser ? "disabledBtn" : ""}
            disabled={!passwordUser}
          >
            <span className="icon">
              {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
            </span>
          </button>
          {errors.confirmPasswordUser && (
            <span>{t(errors.confirmPasswordUser)}</span>
          )}
        </div>

        <div className="div divBtn div6">
          <button onClick={registerUser} disabled={isRegistered}>
            {isRegistered ? t("alreadyRegistered") : t("register")}
          </button>
        </div>
      </fieldset>
    </RegisterFake>
  );
}
