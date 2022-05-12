import React from 'react'
import renderer from 'react-test-renderer'
import Navbot from './Navbot'
import * as schemaMocked from './data'

describe('Test on Navbot Component', () => {
    const compNavbot = renderer.create(<Navbot toBottom={() => null} />)
    test('Should not render withoud props', () => {
        const compNavbot = renderer.create(<Navbot />)
        const jsonNavbot = compNavbot.toJSON()
        expect(jsonNavbot).toBeNull()
    })
    test('Sould have 1 container', () => {
        const resultRoot = compNavbot.root.findAllByProps({ className: 'container' })
        const jsonNavbot = compNavbot.toJSON()
        expect(jsonNavbot).toMatchSnapshot()
        expect(resultRoot).toHaveLength(1)
    })
    test('Should not render without the schema', () => {
        schemaMocked.default = null
        const compNavbot = renderer.create(<Navbot toBottom={() => null} />)
        const result = compNavbot.toJSON()
        expect(result).toBeNull()
    })
    test('Should add Navbotoff to className when we have disableNavbot', () => {
        const mockFunc = jest.fn()
        const expectResult = compNavbot.root.findAllByProps({ className: 'btnstyle' })
        expectResult[0].props.onClick()
        expectResult[0].props.onClick.mockFunc
        expect(mockFunc).not.toHaveBeenCalled()
    })
})