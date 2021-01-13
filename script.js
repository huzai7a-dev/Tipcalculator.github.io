let bill = document.querySelector('#bill');
let person = document.querySelector('#person');
let service = document.querySelector('#service');
let btn = document.querySelector('#btn');
let tipHeading = document.querySelector('#tip');
let perPerson = document.querySelector('#perPerson'); 

btn.addEventListener('click', function(){
    let perHead = bill.value/person.value;
    let tip;
    
    if (service.value == 'great') {
        tip = (bill.value/100)*20
    }
    
    if (service.value == 'good') {
        tip = (bill.value/100)*10
    }
    
    if (service.value == 'bad') {
        tip = (bill.value/100)*2
    }
    tipHeading.innerHTML = 'Tip amout = ' + tip; 
    perPerson.innerHTML = 'Per Head amount = ' + Math.round(perHead);
})