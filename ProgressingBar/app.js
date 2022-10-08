//Dom elementlerinin öncelikle olarak seçilmesi 

const progress = document.querySelector('#progress')
const ileri = document.getElementById('ileriBtn')
const geri = document.getElementById('geriBtn')
const allCircles = document.querySelectorAll('.circle')

// Güncel aşamayı belirleyelim 
let currentActivePhase = 1
// Butonlara eventListener Eklenmesi
ileri.addEventListener('click',()=>{
   // console.log("ileriye basıldı");

    //console.log(currentActivePhase);
    currentActivePhase++;
    if (currentActivePhase > allCircles.length) {
        currentActivePhase =  allCircles.length
    }
    update()

})

geri.addEventListener('click',()=>{
    currentActivePhase--
    if (currentActivePhase<1) {
        currentActivePhase =1
    }
    update()
   // console.log(currentActivePhase);
})


function update() {
allCircles.forEach((circle,index)=> {
    if (index<currentActivePhase) {
        circle.classList.add('active')
    }else {
        circle.classList.remove('active')
    }
})
//İleri geri butonları able-disable durumları
    if (currentActivePhase ===1) {
        geri.disabled = true;
    }else if (currentActivePhase===5){
        ileri.disabled = true
    }else {
        geri.disabled = false ;
        ileri.disabled = false
    }
    //Progress Bar güncelleme
    //Öncelikli olarak aktif olan Circlerın getirilmesi 
    const activeCircles = document.querySelectorAll('.active')
console.log((((activeCircles.length-1)/(allCircles.length-1))*100)+"%");
   progress.style.width = (((activeCircles.length-1)/(allCircles.length-1))*100)+"%"
}