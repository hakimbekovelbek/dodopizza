export interface IContainer {
	children: any
}

export const Container: React.FC<IContainer> = ({ children }: IContainer) => (
	<div className='container'>{children}</div>
)
