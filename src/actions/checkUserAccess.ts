import { Store } from '@prisma/client'

export default function checkUserAccess(
	accessStores: Store[],
	path: string
) {
	if (accessStores?.some((store) => store.path === path)) {
		return true
	} else {
		
		return false
	}

	
}
