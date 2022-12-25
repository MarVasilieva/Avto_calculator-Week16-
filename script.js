
const mileageInput = document.querySelector('#mileage');
const myRange = document.querySelector('#myRange');
const firstPrice = 0;
const inputs = document.querySelectorAll('input');
const totalPriceElement = document.querySelector('#total-price');
//radio buttons
const radioComplectation =document.querySelectorAll('input[name="complectation"]');
const count = document.querySelector('#count');
//checkbox
const safeReview = document.querySelector('input[name="safe-review"]');
const safePillows = document.querySelector('input[name="safe-pillows"]');
const safeBrakes = document.querySelector('input[name="safe-brakes"]');
//select
const multiOption = document.querySelector('#multimedia');
console.log(multimedia);

myRange.addEventListener('input',function(){
   
    mileageInput.value = myRange.value;
    console.log(myRange.value);
})

mileageInput.addEventListener('input', function(){
    myRange.value = mileageInput.value;
})
function calculate (){
    let totalPrice = firstPrice + parseInt(mileageInput.value);
    console.log(totalPrice);

    for (const radio of radioComplectation){
        if (radio.checked) {
            totalPrice = totalPrice + Number(radio.value);
            console.log(radio.value);
        }
    }
    totalPrice = totalPrice + parseInt(count.value);
    if (safeReview.checked){
        totalPrice = totalPrice + parseInt(safeReview.value);
    }
    if (safeBrakes.checked){
        totalPrice = totalPrice + parseInt(safeBrakes.value);
    }
    if (safePillows.checked){
        totalPrice = totalPrice + parseInt(safePillows.value);
    }
    //tyt problema!PAmAgitI!
    totalPrice = totalPrice + Number(multiOption.options[multiOption.selectedIndex].value);
    
    const formatter = new Intl.NumberFormat('ru');
    formatter.format(totalPrice); 
    totalPriceElement.innerText =   formatter.format(totalPrice); 
}
calculate ();


for (const input of inputs){
input.addEventListener('input',function(){
    calculate ();
})

}