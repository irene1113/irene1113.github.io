var height;
var sidebarClose;
var scrollTop;
var OffsetTop;
var currentOffset;

$(document).ready(function(){
  sidebarClose = false;
  height = $(window).height();
  $(window).resize(Resize);
  $('.startColor').animate({opacity: 0}, 4000,function () {
    $('.startColor').css({display: 'none'});
  });
  $('#menu').click(function() {
    MenuToggle();
    SlidebarToggle();
  });
  $('#menu').hover(function(){
    $(this).animate({"opacity": 0.7});
  },function(){
    $(this).animate({"opacity": 1});
  });
  $('.overlay').click(function() {
    MenuToggle();
    SlidebarToggle();
  });
  $('.sidebar-nav a').click(function() {
    MenuToggle();
    SlidebarToggle();
  });


});

function Resize() {
  height = $(window).height();
}

function SlidebarToggle() {
  if (sidebarClose == true){
    $('.overlay').hide();
    $('#menu').animate({left: '0px'}, "slow");
    $('#sidebar-wrapper').animate({'width': 'toggle'});
    sidebarClose = false;
  }else {
    $('.overlay').show();
    $('#menu').animate({left: '210px'});
    $('#sidebar-wrapper').animate({'width': 'toggle'});
    sidebarClose = true;
  }
}

function MenuToggle() {
  $('.menu-top').toggleClass('menu-top-click');
  $('.menu-middle').toggleClass('menu-middle-click');
  $('.menu-bottom').toggleClass('menu-bottom-click');
}

function NextProjectDisplay(){
  scrollTop = $(this).scrollTop();
  OffsetTop = $('.nextProjectSection').offset().top;
  currentOffset = (OffsetTop - scrollTop);
  if (currentOffset < height) {
    $('.nextProject-wrapper').css({"display": "block"});
  }else {
    $('.nextProject-wrapper').css({"display": "none"});
  }
}

function ScrollDownToDescription() {
  $('html, body').animate({
    scrollTop: $('#description').offset().top
  },{
    duration: 'slow', // how fast we are animating
    easing: 'swing'
  });
}
