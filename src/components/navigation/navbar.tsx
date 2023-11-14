import Link from 'next/link'
import Container from '@/components/ui/container'
import MainNav from './main-nav'
import NavbarActions from './navbar-actions'
import getStoresWithAccess from '@/actions/getStoresWithAccess'
import { RoutesType } from '@/lib/main.types'
import { cn } from '@/lib/utils'

export const revalidate = 0




type NavbarProps = {
	routesArr: RoutesType[]
	title: string
	titleHref?: string
	className?: string
  }

export default async function Navbar({ routesArr,title, className }: NavbarProps) {
	const stores = (await getStoresWithAccess()) || []

	return (
		<div className={cn('z-50  h-16', className)}>
			<Container className="py-2">
				<Link href="/motorcycle-shop" className=" mx-auto">
					<p className="font-bold text-xl text-center">
						{title}
					</p>
				</Link>
				<div className="relative px-4 sm:px-6 lg:px-8 flex items-center justify-around">
					<MainNav stores={stores} routerArr={routesArr} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	)
}
