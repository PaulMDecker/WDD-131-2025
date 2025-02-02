const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
	
]

// Function to display articles
function displayArticles() {
    const container = document.getElementById('articles-container');
    
    // Loop through each article and create HTML
    articles.forEach(article => {
        // Create a new article element
        const articleElement = document.createElement('article');
        articleElement.classList.add('article');
        
        // Create a template literal for the article's HTML
        const articleHTML = `
            <div class="stats">
                <p class="date">${article.date}</p>
                <p class="age">${article.age}</p>
                <p class="genre">${article.genre}</p>
                <p class="rating">${article.stars}</p>
            </div>
            <div class="bookName">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.title}">
                <p class="description">${article.description}</p>
            </div>
        `;
        
        // Set the innerHTML of the new article to the template literal
        articleElement.innerHTML = articleHTML;
        
        // Append the article to the container
        container.prepend(articleElement);
    });
}

// Call the function to display articles
displayArticles();

