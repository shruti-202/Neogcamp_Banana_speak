// console.log("Hi Software Developer");

// var userInput = prompt("What's your Name!"); //prompt is use to take input
// var wlcmMessage = userInput + "! Welcome to Neogcamp ! ";
// alert(wlcmMessage); //alert is use to display the content

var btnTranslate = document.querySelector("#btn-translate"); //This tells the browser to fetch btn-translate id...
btnTranslate.addEventListener("click", function clickEventHandler() {
  console.log("Clicked!");
  // outputText.innerText = "zyzyzyyzyzyz " + inputText.value;
  var userInput = inputText.value; //Reading Input
  fetch(translatedUrl(userInput)) //Calling the server
    .then((response) => response.json())
    .then((json) => {
      var translateText = json.contents.translated;
      outputText.innerText = translateText;
    })

    .catch(errorHandler);
});

// function clickEventHandler(){....This way we can extra the function
// console.log("Clicked!");
// }
// btnTranslate.addEventListener("click",clickEventHandler);....ANd from here we can call back function

var inputText = document.querySelector("#text-input");
inputText.addEventListener("click", function clickEventHandler() {
  // console.log("input", inputText.value);
});

var outputText = document.querySelector("#output");
// outputText.innerText = "Shruti ,The Software Engineer!";
// console.log(outputText);

// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json"; //Minion server
function translatedUrl(text) {
  return (
    "https://api.funtranslations.com/translate/minion.json" +
    "?" +
    "text=" +
    text
  );
}
//To handler errors
function errorHandler(error) {
  console.log("Server is down", error);
}
