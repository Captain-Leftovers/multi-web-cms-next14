'use client'

import { Modal } from '@/components/ui/modal'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { InfoIcon, Trash } from 'lucide-react'

type FormInfoProps = {
	open: boolean
	onClose: () => void
}
export default function FormInfo({ open = false, onClose }: FormInfoProps) {
	return (
		<Modal
			title=""
			description=""
			isOpen={open}
			onClose={onClose}
			className="max-w-fit w-[calc(100%-4rem)] max-h-[calc(100dvh-4rem)] lg:w-fit lg:max-w-[50vw] overflow-y-auto overflow-x-hidden rounded-lg pt-0"
		>
			<div
				className="grid grid-cols-3 gap-y-4"
				style={{ gridTemplateColumns: 'auto' }}
			>
				<div className="col-span-3 flex flex-col justify-center items-center">
					<InfoIcon size={32} className="text-black" />
					<h1 className="text-black text-center font-semibold text-lg mt-2">
						Info
					</h1>
					<p className="text-black text-center font-normal mt-2">
						This is a form for adding a new motorcycle to the
						database.
						<br /> The required fields are <b>Make</b>
					</p>
				</div>
				<Separator className="col-span-3 " />
				<div className="col-span-1 flex flex-col justify-around gap-4">
					<span className="bg-violet-500 w-fit rounded-md px-2 py-1 text-white font-semibold whitespace-nowrap">
						Set Cover
					</span>
				</div>
				<Separator
					orientation="vertical"
					className="h-auto mx-4 col-span-1"
				/>
				<p className="col-span-1">
					Sets the cover image for the item.
					<br />
					Adds the tag{' '}
					<span className="bg-green-500 w-fit rounded-md px-2 py-1 text-white font-semibold whitespace-nowrap">
						Cover
					</span>
					to the cover image.
				</p>
				<Separator className="col-span-3" />

				<div className="col-span-1 flex flex-col justify-around gap-4">
					<Switch defaultChecked />
					<span className="bg-green-500 w-fit rounded-md px-2 py-1 text-black font-semibold whitespace-nowrap">
						Featured
					</span>
				</div>
				<Separator
					orientation="vertical"
					className="h-auto mx-4 col-span-1"
				/>
				<section className="col-span-1">
					<p>
						Adds the Item to{' '}
						<b className="whitespace-nowrap">Moto-Repair </b>
						website
					</p>
				</section>
				<Separator className="col-span-3" />

				<div className="col-span-1 flex flex-col justify-around gap-4">
					<Switch defaultChecked />
					<span className="bg-cyan-400 w-fit rounded-md px-2 py-1 text-black font-semibold whitespace-nowrap">
						Upcoming
					</span>
				</div>
				<Separator
					orientation="vertical"
					className="h-auto mx-4 col-span-1"
				/>
				<p className="col-span-1">
					Marks the item as{' '}
					<b>
						<i>Upcoming.</i>
					</b>
					The Item will still appear in the{' '}
					<b className="whitespace-nowrap">Moto-Repair </b>
					website but with a
					<div className="text-center my-1  w-fit px-2 z-50 bg-cyan-400 font-semibold">
						Скоро се очаква в наличност
					</div>
					tag if marked as{' '}
					<span className="bg-green-500 w-fit rounded-md px-2 py-1 text-black font-semibold whitespace-nowrap">
						Featured
					</span>{' '}
					.
				</p>

				<Separator className="col-span-3" />

				<div className="col-span-1 flex flex-col justify-around gap-4">
					<Switch defaultChecked />
					<span className="bg-yellow-300 w-fit rounded-md px-2 py-1 text-black font-semibold whitespace-nowrap">
						On Hold
					</span>
				</div>
				<Separator
					orientation="vertical"
					className="h-auto mx-4 col-span-1"
				/>
				<p className="col-span-1">
					Marks the item as{' '}
					<b>
						<i>On Hold.</i>
					</b>
					The Item will still appear in the{' '}
					<b className="whitespace-nowrap">Moto-Repair </b>
					website but with a
					<div className="text-center my-1  w-fit px-2 z-50 bg-yellow-300 font-semibold">
						Резервиран
					</div>
					tag if marked as{' '}
					<span className="bg-green-500 w-fit rounded-md px-2 py-1 text-black font-semibold whitespace-nowrap">
						Featured
					</span>{' '}
					.
				</p>
				<Separator className="col-span-3" />

				<div className=" col-span-1 flex flex-col justify-around gap-4">
					<Switch defaultChecked />
					<span className="bg-red-500 w-fit rounded-md px-2 py-1 text-black font-semibold whitespace-nowrap">
						Sold
					</span>
				</div>
				<Separator
					orientation="vertical"
					className="h-auto mx-4 col-span-1"
				/>
				<section className="col-span-1">
				<p className="col-span-1">
					Marks the item as{' '}
					<b>
						<i>.</i>
					</b>
					The Item will still appear in the{' '}
					<b className="whitespace-nowrap">Moto-Repair </b>
					website but with a
					<div className="text-center my-1  w-fit px-2 z-50 bg-red-500 font-semibold">
						Продаден
					</div>
					tag if marked as{' '}
					<span className="bg-green-500 w-fit rounded-md px-2 py-1 text-black font-semibold whitespace-nowrap">
						Featured
					</span>{' '}
					.
				</p>
				</section>

				<Separator className="col-span-3" />

				<div className="col-span-1 flex flex-col justify-around gap-4">
					<span className="flex justify-center items-center bg-red-500 rounded-md h-10 w-10 px-2 py-2 text-white font-semibold whitespace-nowrap">
						<Trash className="w-4 h-4" />
					</span>
				</div>
				<Separator
					orientation="vertical"
					className="h-auto mx-4 col-span-1"
				/>
				<p className="col-span-1">
					Deletes the Item from the database{' '}
				</p>
			</div>
		</Modal>
	)
}
