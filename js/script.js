var map_selector = document.querySelectorAll('.activate-booking-button');
for ( var index = 0; index < map_selector.length; index++) {
  map_selector[index].addEventListener('click', function () {
  var active_map = document.querySelector('form');
  if (active_map.classList.contains('search-form-active')) {
  active_map.classList.remove('search-form-active');
  }
  else {
  active_map.classList.add('search-form-active');
  }
});
}

