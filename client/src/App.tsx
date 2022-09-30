import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomePage, AboutPage } from 'pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
])

const App: React.FC = () => {
	return <RouterProvider router={router} />
}

export default App
