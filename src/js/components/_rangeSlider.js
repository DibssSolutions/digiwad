import noUiSlider from 'nouislider';
const sliders = document.querySelectorAll('.js-range-slider');
if (sliders) {
  for (let i = 0; i <= sliders.length - 1; i++) {
  	const container = sliders[i];
    noUiSlider.create(container, {
	  start: [20, 80],
	  connect: true,
	  range: {
	    'min': 0,
	    'max': 100
	  }
    });
    let min = $(container).parent().find('.js-range-min');
    let max = $(container).parent().find('.js-range-max');
   	container.noUiSlider.on('update', function( values, handle ) {
    	min.text(values[0]);
    	max.text(values[1]);
    });
  }
}


