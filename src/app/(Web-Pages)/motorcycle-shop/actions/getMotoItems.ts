import prismadb from '@/lib/prismadb'

export async function getAllMotoItems() {
	try {
		const motoItem = await prismadb.motoItem.findMany({
			where: {},
			include: {
				images: true,
			},
			orderBy: {
				createdAt: 'desc',
			},
		})

		motoItem.sort((a, b) => {
			// Priority 1: Featured only
			if (
				a.featured &&
				!a.upcoming &&
				!a.onHold &&
				!a.sold &&
				!(b.featured && !b.upcoming && !b.onHold && !b.sold)
			) {
				return -1
			}
			if (
				b.featured &&
				!b.upcoming &&
				!b.onHold &&
				!b.sold &&
				!(a.featured && !a.upcoming && !a.onHold && !a.sold)
			) {
				return 1
			}

			// Priority 2: Upcoming
			if (a.upcoming && !b.upcoming) {
				return -1
			}
			if (b.upcoming && !a.upcoming) {
				return 1
			}

			// Priority 3: OnHold
			if (a.onHold && !b.onHold) {
				return -1
			}
			if (b.onHold && !a.onHold) {
				return 1
			}

			// Priority 4: Sold
			if (a.sold && !b.sold) {
				return -1
			}
			if (b.sold && !a.sold) {
				return 1
			}

			return 0 // Keep original order if none of the above conditions met
		})

		return { motoItem, error: null }
	} catch (error) {
		console.error(error)
		return { motoItem: null, error }
	}
}
