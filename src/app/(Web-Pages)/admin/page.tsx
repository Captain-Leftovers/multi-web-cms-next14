import Container from "@/components/ui/container"
import { ArrowBigUp } from "lucide-react"


type pageProps = {
    
  }
export default function page({}: pageProps) {

    

return (
<Container className="my-10 px-4">
<div className="py-10 h-full">
					<ArrowBigUp
						className="mx-auto animate-bounce-slow transition"
						strokeWidth={1}
						size={100}
					/>
					<h1 className="text-xl md:text-4xl text-center px-2">
						Select What to Edit from the Navigation Menu
					</h1>
				</div>
</Container>
  )
}