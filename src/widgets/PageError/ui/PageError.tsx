import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './PageError.module.scss'
import { Button } from 'shared/ui/Button/Button'

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Произошла ошибка!')}</h1>
            <Button onClick={reloadPage}>
                {t('Презагрузить страницу')}
            </Button>
        </div>
    )
}
