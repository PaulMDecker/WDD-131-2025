const newP = document.createElement("p");
newP.innerText = "hello, world!";
document.body.append(newP);
const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200";
newImg.alt = "placeholder";
document.body.append(newImg);

const title = "DOM Basics"
const subtitle = "Creating elements and appending them to the DOM";
const content = "New content";
const newS = document.createElement("section");
newS.innerHTML = (`
    <h2>${title}</h2> 
    <h3>${subtitle}</h3>
    <p>${content}</p>
    `)
document.body.append(newS);

const ingredientData = ["Pinto Beans", "Corn", "Spices","Tortillas"];
const portionData = ["1 15oz can", "1 15oz can", "1 Tbsp", "8"]


function incredientTemplate(index){
    return `<li>${portionData[index]} ${ingredientData[index]}</li>`
}

const newList = document.createElement("ul");
newList.classList.add("dark")
ingredientData.forEach(function(item, index){
    newList.innerHTML += incredientTemplate(index);
})

document.body.append(newList);

