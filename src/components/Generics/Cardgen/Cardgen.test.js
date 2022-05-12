import React from 'react'
import renderer from 'react-test-renderer'
import CardGen from './CardGen'

describe('Test on CardGen Component', () => {
    const compCardGen = renderer.create(<CardGen />)
    test('Should render without props', () => {
        const jsonCardGen = compCardGen.toJSON()
        expect(jsonCardGen).toMatchSnapshot()
    })
    test('Should have an IMG only', () => {
        const expectResult = compCardGen.root.findAllByProps({ className: "img-fluid sizeimg" })
        expect(expectResult).toHaveLength(1)
    })
    test('Should have an cursorPointer when we pass the image', () => {
        const compCardGen = renderer.create(<CardGen theimage={'linklaq'} />)
        const expectResult = compCardGen.root.findAllByProps({ className: "img-fluid sizeimg cursorPointer" })
        expect(expectResult).toHaveLength(1)
    })
    test('Should have 1 title and 1 subtitle', () => {
        const compCardGen = renderer.create(<CardGen thetitle={'tituloaq'} thesubtitle={'subtituloaq'} />)
        const expectTitle = compCardGen.root.findAllByProps({ className: "h4 pt-2" })
        const expectSubtitle = compCardGen.root.findAllByProps({ className: "h5 pt-2" })
        expect(expectTitle).toHaveLength(1)
        expect(expectSubtitle).toHaveLength(1)
    })
    test('Should have 2 buttons', () => {
        const compCardGen = renderer.create(<CardGen botao={[
            {
                text: 'text1',
                onClick: () => null
            },
            {
                text: 'text2',
                onClick: () => null
            }
        ]} />)
        const expectResult = compCardGen.root.findAllByProps({ ['data-test']: "botao" })
        expect(expectResult).toHaveLength(2)
    })
})