$(document).ready(function () {
  $(".owl-carousel").owlCarousel();

});


$('.owl-carousel').owlCarousel({

  // loop: true,
  margin: 5,
  nav: true,
  
  responsive: {
    0: {
      items: 1
    },

  }

});

$('.main_title_bottom .col-lg-8 .owl-carousel owl-theme owl-loaded owl-drag').owlCarousel({
  items: 1,
  nav: true,
  loop: false,
  center: true,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: 'URLHash'
});




// var btn = document.querySelectorAll('.slider_1');
// var left = document.querySelector('.bottom_btn p');
// var right = document.querySelector('.bottom_btn_1 ');

// right.onclick = function () {
//   $('.owl-carousel').owlCarousel({
//     nav: true,
//     responsive: {
//       0: {
//         items: 1
//       },
  
//     }
    
//   });


// }

window.addEventListener('load', function (e) {
  var cart = document.querySelectorAll('.btn');
  var price = document.querySelector('.totl b');
  for(var i = 0; i < cart.length; i++){
    cart[i].addEventListener('click' , function () {
      this.classList.toggle('cart-active');
      price.innerHTML = count()
      })
  }

  function  count() {
       var sum = 0
       for(var i = 0 ; i < cart.length; i++){
         if(cart[i].classList.contains('cart-active')){
           sum = sum + +cart[i].getAttribute('data-price')  
        } 
        console.log(sum)
      }
      return sum
          //  alert(togri) 
      }
      
    });




  $(document).ready(function () {
    $inp = $('.form-control')
    $btn = $('.btn_011')

    $btn.on('click' , function () {
      addDo()
      $inp.val("")      
    })
  });


$(document).ready(function () {
  var $icon = $('.icons i');
  var $ul = $('.asd');
  
console.log($icon)
  $icon.on('click',function() {
    $(".asd").toggle('asd');
  });
});



// $(document).ready(function () {
//   var icon = document.querySelector('selector');
// });


