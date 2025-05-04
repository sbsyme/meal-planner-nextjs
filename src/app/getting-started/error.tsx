'use client'

import { useEffect } from 'react'
import Error from "@/components/Error";

export default function GettingStartedError({
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
        <Error error={error} reset={reset}/>
    )
}