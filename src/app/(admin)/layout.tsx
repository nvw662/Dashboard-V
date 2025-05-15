"use client";

import React from "react";
import {
    Box,
    CssBaseline,
    ThemeProvider,
    createTheme,
    SxProps,
    Theme
} from "@mui/material";
import Sidebar from "../components/sidebar/SideBarAdmin";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { usePathname, useRouter } from "next/navigation";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1a2027',
            paper: '#2d3748',
        },
        text: {
            primary: '#e2e8f0',
            secondary: '#a0aec0',
        },
        divider: '#4a5568',
        primary: {
            main: '#90cdf4',
        },
    },
    shape: {
        borderRadius: 8,
    },
    spacing: 8,
    typography: {
        fontFamily: 'inherit',
        h1: { fontSize: '2.2rem', fontWeight: 600 },
        h2: { fontSize: '1.8rem', fontWeight: 600 },
        h3: { fontSize: '1.5rem', fontWeight: 500 },
    },
});

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    const drawerWidth = 260;
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (path: string) => {
        if (path !== pathname) {
            router.push(path);
        }
    };

    const headerSx: SxProps<Theme> = {
        borderBottom: `1px solid ${darkTheme.palette.divider}`,
    };

    const footerSx: SxProps<Theme> = {
        borderTop: `1px solid ${darkTheme.palette.divider}`,
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
                <Sidebar
                    drawerWidth={drawerWidth}
                    currentPathname={pathname}
                    onNavigate={handleNavigation}
                />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        width: `calc(100% - ${drawerWidth}px)`,
                        bgcolor: 'background.default',
                    }}
                >
                    <Box component="header" sx={headerSx}>
                        <Header />
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            p: 3,
                            overflowY: 'auto',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        {children}
                    </Box>

                    <Box component="footer" sx={footerSx}>
                        <Footer />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
