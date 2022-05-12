import React from 'react'
import renderer from 'react-test-renderer'
import GenInput from './GenInput'

describe('testing GenInput', () => {
    const mockFunc = jest.fn()
    const compGenInput = renderer.create(<GenInput />)
    test('Should not render without props', () => {
        const compGenInput = renderer.create(<GenInput />)
        const jsonGenInput = compGenInput.toJSON()
        expect(jsonGenInput).toBeNull()
    })
    test('Should render with this 3 props', () => {
        const compGenInputRad = renderer.create(<GenInput type="radio" onChange={() => null} id="idfsd" />)
        const compGenInputChe = renderer.create(<GenInput type="checkbox" onChange={() => null} id="idfsd" />)
        const compGenInputTex = renderer.create(<GenInput type="textarea" onChange={() => null} id="idfsd" />)
        const compGenInputFil = renderer.create(<GenInput type="file" onChange={() => null} id="idfsd" />)
        const compGenInput = renderer.create(<GenInput type="sdafsdaf" onChange={() => null} id="idfssdafd" lab="ghfdhfdg" />)
        const jsonGenInputRad = compGenInputRad.toJSON()
        const jsonGenInputChe = compGenInputChe.toJSON()
        const jsonGenInputTex = compGenInputTex.toJSON()
        const jsonGenInputFill = compGenInputFil.toJSON()
        const jsonGenInput = compGenInput.toJSON()
        const rootInput = compGenInput.root.findAllByProps({ ['data-test']: 'idfssdafd' })
        expect(rootInput).toHaveLength(1)
        expect(jsonGenInputRad).toMatchSnapshot()
        expect(jsonGenInputChe).toMatchSnapshot()
        expect(jsonGenInputTex).toMatchSnapshot()
        expect(jsonGenInputFill).toMatchSnapshot()
        expect(jsonGenInput).toMatchSnapshot()
    })
    /*  test('Should have 1 title, 7 topic options, and 1 selected topic only', () => {
         const resultTitle = compGenInput.root.findAllByProps({ className: 'h1' })
         const resultTxt = compGenInput.root.findAllByProps({ className: 'w-100 mb-2' })
         const resultTopic = compGenInput.root.findAllByProps({ className: 'bgsomething bgselected' })
         resultTopic[0].props.onClick()
         expect(resultTxt).toHaveLength(7)
         expect(resultTitle).toHaveLength(1)
         expect(resultTopic).toHaveLength(1)
         expect(mockFunc).not.toHaveBeenCalled()
     }) */
})
