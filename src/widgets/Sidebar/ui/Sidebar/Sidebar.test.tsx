import { fireEvent, render, screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { Sidebar } from './Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    test('Sidebar', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    })
    test('Sidebar-toggle', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed')
    })
})
