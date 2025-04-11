'use client';

import Form from 'next/form'
import {MealPlan} from "@/types/types";
import SubmitButton from "@/components/SubmitButton";
import SupermarketInput from "@/components/SupermarketInput";
import BudgetInput from "@/components/BudgetInput";
import React from "react";
import MealPlanSummary from "@/components/MealPlanSummary";
import {fetchMealPlan} from "@/lib/openai";

export default function RequestMealPlanForm() {

    const [mealPlanData, setMealPlanData] = React.useState<MealPlan>()
    const [fetchedMealPlan, setFetchedMealPlan] = React.useState(false)

    function createMealPlan(formData: FormData) {
        fetchMealPlan(formData)
            .then(result => {
                setMealPlanData(result)
                setFetchedMealPlan(true)
                console.log('Meal Plan data: ' + mealPlanData)
            });
    }

    return (
        (<div className="p-10">
            {!fetchedMealPlan ?
                <Form action={createMealPlan}>
                    <BudgetInput/>
                    <SupermarketInput/>
                    <SubmitButton label="Create Meal Plan" loading="Creating Meal Plan..."/>
                </Form>
                :
                <MealPlanSummary mealPlan={mealPlanData!} />
            }
        </div>)

    );
};