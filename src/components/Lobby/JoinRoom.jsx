import React from 'react'

const JoinRoom = ({ setIsInGame, setIsServer, setName, name }) => {
	const handleSubmit = event => {
		event.preventDefault()

		if (name) {
			console.log(name)
			setIsInGame(true)
			setIsServer(false)
		} else return
		console.log('I love coding')
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						onChange={e => setName(e.target.value)}
						type='text'
						name='name'
						value={name}
					/>
				</label>
				<label>
					Room Code:
					<input
						type='tel'
						name='room-id'
						maxLength='3'
						pattern='\d+'
					/>
				</label>
				<button type='submit'>Join</button>
			</form>
		</div>
	)
}

export default JoinRoom
