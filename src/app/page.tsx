'use client';

import {Button} from "flowbite-react";
import React from "react";
import {useUser} from "@auth0/nextjs-auth0";
import {redirect} from "next/navigation";

export default function Home() {
    const {user, isLoading} = useUser();

    if(user !== null && !isLoading) {
        redirect('/plan')
    }

    return (
        <div
            className="p-8 pb-20 gap-16 sm:p-40 font-[family-name:var(--font-geist-sans)] ">
            <main>
                <section>
                    <div className="mx-auto max-w-screen-xl text-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                            Automatically build a meal plan customised to your needs.</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                            Using AI, this tool generates a full weekly meal plan which includes shopping list and recipes, based on your budget and preferred supermarket
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <Button href="/auth/login"
                                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Get started
                                <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
