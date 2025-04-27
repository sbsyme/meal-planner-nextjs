'use client';

import {MealPlanElement} from "@/types/types";
import React from "react";
import Recipe from "@/components/summary/Recipe";
import {Accordion, AccordionContent, AccordionPanel, AccordionTitle} from "flowbite-react";

export default function DaySummary({item}: { item: MealPlanElement }) {
    return (
        <Accordion collapseAll>
            {item.meals.map((meal) => (
                <AccordionPanel key={meal.meal_name}>
                    <AccordionTitle>{meal.meal_name}</AccordionTitle>
                    <AccordionContent>
                        <Recipe meal={meal}/>
                    </AccordionContent>
                </AccordionPanel>
            ))}
        </Accordion>
    )
}