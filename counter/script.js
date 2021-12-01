const counter = document.querySelector('p')
const decreaseBtn = document.querySelector('.decrease') 
const increaseBtn = document.querySelector('.increase')   
const resetBtn = document.querySelector('.reset')     


decreaseBtn.addEventListener('click', ()=>{
      counter.innerText-=1
      })
increaseBtn.addEventListener('click', ()=>{
       counter.innerText=+counter.innerText+1
      })
resetBtn.addEventListener('click', ()=>{
       counter.innerText=0
      })
