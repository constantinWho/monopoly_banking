import React, { useState } from 'react'
import ClientGame from './Game/ClientGame'
import ServerGame from './Game/ServerGame'
import Lobby from './Lobby/Lobby'

import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const app = initializeApp({
		apiKey: 'AIzaSyATLPyOf-4xfar5L6sPcCJuts8HdkQ3ESY',
		authDomain: 'monopoly-f6829.firebaseapp.com',
		databaseURL:
			'https://monopoly-f6829-default-rtdb.europe-west1.firebasedatabase.app',
		projectId: 'monopoly-f6829',
		storageBucket: 'monopoly-f6829.appspot.com',
		messagingSenderId: '345529054406',
		appId: '1:345529054406:web:92109f91aaf984cf2853c7',
		measurementId: 'G-4GXZXT3Y9R',
	}),
	db = getDatabase(app)

const Monopoly = () => {
	const [isServer, setIsServer] = useState(false)
	const [isInGame, setIsInGame] = useState('')
	const [name, setName] = useState('')

	return (
		<div>
			{isInGame !== '' ? (
				isServer ? (
					<ServerGame roomCode={isInGame} />
				) : (
					<ClientGame roomCode={isInGame} name={name} />
				)
			) : (
				<Lobby
					name={name}
					setName={setName}
					setIsInGame={setIsInGame}
					setIsServer={setIsServer}
					db={db}
				/>
			)}
		</div>
	)
}

export default Monopoly
