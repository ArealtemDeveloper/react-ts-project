import { classNames } from 'shared/lib/classnames/classNames'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import { Theme } from '../../../app/providers/ThemeProvider/lib/ThemeContext'
import { Button } from 'shared/ui/Button/Button'
import { ThemeButton } from '../../../shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button className={classNames('', {}, [className])} onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/> }
        </Button>
    )
}
