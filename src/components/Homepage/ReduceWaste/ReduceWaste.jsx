import React from 'react'
import schema from './data'
import s from './ReduceWaste.scss'

const ReduceWaste = () => {
	const { titulo, card } = schema
	return (
		<section>
			<div className="row">
				<div className="col-12">
					{titulo && <h2 className="h1 mt-5 py-4 text-muted">{titulo}</h2>}
				</div>
			</div>
			<div className="row">
				{card && card.length > 0 && card.map((ele, i) => (
					<div
						key={`reducew ${i + 1}`}
						className="col-lg-6 col-sm-12 col-md-12"
					>
						<section className={s.sectionobrigatoria}>
							{ele && ele.link
								&& (
									<a href={ele.link}>
										<section className={`position-relative ${s.seccard} ${ele.classesec || ''}`}>
											<section className={s.textobaixo}>
												<h3 className="h2 pl-4 pr-4 text-white">
													{ele.titulo && <strong>{ele.titulo}</strong>}
												</h3>
												{ele.text
													&& (
														<section className="text-right w-100">
															<span className={`mr-4 ${s.stylespan}`}>{ele.text}</span>
														</section>
													)}
											</section>
										</section>
									</a>
								)}
						</section>
					</div>
				))}
			</div>
		</section>
	)
}

export default ReduceWaste
