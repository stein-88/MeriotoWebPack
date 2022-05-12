import React from 'react'
import renderer from 'react-test-renderer'
import Reusing from './Reusing'

describe('Testing Reusing component', () => {
    const compReusing = renderer.create(<Reusing />)
    test('Should render without props', () => {
        const jsonReusing = compReusing.toJSON()
        expect(jsonReusing).toMatchSnapshot()
    })
    test('Should have 3 images and 1 title', () => {
        const resultIMG = compReusing.root.findAllByProps({ className: 'img-fluid' })
        const resultTitle = compReusing.root.findAllByProps({ className: 'h1 mt-5 py-4 text-muted' })
        expect(resultIMG).toHaveLength(3)
        expect(resultTitle).toHaveLength(1)
    })
})
