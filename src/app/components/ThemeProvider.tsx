"use client";
import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy";
import { useState, useEffect } from "react";

const theme = extendTheme();

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [isHydrated, setIsHydrated] = useState(false);
	useEffect(() => {
		setIsHydrated(true);
	}, []);

	if (!isHydrated) return null;

  return (
    <CssVarsProvider theme={theme} defaultColorScheme={"dark"} modeStorageKey="joy-mode">{children}</CssVarsProvider>
  )
}
