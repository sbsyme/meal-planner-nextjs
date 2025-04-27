'use client';

import {MealPlan} from "@/types/types";
import React from 'react'
import ShoppingList from "@/components/form/ShoppingList";
import MealPlanSummary from "@/components/summary/MealPlanSummary";
import {TabItem, Tabs} from "flowbite-react";

export default function Summary({mealPlan}: { mealPlan: MealPlan }) {

    return (
        <div className="p-10">
            <Tabs aria-label="Default tabs" variant="default">
                <TabItem active title="Shopping List">
                    <ShoppingList mealPlan={mealPlan}/>
                </TabItem>
                <TabItem title="Meal Plan">
                    <MealPlanSummary mealPlan={mealPlan}/>
                </TabItem>
            </Tabs>
        </div>
    );
};