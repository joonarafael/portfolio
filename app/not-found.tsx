import Link from "next/link";
import { IoIosArrowDropleft } from "react-icons/io";

import ClientOnly from "@/components/clientonly";
import EmptyState from "@/components/emptystate";
import { Button } from "@/components/ui/button";

const NotFound = () => {
	return (
		<ClientOnly>
			<EmptyState>
				<div className="flex flex-col gap-12 items-center justify-center">
					<h1 className="text-4xl font-extrabold">404</h1>
					<p>This is not the page you are looking for.</p>
					<Link href="/">
						<Button className="w-min items-center gap-2">
							<IoIosArrowDropleft className="w-4 h-4" />
							<p>Return home</p>
						</Button>
					</Link>
				</div>
			</EmptyState>
		</ClientOnly>
	);
};

export default NotFound;
