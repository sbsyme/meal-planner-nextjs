# Meal Planner 🍽️
Creates a weekly meal plan, including a shopping list and recipes, using the OpenAI API based on the user's budget and preferred supermarket.

## Getting Started

1. Provide your OpenAI API Key in the environment variable `OPENAI_API_KEY`.
2. Create an assistant in the [OpenAI playground](https://platform.openai.com/playground).
3. Provide the following system instructions:
```
Given a budget amount and a supermarket. You will provide a weekly meal plan that fits into that budget and consists of meals made up of items that can be found in that supermarket. 

Your response should first contain a shopping list of the items with their name as it appears wherever you fetched the information from, the quantity, the price and provide a reference link of where you found the pricing information. 

Then a meal plan breakdown for every day of the week where each day consists of 3 meals(breakfast, lunch and dinner) that can be cooked with the items in the shopping list. No meals should be repeated. 

Each meal should also have a detailed recipe with ingredients from the shopping list with their required quantities and a list of the individual steps required for the recipes preparation. These steps should be extensive and include details such as how high a heat to cook on, how finely to chop an ingredient, precise measurements of each ingredient, etc.
```
3. Feel free to change the model at your leisure but `gpt-4o` was used in development and provides the expected output.
4. Assign it with response format `json_schema` and paste the following schema:
```
{
  "name": "meal_planner",
  "strict": true,
  "schema": {
    "type": "object",
    "properties": {
      "shopping_list": {
        "type": "array",
        "description": "A list of items needed for shopping",
        "items": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the item."
            },
            "price": {
              "type": "object",
              "description": "The price of the item.",
              "properties": {
                "amount": {
                  "type": "number",
                  "description": "The numerical price of the item."
                },
                "currency": {
                  "type": "string",
                  "description": "The currency of the price of the item."
                }
              },
              "required": [
                "amount",
                "currency"
              ],
              "additionalProperties": false
            },
            "quantity": {
              "type": "string",
              "description": "The quantity of the item with number and unit of measurement."
            },
            "pricing_ref": {
              "type": "string",
              "description": "A link to where the pricing information was fetched from."
            }
          },
          "required": [
            "name",
            "price",
            "quantity",
            "pricing_ref"
          ],
          "additionalProperties": false
        }
      },
      "meal_plan": {
        "type": "array",
        "description": "A list of days containing meals for each day",
        "items": {
          "type": "object",
          "properties": {
            "day": {
              "type": "string",
              "description": "The name or number of the day."
            },
            "meals": {
              "type": "array",
              "description": "List of meals planned for the day.",
              "items": {
                "type": "object",
                "properties": {
                  "meal_name": {
                    "type": "string",
                    "description": "The name of the meal."
                  },
                  "recipe": {
                    "type": "object",
                    "properties": {
                      "steps": {
                        "type": "array",
                        "description": "List of steps required for meal preparation.",
                        "items": {
                          "type": "string",
                          "description": "A single step of the recipe."
                        }
                      },
                      "ingredients": {
                        "type": "array",
                        "description": "List of ingredients required for meal preparation.",
                        "items": {
                          "type": "object",
                          "description": "Ingredient in the recipe.",
                          "properties": {
                            "ingredient_name": {
                              "type": "string",
                              "description": "Name of the ingredien.t"
                            },
                            "quantity": {
                              "type": "string",
                              "description": "The quantity of the ingredient required."
                            }
                          },
                          "required": [
                            "ingredient_name",
                            "quantity"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "steps",
                      "ingredients"
                    ],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "meal_name",
                  "recipe"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "day",
            "meals"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "shopping_list",
      "meal_plan"
    ],
    "additionalProperties": false
  }
}
```
5. Grab the assistant id underneath the name field and provide it in the environment variable `MEAL_PLANNER_OPENAI_ASSISTANT_ID`.

6. Install dependencies

```bash
npm install
```

7. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


