'use client';

import React from "react";

export default function Footer() {
    return (
        <>
            <footer
                className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-900 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© Created by <a
        href="https://github.com/sbsyme"
        className="hover:underline">Scott Syme™</a>.
    </span>
            </footer>
        </>
    );
};