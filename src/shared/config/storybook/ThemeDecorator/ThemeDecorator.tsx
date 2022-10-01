import { Story } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { classNames } from '../../../lib/classnames/classNames'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <div className={classNames('app', {}, [theme])}>
            <StoryComponent/>
        </div>
    )
}
