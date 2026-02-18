import { useEffect, useState } from "react";
import { RegisterFake } from "./styles";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";


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

  // const viewPasswordImg =
  //   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyMHB4IiBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJNNTk5LTM2MXE0OS00OSA0OS0xMTl0LTQ5LTExOXEtNDktNDktMTE5LTQ5dC0xMTkgNDlxLTQ5IDQ5LTQ5IDExOXQ0OSAxMTlxNDkgNDkgMTE5IDQ5dDExOS00OVptLTE4Ny01MXEtMjgtMjgtMjgtNjh0MjgtNjhxMjgtMjggNjgtMjh0NjggMjhxMjggMjggMjggNjh0LTI4IDY4cS0yOCAyOC02OCAyOHQtNjgtMjhaTTIyMC0yNzAuNVExMDMtMzQ5IDQ4LTQ4MHE1NS0xMzEgMTcyLTIwOS41VDQ4MC03NjhxMTQzIDAgMjYwIDc4LjVUOTEyLTQ4MHEtNTUgMTMxLTE3MiAyMDkuNVQ0ODAtMTkycS0xNDMgMC0yNjAtNzguNVpNNDgwLTQ4MFptMjA3IDE1OHE5NS01OCAxNDYtMTU4LTUxLTEwMC0xNDYtMTU4dC0yMDctNThxLTExMiAwLTIwNyA1OFQxMjctNDgwcTUxIDEwMCAxNDYgMTU4dDIwNyA1OHExMTIgMCAyMDctNThaIi8+PC9zdmc+";
  // const hidePasswordImg =
  //   "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyMHB4IiBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJNNDU1LTk3cS03Ni01LTE0MS41LTM2LjV0LTExNC04My41cS00OC41LTUyLTc2LTExOS41VDk2LTQ4MHEwLTgwIDMwLTE0OS41dDgyLjUtMTIyUTI2MS04MDQgMzMxLTgzNHQxNDktMzBxODAgMCAxNDkuNSAzMHQxMjIgODIuNVE4MDQtNjk5IDgzNC02MjkuNVQ4NjQtNDgwdjE4cS0xNy05LTM1LTE1LjVUNzkyLTQ5MHEtNC0xMjctOTQtMjE0LjVUNDgwLTc5MnEtNTMgMC0xMDIgMTcuNVQyODctNzI0bDI0OCAyNDgtMzQgMTZxLTE3IDgtMzMgMTlMMjM2LTY3M3EtMzMgNDItNTAuNSA5MVQxNjgtNDgwcTAgOTcgNTQuNSAxNzZUMzY3LTE5MHExOCAyNyA0MCA1MHQ0OCA0M1ptMzM5LTk1cTUyLTI0IDg0LTcyLTMyLTQ4LTg0LTcydC0xMTAtMjRxLTU4IDAtMTEwIDI0dC04NCA3MnEzMiA0OCA4NCA3MnQxMTAgMjRxNTggMCAxMTAtMjRabS0yNzUgNTIuNVE0NDMtMTgzIDQwOC0yNjRxMzUtODEgMTExLTEyNC41VDY4NC00MzJxODkgMCAxNjUgNDMuNVQ5NjAtMjY0cS0zNSA4MS0xMTEgMTI0LjVUNjg0LTk2cS04OSAwLTE2NS00My41Wk02ODQtMjA0cS0yNSAwLTQyLjUtMTcuNVQ2MjQtMjY0cTAtMjUgMTcuNS00Mi41VDY4NC0zMjRxMjUgMCA0Mi41IDE3LjVUNzQ0LTI2NHEwIDI1LTE3LjUgNDIuNVQ2ODQtMjA0WiIvPjwvc3ZnPg==";
  useEffect(() => {
    const registered = sessionStorage.getItem("registered");
    if (registered === "true") {
      navigate("/");
    }
  }, [navigate]);

  function registerUser() {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = 'errorName';
    } else if (userName.length <= 3) {
      newErrors.userName = 'errorName2';
    }
    
    if (!emailUser.trim()) {
      newErrors.emailUser = 'errorEmail';
    }

    if (passwordUser && passwordUser.length < 6) {
      newErrors.passwordUser = "Mínimo 6 caracteres";
    } else if (!passwordUser.trim()) {
      newErrors.passwordUser = 'errorPassword';
    }

    if (!confirmPasswordUser.trim()) {
      newErrors.confirmPasswordUser = 'errorConfirm';
    }

    if (Number(ageUser) <= 5) {
      newErrors.ageUser = 'errorAge';
    }

    if (confirmPasswordUser && confirmPasswordUser !== passwordUser) {
      newErrors.confirmPasswordUser = 'errorConfirm';
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
      })
    );

    sessionStorage.setItem("registered", "true");

    swal(t('successRegister'), t('successRegister2'), "success");
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
            autoComplete="new-password"
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
            <span
              className="icon"
            >
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
            <span
              className="icon"
            >
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
