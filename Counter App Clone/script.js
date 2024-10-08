const count = document.querySelector('.count');
const minusBtn = document.querySelector('.btn-1');
const plusBtn = document.querySelector('.btn-2');
const changeBy = document.querySelector('.changeby');
const reset = document.querySelector('.reset');

minusBtn.addEventListener('click', () =>{
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
    count.innerText = countValue - changeByValue;
})
plusBtn.addEventListener('click', () =>{
    const countValue = parseInt(count.innerText);
    const changeByValue = parseInt(changeBy.value);
   count.innerText = countValue + changeByValue;
})

reset.addEventListener('click', () => {
    count.innerText = 0;
})