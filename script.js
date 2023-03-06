// Когда пользователь прокручивает вниз 50px от верхней части документа, измените размер шрифта заголовка
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("Hello").style.fontSize = "0vw";

  } else {
    document.getElementById("Hello").style.fontSize = "20vw";

  }
}
/* Появлени текста при скролле Появлени текста при скролле Появлени текста при скролле Появлени текста при скролле Появлени текста при скролле  */
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
    else{
      change.target.classList.remove('element-show');
    }

  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation0, .element-animation1, .element-animation2, .element-animation3');

for (let elm of elements) {
  observer.observe(elm);
}
/* Появлени текста при скролле Появлени текста при скролле Появлени текста при скролле Появлени текста при скролле Появлени текста при скролле  */
// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//      change.target.classList.add('element-show');
//     }
//     else{
//       change.target.classList.remove('element-show');
//     }

//   });
// }

// let options1 = {
//   threshold: [0.5] };
// let observer1 = new IntersectionObserver(onEntry, options1);
// let elements1 = document.querySelectorAll('.element-animation1');

// for (let elm of elements1) {
//   observer1.observe(elm);
// }

const lines = document.querySelectorAll(".line");

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    lines.forEach(line => {
        // Вычисляем процент прокрутки страницы для каждой линии
        const scrolledPercent = (scrolled / (fullHeight - windowHeight)) * 200;

        // Устанавливаем ширину линии
        line.style.width = Math.min(scrolledPercent, 100) + "%";
    });
});
