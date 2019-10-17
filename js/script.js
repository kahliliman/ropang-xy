console.log('CONNECTED')

var base_price = 0
var size_price = 0
var top_price = 0
var price = 0
var col_1000_check = 0
var col_3000_check = 0
var col_5000_check = 0


var total_price = document.querySelector('.total-price')

total_price.textContent = numberWithCommas(price)

function opt_calc() {
  	var opt_price = 0
  	var opt_asin = document.getElementById("opt-asin");
  	var opt_manis = document.getElementById("opt-manis");

  if (opt_manis.checked == true){
    base_price = 15000;
    top_asin = document.querySelectorAll(".asin-only");
    for (x of top_asin) {
      x.disabled = true;}
    top_manis = document.querySelectorAll(".manis-only");
    for (x of top_manis) {
      x.disabled = false;
    }
  }
  else if (opt_asin.checked == true) {
    base_price = 20000;
    top_asin = document.querySelectorAll(".asin-only");
    for (x of top_asin) {
      x.disabled = false;}
    top_manis = document.querySelectorAll(".manis-only");
    for (x of top_manis) {
      x.disabled = true;
    }
  }
  	console.log('base price =',base_price)
  	
    checked = document.querySelectorAll('input[type=checkbox]:checked')
    for (x of checked) {
      x.checked = false;}
    top_price = 0

  	price = base_price + size_price + top_price
  	total_price.textContent = numberWithCommas(price)
  	// console.log('price =',price)
	return base_price, top_price

	
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

  	price = base_price + size_price + top_price
  	total_price.textContent = numberWithCommas(price)
  	// console.log('price =',price)
	return size_price
} 

function top_calc() {
  col_1000_check = document.querySelectorAll('.col-1000 input[type=checkbox]:checked').length
  col_3000_check = document.querySelectorAll('.col-3000 input[type=checkbox]:checked').length  
  col_5000_check = document.querySelectorAll('.col-5000 input[type=checkbox]:checked').length
  top_price = col_1000_check * 1000 + col_3000_check * 3000 + col_5000_check * 5000

  console.log('topping price =',top_price)

  price = base_price + size_price + top_price
  total_price.textContent = numberWithCommas(price) 

  return col_1000_check,col_3000_check,col_5000_check,top_price

}



function CurrencyFormatted(amount) {
  var i = parseFloat(amount);
  if(isNaN(i)) { i = 0.00; }
  var minus = '';
  if(i < 0) { minus = '-'; }
  i = Math.abs(i);
  i = parseInt((i + .005) * 100);
  i = i / 100;
  s = new String(i);
  if(s.indexOf('.') < 0) { s += '.00'; }
  if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
  s = minus + s;
  return s;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}