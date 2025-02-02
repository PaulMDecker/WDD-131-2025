const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

const grade = ['A', 'B', 'A'];
function gradeCalculator(grade){
    grade = grade.toUpperCase();
    let points = 0;
    if (grade === "A") {
        points = 4
    } else if (grade === "B"){
        points = 3;
    }
    return points;
}
const gpa = grade.map(gradeCalculator);
console.log(gpa)

const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruit = fruit.filter((word) => fruit.length < 6);
console.log(filteredFruit);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21
let luckyIndex = numbers.indexOf(luckyNumber);
console.log(luckyIndex);