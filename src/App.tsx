import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage, AboutPage, ContactsPage } from 'pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
	{
		path: '/contacts',
		element: <ContactsPage/>,
	},
])

const App: React.FC = () => {
	return <RouterProvider router={router} />
}

export default App
