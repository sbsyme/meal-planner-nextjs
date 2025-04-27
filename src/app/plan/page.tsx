import {getMealPlanByUser} from "@/actions";
import Summary from "@/components/summary/Summary";
import {redirect} from "next/navigation";

export default async function MealPlanPage() {
    const mealPlan = await getMealPlanByUser()
    if (Object.keys(mealPlan).length === 0) {
        redirect('/getting-started')
    }

    return (
        <Summary mealPlan={mealPlan}/>
    );
};