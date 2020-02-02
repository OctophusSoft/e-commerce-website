$(document).ready(function() {
	$('.head_slder_left').on('click', function() {
		$('.head_slder_left').css('left','10px');
		let last_index = $('.slider_elem:last-child').index();
		let curr_index;
		$('.slider_elem').each(function() {
			if ($(this).hasClass('header__slider_current')) {
				curr_index = $(this).index();
			}
		});
		if (curr_index) {
			$('.slider_elem').eq(curr_index - 1).fadeIn();
			$('.slider_elem').eq(curr_index - 1).addClass('header__slider_current');
			$('.slider_elem').eq(curr_index).removeClass('header__slider_current');
			$('.slider_elem').eq(curr_index).hide();
			$('.header__slider__pagination__slide').removeClass('current_pagination_slide');
			$('.header__slider__pagination__slide').eq(curr_index - 1).addClass('current_pagination_slide');
		}else {
			$('.slider_elem').eq(last_index).fadeIn();
			$('.slider_elem').eq(last_index).addClass('header__slider_current');
			$('.slider_elem').eq(curr_index).removeClass('header__slider_current');
			$('.slider_elem').eq(curr_index).hide();
			$('.header__slider__pagination__slide').removeClass('current_pagination_slide');
			$('.header__slider__pagination__slide').eq(last_index).addClass('current_pagination_slide');
		}		
	});
	
	$('.head_slder_right').on('click', function() {
		$('.head_slder_right').css('right','10px');
		swipe_left();
	});
	
	$('.header__slider__pagination__slide').on('click', function() {
		let necessary_index = $(this).index();
		$('.slider_elem').hide();
		$('.slider_elem').removeClass('header__slider_current');
		$('.slider_elem').eq(necessary_index).fadeIn();
		$('.slider_elem').eq(necessary_index).addClass('header__slider_current');
		$('.header__slider__pagination__slide').removeClass('current_pagination_slide');
		$(this).addClass('current_pagination_slide');
	});
	
	$('.header__slider').hover(function() {
		$('.head_slder_left').animate({'left':'10px'},300);	
		$('.head_slder_right').animate({'right':'10px'},300);
	});
	
	$('.header__slider').mouseleave(function() {
		$('.head_slder_left').animate({'left':'-100px'},300);	
		$('.head_slder_right').animate({'right':'-100px'},300);	
	});
	
	
	function swipe_left() {
		let last_index = $('.slider_elem:last-child').index();
		let curr_index;
		$('.slider_elem').each(function() {
			if ($(this).hasClass('header__slider_current')) {
				curr_index = $(this).index();
			}
		});
		if (last_index !== curr_index) {
			$('.slider_elem').eq(curr_index + 1).fadeIn();
			$('.slider_elem').eq(curr_index + 1).addClass('header__slider_current');
			$('.slider_elem').eq(curr_index).removeClass('header__slider_current');
			$('.slider_elem').eq(curr_index).hide();
			$('.header__slider__pagination__slide').removeClass('current_pagination_slide');
			$('.header__slider__pagination__slide').eq(curr_index + 1).addClass('current_pagination_slide');
		}else {
			$('.slider_elem').eq(0).fadeIn();
			$('.slider_elem').eq(0).addClass('header__slider_current');
			$('.slider_elem').eq(curr_index).removeClass('header__slider_current');
			$('.slider_elem').eq(curr_index).hide();
			$('.header__slider__pagination__slide').removeClass('current_pagination_slide');
			$('.header__slider__pagination__slide').eq(0).addClass('current_pagination_slide');
		}	
	}
	setInterval(swipe_left, 6000);
});
