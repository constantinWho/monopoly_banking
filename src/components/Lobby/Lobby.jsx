import React from 'react'
import JoinRoom from './JoinRoom'
import CreateRoom from './CreateRoom'

const Lobby = ({ setIsInGame, setIsServer, setName, name }) => {
	return (
		<div>
			<JoinRoom
				setIsInGame={setIsInGame}
				setIsServer={setIsServer}
				setName={setName}
				name={name}
			/>
			<CreateRoom setIsInGame={setIsInGame} setIsServer={setIsServer} />
		</div>
	)
}

export default Lobby
