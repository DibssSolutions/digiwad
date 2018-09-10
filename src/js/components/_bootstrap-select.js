import selectpicker from 'bootstrap-select';
const select = $('.js-select');
select.selectpicker()
  .on('loaded.bs.select', function() {
    const buttonToggle = $(this).parents('.js-select').find('.dropdown-toggle');
    const icon = '<svg class="icon icon-arrow-down"><use xlink:href="img/sprite.svg#icon-arrow-down"></use></svg>';
    buttonToggle.append(icon);
  });
