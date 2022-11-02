const modal = document.querySelector(".modall");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-clos");
const guessednumber = document.querySelector("#guessed-number");
const actualnum = document.querySelector("#actualnum");
const form  = document.querySelector("#form");
const resetbutton = document.createElement('button');
const check = document.querySelector("#btn-check");

resetbutton.className = 'btn-reset'
let num
const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  //openModal()
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    location.reload();
  };

  closeModalBtn.addEventListener('click',closeModal)

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

let chances;

let number;
let user_number
let gen_random = function(){
    num = Math.floor(Math.random() * 21)
    return num
}

let check_zero = function(){
    chances = Number(document.getElementById('chance').textContent)
    if(chances === 0){
        
        openModal()
    }
    else{

    }
} 

chances = Number(document.getElementById('chance').textContent)
if(chances === 0){
    document.getElementById('guessed-number').innerText = 'better luck';
}

let checknum = function(){
   
    if(number == user_number)
    {
         console.log("matched")
         let matched = 'YAY..! You Got It' 
         document.body.style.backgroundColor = "LawnGreen"; 
         document.getElementById('guessed-number').innerText = matched;
         actualnum.innerText = num;
         resetbutton.textContent = 'reset'
         form.appendChild(resetbutton)
         check.disabled = true
         confetti();
         
        
        }
    else if(user_number < number){
        arr_high = ["try going higher" , "little higher","not yet !..."]
        let randommsgHigh = Math.round(Math.random() * 2);
        let output_high = arr_high[Number(randommsgHigh)];
        guessednumber.classList.remove("hidden");
        console.log("try going higher")
        let higher = 'try going higher'

        document.getElementById('chance').innerHTML = chances - 1
        check_zero() 
        document.getElementById('guessed-number').innerText = output_high;
        chances = Number(document.getElementById('chance').textContent)
        
       
        //document.getElementById('chance').innerHTML = chances - 1
        //check zero func call
        myInput.focus()
        
      
      
   
    }
    else if(user_number > number)
    {
        arr_low = ["try going lower" , "little lower please","keep trying...!"]
        let randommsgLow = Math.round(Math.random() * 2);
        let output_low = arr_low[Number(randommsgLow)];
        guessednumber.classList.remove("hidden");
        console.log("try going lower")
        let lower = 'try going lower'
        document.getElementById('chance').innerHTML = chances - 1
        check_zero() 
        document.getElementById('guessed-number').innerText = output_low;
        chances = Number(document.getElementById('chance').textContent) 
        //document.getElementById('chance').innerHTML = chances - 1
        //check_zero()
        
    }
}

number = gen_random()
console.log(number)

document.querySelector('#btn-check').addEventListener('click',function(){

    user_number = document.getElementById('input-txt').value
    if(Number(user_number) === 0){
        alert("Please input a value")
    }
    else{
        user_number = document.getElementById('input-txt').value
        checknum()
    }
    
    
    
    
    
})