import React from 'react'
import renderer from 'react-test-renderer'
import EsgData from './EsgData'

describe('testing EsgData', () => {
    const compEsgData = renderer.create(<EsgData />)
    test('Should render without props', () => {
        const jsonEsgData = compEsgData.toJSON()
        expect(jsonEsgData).toMatchSnapshot()
    })
    test('Should have 1 title and 2 cards', () => {
        const resultTitle = compEsgData.root.findAllByProps({ className: 'h1 pt-5' })
        const resultTxt = compEsgData.root.findAllByProps({ className: 'h3 my-4' })
        expect(resultTxt).toHaveLength(2)
        expect(resultTitle).toHaveLength(1)
    })
})