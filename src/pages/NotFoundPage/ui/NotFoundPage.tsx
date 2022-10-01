import cls from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.page, {}, [className])}>
            <h1>{t('Страница не найдена')}</h1>
        </div>
    )
}
