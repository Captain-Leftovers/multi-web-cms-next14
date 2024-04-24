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
			// Priority to items that are not sold and not upcoming
			if (!a.sold && !a.upcoming && (b.sold || b.upcoming)) {
				return -1 // a should come before b
			} else if (!b.sold && !b.upcoming && (a.sold || a.upcoming)) {
				return 1 // b should come before a
			}

			// Next, prioritize items that are upcoming but not sold
			if (!a.sold && a.upcoming && (b.sold || !b.upcoming)) {
				return -1 // a should come before b
			} else if (!b.sold && b.upcoming && (a.sold || !a.upcoming)) {
				return 1 // b should come before a
			}

			// Lastly, sold items
			if (a.sold && !b.sold) {
				return 1 // a is sold and b is not, a should come after b
			} else if (b.sold && !a.sold) {
				return -1 // b is sold and a is not, b should come after a
			}

			return 0 // If both are equal in terms of their grouping, maintain their order
		})

		return { motoItem, error: null }
	} catch (error) {
		console.error(error)
		return { motoItem: null, error }
	}
}
