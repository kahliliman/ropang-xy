console.log('CONNECTED')

var price = 0
var total_price = document.querySelector('.total-price')

total_price.textContent = price

function opt_func() {

  var opt_asin = document.getElementById("opt-asin");
  var opt_manis = document.getElementById("opt-manis");

  if (opt_manis.checked == true){
    price = 12000;

  } else if (opt_asin.checked == true) {
    price = 15000;
  }

  total_price.textContent = price
} 

