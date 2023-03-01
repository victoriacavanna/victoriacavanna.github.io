//--Menu
const toggle = document.getElementById('nav-toggle'),
    close = document.getElementById('nav-close'),
    menu = document.getElementById('nav-menu');
    if (close){
        close.addEventListener('click', () =>{
            menu.classList.remove('active');
        })
    }
    
    if(toggle){
        toggle.addEventListener('click', () => {
            menu.classList.add('active');
        })
    }

//--Experiencia
const tabs = document.querySelectorAll('[data-target]')
    tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('experienciaActive')
        })
        target.classList.add('experienciaActive')

        tabs.forEach(tab =>{
            tab.classList.remove('experienciaActive')
        })
        tab.classList.add('experienciaActive')
    })
})

//--Habilidades
const skillsContent = document.getElementsByClassName('habilidadesContenido'),
    skillsHeader = document.querySelectorAll('.habilidadesInfo');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'habilidadesContenido habilidadesClose';
    }
    if(itemClass === 'habilidadesContenido habilidadesClose'){
        this.parentNode.className = 'habilidadesContenido habilidadesOpen'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})


//--Cambiar Modo
const themeButton = document.getElementById('btnModo')
const darkTheme = 'modoOscuro'
const iconTheme = 'uil-sun'

//Obtener valor
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//obtener valor del modo e icono actual y validar que contiene la clase
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activar y desactivar modo
themeButton.addEventListener('click', () => {
    //Agregar o eliminar ícono / modo
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Establecer-guardar lo elegido por el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})