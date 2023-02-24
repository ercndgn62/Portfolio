function gnrt() {
var randomPlaces = ["Paris", "Almaty", "Antalya", "New York", "Berlin", "Barcelona", "London", "Oslo", "İstanbul"];
var randomPeoples = ["Keanu Reeves", "Angelina Jolie", "Brad Pitt", "Tom Hanks", "Nicole Kidman", "Daniel Redcliffe", "Emma Watson", "Tom Felton", "Tom Holland"];
var randomFuns = ["Watch Movie", "Drink Coffee", "Play Tennis", "Cooking", "Sleeping"];
// Pick a random body part from the randomBodyParts array:
var randomPlace = randomPlaces[Math.floor(Math.random() * randomPlaces.length)];
// Pick a random adjective from the randomAdjectives array:
var randomPeople = randomPeoples[Math.floor(Math.random() * randomPeoples.length)];
// Pick a random word from the randomWords array:
var randomFun= randomFuns[Math.floor(Math.random() * randomFuns.length)];
// Join all the random strings into a sentence:
var randomInsult = "I'm going to " + randomFun + " with " + randomPeople + " in " + randomPlace + "!!!";
console.log(randomInsult);
document.getElementById("textp").textContent = randomInsult;
}