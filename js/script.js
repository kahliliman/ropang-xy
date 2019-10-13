console.log('CONNECTED')

var base_price = 0
var size_price = 0
var top_price = 0
var price = 0
var total_price = document.querySelector('.total-price')

total_price.textContent = price

function opt_calc() {
  	var opt_price = 0
  	var opt_asin = document.getElementById("opt-asin");
  	var opt_manis = document.getElementById("opt-manis");

  if (opt_manis.checked == true){
    base_price = 15000;

  } else if (opt_asin.checked == true) {
    base_price = 20000;
  }
  	console.log('base price =',base_price)
  	
  	price = base_price + size_price
  	total_price.textContent = price
  	console.log('price =',price)
	return base_price

	
} 

function size_calc() {

  	
  	var size_kilo = document.getElementById("size-kilo");
  	var size_mega = document.getElementById("size-mega");
  	var size_giga = document.getElementById("size-giga");

  if (size_kilo.checked == true){
  	size_price = -3000;
  } else if (size_giga.checked == true) {
 	size_price = 5000;
  } else if (size_mega.checked == true) {
 	size_price = 0;
  }
  	console.log('size price =',size_price)

  	price = base_price + size_price
  	total_price.textContent = price
  	console.log('price =',price)
	return size_price
} 

function top_calc() {

  	var top_milo = document.querySelector("#top-milo");

  	if (top_milo.checked == true){
  		top_price = 1000;
  	}

	return top_price
} 