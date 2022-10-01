import { classNames } from 'shared/lib/classnames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { AppLinkTheme } from '../../../shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
            </div>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
                to='/'>Главная</AppLink>
            <AppLink
                theme={AppLinkTheme.PRIMARY}
                to='about'>О сайте</AppLink>
        </div>
    )
}

export default Navbar
