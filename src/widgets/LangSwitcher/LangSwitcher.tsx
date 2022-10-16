import { classNames } from 'shared/lib/classnames/classNames'
import { ThemeButton, Button } from '../../shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}
