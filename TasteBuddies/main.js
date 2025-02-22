document.addEventListener("DOMContentLoaded",function(){
    const recipeDropdown = document.getElementById("recipeDropdown");
    const recipeDisplay = document.getElementById("recipeDisplay");
    const recipeGrid = document.getElementById("recipeGrid");

    if(recipeGrid){
        const recipeKeys = Object.keys(recipes);
        const shuffledKeys = recipeKeys.sort(() => 0.5 - Math.random());
        const selectedKeys = shuffledKeys.slice(0, 6);

        recipeGrid.innerHTML = "";

        selectedKeys.forEach(key=>{
            const recipe = recipes[key];

            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <a href="recipies.html?recipe=${encodeURIComponent(key)}">
                    <img src="${recipe.image}" alt="${recipe.name}">
                    </a>
            `;
            recipeGrid.appendChild(listItem);
                
        });

    }
    const params = new URLSearchParams(window.location.search);
    const selectedRecipeKey = params.get("recipe");

    if (selectedRecipeKey && recipes[selectedRecipeKey]){
        displayRecipe(selectedRecipeKey);
    }

    if (recipeDropdown){
        recipeDropdown.addEventListener("change", function(){
            const selectedKey = recipeDropdown.value;
            if (selectedKey) {
                displayRecipe(selectedKey);
            } else {
                recipeDisplay.innerHTML = "Please select a recipe.";
            }
        });

        Object.keys(recipes).forEach(key=> {
            const option = document.createElement("option");
            option.value = key;
            option.textContent = recipes[key].name;
            recipeDropdown.appendChild(option);
        });
    }

    function displayRecipe(key){
        if(!recipeDisplay) return;

        const recipe = recipes[key];

        recipeDisplay.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Author:</strong> ${recipe.author}</p>
        <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
        <p><strong> Description: </strong> ${recipe.description}</p>
        <img src="${recipe.image}" alt=${recipe.name}" width="200">

        <h3> Ingredients:</h3>
        <ul>
            ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>

        <h3> Instructions:</h3>
        <ol>
            ${recipe.recipeInstructions.map(step=> `<li> ${step}</li>`).join("")}
        </ol>
        `;
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const recipeDropdown = document.getElementById("recipeDropdown");
    const recipeDisplay = document.getElementById("recipeDisplay");

    const params = new URLSearchParams(window.location.search);
    const selectedRecipe = params.get("recipe");

    if (selectedRecipe && recipes[selectedRecipe]) {
        displayRecipe(selectedRecipe);
    }

    recipeDropdown.addEventListener("change", function() {
        displayRecipe(recipeDropdown.value);
    });

    function displayRecipe(key) {
        if (!recipes[key]) return;
        const recipe = recipes[key];

        recipeDisplay.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Author:</strong> ${recipe.author}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
            <p><strong>Description:</strong> ${recipe.description}</p>
            <img src="${recipe.image}" alt="${recipe.name}" width="200">

            <h3>Ingredients:</h3>
            <ul>
                ${recipe.recipeIngredient.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>

            <h3>Instructions:</h3>
            <ol>
                ${recipe.recipeInstructions.map(step => `<li>${step}</li>`).join("")}
            </ol>
        `;

        recipeDropdown.value = key;
    }
});




document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search_input");

    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") { 
            const query = searchInput.value.toLowerCase().trim();
            if (query.length === 0) return; 
            const matchingRecipe = Object.keys(recipes).find(key =>
                recipes[key].name.toLowerCase().includes(query)
            );

            if (matchingRecipe) {
                window.location.href = `recipies.html?recipe=${encodeURIComponent(matchingRecipe)}`;
            } else {
                alert("No matching recipe found.");
            }
        }
    });
});
