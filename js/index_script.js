$(document).ready(function(){
  //parallax.min.js
  $('.dtdBG').parallax({imageSrc: 'img/dtdBG.png'});
  $('#dtdSnowFast').parallax({
    imageSrc: 'img/dtdSnowFast.png',
    speed: -0.3
  });
  $('#dtdSnowSlow').parallax({
    imageSrc: 'img/dtdSnowSlow.png',
    speed: -0.1
  });
  $('#dtdFrontItem').parallax({
    imageSrc: 'img/dtdFrontItem.png',
    speed: 0.8
  });
  $('#dtdMiddleItem').parallax({
    imageSrc: 'img/dtdMiddleItem.png',
    speed:0.4
  });
  $('#dtdBackItem').parallax({
    imageSrc: 'img/dtdBackItem.png',
    speed:0.3
  });
  $('#dtdBGItem').parallax({imageSrc: 'img/dtdBG.png'});
  // $('#pacoLogo').parallax({
  //   imageSrc: 'img/pacoLogo.png',
  //   speed:0.4
  // });
  $('#pacoCharacter').parallax({
    imageSrc: 'img/pacoCharacter.png',
    speed:0.3
  });
  $('#pacoPoster').parallax({imageSrc: 'img/pacoPoster.png'});
  $('#giantMeScene').parallax({imageSrc: 'img/giantMeScene.png'});
  $('#egg').parallax({imageSrc: 'img/egg.png'});
  $('#popous').parallax({imageSrc: 'img/popous-index1.png'});

  var skrollr_obj = skrollr.init();
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 0
  });
  // $('#illustration > li').each( function() { $(this).hoverdir(); } );

});

$(window).on("load",function() {
  $(window).scroll(function() {
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectCenter = $(this).offset().top + $(this).outerHeight()/2;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectCenter < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      }
      // else { //object goes out of view (scrolling up)
      //   if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      // }
    });
  });
});

function IntoProjectAnimate(element) {
  var parentSection = element.parentElement;
  var url = $(parentSection).data("url");
  var color = $(parentSection).find(".color");
  $(color).css({'display': 'block'});
  $('html, body').animate({
    scrollTop: $(parentSection).offset().top
  }, {
    duration: 'slow', // how fast we are animating
    easing: 'easeInBack', // the type of easing
    complete: function() { // the callback
      $(color).animate({
        opacity: '1'
      }, 2000, function () {
        window.location.href = url;
      });
    }
  });
}

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  // captionText.innerHTML = slides[slideIndex-1].getAttribute('alt');
}
