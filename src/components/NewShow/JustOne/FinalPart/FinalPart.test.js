import React from 'react'
import renderer from 'react-test-renderer'
import FinalPart from './FinalPart'

describe('Test on FinalPart Component', () => {
    const compFinalPart = renderer.create(<FinalPart />)
    test('Sould render with no props', () => {
        const jsonFinalPart = compFinalPart.toJSON()
        expect(jsonFinalPart).toMatchSnapshot()
    })
   /*  test('Sould have 12 elements', () => {
        const compFinalPart = renderer.create(<FinalPart />)
        const Result = compFinalPart.root.findAllByProps({ ['data-test']: '12elements' })
        expect(Result).toHaveLength(12)
    }) */
})