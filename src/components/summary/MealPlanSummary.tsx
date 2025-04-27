'use client';

import {MealPlan} from "@/types/types";
import React from 'react'
import DaySummary from "@/components/summary/DaySummary";
import {Accordion, AccordionContent, AccordionPanel, AccordionTitle} from "flowbite-react";

export default function MealPlanSummary({mealPlan}: { mealPlan: MealPlan }) {

    return (<div>
            <Accordion collapseAll className="bg-white dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                {mealPlan.meal_plan.map((item) => (
                    <AccordionPanel key={item.day}>
                        <AccordionTitle className="font-semibold">{item.day}</AccordionTitle>
                        <AccordionContent>
                            <DaySummary item={item} />
                        </AccordionContent>
                    </AccordionPanel>
                ))}
            </Accordion>
        </div>
    );
};