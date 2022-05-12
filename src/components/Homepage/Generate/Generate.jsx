import React from 'react'
import pc from '@images/homepc.png'
import schema from './data'
import s from './Generate.scss'

const Generate = () => {
	const { titulo, text } = schema
	return (
		<div className="row">
			<div className="col-12 text-muted">
				{titulo && <h2 className="h1 py-5 mb-0">{titulo}</h2>}
				<div className="col-12">
					<section className={`w-100 ${s.blocopc}`}>
						<div className="row">
							<div className="col-12 col-xl-8 col-lg-6 py-4 text-white">
								{text && text.length > 0 && text.map((ele, i) => (
									<p key={`generate ${i + 1}`} className="h3 mb-4">{ele}</p>
								))}
							</div>
							{pc
								&& (
									<div className="col-12 col-xl-4 col-lg-6">
										<img className="img-fluid w-100" src={pc} alt="pc" />
									</div>
								)}
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}

export default Generate
