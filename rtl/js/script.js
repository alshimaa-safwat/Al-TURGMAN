$(document).ready(function(){
 
    $(window).scroll( function() {
        var scroll = $(this).scrollTop();
        if(scroll > 400) {
            $('.navbar2').slideDown();
            $('.btn-top').fadeIn(400);


        }else{
            $('.navbar2').slideUp(100);
            $('.btn-top').fadeOut(400);

        }

    } );

    $(window).scroll( function() {
        var scroll = $(this).scrollTop();
        if(scroll > 1500) {
            $('.timer').countTo();

        }

    } );

    
    $('#to-top').click(function() {      
        $('body,html').animate({
            scrollTop : 0                  
        }, 1000);
    });

  
    $('#slider1').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    navText:['<i class="fa fa-arrow-left icon" aria-hidden="true"></i>','<i class="fa fa-arrow-right icon" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
             
    }
})

$('#slider2').owlCarousel({
  loop:true,
  margin:15,
  nav:true,
  dots:false,
  navText:['<i class="fa fa-arrow-left icon" aria-hidden="true"></i>','<i class="fa fa-arrow-right icon" aria-hidden="true"></i>'],
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },

      800:{
        items:4
      },
      1000:{
          items:6
      }
  }
})

$('#slider3').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    dots:false,
    navText:['<i class="fa fa-arrow-left icon" aria-hidden="true"></i>','<i class="fa fa-arrow-right icon" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
  
        800:{
          items:4
        },
        1000:{
            items:6
        }
    }
  })

  $('#slider4').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText:['<i class="fa fa-arrow-left icon" aria-hidden="true"></i>','<i class="fa fa-arrow-right icon" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })

  $("#slider5").owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    margin:10,
    nav:true,
    dots:false,
    items:1
})

$("#file").change(function(){
    var fileName=$(this).val().split('\\').pop();
    $(".label").text(fileName);
})


})

function validte(){
    let name = $('#name').val();
    let email = $('#mail').val();
   
    if(name == '' && email == ''){
        $('#name').addClass('validation-border');
        $('#validation-text').text('Please Enter Your Name');
        $('#mail').addClass('validation-border');
        $('#validation-text1').text('Please Enter Your E-mail');
    }else if(name == '' && email != ''){
        $('#name').addClass('validation-border');
        $('#validation-text').text('Please enter your name'); 
        $('#mail').removeClass('validation-border');
        $('#validation-text1').text('');
    }else if(name !== '' && email ==''){
        $('#name').removeClass('validation-border');
        $('#validation-text').text('')
        $('#mail').addClass('validation-border')
        $('#validation-text1').text('Please Enter Your E-mail');
        ;
    }else{
        $('#name').removeClass('validation-border');
        $('#mail').removeClass('validation-border')

        $('#validation-text').text('');
        $('#validation-text1').text('');
    }

}