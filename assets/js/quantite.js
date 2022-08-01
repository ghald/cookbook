const quantityInput = document.querySelector('#quantityInput'); 

var amount = "";
const elements = document.querySelectorAll('.amount');
Array.from(elements).forEach(function(element, index) {
    amount += " " + element.innerText + " " ;
});

quantityInput.addEventListener('change', function() { 
    let quantityValue = quantityInput.value;
    console.log('quantityInput', quantityValue); 
    console.log(amount);

});


