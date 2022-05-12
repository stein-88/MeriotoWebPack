import React from 'react'
import renderer from 'react-test-renderer'
import Imagezoom from './Imagezoom'

describe('Test on Imagezoom Component', () => {
    test('Should have an default image when do not pass props', () => {
        const compImagezoom = renderer.create(<Imagezoom />)
        const rootLink = compImagezoom.root.findAllByProps({ src: 'test-file-stub' })
        expect(rootLink).toHaveLength(1)
    })
    test('Should have an image when we pass the props', () => {
        const compImage = renderer.create(<Imagezoom theimage={'linkaq'} />)
        const rootImage = compImage.root.findAllByProps({ className: 'w-100 img-fluid' })
        const rootLink = compImage.root.findAllByProps({ src: 'linkaq' })
        const jsonImagezoom = compImage.toJSON()
        expect(rootImage).toHaveLength(1)
        expect(rootLink).toHaveLength(1)
        expect(jsonImagezoom).toMatchSnapshot()
    })
})