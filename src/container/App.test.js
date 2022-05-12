import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'
import schemawaste from '../components/HomePage/ReduceWaste/data'
import schemaGenerate from '../components/HomePage/Generate/data'
const { text } = schemaGenerate
const { card } = schemawaste

describe('testing App', () => {
	const compHomePage = renderer.create(<App />)
	test('Should render without props', () => {
		const jsonHomePage = compHomePage.toJSON()
		expect(jsonHomePage).toMatchSnapshot()
	})
	
    test('Sould have a text', () => {
        const Result = compHomePage.root.findAllByProps({ className: "py-5 text-center text-white" })
        expect(Result).toHaveLength(1)
    })
	test('Should have 1 title and 2 cards', () => {
		const resultTitle = compHomePage.root.findAllByProps({ className: 'h1 pt-5' })
		const resultTxt = compHomePage.root.findAllByProps({ className: 'h3 my-4' })
		expect(resultTxt).toHaveLength(2)
		expect(resultTitle).toHaveLength(1)
	})
	test('Should have 1 img, 1 title and 2 texts', () => {
		const resultTxt = compHomePage.root.findAllByProps({ className: 'h3 mb-4' })
		const resultTitle = compHomePage.root.findAllByProps({ className: 'h1 py-5 mb-0' })
		const resultimg = compHomePage.root.findAllByProps({ className: 'img-fluid w-100' })
		expect(resultTxt).toHaveLength(text.length)
		expect(resultTitle).toHaveLength(1)
		expect(resultimg).toHaveLength(1)
	})
	test('Should have 1 img, 1 title and 1 button', () => {
		const resultIMG = compHomePage.root.findAllByProps({ className: 'imgheader' })
		const resultTitle = compHomePage.root.findAllByProps({ className: 'py-4 h1' })
		const resultBtn = compHomePage.root.findAllByProps({ className: 'botaoreg' })
		expect(resultIMG).toHaveLength(1)
		expect(resultTitle).toHaveLength(1)
		expect(resultBtn).toHaveLength(1)
	})
	test('Should have 1 title and 2 cards', () => {
		const resultCARDS = compHomePage.root.findAllByProps({ className: 'textobaixo' })
		expect(resultCARDS).toHaveLength(card.length)
	})
	test('Should have 3 images and 2 title', () => {
		const resultIMG = compHomePage.root.findAllByProps({ className: 'img-fluid' })
		const resultTitle = compHomePage.root.findAllByProps({ className: 'h1 mt-5 py-4 text-muted' })
		expect(resultIMG).toHaveLength(3)
		expect(resultTitle).toHaveLength(2)
	})
})