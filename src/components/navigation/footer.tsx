export default function Footer() {
	return (
		<footer className="bg-amber-300">
			<div className="mx-auto py-6">
				<p className="text-center text-xs text-black">
					&copy; {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	)
}
