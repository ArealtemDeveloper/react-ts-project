import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// eslint-disable-next-line react/display-name
export const RouteDecorator = (StoryComponent: Story) => {
    return (
        <BrowserRouter>
            <div>
                <StoryComponent/>
            </div>
        </BrowserRouter>
    )
}
