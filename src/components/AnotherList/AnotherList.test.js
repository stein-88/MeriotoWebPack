import React from 'react'
import renderer from 'react-test-renderer'
import AnotherList from './AnotherList'

describe('testing AnotherList', () => {
    const mockFunc = jest.fn()
    const compAnotherList = renderer.create(<AnotherList />)
    test('Should render without props', () => {
        const jsonAnotherList = compAnotherList.toJSON()
        expect(jsonAnotherList).toMatchSnapshot()
    })
    test('Should have 1 title, 7 topic options, and 1 selected topic only', () => {
        const resultTitle = compAnotherList.root.findAllByProps({ className: 'h1' })
        const resultTxt = compAnotherList.root.findAllByProps({ className: 'w-100 mb-2' })
        const resultTopic = compAnotherList.root.findAllByProps({ className: 'bgsomething bgselected' })
        resultTopic[0].props.onClick()
        expect(resultTxt).toHaveLength(7)
        expect(resultTitle).toHaveLength(1)
        expect(resultTopic).toHaveLength(1)
        expect(mockFunc).not.toHaveBeenCalled()
    })
})
