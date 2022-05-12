import React, { useState, useEffect } from 'react'
import { doingAll, totop, tobottom } from '@utils'
import { REACT_APP_API_DERICK } from '@constant'
import Pagination from '@generics/Pagination'
import SpinnerGen from '@generics/SpinnerGen'
import FakeDrop from '@generics/FakeDrop'
// import { v4 as uuidv4 } from 'uuid'
import Btn from '@generics/Btn'
import JustOne from './JustOne'
import schema from './data'
import s from './NewShow.scss'

const NewShow = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [allProducts, setAllProducts] = useState(undefined)
	const [selectedPage, setSelectedPage] = useState(1)
	const [NumPerPage, setNumPerPage] = useState(20)

	const fLoad = async (param) => {
		const goingWork = await doingAll(
			`${REACT_APP_API_DERICK}/${param || ''}`,
			'get',
		)
		if (!goingWork) return setIsLoading(false)
		setIsLoading(false)
		setAllProducts(goingWork)
		return totop()
	}

	const setSelectPage = (page, param) => {
		if (!page || (page === selectedPage && !param)) return null
		const urlFinal = `?page=${page}${NumPerPage === 20 ? '' : `&page_size=${NumPerPage}`}`.trim()
		setSelectedPage(page)
		setIsLoading(true)
		return fLoad(urlFinal)
	}

	const perPageNum = (param) => {
		if (!param || param === NumPerPage) return null
		setNumPerPage(param)
		return setSelectPage(1, true)
	}

	useEffect(() => {
		fLoad()
	}, [])

	if (!schema) return null
	const {
		errornot, bottom, toTop, pperpage,
	} = schema
	const { results, count } = allProducts || {}
	if (isLoading) return <SpinnerGen resizing />
	if (!results || !results.length) {
		return (
			<section className={`w-100 ${s.sizing}`}>
				<h2 className="text-center py-5">{errornot}</h2>
			</section>
		)
	}
	const minhaNavigation = (
		<Pagination
			count={count}
			perPage={NumPerPage}
			setSelectPage={setSelectPage}
			selectedPage={selectedPage}
			pageToShow={7}
		/>
	)
	return (
		<section className={`w-100 py-5 ${s.sizing}`}>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<Btn onClick={tobottom} text={bottom} />
					</div>
					{pperpage
						&& (
							<div className="col-2">
								<span>{pperpage}</span>
							</div>
						)}
					<div className="col-3">
						<section className="w-100 position-relative">
							<FakeDrop
								items={[20, 50, 100]}
								trocaTexto={perPageNum}
								selected={NumPerPage}
								boxClass={s.boxClass}
								dropClass={s.dropClass}
								itemClass={s.itemClass}
								sectionClass={s.sectionClass}
							/>
						</section>
					</div>
					<div className="col-12 py-3">
						{minhaNavigation}
					</div>
					{results.map((ele, ind) => (
						<div key={`keyresult${ind + 1}`} className="col-12">
							<section className={`w-100 p-3 ${ind % 2 === 0 ? s.tableThing : s.tableThingAfter}`}>
								<JustOne {...ele} />
							</section>
						</div>
					))}
					<div className="col-12">
						<section className="w-100 pt-4">
							{minhaNavigation}
						</section>
					</div>
					<Btn onClick={totop} text={toTop} />
				</div>
			</div>
		</section>
	)
}

export default NewShow
