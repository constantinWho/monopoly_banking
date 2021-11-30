import React from 'react'
import { useParams } from 'react-router-dom'
import { MonopolyContext } from '../../contexts/MonopolyContext'

const ServerGame = props => {
	const params = useParams()
	return (
		<div>
			ROOMCODE: {params.roomCode}
			<label></label>
		</div>
	)
}

export default ServerGame
