const preloaderWrapper=document.querySelector('.preloader-wrapper');

window.addEventListener('load', function(){
    preloaderWrapper.classList.add('fade-out-animation')
})

function clickButton() {
    document.getElementById("nextButton").click();
  }
  
  setInterval(clickButton, 3000);