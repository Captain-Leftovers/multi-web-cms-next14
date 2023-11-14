'use client'

import { RoutesType } from '@/lib/main.types'
import { Store } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Sun } from 'lucide-react'
import { usePickStoreModal } from '@/hooks/use-pick-store-modal'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
} from '@/components/ui/tooltip'
import { TooltipTrigger } from '@radix-ui/react-tooltip'

import { redirect, usePathname } from 'next/navigation'
import NavigationLink from './navigation-link'
import checkUserAccess from '@/actions/checkUserAccess'



type MainNavProps = {
	routerArr: RoutesType[]
	stores: Store[]
}
export default function MainNav({ stores,routerArr }: MainNavProps) {
	const storeModal = usePickStoreModal()

	const path = usePathname().split('/')[1]



	if(!checkUserAccess(stores,path)){
		redirect('/')
	}

	return (
		<nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
			<div className="flex items-center">
				<Button
					variant={'link'}
					className="p-0 decoration-2"
					onClick={() => storeModal.onOpen(stores)}
				>
					<ChevronLeft />
					Stores
					<ChevronRight />
				</Button>
			</div>
			{routerArr.map((route) => (
				<NavigationLink
					key={route.href}
					href={route.href}
					targetSegment={route.targetSegment}
					className="relative group text-sm font-medium transition-colors hover:text-black"
				>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger> {route.label}</TooltipTrigger>
							{!!route.description && (
								<TooltipContent>
									{route.description}
								</TooltipContent>
							)}
						</Tooltip>
					</TooltipProvider>
				</NavigationLink>
			))}
		</nav>
	)
}
