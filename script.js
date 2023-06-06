

var text = document.getElementById('Text');
var textContent = text.textContent;
var ind = 0;

function print(){
    console.log(1234567);
}


function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeText(Number){
    var textNow = "text" + randomNum(1,2);
    fetch('Texts.json')
    .then(response => response.json())
    .then(data => {document.getElementById('Text').textContent = data[Number][textNow]})
    .catch(error => console.error(error));
    ind = 0;
}


document.addEventListener("keydown", function(event) {
    var letterPattern = /^[a-zA-Zа-яА-Я-" "-,]$/;
    if (letterPattern.test(event.key)) {
    textContent = document.getElementById('Text').textContent;
    var letter = event.key;
    var before = textContent.substring(0, ind);
    var afterSymbol = textContent.substring(ind + 1, ind + 2); 
    var after = textContent.substring(ind + 2);
    if (letter == textContent[ind]){
      text.innerHTML = "<span style='color: green;'>" + before + "</span>" + 
      "<span style='color: green;'>" + letter + "</span>" + 
      "<span style='text-decoration: underline; text-decoration-skip-ink: none; text-decoration-color: black;'>" + 
      afterSymbol + "</span>" + after;
      ind++
    } else {
        text.innerHTML = "<span style='color: green;'>" + before + "</span>" + "<span style='color: red;'>" + textContent[ind] + "</span>" + afterSymbol +  after;
    }
}
}); 

function theme(){
    document.documentElement.style.setProperty('--primary-opacity', '1');
}
