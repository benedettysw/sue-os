


function Modo(){ 

    let body = document.getElementById('color');

    let icono = document.querySelector('#icono');

    if( body.style.background == 'white') {

        body.style.background = 'black'

        body.style.color = 'white'

        icono.src = 'asset/img/day.png'
        
        
        
    }
    
    else{
        body.style.background ='white'
        
        body.style.color = 'black'
        
        icono.src = 'asset/img/moon.png'

    }

}



