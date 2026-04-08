import { BtnTheme, IconMoon, IconSun } from "./styles";

export function ButtonTheme({ theme, setTheme }) {
    return(
        <BtnTheme className={theme === 'dark' ? 'darkTheme' : ''} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} >
            <IconSun className="sun" />
            <IconMoon className="moon" />
        </BtnTheme>
    )
}