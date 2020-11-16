$(function(){

         var header = $("#header"); 
         var introH = $("#intro").innerHeight(),
             scrollOfSet = $(window).scrollTop();


         /* Header fixed */
         checkScroll(scrollOfSet);

         $(window).on("scroll", function(){

                  scrollOfSet = $(this).scrollTop();

                  checkScroll(scrollOfSet);

         });

         function checkScroll(scrollOfSet){

                  if(scrollOfSet >= introH){
                           header.addClass("fixed");
                  }else{
                           header.removeClass("fixed");
                  }
         }

         /* Smooth scroll*/

         $("[data-scroll]").on("click", function(event){
                  event.preventDefault();

                  var $this = $(this),
                      blockId = $this.data('scroll'),
                      blockOffSet = $(blockId).offset().top;

                  $("#nav a").removeClass("active");

                  $this.addClass("active");

                  $("html, body").animate({
                           scrollTop: blockOffSet
                  }, 500);
         });


         /* Menu nav toggle*/
         $("#nav-toggle").on("click", function(event){
                  event.preventDefault();

                  $(this).toggleClass("active");
                  $("#nav").toggleClass("active");
         });

});