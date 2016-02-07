$(document).ready(function() {
	
(function(){
	
	FastClick.attach(document.body);	             
    
    function isMobileWidth() {
        return $('#mobile-indicator').is(':visible');
    }

    function stickyFooter() {	    	
       	$('.content').css('padding-bottom',$('.n-footer').outerHeight(true));
    }
    
    function restoreMenu() {
    	if (!isMobileWidth()) {
    		$('.n-catalog__sidebar__auto').css({'left':'0'});    		
	    	$('.n-catalog__sidebar__auto').css('visibility','visible');
	    	$('.n-cab__list--mob').css({'left':'0'});    		
	    	$('.n-cab__list--mob').css('visibility','visible');	
	    	$('.n-catalog__filter__wrap').css({'left':'0'});    		
	    	$('.n-catalog__filter__wrap').css('visibility','visible');    	   			
    	}
    	if (isMobileWidth()) {
    		$('.n-catalog__sidebar__auto').css({'left':'-100%'});    		
	    	$('.n-catalog__sidebar__auto').css('visibility','hidden');
	    	$('.n-cab__list--mob').css({'left':'-100%'});    		
	    	$('.n-cab__list--mob').css('visibility','hidden');
	    	$('.n-catalog__filter__wrap').css({'left':'-100%'});    		
	    	$('.n-catalog__filter__wrap').css('visibility','hidden');
	    	$('.page').css('height','auto');	    	   			
    	}
    }
    
    function mobpop() {
    	if (isMobileWidth()) {
    		$('.mobpop').css('visibility','hidden');
    		$('.mobpop').css('left','-100%');
    		$('.page').css('height','auto');
    	}   	    	
    }
    
    function paginationResize() {
    	setTimeout(function(){
    		$('.n-main__sliderH').find('.swiper-pagination-bullet').css('width',parseInt($('.n-main__sliderH__pag').width() / $('.n-main__sliderH').find('.swiper-pagination-bullet').length));
    	},10);	
    };
    
    function windowOpen($window) {
    	if (isMobileWidth()) {
	    	if ($window.css('visibility') == 'hidden') {	    		    	
				$window.css('visibility','visible');
		    	$window.animate({'left':'0px'},'fast',function(){
		    		$('.page').css('height',parseInt($window.find('.n-mob__container').outerHeight()+100));
		    	});    	
	    	} else {
	    		$window.animate({'left':'-100%'},'fast',function(){
	    			$window.css('visibility','hidden');   			  			
	    		});
	    		$('.page').css('height','auto'); 
	    	};
    	}
    }
    
    function placeholder() {

      $('input[type="text"],input[type="search"], textarea').focus(function(){
        if ($(this).prop('readonly')==false) {
           var plac = $(this).prop('placeholder');
           $(this).prop('placeholder',' ');

           $('input[type="text"],input[type="search"], textarea').blur(function(){
               $(this).prop('placeholder',plac);
           });
        }
      });
    };
    
    setTimeout(function(){
    	$('.n-pop__city').hide('fast');
    },3000);              
    
    $('#mob-items').click(function(){      	   	
    	 windowOpen($('.n-mob__items')); 	    	
    });
    $('.n-search').click(function(){      	   	
    	 windowOpen($('.n-mob__search')); 	    	
    });
    $('.n-menu').click(function(){      	   	
    	 windowOpen($('.n-mob__menu')); 	    	
    });
    $('.n-header__nav-part--list').click(function(){   	      	   	
    	 windowOpen($('.n-mob__catalog')); 
    	 $(this).toggleClass('n-menu--active');	    	
    });
    $('.n-header__mid__mobtime').click(function(){      	   	
    	 windowOpen($('.n-mob__time')); 	    	
    });
    $('.n-header__mid__mobcab').click(function(){      	   	
    	 windowOpen($('.n-mob__cab')); 	    	
    });
    $('.n-header__mid__mobbucket').click(function(){      	   	
    	 windowOpen($('.n-mob__bucket')); 	    	
    });
    $('.n-header__mid__mobmenu').click(function(){      	   	
    	 windowOpen($('.n-mob__submenu')); 	    	
    });
    $('.n-catalog__chemistry__btnauto').click(function(){      	   	
    	 windowOpen($('.n-catalog__sidebar__auto')); 	    	
    });
    $('.n-catalog__chemistry__btnoil').click(function(){      	   	
    	 windowOpen($('.n-cab__list--mob')); 	    	
    });
    $('.n-catalog__chemistry__btnfilter').click(function(){      	   	
    	 windowOpen($('.n-catalog__filter__wrap')); 	    	
    });
    
    $('.n-mob__close').click(function(){
    	$('.mobpop').animate({'left':'-100%'},'fast',function(){
	    	$('.mobpop').css('visibility','hidden');	    	   			
	    });
	    $('.n-catalog__sidebar__auto').animate({'left':'-100%'},'fast',function(){
	    	$('.n-catalog__sidebar__auto').css('visibility','hidden');	    	   			
	    });
	    $('.n-cab__list--mob').animate({'left':'-100%'},'fast',function(){
	    	$('.n-cab__list--mob').css('visibility','hidden');	    	   			
	    });
	    $('.n-catalog__filter__wrap').animate({'left':'-100%'},'fast',function(){
	    	$('.n-catalog__filter__wrap').css('visibility','hidden');	    	   			
	    });
	    $('.page').css('height','auto');
    });
    

	$(".txtboxToFilter").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    
    $('.nav-burger').click(function(){
    	$(this).toggleClass('nav-burger-active');
    	$('.n-header__top__nav').toggleClass('active');
    });

    $('.header__search--mob').click(function(){
        $(this).addClass('header__search--mob--expand');
    });

    $('.one-of input').click(function(){
        $(this).parent().parent().parent().parent().find('.one-of input').prop('checked',false);
        $(this).prop('checked',true);
    });          
    
    $( "#city-select" ).selectmenu({
      appendTo: ".n-header__top__city",
      width: function(){
          return '130';
      },
      change: function(event, ui) {
          if (parseInt($menu.css('width'))>130) {
             $menu.css('width',130);
          } else {
             $menu.css('width','auto');
          }
      },
      position: {
      	my: "right top", at: "right bottom", collision: "none"
      }
    }); 
    
    $( "#select1" ).selectmenu({
    	appendTo: "#n-field1",    	
    });
    
    $( "#select2" ).selectmenu({
    	appendTo: "#n-field2",
    });
    
    $( "#select3" ).selectmenu({
    	appendTo: "#n-field3",
    });
    $( "#select4" ).selectmenu({
    	appendTo: "#n-field4",
    });
    $( "#select5" ).selectmenu({
    	appendTo: "#n-field5",
    });
    
    $( "#select-vars" ).selectmenu({
    	appendTo: "#n-catalog__variables__field",
    });
        
    $("#ionslider").ionRangeSlider({
    	min: 0,
	    max: 10000,
	    from: 1500,	    
	    onStart: function (data){
	        $('#filter-before').prop('value',data.min);
	        $('#filter-after').prop('value',data.to);
	    }
    });
      
    
    var ionslider = $('#ionslider').data('ionRangeSlider');      
	var timer;
	
	$('#filter-before').focus(function(){
		var that = $(this);
		timer = setInterval(function(){
	        var val = that.prop('value');
	        ionslider.update({
	            min: val,
	        });
        },25);
	});
	
	$('#filter-before').blur(function(){
		clearInterval(timer);
	});

	$('#filter-after').focus(function(){
		var that = $(this);
		timer = setInterval(function(){
	        var val = that.prop('value');
	        ionslider.update({
	            max: val,
	        });
        },25);
    });
    
    $('#filter-after').blur(function(){
		clearInterval(timer);
	});   
    
    var $menu = $( ".n-header__top__city" ).find('.ui-selectmenu-button');   

    var sliderH = new Swiper('#sliderH', {
        speed: 400,
        spaceBetween: 0,
        autoplay: 4000,
        effect: 'fade',
        nextButton: '.n-main__sliderH__arrow-r',
        prevButton: '.n-main__sliderH__arrow-l',
        fade: {
           crossFade: true
        },
        loop: true,
        pagination: '.n-main__sliderH__pag',        
        autoplayDisableOnInteraction: false,
    });           

    var sliderM = new Swiper('#sliderM', {
        speed: 400,
        spaceBetween: 45,
        nextButton: '.n-main__sliderM__arr-r',
        prevButton: '.n-main__sliderM__arr-l',
        loop: true,
        pagination: '.n-main__sliderM__pag',
        autoplayDisableOnInteraction: false,
        paginationClickable: true
    });
    
    var sliderC = new Swiper('#sliderC', {
        speed: 400,
        spaceBetween: 28,
        slidesPerView: 5,
        nextButton: '.n-main__sliderC__arr-r',
        prevButton: '.n-main__sliderC__arr-l',       
        loop: true,        
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        breakpoints: {
        	560: {
        		slidesPerView: 1
        	},
        	900: {
        		slidesPerView: 2,
        		spaceBetween: 10,
        	},
        	1100: {
        		slidesPerView: 3,
        		spaceBetween: 28,
        	},
        	1300: {
        		slidesPerView: 4,
        		spaceBetween: 28,
        	}
        }
    });
    
    var path = window.location.pathname.split( '/' );
    if (path[path.length-1] == "home.html") {
	    if ($('.n-pop__anotherCity').length) {
	
	         setTimeout(function(){
	            $.magnificPopup.open({
	                 items: {
	                     src: '.n-pop__anotherCity '
	                 },
	                 type: 'inline',
	
	                 fixedContentPos: false,
	                 fixedBgPos: true,
	
	                 overflowY: 'auto',
	
	                 closeBtnInside: true,
	                 preloader: false,
	                 closeMarkup: '',
	                 midClick: true,
	                 removalDelay: 300,
	                 mainClass: 'my-mfp-slide-bottom'
	             });
	         },500);
	     }
    }
    
    $(function () {
        $('.btn-pop').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
            closeMarkup: '',
            callbacks: {
                open: function() {
                    popup = $.magnificPopup.instance;
                }
            }
        });
    });
    
    $('.n-catalog__list__menu').find('.n-toggle > span').click(function(){
    	$(this).parent().toggleClass('n-activeSub');
    });
    
    $('.one-of input[type="radio"]').click(function(){       	
         $(this).parent().parent().parent().parent().find('.one-of input').prop('checked',false);        
         $(this).prop('checked',true);          
         if ($(this).parent().parent().hasClass('n-field')) {
         	$(this).parent().parent().find('input[type="text"]').prop('disabled',false);
         	$(this).parent().parent().find('input[type="text"]').focus();
         } else {
         	$('.n-field').find('input[type="text"]').prop('disabled',true).val('');
         }
     });              

    document.body.onclick = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        var elem ="";
        if (target.parentNode.className == "n-header__nav-part__item n-header__nav-part--list" || target.parentNode.className == "n-header__nav-part__item n-header__nav-part--list n-menu--active") {
        	elem = target.parentNode.className;
        } else if (target.className == "n-header__nav-part__item n-header__nav-part--list" || target.className == "n-header__nav-part__item n-header__nav-part--list n-menu--active") {
        	elem = target.className;
        }
        if ( (" " + elem + " ").replace(/[\n\t]/g, " ").indexOf(" n-menu--active") < 0 ) {
            $('.n-header__nav-part--list').removeClass('n-menu--active');
        }
    };
       
    $('#n-email').inputmask();
    $('#n-phone').mask("+7 (999) 999-9999");
    if ($('.textarea-scrollbar').length) {
    	$('.textarea-scrollbar').scrollbar();
    }
    
    paginationResize(); 
    placeholder();
    stickyFooter();
    
    $(window).on('resize',mobpop);
    $(window).on('resize',stickyFooter);
    $(window).on('resize',paginationResize);
    $(window).on('resize',restoreMenu);
        
})();
});