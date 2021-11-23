import React from 'react'
import JoinRoom from './JoinRoom'
import CreateRoom from './CreateRoom'

const Lobby = ({ db, setIsInGame, setIsServer, setName, name }) => {
	return (
		<div>
			<JoinRoom
				db={db}
				setIsInGame={setIsInGame}
				setIsServer={setIsServer}
				setName={setName}
				name={name}
			/>
			<CreateRoom
				db={db}
				setIsInGame={setIsInGame}
				setIsServer={setIsServer}
			/>
		</div>
	)
}

export default Lobby
