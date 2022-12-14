import { Loader } from 'shared/ui/Loader/Loader'
import { classNames } from 'shared/lib/classnames/classNames'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    )
}
