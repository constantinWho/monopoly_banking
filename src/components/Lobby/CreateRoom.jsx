import LoadingButton from '@mui/lab/LoadingButton'
import Button from '@mui/material/Button'
import { get, ref, set } from 'firebase/database'
import React, { useState } from 'react'

const CreateRoom = ({ db, setIsInGame, setIsServer }) => {
	let [loading, setLoading] = useState(false)

	const generateRoomCode = _ => {
			return [0, 0, 0].map(_ => Math.floor(Math.random() * 10)).join('')
		},
		createRoom = _ => {
			setLoading(true)
			get(ref(db, 'lobbies')).then(ss => {
				let val = ss.val()
				if (val === null) {
					val = {}
				}
				let roomCode = generateRoomCode()
				for (let i = 0; i < 10000; i++) {
					if (val[roomCode]) {
						roomCode = generateRoomCode()
					}
				}

				set(ref(db, `lobbies/${roomCode}`), {
					roomExists: true,
				}).then(_ => {
					setIsInGame(roomCode)
					setIsServer(true)

					setLoading(false)
				})
			})
		}

	const ButtonElement = props => {
		return React.createElement(loading ? LoadingButton : Button, props)
	}

	return (
		<div>
			<ButtonElement loading variant='contained' onClick={createRoom}>
				Create Room
			</ButtonElement>
		</div>
	)
}

export default CreateRoom
