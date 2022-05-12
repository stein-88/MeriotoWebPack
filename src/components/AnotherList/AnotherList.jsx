import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import schema from './data'
import s from './AnotherList.scss'

const AnotherList = () => {
	const newSchema = schema.map((ele) => ({
		...ele,
		pubDate: new Date(ele.pubDate).getTime(),
	})).sort((a, b) => b.pubDate - a.pubDate)
	const [first] = newSchema
	const [theID, setTheID] = useState(first.id)

	const clickAhead = (id) => {
		if (!id) return null
		return setTheID(id)
	}

	const refer = newSchema.map((ele) => ele.id).indexOf(theID)
	const nextT = newSchema[refer + 1]
	const prevT = newSchema[refer - 1]
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-4">
					<p className="h1">Lista de titulo</p>
					{newSchema.map((ele, ind) => {
						const { title, id } = ele
						return (
							<section key={`keyanotherlist${ind + 1}`} className="w-100 mb-2">
								<span
									onClick={() => setTheID(id)}
									aria-hidden="true"
									className={`${s.bgsomething} ${theID === id ? s.bgselected : ''}`.trim()}
								>
									{title}
								</span>
							</section>
						)
					})}
				</div>
				<div className="col-12">
					<div className="row">
						<div
							className="col-6"
						>
							{prevT
								&& (
									<span
										className={s.cursorPointer}
										aria-hidden="true"
										onClick={() => {
											if (!prevT) return null
											return clickAhead(prevT.id)
										}}
									>
										{`<<  ${prevT.title}`}
									</span>
								)}
						</div>
						<div
							className="col-6"
						>
							{nextT
								&& (
									<span
										className={s.cursorPointer}
										onClick={() => {
											if (!nextT) return null
											return clickAhead(nextT.id)
										}}
										aria-hidden="true"
									>
										{`${nextT.title}  >>`}
									</span>
								)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnotherList
