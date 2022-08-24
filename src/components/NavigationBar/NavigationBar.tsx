import { NAVBAR_CONFIG } from '../../constants'

export const NavigationBar: React.FC = () => {
	return (
		<div className='header_nav_menu'>
			<div className='center'>
				<ul className='nav_menu_list'>
					{NAVBAR_CONFIG.map(item => (
						<li className='menu_list_item' key={item.label}>
							<a href={'/' + item.link} className='menu_list_item_link'>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className='menu_right'>
				<div className='navBtn'>
					<button className='menuBtn'>Корзина</button>
				</div>
			</div>
		</div>
	)
}
