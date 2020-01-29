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
});