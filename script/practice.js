const Center = document.querySelector('.center')
const Dark = document.querySelector('.do')
const Light = document.querySelector('.undo')
Dark.onclick = function(){
    if(Center.className == 'center' ){
        Center.classList.add('remove-bg')
    }
    Dark.classList.add('dark-btn')
    Light.classList.add('dark-btn')
}
Light.onclick = function(){
    Center.classList.remove('remove-bg')
    Light.classList.remove('dark-btn')
    Dark.classList.remove('dark-btn')
}
AOS.init();