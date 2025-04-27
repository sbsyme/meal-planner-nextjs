import Form from 'next/form'
import React from "react";
import {createMealPlanAction, getMealPlanByUser} from "@/actions";
import CreateMealPlanFormContent from "@/components/form/CreateMealPlanFormContent";
import {redirect} from "next/navigation";

export default async function GettingStartedPage() {
    const mealPlan = await getMealPlanByUser()
    if (Object.keys(mealPlan).length !== 0) {
        redirect('/plan')
    }

    return (
        <Form action={createMealPlanAction}>
            <CreateMealPlanFormContent/>
        </Form>
    )
};