import React from 'react'
import renderer from 'react-test-renderer'
import JustOne from './JustOne'

describe('Test on JustOne Component', () => {
    const compJustOne = renderer.create(<JustOne />)
    test('Sould render with no props and 1 row', () => {
        const jsonJustOne = compJustOne.toJSON()
        const Result = compJustOne.root.findAllByProps({ className: 'row' })
        expect(jsonJustOne).toMatchSnapshot()
        expect(Result).toHaveLength(1)
    })
})