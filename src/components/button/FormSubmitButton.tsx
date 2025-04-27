'use client';

import {useFormStatus} from "react-dom";
import {Button} from "flowbite-react";

type SubmitButtonProps = {
    label: string;
    loading: React.ReactNode;
};

export default function FormSubmitButton({ label, loading }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <div className="justify-items-center p-10">
            <Button type="submit"
                    disabled={pending}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {pending ? loading : label}
            </Button>
        </div>
    )
}