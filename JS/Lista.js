function addItem(item){
    const itemHTML = '<div class="card text-white bg-dark mb-3" style="width: 40em;">\n' +'<img src="'+item.img +'" class="card-img-top img-fluid h-100" alt="image">\n' + '<div class="card-body">\n' +'<h5 class="card-title">'+item.name+'</h5>\n' + '<p class="card-text">'+item.description+'</p>\n' +'        <div class="d-grid text-nowrap mt-auto"><a href="#" class="btn btn-primary btn-lg active"> Solicitar </a></div>\n' + '</div>\n' +'</div>\n' +'<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
// Formato Json //
addItem({'name':'Devil May Cry 5: Special Edition',
    'img':'https://www.tuplaystation.es/wp-content/uploads/2020/10/devil-may-cry-v-special-edtion-principal.jpg',
    'description':'¡Devil May Cry 5 ha vuelto, ahora actualizado para la próxima generación! En Devil May Cry 5 Special Edition, la velocidad vertiginosa se combina con un control impecable para ofrecer una experiencia de juego increíblemente precisa a medida que avanzas en esta emocionante historia.'});

addItem({'name':'Halo: The Master Chief Collection',
    'img':'https://generacionxbox.com/wp-content/uploads/2020/12/Halo-The-Master-Chief-Collection-1.jpg',
    'description':'Campaña: con Halo: Reach, Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST Campaign y Halo 4, la colección Jefe Maestro ofrece a los jugadores su propio y emocionante viaje a través de la épica saga.'})

    addItem({'name':'Baldurs Gate 3',
    'img':'https://wallpapercave.com/wp/wp7527503.jpg',
    'description':'No es una secuela directa de los videojuegos originales, sino una reinterpretación. Así las cosas, se abandona el estilo de combate en tiempo real con pausa táctica para ofrecer una jugabilidad por turnos.'})

    addItem({'name':'The Outer Worlds',
    'img':'https://images6.alphacoders.com/102/thumb-1920-1021527.jpg',
    'description':'The Outer Worlds es un nuevo juego de rol de ciencia ficción de Obsidian Entertainment y Private Division. A medida que exploras los confines más lejanos del espacio y te enfrentas a multitud de facciones que luchan por el poder, será tu decisión de en quién convertirte lo que determinará el destino de todos en Halcyon. En la ecuación corporativa de la colonia, tú eres una variable imprevista.'})

    addItem({'name':'Dead by Daylight',
    'img':'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DeadByDaylight_image1600w.jpg',
    'description':'Dead by Daylight es un juego de terror multijugador (4 contra 1) en el que uno de los jugadores adopta el rol de asesino salvaje mientras que los otros cuatro juegan como supervivientes que tratan de escapar para no ser capturados, torturados y asesinados.Los supervivientes juegan en tercera persona con la ventaja de una mejor visión periférica. El asesino, por su parte, juega en primera persona y está más centrado en sus presas.'})

    addItem({'name':'Gears 5:',
    'img':'https://generacionxbox.com/wp-content/uploads/2019/08/gears5-elportadon-generacion-xbox-1.jpg',
    'description':'Gears 5, perteneciente a una de las sagas de videojuegos más aclamadas, nos trae su famosa campaña, el modo multijugador actualizado y la expansión Machacacolmenas totalmente optimizados para Xbox Series X|S. '})

    addItem({'name':'Need for Speed™ Hot Pursuit Remastered',
    'img':'https://media.contentapi.ea.com/content/dam/eacom/need-for-speed-hot-pursuit-remastered/images/2020/09/nfs-youtube-cover-image-16x9-l.jpg.adapt.crop16x9.1023w.jpg',
    'description':'Siente la emoción de la persecución y la adrenalina de escapar en Need for Speed Hot Pursuit Remastered en PC. Siente la velocidad como forajido y como policía en los coches de mayor rendimiento del mundo. Supera la presión o acaba con los infractores de la ley con las armas tácticas que tienes a tu disposición en un juego de carreras trepidante y competitivo'})

    addItem({'name':'Hollow Knight',
    'img':'https://i.pinimg.com/originals/91/01/aa/9101aaeed255df04a8268638be318e59.png',
    'description':'¡Desciende al mundo de Hollow Knight! La galardonada aventura de acción de insectos y héroes. Explora cavernas serpenteantes, antiguas ciudades y páramos mortales. Lucha contra criaturas mancilladas y haz nuevas amistades con extraños insectos. Descubre una antigua historia y resuelve los misterios enterrados en el corazón del reino.'})

    addItem({'name':'Yakuza: Like a Dragon',
    'img':'https://wallpaperaccess.com/full/5440356.jpg',
    'description':'Ichiban Kasuga, un yakuza de una familia de bajo rango de Tokio, se enfrenta a una pena de cárcel de 18 años por asumir la culpa de un delito que no cometió. Sin perder la esperanza, cumple su condena. Cuando sale de la cárcel, descubre que nadie lo está esperando y que el hombre al que más respetaba ha destruido su clan.'})

    addItem({'name':'cyberpunk 2077',
    'img':'https://cdn.wallpapersafari.com/57/40/rQDkaw.jpg',
    'description':'Es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. Tu personaje es V, un mercenario que persigue un implante único que permite alcanzar la inmortalidad.'})

    addItem({'name':'Control: Ultimate Edition',
    'img':'https://i.blogs.es/115320/control/1366_2000.jpeg',
    'description':'El nuevo juego de los creadores de Alan Wake, Control tiene como punto de partida el Nueva York de 1964 cuando el FBI se encuentra investigando los eventos paranormales ocurridos en los túneles del metro de la ciudad.'})

    addItem({'name':'Star Wars™ Battlefront™ II',
    'img':'https://images2.alphacoders.com/823/thumb-1920-823125.png',
    'description':'El emperador Palpatine planea atraer a una desprevenida flota de la Alianza Rebelde a una trampa usándose a sí mismo y la segunda Estrella de la Muerte, construida sobre la luna forestal de Endor, como cebo, buscando aplastar la Rebelión contra su Imperio Galáctico de una vez por todas.'})


