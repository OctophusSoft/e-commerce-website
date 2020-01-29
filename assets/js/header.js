let offset = $('.header__nav').offset().top;
		$(document).ready(function() {
			$(document).on('scroll', function() {
				//alert($(document).scrollTop());
				if ($(document).scrollTop() > offset) {
					$('.header__nav').addClass('menu_static');
					$('.header__nav__main').css('background', 'none');
					$('.header__nav__search').css('background', '#fff');
					$('.header__nav__search').find('input').css('background', '#fff');
				}else {
					$('.header__nav').removeClass('menu_static');
					$('.header__nav__main').css('background', '#fff');
					$('.header__nav__search').css('background', '#f9f9f9');
					$('.header__nav__search').find('input').css('background', '#f9f9f9');
				}	
			});	
		});