
var i;
var j=0;
var slides = document.getElementsByClassName("mySlides");
var slides2 = document.getElementsByClassName("mySlides2");
//var dots = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");

function openModal1() {
    document.getElementById('myModal1').style.display = "block";
    j=1; 
  }

  function openModal2() {
    document.getElementById('myModal2').style.display = "block"; 
    j=2;
  }
  
  function closeModal1() {
    document.getElementById('myModal1').style.display = "none";
    j=0;
  }

  function closeModal2() {
    document.getElementById('myModal2').style.display = "none";
    j=0;
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    if(j===1){
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slides[slideIndex-1].style.display = "block";
    }

    if(j===2){
      if (n > slides2.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides2.length}
      for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
      }
  
      slides2[slideIndex-1].style.display = "block";
    }

    console.log(slideIndex);
  }