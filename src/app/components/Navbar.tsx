"use client";
import { Stack, Button } from "@mui/joy";
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
	const currentPath = usePathname();
	const routes = [
		{ name: "Home", path: "/" },
		{ name: "Products", path: "/products" },
	];
	return (
		<Stack direction={"row"} mx={"auto"} width={"100%"} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", p: 2 }}>
			<Stack direction={'row'} gap={2}>
				{routes.map(x => (
					<Button key={x.name} variant={currentPath === x.path ? "solid" : "soft"} component={Link} href={x.path}>
						{x.name}
					</Button>
				))}
			</Stack>
			<Stack>
				<ThemeToggler />
			</Stack>
		</Stack>
	);
}
