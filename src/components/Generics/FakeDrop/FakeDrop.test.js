import React from 'react'
import renderer from 'react-test-renderer'
import FakeDrop from './FakeDrop'

describe('Test on FakeDrop Component', () => {
    const compFakeDrop = renderer.create(<FakeDrop />)
    test('Should not render without props', () => {
        const jsonFakeDrop = compFakeDrop.toJSON()
        expect(jsonFakeDrop).toBeNull()
    })
    test('Should not render with 1 props only', () => {
        const compFakeDropItems = renderer.create(<FakeDrop items={
            [
                'legume',
                'verdura',
                'fruta'
            ]
        } />)
        const compFakeDropTroca = renderer.create(<FakeDrop trocaTexto={() => null} />)
        const jsonFakeDropItems = compFakeDropItems.toJSON()
        const jsonFakeDropTroca = compFakeDropTroca.toJSON()
        expect(jsonFakeDropItems).toBeNull()
        expect(jsonFakeDropTroca).toBeNull()
    })
    test('Should render with 2 props', () => {
        const compFakeDrop = renderer.create(<FakeDrop items={
            [
                'legume',
                'verdura',
                'fruta'
            ]
        } trocaTexto={() => null} />)
        const jsonFakeDrop = compFakeDrop.toJSON()
        expect(jsonFakeDrop).toMatchSnapshot()
    })
})