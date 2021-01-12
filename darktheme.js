function dark() {
   var element = document.body;
   var header = document.getElementById('headerd');
   var layer = document.getElementById('layer1');
   var article = document.getElementsByClassName('article');
   var p = document.getElementsByClassName('paraglight');
   var title = document.getElementsByClassName('title');
   var search = document.getElementById('search');
   var links = document.getElementsByClassName('alink');
   element.classList.toggle("dark-mode");
   header.classList.toggle('headerdark');
   layer.classList.toggle('layer-dark');
   search.classList.toggle('search-dark');
   for (var i = 0; i < links.length; i++) {
     links[i].classList.toggle('alinks');
   }
   for (var i = 0; i < article.length; i++) {
     article[i].classList.toggle('article-dark');
   }
   for (var i = 0; i < title.length; i++) {
     title[i].classList.toggle('title-dark');
   }
   for (var i = 0; i < p.length; i++) {
     p[i].classList.toggle('parag');
   }
}

// var today = new Date();
// var time = today.getHours();
// if (time > 17 || time < 5) {
//   dark();
// }
