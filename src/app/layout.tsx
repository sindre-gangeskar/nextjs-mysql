import type { Metadata } from "next";
import { CssVarsProvider } from "@mui/joy";
import { Geist, Geist_Mono } from "next/font/google";
("@emotion/react");
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Next.js + Prisma",
	description: "Next.js application with Prisma as ORM (MySQL) demo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<CssVarsProvider defaultMode="dark">
					<ThemeProvider>
						<Navbar />
						{children}
					</ThemeProvider>
				</CssVarsProvider>
			</body>
		</html>
	);
}
