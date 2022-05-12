import React, { useState, useEffect, useRef } from 'react'
import s from './FakeDrop.scss'

const FakeDrop = ({
	selected, items, trocaTexto, dropClass, boxClass, itemClass, sectionClass,
}) => {
	const [mostrardrop, setMostrarDrop] = useState(false)
	const didMount = useRef(true)
	const refEle = useRef()
	const dropRef = useRef(mostrardrop)

	const changeDropRef = (param) => {
		dropRef.current = param
		return setMostrarDrop(param)
	}

	const outClick = (e) => {
		if (!e || !e.target) return null
		if (dropRef.current && refEle.current && !refEle.current.contains(e.target)) {
			return changeDropRef(false)
		}
		return null
	}

	useEffect(() => {
		document.body.addEventListener('mousedown', outClick)
		return () => {
			document.body.removeEventListener('mousedown', outClick)
			didMount.current = false
		}
	}, [])

	if (!items || !items.length || !trocaTexto) return null
	return (
		<section ref={refEle} className={`w-100 text-center ${sectionClass || ''}`}>
			<section
				onClick={() => changeDropRef(!mostrardrop)}
				aria-hidden="true"
				className={boxClass || s.caixinha}
			>
				<p className="mb-0">
					{selected || 'Select one'}
					{!boxClass && <span className="float-right">V</span>}
				</p>
			</section>
			{mostrardrop
				&& (
					<section className={dropClass || s.classedrop}>
						{items.map((ele, i) => (
							<p
								key={`cadaitem${i + 1}`}
								aria-hidden="true"
								onClick={() => {
									trocaTexto(ele)
									if (!mostrardrop) return null
									return changeDropRef(false)
								}}
								className={itemClass || s.item}
							>
								{ele}
							</p>
						))}
					</section>
				)}
		</section>
	)
}

export default FakeDrop
