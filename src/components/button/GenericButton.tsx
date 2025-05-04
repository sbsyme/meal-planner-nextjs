'use client';

import React from 'react';
import {Button} from "flowbite-react";

export default function GenericButton(props: { text: string; href: string; }) {
    const text : string = props.text;
    const href : string = props.href;

    return (
        <div className="flex flex-col p-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href={href}>
                <Button
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    {text}
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Button>
            </a>
        </div>
    );
}