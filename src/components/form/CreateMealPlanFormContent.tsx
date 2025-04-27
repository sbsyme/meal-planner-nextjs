'use client'

import React from 'react';
import BudgetInput from "@/components/form/BudgetInput";
import SupermarketInput from "@/components/form/SupermarketInput";
import FormSubmitButton from "@/components/button/FormSubmitButton";
import {useFormStatus} from "react-dom";
import DefaultLoading from "@/components/loading/DefaultLoading";

export default function CreateMealPlanFormContent() {
    const {pending} = useFormStatus();

    return (
        <>
            {!pending ?
                <div className="sm:p-40 grid justify-items-center dark:bg-gray-900 p-10 rounded-xl dark:border-gray-600">
                    <p className="mb-8 text-lg text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                        Let us know your preferences
                    </p>
                    <BudgetInput/>
                    <SupermarketInput/>
                    <FormSubmitButton label="Create Meal Plan" loading="Creating Meal Plan..."/>
                </div>
                :
                <DefaultLoading text="Creating Meal Plan..."/>}
        </>
    );
}