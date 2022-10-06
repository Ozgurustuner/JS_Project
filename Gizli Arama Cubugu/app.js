/**
 * 1 Btn seç
 * 2 search divini sec
 * 3 btn click ine event ekle
 * 4. active classını ekle/ çıkar
 */
const btn = document.querySelector('.btn')
const div = document.querySelector('.search')

div.addEventListener('click',()=> div.classList.toggle('active'))