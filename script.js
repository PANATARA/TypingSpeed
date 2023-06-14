var text = document.getElementById('Text');
var rectangle = document.getElementById('rectangle');
var textContent = text.textContent;
var remainAndSetting = document.getElementById('remainAndSetting');
var ind = 0;
const items = document.querySelectorAll('.section_item');
let isFunctionExecuted = false;
var errorYesNum;
var language = "EN";
var timeValue = 60;
var countSymbol = "LONG";

function time60(){timeValue=60;document.getElementById('remainTimeNum').textContent = timeValue;}
function time30(){timeValue=30;document.getElementById('remainTimeNum').textContent = timeValue;}
function time90(){timeValue=90;document.getElementById('remainTimeNum').textContent = timeValue;}


function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function languageRU(){language = "RU"}
function languageEN(){language = "EN"}
function funcFew(){countSymbol = "SHORT"}
function funcMany(){countSymbol = "LONG"}

function changeText(Number){
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
      event.preventDefault();
}
  });
    var textNow = "text" + randomNum(1,4) + language + countSymbol;
    fetch('Texts.json')
    .then(response => response.json())
    .then(data => {document.getElementById('Text').textContent = data[Number][textNow]})
    .catch(error => console.error(error));
    ind = 0;
}
var erorrArr = [];
var erorrForResult = 0;
var correctArr = [];
document.addEventListener("keydown", function(event) {
  var letterPattern = /^[a-zA-Zа-яА-Я-" "-,-.]$/;
  if (letterPattern.test(event.key)) {
  textContent = document.getElementById('Text').textContent;
  var before = textContent.substring(0, ind);
  var coloredBefore = '';
  for (var i = 0; i < before.length; i++) {
    if (erorrArr.includes(i)) {
      coloredBefore += '<span style="color: red">' + before[i] + '</span>';
    }else if (correctArr.includes(i)) {
      coloredBefore += '<span style="color: green">' + before[i] + '</span>';
    }
  }
  var afterSymbol = textContent.substring(ind + 1, ind + 2); 
  var after = textContent.substring(ind + 2);
  Hints(timeValue);
  if (ind == textContent.length - 1){showResult()}
  if (event.key == textContent[ind]){
    correctArr.push(ind);
    text.innerHTML = coloredBefore + 
    "<span style='color: green;'>" + textContent[ind] + "</span>" + 
    "<span style='text-decoration: underline; text-decoration-skip-ink: none; text-decoration-color: white;'>" + 
    afterSymbol + "</span>" + 
    after;
    ind++
  } else {
      erorrForResult++;
      text.innerHTML = coloredBefore + "<span style='color: red;'>" + textContent[ind] + "</span>" + 
      "<span style='text-decoration: underline; text-decoration-skip-ink: none; text-decoration-color: white;'>" + 
      afterSymbol + "</span>" 
      +  after;
      if (errorYesNum == 1){erorrArr.push(ind);ind++;}
  }
}
}); 

function errorYes(){
  errorYesNum = 1;
}

function errorNo(){
  errorYesNum = 0;
}

var b = 2;
function theme(){
    if (b % 2 == 0) {
        document.documentElement.style.setProperty('--primary-opacity', '1');
        rectangle.style.color = "#807f7e";
        rectangle.style.background = "rgba(28, 28, 30, 1)";
        document.getElementById('colorMod').innerHTML = "Appearance";
        for (var i = 0; i < items.length; i++) {
          items[i].style.backgroundColor = "rgba(28, 28, 30, 1)"; 
          items[i].style.color = "rgba(255,255,255)";
        } 
        b++;
    }else{
        document.documentElement.style.setProperty('--primary-opacity', '0');
        rectangle.style.color = "rgba(54, 54, 54, 0.85)";
        rectangle.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        document.getElementById('colorMod').innerHTML = "Appearance";
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

var tds = document.querySelectorAll('.setting td');

for (let i = 0; i < tds.length; i++) {
  tds[i].addEventListener('click', function() {
    var tdsText = tds[i].textContent;
    tds[i].style.textDecoration = "underline";
    tds[i].style.color = "green";
    if (i % 2 == 1){
      tds[i - 1].style.textDecoration = "none";
      tds[i - 1].style.color = "rgba(255, 255, 255, 1)";
    }else{
      tds[i + 1].style.textDecoration = "none";
      tds[i + 1].style.color = "rgba(255, 255, 255, 1)";
    }
  });
}

function Hints(selectedTime){
  if (!isFunctionExecuted) {
    isFunctionExecuted = true;
    var time = selectedTime;
    setInterval(function() {
      document.getElementById('remainTimeNum').textContent = time - 1;
      time = time- 1;
      document.getElementById('remainSymboolNum').textContent = textContent.length - ind;
      document.getElementById('remainSymboolSpeedNum').textContent = Math.round((ind / (60 - time))*60);
      if (time == 0){showResult()
      }
    }, 1000);
  }
}

function showResult(){
  text.style.display = "none";
  document.getElementById('resultBoxid').style.display = "block";
  rectangle.style.height = "90%";
  document.getElementById('RAS').style.display = "none";
  document.getElementById('AccuracyResNum').innerHTML = correctArr.length / (correctArr.length + erorrForResult) * 100 + "%";
  console.log(erorrArr.length);
  document.getElementById('correctSimNumRes').innerHTML = correctArr.length;
  document.getElementById('InorrectSimNumRes').innerHTML = erorrForResult;

}
