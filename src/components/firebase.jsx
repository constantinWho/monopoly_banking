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

export { app, db }
