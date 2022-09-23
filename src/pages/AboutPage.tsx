import { Banner, NavigationBar, Container, Footer } from 'components'
import { useState } from 'react'

export const AboutPage: React.FC = () => {
	const [, setIsAuthModalOpen] = useState(false)
	return (
		<>
			<Container>
				<Banner setIsAuthModalOpen={setIsAuthModalOpen} />
				<NavigationBar />
			</Container>
			<Footer />
		</>
	)
}
