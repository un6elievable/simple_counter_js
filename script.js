let count = 0;

const  changeCount = (num) => {
  count += num;
  document.querySelector('#count').textContent = count;
}

document.querySelector('#increase').addEventListener('click', () =>{
  changeCount(1);
});
document.querySelector('#decrease').addEventListener('click', () =>{
  changeCount(-1);
});