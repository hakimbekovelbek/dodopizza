export interface IBannerProps {
	setIsAuthModalOpen: Function
}

export const Banner: React.FC<IBannerProps> = ({
	setIsAuthModalOpen,
}: IBannerProps) => {
	const modalOpenHandler = (): void => {
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
