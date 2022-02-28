let tabs = document.querySelectorAll('.tabs__toggle'),
    contents = document.querySelectorAll('.tabs__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });

        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});


$(document).ready(function(){
    $('.destinations__carusel').slick({
       arrows:true
    });
  });



  $('.travelcard').slick({
    slidesToShow: 3,
      slidesToScroll: 1,
    
    autoplay: false,
    autoplaySpeed: 2000,
  });

$('.voyageka').slick({
    
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  });