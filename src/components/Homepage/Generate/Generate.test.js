import React from 'react'
import renderer from 'react-test-renderer'
import Generate from './Generate'
import schema from './data'
const { text } = schema

describe('testing Generate', () => {
    const compGenerate = renderer.create(<Generate />)
    test('Should render without props', () => {
        const jsonGenerate = compGenerate.toJSON()
        expect(jsonGenerate).toMatchSnapshot()
    })
    test('Should have 1 img, 1 title and 2 texts', () => {
        const resultTxt = compGenerate.root.findAllByProps({ className: 'h3 mb-4' })
        const resultTitle = compGenerate.root.findAllByProps({ className: 'h1 py-5 mb-0' })
        const resultimg = compGenerate.root.findAllByProps({ className: 'img-fluid w-100' })
        expect(resultTxt).toHaveLength(text.length)
        expect(resultTitle).toHaveLength(1)
        expect(resultimg).toHaveLength(1)
    })
})