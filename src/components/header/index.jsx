import { BtnOpenMenu, DivHeader, DivTranslation } from "./styles";
import { useTranslation } from "react-i18next";

export function HeaderPage({ onOpenMenu }) {
  const { i18n } = useTranslation();
  const MenuImg =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyMHB4IiBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJNMTQ0LTI2NHYtNzJoNjcydjcySDE0NFptMC0xODB2LTcyaDY3MnY3MkgxNDRabTAtMTgwdi03Mmg2NzJ2NzJIMTQ0WiIvPjwvc3ZnPg==";

  return (
    <header id="header">
      <DivHeader>
        <h1 className="t1">
          <span className="t-span">&lt;/AM&gt;</span>
        </h1>
        <DivTranslation>
          <button
            onClick={() => i18n.changeLanguage("pt")}
            style={{ marginRight: "0.5rem" }}
          >
            PT
          </button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </DivTranslation>
        <BtnOpenMenu onClick={onOpenMenu}>
          <img src={MenuImg} alt="Menu open" />
        </BtnOpenMenu>
      </DivHeader>
    </header>
  );
}
