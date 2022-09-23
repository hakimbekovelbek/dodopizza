import { NavigationBar, Container, Footer, Top, AuthModal } from 'components'
import { useState } from 'react'



export const AboutPage: React.FC = () => {
	const [isAuthModalOpen,setIsAuthModalOpen]=useState(false)
	return (
		<>
			<Container>
				<Top setIsAuthModalOpen={setIsAuthModalOpen}/>
				<AuthModal isAuthModalOpen={isAuthModalOpen} setIsAuthModalOpen={setIsAuthModalOpen}/>
				<NavigationBar />
			</Container>
			<Footer />
		</>
	)
}
