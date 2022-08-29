import { Banner, NavigationBar, Container } from 'components'
import React from 'react'

const App: React.FC = () => {
	return (
		<Container>
			<Banner />
			<NavigationBar />
		</Container>
	)
}

export default App
