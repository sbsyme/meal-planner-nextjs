'use client'

import { useEffect } from 'react'
import {Button} from "flowbite-react";

export default function Error({
                                                error,
                                                reset,
                                            }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="sm:p-40 grid justify-items-center ">
            <h2 className="mb-4 text-lg tracking-tight leading-none text-gray-900 md:text-1xl lg:text-6xl dark:text-white">
                Something went wrong!</h2>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">{error.message}</p>
            <Button
                onClick={
                    () => reset()
                }
            >
                Try again
            </Button>
        </div>
    )
}