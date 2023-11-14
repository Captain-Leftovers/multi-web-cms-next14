import prismadb from '@/lib/prismadb'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function getStoresWithAccess() {
	const user = await currentUser()
	const userId = user?.id
	if (!userId) {
		redirect('/')
	}

	try {
		const stores = await prismadb.userStore.findMany({
			where: {
				userId: userId,
			},
			include: {
				store: true,
			},
		})

		const formattedStores = stores.map((store) => {
			return store.store
		})

		if (!formattedStores) {
			return []
		}
		return formattedStores
	} catch (error) {
		console.error(error)
	}
}
