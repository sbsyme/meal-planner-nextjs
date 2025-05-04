'use client';

import React from 'react';
import {Spinner} from "flowbite-react";

export default function DefaultLoading ({text} : {text : string}) {
    return (
        <div className="mx-auto max-w-screen-xl p-80 pb-20 gap-16 text-center">
            <Spinner size="xl"/>
            <h1 className="mb-4 tracking-tight leading-none pt-5 text-gray-900 md:text-2xl dark:text-white">
                {text}
            </h1>
        </div>
    );
};