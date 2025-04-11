'use client';

import {MealPlan} from "@/types/types";
import React from 'react'

export default function MealPlanSummary({mealPlan}: { mealPlan: MealPlan }) {

    return (<div className="p-10">
            <h1>Shopping List</h1>
            <ul>
                {mealPlan.shopping_list.map((item) => (
                    <li key={item.name}>
                        <h2>{item.price.amount}</h2>
                        <h3>{item.quantity}</h3>
                        <h4>{item.pricing_ref}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};