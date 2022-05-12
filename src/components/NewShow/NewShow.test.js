import React from 'react'
import renderer from 'react-test-renderer'
import NewShow from './NewShow'
import * as schemaMocked from './data'

//jest.mock('uuid', () => ({ v4: () => `uniquekey${Math.random(1000) * 100}` }))

describe('Test on NewShow Component', () => {
    const compNewShow = renderer.create(<NewShow />)
    test('Sould render with no props', () => {
        const jsonNewShow = compNewShow.toJSON()
        expect(jsonNewShow).toMatchSnapshot()
    })
    test('Should not render without the schema', () => {
        schemaMocked.default = null
        const comp = renderer.create(<NewShow />)
        const result = comp.toJSON()
        expect(result).toBeNull()
    })
})