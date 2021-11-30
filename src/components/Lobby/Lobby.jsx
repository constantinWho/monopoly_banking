import React, { useContext } from 'react'
import JoinRoom from './JoinRoom'
import CreateRoom from './CreateRoom'

const Lobby = props => {
	return (
		<div>
			<JoinRoom />
			<CreateRoom />
		</div>
	)
}

export default Lobby
