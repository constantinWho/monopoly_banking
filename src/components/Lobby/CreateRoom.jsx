import React from 'react'

const CreateRoom = ({ setIsInGame, setIsServer }) => {
	const createRoom = _ => {
		setIsInGame(true)
		setIsServer(true)
	}

	return (
		<div>
			<button onClick={createRoom}>Create Room</button>
		</div>
	)
}

export default CreateRoom
