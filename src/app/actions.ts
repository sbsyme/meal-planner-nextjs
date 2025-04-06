'use server'

import {MealPlan} from "@/types/types";
import axios from "axios";

const testResponse: string = '{\n' +
    '  "shopping_list": [\n' +
    '    {\n' +
    '      "name": "Tesco Free Range Eggs",\n' +
    '      "price": {\n' +
    '        "amount": 1.3,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "6 pack",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Everyday Value White Bread",\n' +
    '      "price": {\n' +
    '        "amount": 0.36,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "800g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco British Semi-Skimmed Milk",\n' +
    '      "price": {\n' +
    '        "amount": 0.89,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "1L",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Mature Cheddar Cheese",\n' +
    '      "price": {\n' +
    '        "amount": 2.5,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "400g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco British Chicken Breast Portions",\n' +
    '      "price": {\n' +
    '        "amount": 5.0,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "650g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Spaghetti",\n' +
    '      "price": {\n' +
    '        "amount": 0.28,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "500g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Chopped Tomatoes",\n' +
    '      "price": {\n' +
    '        "amount": 0.35,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "400g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Carrots",\n' +
    '      "price": {\n' +
    '        "amount": 0.4,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "1kg",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Onions",\n' +
    '      "price": {\n' +
    '        "amount": 0.8,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "1kg",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Potatoes",\n' +
    '      "price": {\n' +
    '        "amount": 1.15,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "2.5kg",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Baked Beans",\n' +
    '      "price": {\n' +
    '        "amount": 0.32,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "420g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Minced Beef 20% Fat",\n' +
    '      "price": {\n' +
    '        "amount": 2.8,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "500g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Frozen Mixed Vegetables",\n' +
    '      "price": {\n' +
    '        "amount": 0.85,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "1kg",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Rice",\n' +
    '      "price": {\n' +
    '        "amount": 0.45,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "1kg",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Plain Flour",\n' +
    '      "price": {\n' +
    '        "amount": 0.45,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "1.5kg",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Butter",\n' +
    '      "price": {\n' +
    '        "amount": 1.55,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "250g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Olive Oil",\n' +
    '      "price": {\n' +
    '        "amount": 1.5,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "500ml",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Bananas",\n' +
    '      "price": {\n' +
    '        "amount": 0.78,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "1kg",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Apples",\n' +
    '      "price": {\n' +
    '        "amount": 1.2,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "6 pack",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    },\n' +
    '    {\n' +
    '      "name": "Tesco Frozen Peas",\n' +
    '      "price": {\n' +
    '        "amount": 0.61,\n' +
    '        "currency": "GBP"\n' +
    '      },\n' +
    '      "quantity": "900g",\n' +
    '      "pricing_ref": "https://www.tesco.com/groceries/en-GB/products/254930713"\n' +
    '    }\n' +
    '  ],\n' +
    '  "meal_plan": [\n' +
    '    {\n' +
    '      "day": "Monday",\n' +
    '      "meals": [\n' +
    '        {\n' +
    '          "meal_name": "Scrambled Eggs on Toast",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Crack 2 eggs into a bowl, add a pinch of salt and pepper, and whisk until combined.",\n' +
    '              "Heat a non-stick pan over medium heat and add a small knob of butter.",\n' +
    '              "Once the butter has melted, pour the eggs into the pan.",\n' +
    '              "Stir gently with a spatula until the eggs are softly set and slightly runny in places.",\n' +
    '              "Toast two slices of bread in a toaster.",\n' +
    '              "Serve the scrambled eggs on the toasted bread."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Free Range Eggs",\n' +
    '                "quantity": "2 eggs"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Everyday Value White Bread",\n' +
    '                "quantity": "2 slices"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Butter",\n' +
    '                "quantity": "10g"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Chicken Salad",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Dice 200g of chicken breast.",\n' +
    '              "Heat a pan over medium heat and add a teaspoon of olive oil.",\n' +
    '              "Cook the chicken pieces until golden brown and cooked through, about 8 minutes.",\n' +
    '              "Chop 1 carrot and 1/4 onion finely.",\n' +
    '              "In a bowl, combine the cooked chicken, chopped carrot, and onion.",\n' +
    '              "Add a handful of frozen peas and a tablespoon of olive oil.",\n' +
    '              "Mix well and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco British Chicken Breast Portions",\n' +
    '                "quantity": "200g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Carrots",\n' +
    '                "quantity": "1 carrot"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/4 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Frozen Peas",\n' +
    '                "quantity": "50g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Spaghetti Bolognese",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Boil 80g of spaghetti in salted water according to package instructions, then drain.",\n' +
    '              "In a pan, heat a tablespoon of olive oil over medium heat.",\n' +
    '              "Add 1/2 chopped onion and cook until soft.",\n' +
    '              "Add 250g minced beef and cook until browned.",\n' +
    '              "Stir in 1 can of chopped tomatoes and simmer for 15 minutes.",\n' +
    '              "Serve the sauce over the cooked spaghetti."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Spaghetti",\n' +
    '                "quantity": "80g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/2 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Minced Beef 20% Fat",\n' +
    '                "quantity": "250g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Chopped Tomatoes",\n' +
    '                "quantity": "1 can"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "day": "Tuesday",\n' +
    '      "meals": [\n' +
    '        {\n' +
    '          "meal_name": "Cheese Omelette",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Crack 2 eggs into a bowl, add a pinch of salt and pepper, and whisk until combined.",\n' +
    '              "Heat a non-stick pan over medium heat and add a small knob of butter.",\n' +
    '              "Pour the eggs into the pan and cook until the edges start to set.",\n' +
    '              "Sprinkle 50g of grated cheddar cheese over the omelette.",\n' +
    '              "Fold the omelette in half and cook for another minute until the cheese is melted.",\n' +
    '              "Slide onto a plate and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Free Range Eggs",\n' +
    '                "quantity": "2 eggs"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Butter",\n' +
    '                "quantity": "10g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Mature Cheddar Cheese",\n' +
    '                "quantity": "50g"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Vegetable Stir-fry",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Chop 1 carrot and 1/4 onion into thin strips.",\n' +
    '              "Heat a tablespoon of olive oil in a pan over high heat.",\n' +
    '              "Add the chopped carrot and onion, and stir-fry for 3 minutes.",\n' +
    '              "Add 100g of frozen mixed vegetables and stir-fry for another 5 minutes.",\n' +
    '              "Season with salt and pepper to taste and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Carrots",\n' +
    '                "quantity": "1 carrot"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/4 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Frozen Mixed Vegetables",\n' +
    '                "quantity": "100g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Chicken and Rice",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Cook 100g of rice according to package instructions.",\n' +
    '              "Dice 200g of chicken breast.",\n' +
    '              "Heat a pan over medium heat and add a teaspoon of olive oil.",\n' +
    '              "Cook the chicken pieces until golden brown and cooked through, about 8 minutes.",\n' +
    '              "Mix the cooked rice with the chicken and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Rice",\n' +
    '                "quantity": "100g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco British Chicken Breast Portions",\n' +
    '                "quantity": "200g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 teaspoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "day": "Wednesday",\n' +
    '      "meals": [\n' +
    '        {\n' +
    '          "meal_name": "Banana Pancakes",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Mash 1 banana in a bowl.",\n' +
    '              "Crack 2 eggs into the mashed banana and whisk until combined.",\n' +
    '              "Heat a non-stick pan over medium heat and add a small knob of butter.",\n' +
    '              "Pour the batter into the pan to form small pancakes.",\n' +
    '              "Cook until bubbles form on the surface, then flip and cook for another minute.",\n' +
    '              "Serve hot."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Bananas",\n' +
    '                "quantity": "1 banana"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Free Range Eggs",\n' +
    '                "quantity": "2 eggs"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Butter",\n' +
    '                "quantity": "10g"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Baked Beans on Toast",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Heat 1 can of baked beans in a saucepan over medium heat.",\n' +
    '              "Toast two slices of bread in a toaster.",\n' +
    '              "Pour the heated beans over the toasted bread and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Baked Beans",\n' +
    '                "quantity": "1 can"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Everyday Value White Bread",\n' +
    '                "quantity": "2 slices"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Vegetable Curry",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Chop 1 carrot and 1/2 onion finely.",\n' +
    '              "Heat a tablespoon of olive oil in a pan over medium heat.",\n' +
    '              "Add the chopped carrot and onion, and cook until soft.",\n' +
    '              "Add 200g of frozen mixed vegetables and 1 can of chopped tomatoes.",\n' +
    '              "Simmer for 15 minutes until the vegetables are cooked through.",\n' +
    '              "Serve hot."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Carrots",\n' +
    '                "quantity": "1 carrot"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/2 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Frozen Mixed Vegetables",\n' +
    '                "quantity": "200g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Chopped Tomatoes",\n' +
    '                "quantity": "1 can"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "day": "Thursday",\n' +
    '      "meals": [\n' +
    '        {\n' +
    '          "meal_name": "Egg and Cheese Sandwich",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Crack 1 egg into a bowl, add a pinch of salt and pepper, and whisk until combined.",\n' +
    '              "Heat a non-stick pan over medium heat and add a small knob of butter.",\n' +
    '              "Pour the egg into the pan and cook until set, then fold into a square shape.",\n' +
    '              "Toast two slices of bread and place the cooked egg on one slice.",\n' +
    '              "Add 50g of grated cheddar cheese and top with the other slice of bread.",\n' +
    '              "Serve hot."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Free Range Eggs",\n' +
    '                "quantity": "1 egg"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Butter",\n' +
    '                "quantity": "10g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Mature Cheddar Cheese",\n' +
    '                "quantity": "50g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Everyday Value White Bread",\n' +
    '                "quantity": "2 slices"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Chicken and Vegetable Soup",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Dice 100g of chicken breast.",\n' +
    '              "Chop 1/2 onion and 1 carrot finely.",\n' +
    '              "In a pot, heat a tablespoon of olive oil over medium heat.",\n' +
    '              "Add the chicken, onion, and carrot, and cook until the chicken is browned.",\n' +
    '              "Add 500ml of water and 100g of frozen peas.",\n' +
    '              "Simmer for 20 minutes until the vegetables are tender.",\n' +
    '              "Season with salt and pepper and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco British Chicken Breast Portions",\n' +
    '                "quantity": "100g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/2 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Carrots",\n' +
    '                "quantity": "1 carrot"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Frozen Peas",\n' +
    '                "quantity": "100g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Beef and Potato Stew",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Peel and dice 2 potatoes.",\n' +
    '              "Chop 1/2 onion finely.",\n' +
    '              "In a pot, heat a tablespoon of olive oil over medium heat.",\n' +
    '              "Add 250g of minced beef and cook until browned.",\n' +
    '              "Add the onion and potatoes, and cook for another 5 minutes.",\n' +
    '              "Add 500ml of water and simmer for 30 minutes until the potatoes are tender.",\n' +
    '              "Season with salt and pepper and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Potatoes",\n' +
    '                "quantity": "2 potatoes"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/2 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Minced Beef 20% Fat",\n' +
    '                "quantity": "250g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "day": "Friday",\n' +
    '      "meals": [\n' +
    '        {\n' +
    '          "meal_name": "Fruit Salad",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Peel and slice 1 banana and 1 apple.",\n' +
    '              "Mix the sliced fruits in a bowl.",\n' +
    '              "Serve chilled."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Bananas",\n' +
    '                "quantity": "1 banana"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Apples",\n' +
    '                "quantity": "1 apple"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Cheese and Tomato Sandwich",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Toast two slices of bread.",\n' +
    '              "Slice 50g of cheddar cheese and place on one slice of bread.",\n' +
    '              "Add 2 slices of tomato on top of the cheese.",\n' +
    '              "Top with the other slice of bread and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Everyday Value White Bread",\n' +
    '                "quantity": "2 slices"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Mature Cheddar Cheese",\n' +
    '                "quantity": "50g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Chopped Tomatoes",\n' +
    '                "quantity": "2 slices"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Vegetable Rice",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Cook 100g of rice according to package instructions.",\n' +
    '              "Chop 1 carrot and 1/4 onion finely.",\n' +
    '              "Heat a tablespoon of olive oil in a pan over medium heat.",\n' +
    '              "Add the chopped carrot and onion, and cook until soft.",\n' +
    '              "Mix the cooked rice with the vegetables and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Rice",\n' +
    '                "quantity": "100g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Carrots",\n' +
    '                "quantity": "1 carrot"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/4 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "day": "Saturday",\n' +
    '      "meals": [\n' +
    '        {\n' +
    '          "meal_name": "Apple and Cheese Breakfast",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Slice 1 apple into wedges.",\n' +
    '              "Slice 50g of cheddar cheese.",\n' +
    '              "Serve the apple slices with cheese on the side."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Apples",\n' +
    '                "quantity": "1 apple"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Mature Cheddar Cheese",\n' +
    '                "quantity": "50g"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Chicken and Potato Salad",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Boil 2 potatoes until tender, then dice.",\n' +
    '              "Dice 100g of chicken breast.",\n' +
    '              "Chop 1/2 onion finely.",\n' +
    '              "In a bowl, combine the diced potatoes, chicken, and onion.",\n' +
    '              "Add a tablespoon of olive oil and mix well.",\n' +
    '              "Season with salt and pepper and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Potatoes",\n' +
    '                "quantity": "2 potatoes"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco British Chicken Breast Portions",\n' +
    '                "quantity": "100g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/2 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Spaghetti Carbonara",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Boil 80g of spaghetti in salted water according to package instructions, then drain.",\n' +
    '              "In a pan, heat a small knob of butter over medium heat.",\n' +
    '              "Add 2 whisked eggs and 50g of grated cheddar cheese.",\n' +
    '              "Stir until the cheese is melted and the sauce is creamy.",\n' +
    '              "Mix the sauce with the cooked spaghetti and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Spaghetti",\n' +
    '                "quantity": "80g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Butter",\n' +
    '                "quantity": "10g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Free Range Eggs",\n' +
    '                "quantity": "2 eggs"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Mature Cheddar Cheese",\n' +
    '                "quantity": "50g"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    },\n' +
    '    {\n' +
    '      "day": "Sunday",\n' +
    '      "meals": [\n' +
    '        {\n' +
    '          "meal_name": "Egg and Toast",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Crack 1 egg into a bowl, add a pinch of salt and pepper, and whisk until combined.",\n' +
    '              "Heat a non-stick pan over medium heat and add a small knob of butter.",\n' +
    '              "Pour the egg into the pan and cook until set.",\n' +
    '              "Toast two slices of bread and serve with the cooked egg on top."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Free Range Eggs",\n' +
    '                "quantity": "1 egg"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Butter",\n' +
    '                "quantity": "10g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Everyday Value White Bread",\n' +
    '                "quantity": "2 slices"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Mixed Vegetable Soup",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Chop 1/2 onion and 1 carrot finely.",\n' +
    '              "In a pot, heat a tablespoon of olive oil over medium heat.",\n' +
    '              "Add the onion and carrot, and cook until soft.",\n' +
    '              "Add 200g of frozen mixed vegetables and 500ml of water.",\n' +
    '              "Simmer for 20 minutes until the vegetables are tender.",\n' +
    '              "Season with salt and pepper and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/2 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Carrots",\n' +
    '                "quantity": "1 carrot"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Frozen Mixed Vegetables",\n' +
    '                "quantity": "200g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        },\n' +
    '        {\n' +
    '          "meal_name": "Beef and Vegetable Stir-fry",\n' +
    '          "recipe": {\n' +
    '            "steps": [\n' +
    '              "Chop 1/2 onion and 1 carrot into thin strips.",\n' +
    '              "In a pan, heat a tablespoon of olive oil over high heat.",\n' +
    '              "Add 250g of minced beef and cook until browned.",\n' +
    '              "Add the chopped onion and carrot, and stir-fry for 5 minutes.",\n' +
    '              "Add 100g of frozen peas and stir-fry for another 3 minutes.",\n' +
    '              "Season with salt and pepper and serve."\n' +
    '            ],\n' +
    '            "ingredients": [\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Onions",\n' +
    '                "quantity": "1/2 onion"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Carrots",\n' +
    '                "quantity": "1 carrot"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Minced Beef 20% Fat",\n' +
    '                "quantity": "250g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Frozen Peas",\n' +
    '                "quantity": "100g"\n' +
    '              },\n' +
    '              {\n' +
    '                "ingredient_name": "Tesco Olive Oil",\n' +
    '                "quantity": "1 tablespoon"\n' +
    '              }\n' +
    '            ]\n' +
    '          }\n' +
    '        }\n' +
    '      ]\n' +
    '    }\n' +
    '  ]\n' +
    '}'

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