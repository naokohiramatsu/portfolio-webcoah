$('.cover-slick').slick({
  infinite: true,
  dots: true,
  arrows: true,
  prevArrow: '<img src="/Kirameki Cream/imgaes/arrow-left-circle-fill.svg" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="/Kirameki Cream/imgaes/arrow-right-circle-fill.svg" class="slide-arrow next-arrow">',
  fade: true
});


$(function () {
  $(".js-title").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open",200);
  });
});

$('.slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: false,
  nextArrow: false,
  dots: true,
  responsive: [
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
]
});


$('.title').on('click', function() {
  var findElm = $(this).next(".box");
  $(findElm).slideToggle();
  if($(this).hasClass('close')){
  $(this).removeClass('close');
  }else{
  $(this).addClass('close');
  }
  });