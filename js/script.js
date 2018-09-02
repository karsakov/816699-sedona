var activate_button = document.querySelector('.activate-booking-button');
var form = document.querySelector('.search-form');
form.classList.remove('search-form-active');
activate_button.addEventListener('click', function () {
  form.classList.toggle('search-form-active')
  })
