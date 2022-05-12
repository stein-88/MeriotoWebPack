import React from 'react'
import renderer from 'react-test-renderer'
import Navfooter from './Navfooter'
import * as schemaMocked from './data'

describe('Test on Navfooter Component', () => {
    test('Sould have 1 container', () => {
        const compNavfooter = renderer.create(<Navfooter toTop={() => null} />)
        const resultRoot = compNavfooter.root.findAllByProps({ className: 'container pt-4' })
        const jsonNavfooter = compNavfooter.toJSON()
        expect(jsonNavfooter).toMatchSnapshot()
        expect(resultRoot).toHaveLength(1)
    })
    test('Should not render without the schema', () => {
        schemaMocked.default = null
        const compNavfooter = renderer.create(<Navfooter toTop={() => null} />)
        const result = compNavfooter.toJSON()
        expect(result).toBeNull()
    })
})