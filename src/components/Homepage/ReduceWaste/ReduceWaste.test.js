import React from 'react'
import renderer from 'react-test-renderer'
import ReduceWaste from './ReduceWaste'
import schema from './data'
const { card } = schema

describe('testing ReduceWaste', () => {
    const compReduceWaste = renderer.create(<ReduceWaste />)
    test('Should render without props', () => {
        const jsonReduceWaste = compReduceWaste.toJSON()
        expect(jsonReduceWaste).toMatchSnapshot()
    })
    test('Should have 1 title and 2 cards', () => {
        const resultCARDS = compReduceWaste.root.findAllByProps({ className: 'textobaixo' })
        const resultTitle = compReduceWaste.root.findAllByProps({ className: 'h1 mt-5 py-4 text-muted' })
        expect(resultCARDS).toHaveLength(card.length)
        expect(resultTitle).toHaveLength(1)
    })
})