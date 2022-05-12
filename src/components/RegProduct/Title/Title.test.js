import React from 'react'
import renderer from 'react-test-renderer'
import Title from './Title'
import * as schemaMocked from './data'

describe('Test on Title Component', () => {
    test('Should render', () => {
        const compTitle = renderer.create(<Title />)
        const resultRoot = compTitle.root.findAllByProps({ className: 'w-100 py-5 text-center' })
        const jsonTitle = compTitle.toJSON()
        expect(jsonTitle).toMatchSnapshot()
        expect(resultRoot).toHaveLength(1)
    })
    test('Sould be edit insted register', () => {
        const compTitle = renderer.create(<Title idserver={22} />)
        const resultRoot = compTitle.root.findAllByProps({ ['data-test']: 'Edit the Product - 22' })
        expect(resultRoot).toHaveLength(1)
    })
    test('Should not render without the schema', () => {
        schemaMocked.default = null
        const compTitle = renderer.create(<Title idserver={12} />)
        const result = compTitle.toJSON()
        expect(result).toBeNull()
    })
})