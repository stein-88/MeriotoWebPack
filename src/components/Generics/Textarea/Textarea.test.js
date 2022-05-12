import React from 'react'
import renderer from 'react-test-renderer'
import Textarea from './Textarea'

describe('Should not render without props', () => {
    test('Should not render without props', () => {
        const compTextarea = renderer.create(<Textarea />)
        const jsonTextarea = compTextarea.toJSON()
        expect(jsonTextarea).toBeNull()
    })
    test('Should not render with onChange only', () => {
        const compTextarea = renderer.create(<Textarea onChange={() => null} />)
        const jsonTextarea = compTextarea.toJSON()
        expect(jsonTextarea).toBeNull()
    })
    test('Should not render with id only', () => {
        const compTextarea = renderer.create(<Textarea id="dsaf32rw" />)
        const jsonTextarea = compTextarea.toJSON()
        expect(jsonTextarea).toBeNull()
    })
    test('Should render with full props', () => {
        const mockFunc = jest.fn()
        const compTextarea = renderer.create(
            <Textarea
                onChange={() => null}
                id="dsaf32rw"
                placeholder="sdfsda"
            />
        )
        const jsonTextarea = compTextarea.toJSON()
        jsonTextarea.props.onChange()
        expect(mockFunc).not.toHaveBeenCalled()
        expect(jsonTextarea).toMatchSnapshot()
    })
})