import React from 'react'
import renderer from 'react-test-renderer'
import FakeDropFilter from './FakeDropFilter'

describe('Test on FakeDropFilter Component', () => {
    const compFakeDropFilter = renderer.create(<FakeDropFilter />)
    test('Should not render without props', () => {
        const jsonFakeDropFilter = compFakeDropFilter.toJSON()
        expect(jsonFakeDropFilter).toBeNull()
    })
    test('Should not render with 1 props only', () => {
        const compListaSchema = renderer.create(<FakeDropFilter listaSchema={
            [
                'legume',
                'verdura',
                'fruta'
            ]
        } />)
        const compTroca = renderer.create(<FakeDropFilter trocaTexto={() => null} />)
        const componChange = renderer.create(<FakeDropFilter onChange={() => null} />)
        const compID = renderer.create(<FakeDropFilter ID={'banana'} />)
        const jsonListaSchema = compListaSchema.toJSON()
        const jsonTroca = compTroca.toJSON()
        const jsononChange = componChange.toJSON()
        const jsonID = compID.toJSON()
        expect(jsonListaSchema).toBeNull()
        expect(jsonTroca).toBeNull()
        expect(jsononChange).toBeNull()
        expect(jsonID).toBeNull()
    })
    test('Should not render with 2 props', () => {
        const compFakeDropFilter = renderer.create(<FakeDropFilter ListaSchema={
            [
                'legume',
                'verdura',
                'fruta'
            ]
        } trocaTexto={() => null} />)
        const jsonFakeDropFilter = compFakeDropFilter.toJSON()
        expect(jsonFakeDropFilter).toBeNull()
    })
    test('Should not render with 3 props', () => {
        const compFakeDropFilter = renderer.create(<FakeDropFilter
            ListaSchema={
                [
                    'legume',
                    'verdura',
                    'fruta'
                ]
            }
            trocaTexto={() => null}
            ID={'banana'}
        />)
        const jsonFakeDropFilter = compFakeDropFilter.toJSON()
        expect(jsonFakeDropFilter).toBeNull()
    })
    test('Should render with full props', () => {
        const compFakeDropFilter = renderer.create(<FakeDropFilter
            ListaSchema={
                [
                    'legume',
                    'verdura',
                    'fruta'
                ]
            }
            trocaTexto={() => null}
            ID={'banana'}
            onChange={() => null}
        />)
        const jsonFakeDropFilter = compFakeDropFilter.toJSON()
        expect(jsonFakeDropFilter).toMatchSnapshot()
    })
})