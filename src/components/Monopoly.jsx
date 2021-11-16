import React, { useState } from 'react'
import ClientGame from './Game/ClientGame'
import ServerGame from './Game/ServerGame'
import Lobby from './Lobby/Lobby'

const Monopoly = () => {
	const [isServer, setIsServer] = useState(false)
	const [isInGame, setIsInGame] = useState(false)
	const [name, setName] = useState('')

	return (
		<div>
			{isInGame ? (
				isServer ? (
					<ServerGame />
				) : (
					<ClientGame name={name} />
				)
			) : (
				<Lobby
					name={name}
					setName={setName}
					setIsInGame={setIsInGame}
					setIsServer={setIsServer}
				/>
			)}
		</div>
	)
}

export default Monopoly
