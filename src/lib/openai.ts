'use server'

import OpenAI from "openai";
import {MealPlan} from "@/types/types";
import data from '../../public/response-data.json' assert { type: 'json' };


const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export const fetchMealPlan = async (formData: FormData): Promise<MealPlan> => {
    if (process.env.UNDER_TEST === 'true') {
        await new Promise(resolve => setTimeout(resolve, 5000))
        return data as MealPlan;
    }

    let response: string = "";

    const thread = await openai.beta.threads.create();

    await openai.beta.threads.messages.create(thread.id,
        {
            role: "user",
            content: JSON.stringify({
                budget: formData.get('budget'),
                supermarket: formData.get('supermarket'),
            })
        })

    const run = await openai.beta.threads.runs.createAndPoll(thread.id,
        {
            assistant_id: process.env.MEAL_PLANNER_OPENAI_ASSISTANT_ID as string
        }
    );

    if (run.status === 'completed') {
        const messages = await openai.beta.threads.messages.list(
            run.thread_id
        );

        messages.getPaginatedItems().forEach((message) => {
            if (message.role.toString() === "assistant") {
                if (message.content[0].type === "text") {
                    response = message.content[0].text.value;
                }
            }
        })
    } else {
        console.log("Run status: " + run.status)
    }

    return JSON.parse(response) as MealPlan;
}