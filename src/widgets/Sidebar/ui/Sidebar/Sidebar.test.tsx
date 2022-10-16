import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { componentRender } from '../../../../shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    test('Sidebar', () => {
        componentRender(<Sidebar/>)
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    })
    test('Sidebar-toggle', () => {
        componentRender(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
    })
})
