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
        </div>
    )
}

export default Navbar
