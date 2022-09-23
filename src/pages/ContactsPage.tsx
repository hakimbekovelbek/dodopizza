import { Banner, NavigationBar, Container, Contacts, Footer } from 'components'
import { useState } from 'react'

export const ContactsPage: React.FC = () => {
	const [, setIsAuthModalOpen] = useState(false)
	return (
		<>
			<Container>
				<Banner setIsAuthModalOpen={setIsAuthModalOpen} />
				<NavigationBar />
                <Contacts />
			</Container>
			<Footer />
		</>
	)
}
