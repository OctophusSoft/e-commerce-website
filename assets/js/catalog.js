$(document).ready(function() {
	$('.catalog_page__popup__body__item__head').on('click', function() {
		//alert();
		if ($(this).parent().find('.catalog_page__popup__body__item__body').hasClass('popup_active')) {
			$(this).parent().find('.catalog_page__popup__body__item__body').slideDown();
			$(this).parent().find('.catalog_page__popup__body__item__body').removeClass('popup_active');
		}else {
			$(this).parent().find('.catalog_page__popup__body__item__body').slideUp();
			$(this).parent().find('.catalog_page__popup__body__item__body').addClass('popup_active');
		}

	});
	
	$('.catalog__body__card__main').hover(function() {
		$(this).find('.catalog__body__card__hover_panel').animate({'opacity': '1'}, 500);
		$(this).find('.catalog__body__card__stars').animate({'opacity': '0'}, 500);
		
		
	});
	
	$('.catalog__body__card__main').mouseleave(function() {
		$(this).find('.catalog__body__card__hover_panel').animate({'opacity': '0'}, 200);
		$(this).find('.catalog__body__card__stars').animate({'opacity': '1'}, 200);
	});
});