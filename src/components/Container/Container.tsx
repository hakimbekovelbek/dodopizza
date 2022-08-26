export interface IContainer {
	children: JSX.Element
}

export const Container: React.FC<IContainer> = ({ children }: IContainer) => (
	<div className='container'>{children}</div>
)
