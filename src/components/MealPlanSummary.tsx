'use client';

import {MealPlan} from "@/types/types";

export default function MealPlanSummary({mealPlan} : {mealPlan : MealPlan}) {

    console.log(mealPlan.meal_plan);
    console.log(mealPlan);
    
    return (<div className="p-10">
            Fetched meal plan
            <br/>
            {mealPlan.shopping_list.map(item => item.name)}
        </div>
    );
};