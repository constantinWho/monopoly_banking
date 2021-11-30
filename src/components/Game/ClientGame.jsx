import React, { useContext } from 'react'
import Pay from './Pay'
import Get from './Get'
import { MonopolyContext } from '../../contexts/MonopolyContext'

const ClientGame = () => {
	const { name, setName, db } = useContext(MonopolyContext)

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

export default ClientGame
