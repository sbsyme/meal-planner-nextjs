'use client';

import Form from 'next/form'
import {MealPlan} from "@/types/types";
import SubmitButton from "@/components/SubmitButton";
import SupermarketInput from "@/components/SupermarketInput";
import BudgetInput from "@/components/BudgetInput";
import React from "react";
import {fetchMealPlan} from "@/lib/openai";
import Summary from "@/components/summary/Summary";

export default function RequestMealPlanForm() {

    const [fetchedMealPlan, setFetchedMealPlan] = React.useState(false)
    const [mealPlanData, setMealPlanData] = React.useState<MealPlan>({
            meal_plan: [],
            shopping_list: []
        }
    )

    function createMealPlan(formData: FormData) {
        fetchMealPlan(formData)
            .then(result => {
                setMealPlanData(result)
                setFetchedMealPlan(true)
            })
            .catch(error => {
                console.error("Failed to fetch meal plan: ", error);
            });
    }

    return (

        (<div>
            {!fetchedMealPlan ?
                <div className="sm:p-40 grid justify-items-center ">
                    <div className="dark:bg-gray-900 p-10 rounded-xl dark:border-gray-600">
                        <p className="mb-8 text-lg text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                            Let us know your preferences
                        </p>
                        <Form action={createMealPlan}>
                            <BudgetInput/>
                            <SupermarketInput/>
                            <SubmitButton label="Create Meal Plan" loading="Creating Meal Plan..."/>
                        </Form>
                    </div>
                </div>
                :
                <Summary mealPlan={mealPlanData}/>}
        </div>)

    );
};