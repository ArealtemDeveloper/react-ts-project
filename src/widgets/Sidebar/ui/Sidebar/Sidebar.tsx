import { classNames } from 'shared/lib/classnames/classNames'
import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwither'
import { useState } from 'react'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div data-testid='Sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button data-testid='sidebar-toggle' onClick={onToggle}>toggle</Button>
            <div className='switchers'>
                <ThemeSwitcher/>
                <LangSwitcher className={classNames(cls.lang, {}, [className])}/>
            </div>
        </div>
    )
}
