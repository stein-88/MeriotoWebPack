import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('testing Header', () => {
    const compHeader = renderer.create(<Header />)
    test('Should render without props', () => {
        const jsonHeader = compHeader.toJSON()
        expect(jsonHeader).toMatchSnapshot()
    })
    test('Should have 1 img, 1 title and 1 button', () => {
        const resultIMG = compHeader.root.findAllByProps({ className: 'imgheader' })
        const resultTitle = compHeader.root.findAllByProps({ className: 'py-4 h1' })
        const resultBtn = compHeader.root.findAllByProps({ className: 'botaoreg' })
        expect(resultIMG).toHaveLength(1)
        expect(resultTitle).toHaveLength(1)
        expect(resultBtn).toHaveLength(1)
    })
})