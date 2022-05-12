import React, { useState, useEffect, useRef } from 'react'
import GenInput from '../GenInput'
import s from './FakeDropFilter.scss'

const FakeDropFilter = ({
	classItems,
	classBox,
	trocaTexto,
	listaSchema,
	value,
	customClass,
	id,
	placeholder,
	onChange,
}) => {
	const [mostrardrop, setMostrarDrop] = useState(false)
	const didMount = useRef(true)
	const refElement = useRef()
	const dropRef = useRef(mostrardrop)

	const changeDropRef = (param) => {
		dropRef.current = param
		return setMostrarDrop(param)
	}

	const outClick = (e) => {
		if (!e || !e.target) return null
		if (dropRef.current && refElement.current && !refElement.current.contains(e.target)) {
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

	if (!listaSchema || !listaSchema.length || !id || !trocaTexto || !onChange) return null
	const resultado = listaSchema.filter((ele) => ele.toLowerCase().includes(value.toLowerCase()))
	return (
		<section ref={refElement} className="w-100">
			<GenInput
				type="text"
				placeholder={placeholder}
				value={value || ''}
				id={id}
				onChange={onChange}
				className={`w-100 ${s.classedrop || customClass}`}
				onFocus={() => {
					if (mostrardrop) return null
					return changeDropRef(true)
				}}
			/* onBlur={() => setTimeout(() => {
				if (didMount.current) return setMostrarDrop(false)
				return null
			}, 1000)} */
			/>
			{mostrardrop
				&& (
					<section className={s.caixinha || classBox}>
						{resultado && resultado.length > 0
							? resultado.map((ele) => (
								<p
									key={ele + 1}
									onClick={() => {
										trocaTexto(ele)
										return changeDropRef(false)
									}}
									aria-hidden="true"
									className={s.item || classItems}
								>
									{ele}
								</p>
							))
							: <p>Nenhum resultado encontrado</p>}
					</section>
				)}
		</section>
	)
}

export default FakeDropFilter
