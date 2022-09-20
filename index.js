

// slider start
$(document).ready(function(){
    $('#slider>li:gt(0)').hide(); 
     setInterval(function() {
        $('#slider > li:first')
          .fadeOut(500)
          .next()
          .fadeIn(500)
          .end()
          .appendTo('#slider'); 
      }, 2000);
    
   }); 
  //  slider end


  // counter 
  var counted = 0;
  $(window).scroll(function() {
  
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
  
          });
      });
      counted = 1;
    }
  
  });