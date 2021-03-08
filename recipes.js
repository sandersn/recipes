/** @type {Record<string, Recipe>} */
const recipes = {
    "Asian Noodle Chicken Vegetable Salad with Chili Scallion Oil": {
        ingredients: {
            "grapeseed oil": "1/2 cup",
            "green onions": "2, thinly sliced",
            "garlic": "2 cloves",
            "star anise": "2 pods",
            "red pepper flakes": "1 tablespoon",
            "ginger": "1 tablespoon, grated",
            "soy sauce": "3 tablespoons",
            "rice vinegar": "3 tablespoons",
            "sugar": "3 teaspoons (1 tablespoon)",
            "sesame oil": "2 teaspoons",
        }
    },
    // "Szechuan Chicken": {},
    "Basil Cilantro Pesto Pasta": {
        ingredients: {
            "basil leaves": "3 cups",
            "cilantro": "3 cups",
            "olive oil": "1/2 cup",
            "pine nuts": "1/2 cup",
            "garlic": "2 cloves",
            "salt": "pinch",
            "pasta": "1 package",
        }
    },
    "Black Beans and Rice": {
        ingredients: {
            "onion": "1 large",
            "green pepper": "1 large",
            "garlic": "3 cloves",
            "vinegar": "3 tablespoons",
            "olive oil": "1 tablespoon",
            "can black beans": "3 16 ounce",
            "bay leaf": "1",
            "cumin": "3 teaspoons (1 tablespoon)",
            "salt": "to taste",
            "pepper": "to taste",
        }
    },
    "Enchiladas": {
        ingredients: {
            "vegetable oil": "2 tablespoons",
            "chili powder": "2 tablespoons",
            "flour": "2 tablespoons",
            "water": "2 cups",
            "tomato paste": "3 ounces",
            "cumin": "1/2 teaspoon",
            "garlic powder": "1/2 teaspoon",
            "cayenne pepper": "1/4 teaspoon",
            "salt": "3/4 teaspoon",
            "small corn tortillas": "16",
            "refried beans": "4 cups",
            "shredded pepperjack": "8 ounces",
            "avocado": "1/2 large",
            "cilantro": "1/4 bunch, roughly chopped",
        }
    },
    "Pancakes": {
        ingredients: {
            "Bob's Red Mill Gluten Free Pancake Mix": "2 cups",
            "margarine": "2 tablespoons",
            "eggs": "2",
            "milk": "1 1/2 cups",
        },
    },
}

/** @type {Record<string, string[]>} */
const tobuy = {
}
for (const recipe of Object.values(recipes)) {
    for (const ingredient of Object.keys(recipe.ingredients)) {
        if (tobuy[ingredient]) {
            tobuy[ingredient].push(recipe.ingredients[ingredient])
        }
        else {
            tobuy[ingredient] = [recipe.ingredients[ingredient]]
        }
    }
}
console.log(tobuy)
for (const [ingredient, amounts] of Object.entries(tobuy)) {
    console.log(ingredient, '\t', amounts.join('; '))
}
