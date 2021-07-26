function addItem(item){
    const itemHTML = '<div class="card text-white bg-dark mb-3" style="width: 30em; margin-right: 8px;">\n' +'<img src="'+item.img +'" class="card-img-top img-fluid h-100 pt-3" alt="image">\n' + '<div class="card-body">\n' +'<h5 class="card-title">'+item.name+'</h5>\n' + '<p class="card-text">'+item.description+'</p>\n' +'        <div class="d-grid text-nowrap mt-auto"><a href="#" class="btn btn-primary btn-lg active"> Solicitar </a></div>\n' + '</div>\n' +'</div>\n' +'<br/>';
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

    

 // Agrega el Registro que se tenia en Backup  base
    function addBase(){
        
        
        
        addItem({'name':'Los Sims™ 4 Edición Fiesta Deluxe',
        'img':'https://media.contentapi.ea.com/content/dam/eacom/SIMS/brand-refresh-assets/images/2019/07/ts4-featured-image-base-refresh.png.adapt.crop191x100.1200w.png',
        'description':'¡Convierte a tus Sims en el alma de la fiesta con Los Sims™ 4 Edición Fiesta Deluxe! Explora el lado más aventurero de la mente, el cuerpo y el corazón de tus Sims con espectáculos de luces láser, disfraces descabellados, la barra tiki Chispas y divertidos gorros de animales.'});
        
        addItem({'name':'Sea of Thieves',
        'img':'https://compass-ssl.xbox.com/assets/1e/b6/1eb6e78f-dabc-46e0-a4e2-892323416ade.jpg?n=SoT_GLP-Page-Hero-1084_1920x1080_03.jpg',
        'description':'Sea of Thieves ofrece la experiencia de piratas definitiva, desde la navegación y el combate hasta la exploración y el saqueo: todo para disfrutar de la vida pirata y convertirte en leyenda. No hay funciones establecidas, tienes total libertad para enfrentarte al mundo y a los demás jugadores como desees.Tanto si navegas en grupo o en solitario, acabarás cruzándote con otras tripulaciones en esta aventura de mundo compartido..., pero ¿serán amigos o enemigos? ¿Cómo responderás?'});

        addItem({'name':'Disgaea 5 Complete',
        'img':'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Disgaea5Complete_image1600w.jpg',
        'description':'Disgaea 5 Complete es un videojuego de rol y estrategia que ofrece horas de increíble y galardonada jugabilidad. El juego original está disponible por primera vez en un dispositivo móvil. Incluye 8 escenarios de bonificación, 4 personajes favoritos de los jugadores y 3 clases de personajes que aparecían en el lanzamiento de Disgaea 5: Alliance of Vengeance, el DLC original de PlayStation®4.'});

        addItem({'name':'Slime Rancher',
        'img':'https://i.ytimg.com/vi/A1Jwj1-mdDw/maxresdefault.jpg',
        'description':'Slime Rancher es la historia de Beatrix LeBeau, una valiente ranchera joven que se lanza a una vida a mil años luz de la Tierra en la Lejana, Lejana Pradera, donde prueba su suerte para ganarse la vida lidiando con slimes. Con una actitud de se puede, bastantes agallas y su confiable vacpack, Beatrix intenta reclamar su parte, amasar una fortuna ¡y evitar el peligro constante que emana de la zangoloteante avalancha ondulante de slimes detrás de cada esquina!'});
        
        addItem({'name':'Hades',
        'img':'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades_image1600w.png',
        'description':'COMBATE PARA ESCAPAR DEL INFIERNO Como el príncipe inmortal del Inframundo, tendrás a tu disposición los poderes y las armas míticas del Olimpo para liberarte de las garras del mismísimo dios de los muertos, al tiempo que te vas haciendo más fuerte y descubres más piezas de la historia con cada intento de fuga.'});
    
        addItem({'name':'Age of Empires IV',
        'img':'https://i.blogs.es/e6f445/aoe-4/1366_2000.jpg',
        'description':'Uno de los juegos de estrategia en tiempo real más queridos vuelve a demostrar todo su esplendor con Age of Empires IV, donde serás la estrella de las épicas batallas históricas que moldearon el mundo que hoy conocemos. Age of Empires IV combina lo que ya le funcionó en su momento con fórmulas innovadoras para que disfrutes expandiendo tu imperio hasta donde alcancen tus ojos; todo ello con una impresionante fidelidad visual en 4K. En resumen, un juego de estrategia en tiempo real modernizado y adaptado a la nueva generación.'});
        
        addItem({'name':'Ori and the Will of the Wisps',
        'img':'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_OriAndTheWillOfTheWisps.jpg',
        'description':'No es la primera vez que el pequeño Ori se enfrenta al peligro, pero cuando un vuelo desafortunado ponga en riesgo a la buhita Ku, hará falta algo más que valor para volver a reunir a una familia, sanar una tierra asolada y desentrañar el verdadero destino de Ori. Los creadores del aclamado juego de acción y plataformas Ori and the Blind Forest nos traen una aventura ambientada en un inmenso mundo repleto de nuevos amigos y enemigos que cobran vida gracias a un impecable trabajo de diseño artesanal. Con una banda sonora original totalmente orquestada, Ori and the Will of the Wisps es fiel a la tradición de Moon Studios de crear acción de plataformas al detalle con una historia que profundiza en las emociones.'});

        addItem({'name':'FIFA 21',
        'img':'https://sm.ign.com/t/ign_es/screenshot/default/ea8bc81e-23e4-4317-aaf2-cc17917236cf_f6d7.1280.jpg',
        'description':'Disfruta de victorias aún mayores con tu equipo en VOLTA FOOTBALL SQUADS y en el modo cooperativo de FIFA Ultimate Team™.Vive una mecánica de juego más realista que nunca y que recompensa tu creatividad y capacidad de control.Gestiona cada momento en el modo Carrera de FIFA 21 a través de novedades que dan profundidad a los partidos, los traspasos y los entrenamientos.Compite en la UEFA Champions League y la CONMEBOL Libertadores: ¡el juego del mundo, más realista que nunca!'});

        addItem({'name':'Battlefield 4™ Edición Premium',
        'img':'https://i.ytimg.com/vi/sEe4nK3t4zA/maxresdefault.jpg',
        'description':'es la experiencia de la guerra total e incluye el juego Battlefield 4 además de una suscripción a Battlefield 4 Premium que proporciona cinco packs digitales temáticos de expansión con montones de contenido nuevo, incluyendo 20 mapas, modos de juego y muchas armas y vehículos. La colección añade más diversidad, y va desde la acción anfibia de Naval Strike y los majestuosos niveles de China Rising al combate urbano de infantería de Dragons Teeth y la guerra de alta tecnología y el paisaje ártico de Final Stand. Además, cuatro mapas de los favoritos de los fans de Battlefield 3 revisados en Second Assault.'});

        addItem({'name':'Fallout 4: Game of the Year Edition',
        'img':'https://xbox-store-checker.com/assets/upload/game/2017/09/optimize/c24svx28pnwm-titledbackground.jpg',
        'description':'Eres el único superviviente del Refugio 111 en un mundo destruido por la guerra nuclear. Cada segundo es una lucha por la supervivencia, y en tus manos estarán todas las decisiones. Solo tú puedes reconstruir el yermo y decidir su futuro. Bienvenido a casa.Incluye el aclamado juego principal y sus seis contenidos adicionales oficiales: Automatron, Wasteland Workshop, Far Harbor, Contraptions Workshop, Vault-Tec Workshop y Nuka-World'});

        addItem({'name':'The Elder Scrolls V: Skyrim Special Edition',
        'img':'https://drunkers.com.mx/wp-content/uploads/2020/08/logo-2.jpg',
        'description':'Skyrim Special Edition, ganador de más de 200 premios al "Juego del año", da vida a la fantasía épica con un nivel de detalle asombroso. La Special Edition incluye el juego aclamado por la crítica y los complementos, así como nuevas características: gráficos y efectos renovados, rayos crepusculares volumétricos, reflejos en tiempo real, profundidad de campo dinámica y muchas más. Además, Skyrim Special Edition lleva todo el poder de los mods a PC y Xbox One: nuevas misiones, entornos, personajes, diálogos, armaduras y armas, entre otras muchas cosas. ¡Con los mods, la experiencia no tiene límites'});

        addItem({'name':'ENDLESS™ Legend',
        'img':'https://p4.wallpaperbetter.com/wallpaper/987/483/689/4-x-endless-fantasy-fighting-wallpaper-preview.jpg',
        'description':'Endless Legend es un juego de estrategia y fantasía 4x basado en turnos de los creadores de Endless Space y Dungeon of the Endless. Controla cada aspecto de tu civilización en tu pugna por salvar tu hogar, Auriga. ¡Crea tu propia leyenda!'});

    }
