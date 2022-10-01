import { classNames } from './classNames'

describe('classNames', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    test('test with one param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('test with additional params', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('test with mods and additional', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2']))
            .toBe(expected)
    })
    test('test mods one false', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2']))
            .toBe(expected)
    })
    test('test mods one undefined', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2']))
            .toBe(expected)
    })
})
