let userMovie = prompt("Guess the movie");

let movie = "Avatar";
let quit = "quit";
while (userMovie !== movie) {
  if (userMovie === quit) {
    alert("better luck next time");
    break;
  }
  userMovie = prompt("Guess it again");
}
if (userMovie === movie) {
    alert("you have guessed it right");
  }