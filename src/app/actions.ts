'use server'

import {MealPlan} from "@/types/types";
import axios from "axios";

export const postMealPlan = async (formData: FormData): Promise<MealPlan> => {
    return axios.post<MealPlan>('http://localhost:8080/generate-meal-plan',
        JSON.stringify({
            budget: formData.get('budget'),
            supermarket: formData.get('supermarket'),
        }),
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
        }).then(async res => {
        return res.data;
    });
};