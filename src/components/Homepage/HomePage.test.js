import React from 'react'
import renderer from 'react-test-renderer'
import HomePage from './HomePage'
import EsgData from './EsgData'
import Generate from './Generate'
import Header from './Header'
import ReduceWaste from './ReduceWaste'
import Reusing from './Reusing'
import schemawaste from './ReduceWaste/data'
import schemaGenerate from './Generate/data'
const { text } = schemaGenerate
const { card } = schemawaste

describe('testing HomePage', () => {
    test('Should render without props', () => {
        const compHomePage = renderer.create(<HomePage />)
        const jsonHomePage = compHomePage.toJSON()
        expect(jsonHomePage).toMatchSnapshot()
    })
})
describe('testing EsgData', () => {
    const compEsgData = renderer.create(<EsgData />)
    test('Should render without props', () => {
        const jsonEsgData = compEsgData.toJSON()
        expect(jsonEsgData).toMatchSnapshot()
    })
    test('Should have 1 title and 2 cards', () => {
        const resultTitle = compEsgData.root.findAllByProps({ className: 'h1 pt-5' })
        const resultTxt = compEsgData.root.findAllByProps({ className: 'h3 my-4' })
        expect(resultTxt).toHaveLength(2)
        expect(resultTitle).toHaveLength(1)
    })
})
describe('testing Generate', () => {
    const compGenerate = renderer.create(<Generate />)
    test('Should render without props', () => {
        const jsonGenerate = compGenerate.toJSON()
        expect(jsonGenerate).toMatchSnapshot()
    })
    test('Should have 1 img, 1 title and 2 texts', () => {
        const resultTxt = compGenerate.root.findAllByProps({ className: 'h3 mb-4' })
        const resultTitle = compGenerate.root.findAllByProps({ className: 'h1 py-5 mb-0' })
        const resultimg = compGenerate.root.findAllByProps({ className: 'img-fluid w-100' })
        expect(resultTxt).toHaveLength(text.length)
        expect(resultTitle).toHaveLength(1)
        expect(resultimg).toHaveLength(1)
    })
})
describe('testing Header', () => {
    const compHeader = renderer.create(<Header />)
    test('Should render without props', () => {
        const jsonHeader = compHeader.toJSON()
        expect(jsonHeader).toMatchSnapshot()
    })
    test('Should have 1 img, 1 title and 1 button', () => {
        const resultIMG = compHeader.root.findAllByProps({ className: 'imgheader' })
        const resultTitle = compHeader.root.findAllByProps({ className: 'py-4 h1' })
        const resultBtn = compHeader.root.findAllByProps({ className: 'botaoreg' })
        expect(resultIMG).toHaveLength(1)
        expect(resultTitle).toHaveLength(1)
        expect(resultBtn).toHaveLength(1)
    })
})
describe('testing ReduceWaste', () => {
    const compReduceWaste = renderer.create(<ReduceWaste />)
    test('Should render without props', () => {
        const jsonReduceWaste = compReduceWaste.toJSON()
        expect(jsonReduceWaste).toMatchSnapshot()
    })
    test('Should have 1 title and 2 cards', () => {
        const resultCARDS = compReduceWaste.root.findAllByProps({ className: 'textobaixo' })
        const resultTitle = compReduceWaste.root.findAllByProps({ className: 'h1 mt-5 py-4 text-muted' })
        expect(resultCARDS).toHaveLength(card.length)
        expect(resultTitle).toHaveLength(1)
    })
})
describe('Testing Reusing component', () => {
    const compReusing = renderer.create(<Reusing />)
    test('Should render without props', () => {
        const jsonReusing = compReusing.toJSON()
        expect(jsonReusing).toMatchSnapshot()
    })
    test('Should have 3 images and 1 title', () => {
        const resultIMG = compReusing.root.findAllByProps({ className: 'img-fluid' })
        const resultTitle = compReusing.root.findAllByProps({ className: 'h1 mt-5 py-4 text-muted' })
        expect(resultIMG).toHaveLength(3)
        expect(resultTitle).toHaveLength(1)
    })
})
