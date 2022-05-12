import React from 'react'
import noimg from '@images/noimage.png'
import schema from './data'
import s from './Fpart.scss'

const Fpart = ({ name, images, product_url }) => {
	if (!schema) return null
	const { sname } = schema
	return (
		<div className="col-4">
			<section className="w-100">
				{name && product_url
					&& (
						<p>
							<small>
								<strong>
									{sname}
									<a href={product_url} target="_blank" rel="noreferrer">
										{' '}
										{name}
									</a>
								</strong>
							</small>
						</p>
					)}
				<img
					className={s.reimg}
					src={(images && images[0] && images[0].url) || noimg}
					alt=""
				/>
			</section>
		</div>
	)
}

export default Fpart
