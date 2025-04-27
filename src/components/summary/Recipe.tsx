'use client';

import {Meal} from "@/types/types";
import React from "react";

export default function Recipe({meal}: { meal: Meal }) {

    return (
        <div className="dark:bg-gray-900">
            <ul className="ps-5 mt-2 space-y-1 list-inside dark:text-gray-200">
                <li className="font-bold">Ingredients:</li>
                <ul className="ps-5 mt-2 space-y-2 list-disc list-inside">
                    {meal.recipe.ingredients.map((ingredient) => (
                        <li key={ingredient.ingredient_name}>
                            {ingredient.ingredient_name}
                            <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                                <li>Quantity: {ingredient.quantity}</li>
                            </ul>
                        </li>
                    ))}
                </ul>


                <li className="font-semibold">Steps:</li>
                <ol className="ps-5 mt-2 space-y-2 list-decimal list-inside">
                    {meal.recipe.steps.map((step) => (
                        <li key={step}>
                            {step}
                        </li>
                    ))}
                </ol>
            </ul>
        </div>
    )
}