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
            "somen noodles": "9.5 ounces",
            "english cucumber": "1/2",
            "red bell pepper": "1/2",
            "radishes": "4, thinly sliced",
            "shredded carrots": "1 cup",
            "mung bean sprouts": "1 cup",
            "cilantro": "1 handful, roughly chopped",
            "scallions": "2, thinly sliced",
            "chicken": "2 1/2 cups",
        },
        instructions: [
            `## Chili Scallion Oil ##
In a small saucepan combine grapeseed oil, 2 thinly sliced scallions, garlic, star anise pods, crushed red pepper, and ginger. Mix until combined. Cook over medium heat until simmering, reduce heat to low, and cook until garlic starts to brown. Cool and store in refrigerator until ready to use.`,
            `## Soy Sauce Vinaigrette ##
Whisk together soy sauce, rice vinegar, sugar, and sesame seed oil until well combined.`,
            `## Asian Chicken Vegetable Salad ##
In a large bowl drizzle rinsed noodles with 2/3rds Soy Sauce Vinaigrette, and toss to coat. Add all the remaining ingredients and drizzle with remaining Soy Sauce Vinaigrette. Toss until well combined.`,
            "Serve immediately or refrigerate until ready to serve.",
            "Drizzle with desired amount of Chili Scallion Oil or serve Chili Scallion Oil on the side to customize each plate to desired spiciness",
        ],
    },
    "Chicken Poppers": {
        ingredients: {
            "ground chicken": "1 pound",
            "zucchini": "2 cups, grated",
            "green onions": "2-3",
            "cilantro": "3-4 Tbsp, sliced",
            "garlic": "1 clove",
            "salt": "1 teaspoon",
            "pepper": "1/2 teaspoon",
            "cumin": "3/4 teaspoon (optional)",
        },
        instructions: [
            "Toss chicken with zucchini, green onion, cilantra, garlic, salt and pepper (and cumin, if using). Mixture will be quite wet.",
            "To cook on the stovetop: Heat a drizzle of olive oil in a medium pan over medium heat. Use a small scoop or a heaped tablespoon to scoop meatballs into the pan. Cook 8-10 at a time for about 5-6 minutes on the first side. Flip and cook an additional 4-5 minutes, or until golden brown and the centers are cooked through.",
            "To bake: Drizzle a bit of olive or avocado oil onto a baking sheet. Scoop meatballs onto the greased pan. Drizzle a bit of additional oil over the meatballs. Bake at 400 degrees 20-25 minutes, or until cooked through. If desired, place under the broiler for an additional 2-3 minutes or until browned on top.",
            "Serve with guacamole, salsa or your favorite dip."
        ],
    },
    "Chicken Quinoa Soup": {
        ingredients: {
            "avocado or olive oil": "1 tablespoon",
            "garlic": "6 cloves",
            "yellow onion": "1, diced",
            carrots: "2 large, thinly sliced",
            celery: "2 stalks, roughly chopped",
            ginger: "1 tablespoon, grated",
            turmeric: "1 tablespoon, grated or ground",
            "low sodium chicken broth": "6 cups",
            chicken: "1 pound",
            rosemary: "1 teaspoon",
            thyme: "1 teaspoon",
            salt: "1/2 teaspoon",
            pepper: "freshly ground",
            couscous: "1 cup pearl or Israeli",
            "frozen peas": "2/3 cup",
        }
    },
    "Basil Cilantro Pesto Pasta": {
        ingredients: {
            "basil leaves": "3 cups",
            "cilantro": "3 cups",
            "olive oil": "1/2 cup",
            "pine nuts": "1/2 cup",
            "garlic": "2 cloves",
            "salt": "pinch",
            "pasta": "1 package",
            "parmesan cheese": "1 package",
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
    "White Chicken Chili": {
        ingredients: {
            chicken: "1 pound",
            "great northern beans": "1 can, drained and rinsed",
            "chopped green chiles": "4oz can",
            jalapenos: "1-2",
            shallots: "1, chopped",
            garlic: "2 cloves",
            cumin: "1 1/2 teaspoons (1/2 tablespoon)",
            pepper: "1/4 teaspoon",
            oregano: "big pinch",
            "chicken broth": "2 cups",
            lime: "1/2 small",
            "almond milk": "1/4 cup",
            flour: "1 tablespoon",
            "salsa verde": "1 can",
            chips: "1 bag",
            "mexican cheese": "8 oz bag",
            cilantro: "handful, chopped"
        },
    },
    "Sesame Chicken": {
        ingredients: {
            chicken: "1 pound",
            "sesame seeds": "2 tablespoons",
            "sesame oil": "1 tablespoon",
            "vegetable oil": "2 tablespoons",
            "small mushrooms": "4 oz, quartered",
            "bell pepper": "1, cut into strips",
            "green onions": "4, chopped diagonally",
            "rice": "1 cup uncooked",
            "corn starch": "2 teaspoons",
            "sherry": "2 tablespoons (or rice wine)",
            "lemon juice": "1 tablespoon",
            "soy sauce": "1 tablespoon",
            "ginger": "1 inch",
            "garlic": "1 clove",
        },
        instructions: [
            "Trim the steak and cut into thin strips about 1 x 5 cm",
            `Make the marinade. In a bowl, blend the corn starch with the rice wine or sherry, then stir in the lemon juice, soy sauce, Tabasco sauce, ginger and garlic. Stir in the steak strips and leave in a cool place for 3-4 hours.`,
            `Dry-fry the sesame seeds in a wok over moderate heat, shaking the pan, until the seeds are golden. Set aside.`,
            `Heat the sesame and vegetable oils in the wok. Drain the steak, reserving the marinade, and stir-fry a few pieces at a time until browned. Remove with a slotted spoon.`,
            `Add the mushrooms and green pepper and stir-fry for 2-3 minutes. Add the green onions and cook for 1 minute more.`,
            `Return the steak to the wok, together with the reserved marinade, and stir over a moderate heat for a further 2 minutes until the ingredients are evenly coated with glaze. Sprinkle over the sesame seeds and serve immediately with rice.`,
        ],
    },
    "Spaghetti": {
        ingredients: {
            spaghetti: "12 ounces",
            "chicken sausage": "1 package",
            tomatoes: "5",
            "tomato paste": "8 oz can",
            "bell peppers": "1",
        }
    },
    "Tacos": {
        ingredients: {
            "bell peppers": "1",
            tomatoes: "1",
            avocado: "1 medium",
            lettuce: "2 cups",
            "lime juice": "1/2 teaspoon",
            salt: "1/4 teaspoon",
            garlic: "1 clove",
            guacamole: "1/2 cup",
            "fake ground beef": "1 pound",
            "spices????": "several teaspoons",
            water: "1/4 cup",
            "unsalted chips": "1 bag",
        },
        instructions: [
            "Chop the bell peppers and tomatoes; shred the lettuce. Put each into a serving bowl or cup.",
            "Make gaucamole by mashing together the avocado, garlic, lime juice and salt, or buy pre-made guacamole.",
            "Cook the taco meat, then add spices and water. Simmer until the water evaporates."
        ],
    },
}

const thisWeek = ["Enchiladas", "Spaghetti", "Sesame Chicken", "Tacos"]
/** @type {Record<string, string[]>} */
const tobuy = {
}
for (const [name,recipe] of Object.entries(recipes).filter(([name,_]) => thisWeek.includes(name))) {
    console.log(name)
    for (const ingredient of Object.keys(recipe.ingredients)) {
        if (tobuy[ingredient]) {
            tobuy[ingredient].push(recipe.ingredients[ingredient])
        }
        else {
            tobuy[ingredient] = [recipe.ingredients[ingredient]]
        }
    }
}
console.log('---------------------------------------')
for (const [ingredient, amounts] of Object.entries(tobuy)) {
    console.log(ingredient, '\t', amounts)
}
