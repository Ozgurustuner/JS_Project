const loadingText = document.querySelector('.loading')
const bg =document.querySelector('.bg')

let yuzde = 0

let intervalId = setInterval(() => {
    bulaniklastir()
  }, 20);

  function bulaniklastir(){
   yuzde++;
   //console.log(yuzde);
   if (yuzde>99) {
    clearInterval(intervalId)
   }
   //Loading div guncelleme
   loadingText.innerText = `${yuzde}%`
   loadingText.style.opacity = `(${100-yuzde}/100)`

   bg.style.filter= `blur(${100-yuzde}px)`
  }