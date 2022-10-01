import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    test('test-render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
    test('test-clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})
