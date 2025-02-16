
function random(num){
    return Math.floor(Math.random()* num);
}

function getRandomListEntry(list){
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    let html = tags.map(tag => `<span class="tag">${tag}</span>`).join(" ");
    
    return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        if (i <= rating) {
           html +=  `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        // else output an empty star
        else{
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function recipeTemplate(recipe) {
return `<div class="recipe">
                <img src="${recipe.image}" alt="${recipe.description}">
                <div>   
                    <h2>${tagsTemplate(recipe.tags)}</h2>
                    <h3>${recipe.name}</h3>
                    
                    <span
                class="rating"
                role="img"
                ${ratingTemplate(recipe.rating)}
                </span>
                </div> 
        </div>`
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const output = document.getElementById("main");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
	// Set the HTML strings as the innerHTML of our output element.
    output.innerHTML = recipesHTML;
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

document.getElementById("search").addEventListener("click", searchHandler);

function searchHandler(event) {
    event.preventDefault(); // Prevents form from reloading the page

    // Get the search input value and convert it to lowercase
    const query = document.getElementById("search_input").value.toLowerCase();

    // Filter recipes based on name or tags
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) || 
        recipe.tags.find(tag => tag.toLowerCase().includes(query))
    );

    // Render only the matching recipes
    renderRecipes(filteredRecipes);
}
