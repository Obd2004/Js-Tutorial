var elForm1 = document.querySelector('.form1');
var elForm2 = document.querySelector('.form2');

var elInput1 = document.querySelector('.input1');
var elInput2 = document.querySelector('.input2');

var elBtn1 = document.querySelector('.btn1');
var elBtn2 = document.querySelector('.btn2');

var elTitle1 = document.querySelector('.title1');
var elTitle2 = document.querySelector('.title2');


elForm1.addEventListener('submit', function(evnt){
    evnt.preventDefault() // saytni obnavit qilishdan toxtatadi
    if(elInput1.value <= 100){
        elTitle1.textContent = elInput1.value * 11100 + ' ' + "so'm";
    }else if(elInput1.value > 100){
        elTitle1.textContent = elInput1.value * 11100 + ' ' + "so'm";
    }else{
        elTitle1.textContent = 'Iltimos faqat raqam kiriting'
    }


    elInput1.value = ''
})

elForm2.addEventListener('submit', function(evnt){
    evnt.preventDefault()
    var natija = Math.round(elInput2.value / 11100)
    if(elInput2.value <= 1110000){
        elTitle2.textContent = natija + "$";
    }else if(elInput2.value > 1110000){
        elTitle2.textContent = natija + "$";
    }else{
        elTitle2.textContent = 'Iltimos faqat raqam kiriting'
    }
})