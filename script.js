var text = document.getElementById('Text');
var textContent = text.textContent;
var ind = 0;

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
    textContent = document.getElementById('Text').textContent;
    var letter = event.key;
    var before = textContent.substring(0, ind);
    var after = textContent.substring(ind + 1);
    if (letter == textContent[ind]){
      text.innerHTML = "<span style='color: green; font-weight: bold;'>" + before + "</span>" + "<span style='color: green; font-weight: bold;'>" + letter + "</span>" +  after;
      ind++
    } else {
        text.innerHTML = "<span style='color: green; font-weight: bold;'>" + before + "</span>" + "<span style='color: red; font-weight: bold;'>" + textContent[ind] + "</span>" +  after;
    }
}); 
