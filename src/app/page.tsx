import React from "react";
import Landing from "@/components/Landing";

export default async function Home() {

    /*
    TODO: we cant use useUser on the server, this happens on the client, we need the home page to be a client component.
    If the user is logged in, we should redirect to the mealPlan summary page which is rendered on the server as it has to
    make some db calls. Then we render the summary components on the client with the meal plan as props.
     */
    return (
        <div
            className="p-8 pb-20 gap-16 sm:p-40 font-[family-name:var(--font-geist-sans)] ">
            <Landing/>
        </div>
    );
}
