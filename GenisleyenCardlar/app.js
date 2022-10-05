const panels = document.querySelectorAll('.panel')

// for (const panel of panels) {
//     panel.addEventListener();
// }

panels.forEach(panel => {
    // console.log("panel:"+panel);
    // console.log("index:"+index);
    // console.log("Array:"+arr);
//Olay ekleme 
panel.addEventListener('click',function(){
    removeActiveClasses()
    panel.classList.add('active')
})

})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

