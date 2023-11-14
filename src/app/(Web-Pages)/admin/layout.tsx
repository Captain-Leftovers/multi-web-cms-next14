import Navbar from '@/components/navigation/navbar'
import { RoutesType } from '@/lib/main.types'

const routerArr: RoutesType[] = [
	{
		href: '/admin',
		label: 'Home',
		description: 'Admin home page',
		targetSegment: 'admin',
	},

	{
		href: '/admin/user-access',
		label: 'Users Store Access',
		description: 'Manage user store access',
		targetSegment: 'user-access',
	},
]

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-white min-h-screen text-black flex flex-col">
			<Navbar title="Admin Dashborad" routesArr={routerArr} />
			{children}
		</div>
	)
}
