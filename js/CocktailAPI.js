class CocktailAPI {
    // Get recipe by name
    async getDrinksByName(name) {
        // Search by name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        // Returns a json respone
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    };

    // Get recipes by ingredient
    async getDrinksByIngredient(ingredient) {
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Return a json
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get single recipe
    async getSingleRecipe(id) {
        // Search by ID
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        // Return a json
        const recipe = await apiResponse.json();

        return {
            recipe
        }
    }

    // Retrives all the Categories from the REST API
    async getCategories() {
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
        // Return a json
        const categories = await apiResponse.json();

        return {
            categories
        }
    }

    // Get drinks by category
    async getDrinksByCategory(category) {
        // Search by categories
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        // Return a json
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }

    // Get alcohol or non alcohol drinks
    async getDrinksByAlcohol(term) {
        // Search by categories
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
        // Return a json
        const cocktails = await apiResponse.json();

        return {
            cocktails
        }
    }
}