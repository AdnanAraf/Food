let type= new Typed(".type",{
    strings:["Nodules", "Fried Chicken"],
    typeSpeed:150,
    backSpeed:140,
    loop:true,

})

let slideIndex = 1;
myslides(slideIndex);

function plusSlides(n) {
  myslides(slideIndex += n);
}
function myslides(n){
  let slide = document.getElementsByClassName("grid8");
  let len = slide.length; 

  if( n > len ){
    slideIndex=1;
  }
  if (n < 1) {slideIndex = slide.length}
  for( let i = 0 ; i < len ; i++ ){
    slide[i].style.display="none";
  }
  slide[slideIndex-1].style.display="block";

}