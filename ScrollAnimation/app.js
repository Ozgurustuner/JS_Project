const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',kutulariGetir)
kutulariGetir()
function kutulariGetir(){
   // Tetiklenme noktası belirlememiz lazım 
   console.log("fonks tetiklendi");
   let tetiklenmeNoktasi = window.innerHeight/5*4
   console.log(tetiklenmeNoktasi);

   boxes.forEach(box=> {
    let boxBottom = box.getBoundingClientRect().top
    console.log(boxBottom);
    if (boxBottom<tetiklenmeNoktasi) {
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }
   })

}