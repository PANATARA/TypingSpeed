var text = document.getElementById('Text');
var rectangle = document.getElementById('rectangle');
var textContent = text.textContent;
var remainAndSetting = document.getElementById('remainAndSetting');
var ind = 0;
const items = document.querySelectorAll('.section_item');

function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeText(Number){
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
    }
  });
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
      "<span style='text-decoration: underline; text-decoration-skip-ink: none; text-decoration-color: blue;'>" + 
      afterSymbol + "</span>" + after;
      ind++
    } else {
        text.innerHTML = "<span style='color: green;'>" + before + "</span>" + "<span style='color: red;'>" + textContent[ind] + "</span>" + afterSymbol +  after;
    }
}
}); 
var b = 2;
function theme(){
    if (b % 2 == 0) {
        document.documentElement.style.setProperty('--primary-opacity', '1');
        rectangle.style.color = "#b6b39e";
        rectangle.style.background = "rgba(0, 0, 0, 0.95)";
        document.getElementById('colorMod').innerHTML = "Light Mod";
        for (var i = 0; i < items.length; i++) {
          items[i].style.backgroundColor = "rgba(0, 0, 0, 0.95)"; 
          items[i].style.color = "rgba(255,255,255)";
        } 
        b++;
    }else{
        document.documentElement.style.setProperty('--primary-opacity', '0');
        rectangle.style.color = "rgba(14, 14, 14, 0.85)";
        rectangle.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        document.getElementById('colorMod').innerHTML = "Dark Mod";
        for (var i = 0; i < items.length; i++) {
          items[i].style.backgroundColor = "rgba(255, 255, 255, 0.15)"; 
          items[i].style.color = "rgba(0,0,0)"; 
        }
        b++;
    }
}

function cancelSpace(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
      return false;
    }
}

const tds = document.getElementsByTagName('td');

for (let i = 0; i < tds.length; i++) {
  tds[i].addEventListener('click', function() {
    var tdsText = tds[i].textContent;
    tds[i].style.textDecoration = "underline";
    tds[i].style.color = "rgba(20, 20, 20, 0.45)";
  });
}
