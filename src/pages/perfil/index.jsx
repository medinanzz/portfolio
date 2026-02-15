import { DivPerfil } from "./styles";
import { useTranslation } from "react-i18next";

export function PerfilPage({ seePerfil }) {
    const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const { t } = useTranslation();


  if (!user) {
    return <DivPerfil>
        <div className={`perfil ${seePerfil ? 'ativo' : ''}`}>
            <p>Nenhum usuário cadastrado</p>
        </div>
    </DivPerfil>;
  }
    console.log(user);
    return (
        <DivPerfil>
            <div className={`perfil ${seePerfil ? 'ativo' : ''}`}>
                <p>{t('name')}: <u>{user?.userName}</u></p>
                <p>{t('age')}: <u>{user?.ageUser}</u></p>
                <p>Email: <u>{user?.emailUser}</u></p>
                <p>{t('password')}: <u>{user?.passwordUser}</u></p>
            </div>
        </DivPerfil>
    )
}