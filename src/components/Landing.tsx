'use client';

import React from 'react';
import GenericButton from "@/components/button/GenericButton";
import {useUser} from "@auth0/nextjs-auth0";

export default function Landing() {
    const {user} = useUser();

    return (
        <section>
            <div className="mx-auto max-w-screen-xl text-center">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Automatically build a meal plan customised to your needs.</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    Using AI, this tool generates a full weekly meal plan which includes shopping list and
                    recipes, based on your budget and preferred supermarket
                </p>
                {!user ?
                    <GenericButton text="Get Started" href="/auth/login?returnTo=/getting-started"/>
                    :
                    <GenericButton text="View my plan" href="/plan"/>
                }

            </div>
        </section>
    );
}