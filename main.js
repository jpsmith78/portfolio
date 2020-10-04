

const showStars = (num) => {
  const star = document.getElementsByClassName("star")[num];
  if (star.style.display !== "inline"){
    star.style.display = "inline";
  }
}
const hideStars = (num) => {
  const star = document.getElementsByClassName("star")[num];
  if (star.style.display === "inline"){
    star.style.display = "none";
  }
}

document.addEventListener('click', (event) => {
	if (event.target.className === 'open') {
    event.target.className = 'close';
    event.target.nextElementSibling.className = 'hide';
  }else if (event.target.className === 'close'){
    event.target.className = 'open';
    event.target.nextElementSibling.className = 'show';
  }
});
