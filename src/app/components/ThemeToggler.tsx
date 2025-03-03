"use client"
import { Button } from "@mui/joy";
import { useColorScheme, extendTheme } from "@mui/joy";

export default function ThemeToggler() {
	const { mode, setMode } = useColorScheme();

	const toggle = () => {
		mode === "dark" ? setMode("light") : setMode("dark");
	};

	return <Button variant="soft" color="neutral" onClick={toggle}>{mode}</Button>
}
