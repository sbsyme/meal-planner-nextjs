'use server'

import {MealPlan} from "@/types/types";
import clientPromise from "@/lib/mongodb";
import { auth0 } from "@/lib/auth0";
import {createMealPlan} from "@/lib/openai";
import {redirect} from "next/navigation";

export const createMealPlanAction = async (formData: FormData) => {
    console.log("Fetching meal plan by user");
    await new Promise(resolve => setTimeout(resolve, 3000));
    const mealPlan = await createMealPlan(formData)
        .then(async result => {
            await insertMealPlan(result)
                .catch(error => {
                    console.error("Failed to persist meal plan: ", error);
                });
            return result;
        })
        .catch(error => {
            console.error("Failed to create meal plan: ", error);
            return {} as MealPlan;
        });

    if (mealPlan) {
        redirect("/plan");
    }
}

export const getMealPlanByUser = async (): Promise<MealPlan> => {
    console.log("Fetching meal plan by user");
    await new Promise(resolve => setTimeout(resolve, 3000));
    const session = await auth0.getSession();

    try {
        const [client] = await Promise.all([clientPromise]);
        const db = client.db("meal_plan_db");
        const query = session?.user?.email ? { user: session.user.email } : {};

        const mealPlan = await db
            .collection("meal_plans")
            .findOne(query, { projection: { _id: 0, mealPlan: 1 }});

        return mealPlan?.mealPlan
            ? JSON.parse(JSON.stringify(mealPlan.mealPlan)) as MealPlan
            : {} as MealPlan;
    } catch
        (e) {
        console.error(e);
        return {} as MealPlan;
    }
}

export const insertMealPlan = async (mealPlan: MealPlan): Promise<MealPlan> => {
    const session = await auth0.getSession();

    try {
        const [client] = await Promise.all([clientPromise]);
        const meal_plans_collection = client.db("meal_plan_db").collection("meal_plans");
        const result = await meal_plans_collection
            .insertOne({user: session?.user?.email ?? "anonymous", mealPlan: mealPlan});

        return JSON.parse(JSON.stringify(result)) as MealPlan
    } catch
        (e) {
        console.error(e);
        return {} as MealPlan;
    }
}