import React from 'react'

const Pay = () => {
	return (
		<div>
			<form>
				<label>
					Amount:
					<input type='tel' name='amount' />
				</label>
				<label>
					<input type='radio' name='pay' />
					Bank
				</label>
				<label>
					<input type='radio' name='pay' />
					All
				</label>
				<label>
					<input type='radio' name='pay' />
					Suat
				</label>
				<label>
					<input type='radio' name='pay' />
					Nicole
				</label>
			</form>
		</div>
	)
}

export default Pay
