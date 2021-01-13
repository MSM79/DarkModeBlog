var element = document.body;
var header = document.getElementById('headerd');
var layer = document.getElementById('layer1');
var article = document.getElementsByClassName('article');
var p = document.getElementsByClassName('paraglight');
var title = document.getElementsByClassName('title');
var search = document.getElementById('search');
var links = document.getElementsByClassName('alink');
var themeModeText = document.getElementById('theme-mode-text');

function dark() {
   element.classList.add("dark-mode");
   header.classList.add('headerdark');
   layer.classList.add('layer-dark');
   search.classList.add('search-dark');
   for (var i = 0; i < links.length; i++) {
     links[i].classList.add('alinks');
   }
   for (var i = 0; i < article.length; i++) {
     article[i].classList.add('article-dark');
   }
   for (var i = 0; i < title.length; i++) {
     title[i].classList.add('title-dark');
   }
   for (var i = 0; i < p.length; i++) {
     p[i].classList.add('parag');
   }
   themeModeText.innerHTML = "حالت شب";
   sessionStorage.setItem("mode" , "dark");
}

function light() {
  element.classList.remove("dark-mode");
  header.classList.remove('headerdark');
  layer.classList.remove('layer-dark');
  search.classList.remove('search-dark');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('alinks');
  }
  for (var i = 0; i < article.length; i++) {
    article[i].classList.remove('article-dark');
  }
  for (var i = 0; i < title.length; i++) {
    title[i].classList.remove('title-dark');
  }
  for (var i = 0; i < p.length; i++) {
    p[i].classList.remove('parag');
  }
  themeModeText.innerHTML = "حالت روز";
  sessionStorage.setItem("mode" , "light");
}

function handleClick() {
  const mode = sessionStorage.getItem("mode");
  if (mode === "dark") {
    light();
  } else {
    dark();
  }
}

var today = new Date();
var time = today.getHours();
if (time >= 22 || time <= 7) {
  dark();
} else {
  light();
}
