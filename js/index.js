//nav
const link = [ "iPhone", "iPad", "MacBook"];
const linktags = [
    "iPhone.html",
    "iPad.html",
    "MacBook.html",
];
let navlength = link.length;
let ul = "<ul>";
for(let i=0; i<navlength; i++){
    ul += "<li><a href=" + linktags[i] + ">" + link[i] + "</a></li>";
}
ul += "</ul>";
document.getElementById("nav").innerHTML = ul;


//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// slider 2
const nextButton = document.querySelector('.next-button');
const scrollNext = document.getElementById('scroll');
const prevButton = document.querySelector('.previous-button');
const scrollPrev = document.getElementById('start');


nextButton.onclick = function(){
  scrollNext.scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  })
}

prevButton.onclick = function(){
  scrollPrev.scrollIntoView({
    behavior: 'smooth',
    inline: 'start'
  })
}
// chat
function show(){
    document.getElementById("messageboxcontainer").style.display = "block";
  }
  function hide(){
    document.getElementById("messageboxcontainer").style.display = "none";
  };
