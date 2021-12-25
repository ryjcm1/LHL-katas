const chooseRecipe = (bakery1, bakery2, recipes) => {

    for (let i = 0; i < recipes.length; i++) {
        let ingredients = recipes[i].ingredients

        let bakery1Common = ingredientCheck(bakery1, ingredients)
        let bakery2Common = ingredientCheck(bakery2, ingredients)

        //only when both bakery contains at least one ingredient common with the recipe
        if (!bakery1Common.length < 1 && !bakery2Common.length < 1) {

            //unique set of ingredients w/ both bakeries
            let combinedIngredients = [... new Set([...bakery1Common, ...bakery2Common])]

            if (combinedIngredients.includes(ingredients[0]) && combinedIngredients.includes(ingredients[1])) {
                return recipes[i].name
            }
        }

    }

    return 'no recipe found'

}

const ingredientCheck = (bakery, ingredient) => {

    let commonIngredients = []

    for (let i = 0; i < bakery.length; i++) {
        if (ingredient.includes(bakery[i])) {
            commonIngredients.push(bakery[i])
        }
    }

    return commonIngredients

}


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [{
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];



console.log(chooseRecipe(bakeryA, bakeryB, recipes)); //persian cheese cake




bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); //nima's famous dijon raisins