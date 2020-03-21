

// All animations will take exactly 800ms Menu
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: false  // En true todos los scroll duran lo mismo
});


// Animaciones generales

// Nosotros
var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        let elemento = document.getElementById('about');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }   
    },
    offset: '60%'
});

// Portafolio
var waypoint = new Waypoint({
    element: document.getElementById('portafolio'),
    handler: function (direction) {
        let elemento = document.getElementById('portafolio');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }   
    },
    offset: '60%'
});

// Contacto
var waypoint = new Waypoint({
    element: document.getElementById('contacto'),
    handler: function (direction) {
        let elemento = document.getElementById('contacto');
        let elementos = elemento.getElementsByClassName('animado1');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInUp';
            }
        }
        elementos = elemento.getElementsByClassName('animado2');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInLeft';
            }
        } 
        elementos = elemento.getElementsByClassName('animado3');
        if (direction === 'down') {
            for (i = 0; i < elementos.length; i++) {
                elementos[i].className += ' animated fadeInRight';
            }
        }   
    },
    offset: '60%'
});