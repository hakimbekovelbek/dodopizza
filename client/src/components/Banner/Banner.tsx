import axios from 'axios'

export interface IBannerProps {
	setIsAuthModalOpen: Function
}

export const Banner: React.FC<IBannerProps> = ({
	setIsAuthModalOpen,
}: IBannerProps) => {
	const modalOpenHandler = (): void => {
		axios.post('http://localhost:8085/', {
			msg: 'Hello from React',
		})
		setIsAuthModalOpen(true)
	}
	return (
		<>
			<button type='button' onClick={modalOpenHandler}>
				Войти
			</button>
		</>
	)
}
