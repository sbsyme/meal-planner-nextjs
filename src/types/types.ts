export interface MealPlan {
    /**
     * A list of days containing meals for each day
     */
    meal_plan: MealPlanElement[];
    /**
     * A list of items needed for shopping
     */
    shopping_list: Item[];
}

export interface MealPlanElement {
    /**
     * The name or number of the day.
     */
    day: string;
    /**
     * List of meals planned for the day.
     */
    meals: Meal[];
}

export interface Meal {
    /**
     * The name of the meal.
     */
    meal_name: string;
    recipe:    Recipe;
}

export interface Recipe {
    /**
     * List of ingredients required for meal preparation.
     */
    ingredients: Ingredient[];
    /**
     * List of steps required for meal preparation.
     */
    steps: string[];
}

/**
 * Ingredient in the recipe.
 */
export interface Ingredient {
    /**
     * Name of the ingredien.t
     */
    ingredient_name: string;
    /**
     * The quantity of the ingredient required.
     */
    quantity: string;
}

export interface Item {
    /**
     * The name of the item.
     */
    name: string;
    /**
     * The price of the item.
     */
    price: Price;
    /**
     * A link to where the pricing information was fetched from.
     */
    pricing_ref: string;
    /**
     * The quantity of the item with number and unit of measurement.
     */
    quantity: string;
}

/**
 * The price of the item.
 */
export interface Price {
    /**
     * The numerical price of the item.
     */
    amount: number;
    /**
     * The currency of the price of the item.
     */
    currency: string;
}
