import React, { useState, useMemo, useEffect } from 'react'
import ClientGame from './Game/ClientGame'
import ServerGame from './Game/ServerGame'
import Lobby from './Lobby/Lobby'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { db } from './firebase'
import { MonopolyContext } from '../contexts/MonopolyContext'

const Monopoly = props => {
	const [name, setName] = useState('')
	const monopolyProviderValue = useMemo(_ => ({ name, setName, db }), [name])

	return (
		<MonopolyContext.Provider value={monopolyProviderValue}>
			<Router>
				<Routes>
					<Route path='/server/:roomCode' element={<ServerGame />} />
					<Route path='/client/:roomCode' element={<ClientGame />} />
					<Route path='/' element={<Lobby />} />
				</Routes>
			</Router>
		</MonopolyContext.Provider>
	)
}

export default Monopoly
