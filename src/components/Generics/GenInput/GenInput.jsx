import React from 'react'

const GenInput = ({
	type,
	placeholder,
	value,
	onChange,
	id,
	lab,
	customClass,
	checked,
	name,
	labelClass,
	onFocus,
	onBlur,
	multiple,
	accept,
}) => {
	if (!id || !onChange || !type) return null
	if (type === 'radio' || type === 'checkbox') {
		return (
			<span>
				<section className="w-100 py-2">
					<input
						type={type}
						name={name}
						id={id}
						checked={checked}
						className={customClass || ''}
						onChange={onChange}
					/>
					{lab
						&& (
							<label
								className={`pl-2 ${labelClass || ''}`.trim()}
								htmlFor={id}
							>
								{lab}
							</label>
						)}
				</section>
			</span>
		)
	}
	if (type === 'textarea') {
		return (
			<textarea
				placeholder={placeholder}
				value={value || ''}
				onChange={onChange}
				className={`w-100 ${customClass || ''}`.trim()}
				id={id}
			/>
		)
	}
	if (type === 'file') {
		return (
			<input
				id={id}
				type="file"
				multiple={multiple}
				onChange={onChange}
				accept={accept}
				className={customClass || 'w-100'}
			/>
		)
	}
	return (
		<span>
			{lab && <p><label data-test={id} className={labelClass || ''} htmlFor={id}>{lab}</label></p>}
			<input
				type={type}
				placeholder={placeholder}
				value={value || ''}
				onChange={onChange}
				id={id}
				onFocus={onFocus}
				onBlur={onBlur}
				className={customClass || ''}
			/>
		</span>
	)
}

export default GenInput
