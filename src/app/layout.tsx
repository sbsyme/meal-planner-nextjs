import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Footer from "@/components/footer/Footer";
import {ThemeModeScript} from "flowbite-react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Meal Planner",
    description: "Generate customized meal plans",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <ThemeModeScript/>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900`}
        >
        <NavbarComponent/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
