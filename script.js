function randomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeText(Number){
    var textNow = "text" + randomNum(1,2);
    fetch('Texts.json')
    .then(response => response.json())
    .then(data => {document.getElementById('Text').textContent = data[Number][textNow]})
    .catch(error => console.error(error));
}
