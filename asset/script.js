//CREATE AN ARRAY OF OBJECTS AND MAP TO THE DOM
const dynamicHtml  = document.getElementsByClassName('dynamic-html');

const fruits = [
    {name:'guava', quantity:3,available:true},
    {name:'pear', quantity:5,available:true},
    {name:'pineapple', quantity:8,available:true}
];

const fruitsArr = fruits.map(fruit =>
    `<div class="fruits">
    <h5>${fruit.name}</h5>
    <h5>${fruit.quantity}</h5>
    <h5>${fruit.available}</h5>
    </div>`
).join('');

dynamicHtml[0].innerHTML = fruitsArr;

// // SLECT ALL CHECKBOXES AND OUTPUT THE SLECTED CHECKBOX VALUE

const input = document.querySelectorAll('input[type="checkbox"]');

for(let i=0; i<input.length; i++){
    input[i].addEventListener('change',function(event){
        console.log(event.target.value);
    })
};

// OUTPUT THE SELECTED VALUES WHEN THE HTML FORM IS SUBMITTED


// CREATE A FRUIT BASKET OBJECT AND INCREMENT - 
//      i. THE VALUES OF THE OBJECT
//      ii. THE VALUES OF THE INPUT VALUE

const fruitBoxes = {
    apple:0,
    banana:0,
    grape:0,
    orange:0
};

const fruitBasket = document.querySelectorAll('.fb-btn');
const fruitAmount = document.querySelectorAll('#fruit-amount');
//  console.log(fruitAmount[i].value);


// console.log(fruitBasket.parentNode);
for(let i = 0; i < fruitBasket.length; i++) {
fruitBasket[i].addEventListener('click', function(){
   const fruitVal = document.querySelectorAll('.fruit');
   console.log(fruitVal[i].innerHTML);

 let  fruitInput = fruitVal[i].innerHTML;
  fruitInput=fruitInput.toLowerCase();
  //console.log(fruitInput);
let fruitAmt = parseInt(fruitAmount[i].value);
 fruitAmount[i].value = fruitAmt+1;
 console.log(fruitAmount[i].value);
//  let fruitCal = fruitAmt[i].value;
//  fruitCal=Number(fruitCal);
//  console.log(fruitCal=fruitCal+1);
   switch(fruitInput){
    case 'apple':
        console.log(fruitBoxes.apple+=1);
        
        break;
    case 'banana':
        console.log(fruitBoxes.banana+=1);
        
        break;
    case 'grape':
        console.log(fruitBoxes.grape+=1);
        
        break;
    case 'orange':
        console.log(fruitBoxes.orange+=1);
        
        break;
        default:
        break;
   }
}
)}