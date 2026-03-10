import { BtnTheme, IconMoon, IconSun } from "./styles";

export function ButtonTheme({ theme, setTheme }) {
    return(
        <BtnTheme className={theme ? 'darkTheme' : ''} onClick={() => setTheme(!theme)} >
            <IconSun className="sun" />
            <IconMoon className="moon" />
        </BtnTheme>
    )
}