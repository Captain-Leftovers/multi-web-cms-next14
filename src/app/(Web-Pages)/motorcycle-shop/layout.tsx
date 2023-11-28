import Navbar from '@/components/navigation/navbar'
import { RoutesType } from '@/lib/main.types'

const routerArr: RoutesType[] = [
	{
		href: '/motorcycle-shop',
		label: 'Home',
		targetSegment: null,
	},
	{
		href: '/motorcycle-shop/motorcycles',
		label: 'Motorcycles',
		description:
			'Click here to see all the motorcycles you uploaded and add new ones',
		targetSegment: 'motorcycles',
	},
]

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className='flex flex-col min-h-[100svh]'>
			<Navbar routesArr={routerArr} title="Motorcycle shop"/>
			{children}
		</div>
	)
}


