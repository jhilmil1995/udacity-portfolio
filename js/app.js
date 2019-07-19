'use strict'
var menu = document.querySelector('.menu');

function showContent(type) {
    var listArticleContent = document.getElementsByClassName("article-content");
    for (var i=0; i<listArticleContent.length; i++){
        listArticleContent[i].style.display = "none";
    }
    listArticleContent = Array.prototype.filter.call(listArticleContent, function(element, index, aElements) {
        var classNames = element.className.split(' ');
        return classNames.indexOf(type) > -1;
    });
      listArticleContent[0].style.display = "block";
}
  
menu.addEventListener('click', function(e) {
    showContent(e.target.classList[0]);
}); 

showContent('about');