import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { ref, get, push } from 'firebase/database'
import { MonopolyContext } from '../../contexts/MonopolyContext'
import { useNavigate } from 'react-router-dom'

const JoinRoom = _ => {
	const { name, setName, db } = useContext(MonopolyContext)
	let [roomCode, setRoomCode] = useState('')
	let navigate = useNavigate()

	const handleSubmit = event => {
		event.preventDefault()

		if (name) {
			get(ref(db, `lobbies/${roomCode}`)).then(ss => {
				const val = ss.val()
				if (val && val.roomExists) {
					push(ref(db, `lobbies/${roomCode}/users`), {
						name,
					}).then(_ => {
						navigate(`client/${roomCode}`)
					})
				} else {
					alert("Room Code doesn't exist")
				}
			})
		}
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<TextField
						variant='standard'
						onChange={e => setName(e.target.value)}
						type='text'
						name='name'
						value={name}
					/>
				</label>
				<label>
					Room Code:
					<TextField
						variant='standard'
						onChange={e => setRoomCode(e.target.value)}
						value={roomCode}
						type='tel'
						name='room-id'
						maxLength='3'
						pattern='\d+'
					/>
				</label>
				<Button variant='contained' type='submit'>
					Join
				</Button>
			</form>
		</div>
	)
}

export default JoinRoom
