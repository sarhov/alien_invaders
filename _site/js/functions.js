$(document).ready(function() {
   var owl_slider = $("#slider");
       owl_slider.owlCarousel({

          // Most important owl features
          items : 1,
          rtl:true,
          itemsCustom : false,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [980,3],
          itemsTablet: [768,2],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
          singleItem : false,
          itemsScaleUp : false,
          margin:10,
          stagePadding: 50,
          center:true,
          //Basic Speeds
          slideSpeed : 200,
          paginationSpeed : 800,
          rewindSpeed : 1000,

          //Autoplay
          autoPlay : false,
          stopOnHover : true,

          // Navigation
          navigation : false,
          navigationText : ["prev","next"],
          rewindNav : true,
          scrollPerPage : false,

          //Pagination
          pagination : false,
          paginationNumbers: false,
           singleItem : true,
           transitionStyle : "fade",

          // Responsive
          responsive: false,
          responsiveRefreshRate : 200,
          responsiveBaseWidth: window,

          // CSS Styles
          baseClass : "owl-carousel",
          theme : "owl-theme",

          //Lazy load
          lazyLoad : false,
          lazyFollow : true,
          lazyEffect : "fade",

          //Auto height
          autoHeight : false,

          //JSON
          jsonPath : false,
          jsonSuccess : false,

          //Mouse Events
          dragBeforeAnimFinish : false,
          mouseDrag : false,
          touchDrag : true,

          //Transitions
          // transitionStyle : false,

          // Other
          addClassActive : true,

          //Callbacks
          beforeUpdate : false,
          afterUpdate : false,
          beforeInit: false,
          afterInit: false,
          beforeMove: false,
          afterMove: false,
          afterAction: true,
          startDragging : false,
          afterLazyLoad : false,
          // afterAction: function(){
          //   if ( this.itemsAmount > this.visibleItems.length ) {
          //     $('.js-sliderPrev').show();
          //     $('.js-sliderNext').show();

          //     $('.js-sliderPrev').removeClass('disabled');
          //     $('.js-sliderNext').removeClass('disabled');
          //     if ( this.currentItem == 0 ) {
          //       $('.js-sliderNext').addClass('disabled');
          //     }
          //     if ( this.currentItem == this.maximumItem ) {
          //       $('.js-sliderPrev').addClass('disabled');
          //     }

          //   } else {
          //     $('.js-sliderPrev').hide();
          //     $('.js-sliderNext').hide();
          //   }
          // }

        })
   // end owl carousel

       // Custom Navigation Events
       $(".js-sliderPrev").click(function(e){
         e.preventDefault();
         owl_slider.trigger('owl.next');
       })
       $(".js-sliderNext").click(function(e){
         e.preventDefault();
         owl_slider.trigger('owl.prev');
       })
  
});