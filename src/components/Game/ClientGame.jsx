import React from 'react'
import Pay from './Pay'
import Get from './Get'

const ClietGame = ({ name }) => {
	return (
		<div>
			<label>{name}</label>
			<p>1.387 M</p>
			<Pay />
			<hr />
			<Get />
		</div>
	)
}

export default ClietGame
