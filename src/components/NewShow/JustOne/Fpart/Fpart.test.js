import React from 'react'
import renderer from 'react-test-renderer'
import Fpart from './Fpart'
import * as schemaMocked from './data'

describe('Test on Fpart Component', () => {
    const compFpart = renderer.create(<Fpart />)
    test('Sould render with no props and should have 1 image', () => {
        const jsonFpart = compFpart.toJSON()
        const Result = compFpart.root.findAllByProps({ className: 'reimg' })
        expect(jsonFpart).toMatchSnapshot()
        expect(Result).toHaveLength(1)
    })
    test('Sould not render image with 1 props', () => {
        const compFpart = renderer.create(<Fpart product_url="temumlinkaq" />)
        const Result = compFpart.root.findAllByProps({ target: '_blank' })
        expect(Result).toHaveLength(0)
    })
    test('Sould render image with 2 props', () => {
        const compFpart = renderer.create(<Fpart product_url="temumlinkaq" name="nomeaq" />)
        const Result = compFpart.root.findAllByProps({ target: '_blank' })
        expect(Result).toHaveLength(1)
    })
    test('Sould render with 1 image default', () => {
        const compFpart = renderer.create(<Fpart images="temumlinkaq" />)
        const Result = compFpart.root.findAllByProps({ src: 'test-file-stub' })
        expect(Result).toHaveLength(1)
    })
    test('Sould not render without the schema', () => {
        schemaMocked.default = null
        const compFpart = renderer.create(<Fpart />)
        const jsonFpart = compFpart.toJSON()
        expect(jsonFpart).toMatchSnapshot()
    })
})