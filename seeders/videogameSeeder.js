import VideoGame from "../models/VideoGame.js";

async function seedVideogames (){
  const videogames =
[
{
  _id: "664695bacf29fe32661290d9",
  name: "Rocket League",
  gamemode: "667a0facbb334619d489172c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "667a44489260c47b462a9acd",
  theme: "66484c121593a60f58e0c0a7",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://m.media-amazon.com/images/M/MV5BMWE1NjRiMGEtMTUyMy00ODVkLWE2OWMtY2VjZjc3OGEwN2Q5XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
    "https://cdn2.unrealengine.com/egs-social-rocketleague-news-1920x1080-1920x1080-975383433.jpg",
  ],
  cover:"https://th.bing.com/th/id/R.4266ff99c3051ddd2df9558a3eaa5184?rik=7XwdIM6%2fQitCZg&riu=http%3a%2f%2fcdn02.nintendo-europe.com%2fmedia%2fimages%2f11_square_images%2fgames_18%2fnintendo_switch_download_software%2fSQ_NSwitchDS_RocketLeague.jpg&ehk=mgsN3LUeEhTgZsz6lzzHW3tJHJ9LzkvTgfaYaJDEipQ%3d&risl=&pid=ImgRaw&r=0",
  videoId: "SgSX3gOrj60",
  price: 0,
  description:[
    "Rocket League combina fútbol con conducción de alta velocidad, ofreciendo una experiencia de juego única y emocionante. Los jugadores controlan vehículos con cohetes que pueden chocar y volar por los aires para marcar goles espectaculares en arenas futuristas.",

    "El modo de un jugador de Rocket League permite a los jugadores perfeccionar sus habilidades en una variedad de desafíos y partidos contra la inteligencia artificial. Además, hay modos de temporada en los que los jugadores pueden competir en torneos y ligas para llegar a la cima.",

    "El modo multijugador de Rocket League es altamente competitivo y adictivo, con partidas en línea que enfrentan a equipos de hasta cuatro jugadores. La comunicación y la coordinación son clave para el éxito, y los jugadores pueden personalizar sus vehículos con una amplia gama de opciones estéticas y funcionales para destacar en el campo.",
  ],
  systemRequirements:[
    "SO: Windows 7",
    "Procesador: 2.5 GHz Dual core",
    "Memoria: 4 GB RAM",
    "Gráficos: NVIDIA GeForce 760, AMD Radeon R7 270X, o superior",
    "DirectX: 11",
    "Almacenamiento: 20 GB"
  ],
  typeoffer: "665fcb959953ee0ba1099486",
},

{
  _id: "664695e8cf29fe32661290db",
  name: "God of War Raganarok",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c929d5b0a90daa03fe31",
  image: [
    "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
    "https://www.gamingtalker.it/wp-content/uploads/2021/09/God-of-War-Ragnarok_PS5_img03.jpg",
  ],
  cover:"https://i.redd.it/r90tvpqmjpb91.jpg",
  videoId: "Ut7FkcpYL74",
  price: 59,
  description:[
   "God of War Ragnarök continúa la saga de Kratos y su hijo Atreus en una nueva y épica aventura. El juego ofrece una jugabilidad intensa y una narrativa envolvente mientras los protagonistas se enfrentan a los dioses nórdicos y a las profecías del fin del mundo.",

    "En el modo de un jugador de God of War Ragnarök, los jugadores explorarán impresionantes paisajes nórdicos y enfrentarán a enemigos poderosos y mitológicos. La relación entre Kratos y Atreus se profundiza, revelando secretos del pasado y desafiando a los jugadores con emocionantes combates y rompecabezas.",

    "El combate en God of War Ragnarök es visceral y estratégico, combinando habilidades mágicas y físicas. Los jugadores pueden personalizar su equipo y habilidades para adaptarse a su estilo de juego, enfrentándose a jefes épicos y hordas de enemigos en su búsqueda para detener el Ragnarök."
  ],
  systemRequirements:[
    "SO: Windows 10",
    "Procesador: Intel i5-6600k (4 core 3.5 GHz) o AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GTX 1060 (6 GB) o AMD RX 570 (4 GB)",
    "DirectX: 11",
    "Almacenamiento: 70 GB"
  ],
    typeoffer: "665fcb5e9953ee0ba1099484",
},

{
  _id: "6646960dcf29fe32661290dd",
  name: "Roblox",
  gamemode: "667a100a86306cb5cd120f7f",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c916d5b0a90daa03fe2f",
  image: [
    "https://assetsio.gnwcdn.com/co5u9i.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    "https://fadedspring.co.uk/wp-content/uploads/2021/07/Roblox-Summer-Games-Fun-.jpg",
  ],
  cover:"https://quoramarketing.com/wp-content/uploads/2023/05/How-to-Force-Restart-Roblox.png",
  videoId: "sme76WoJ_-U",
  price: 0,
  description:[
    "Roblox es una plataforma de juegos en línea y un sistema de creación de juegos que permite a los usuarios diseñar sus propios juegos y jugar a una amplia variedad de juegos creados por otros usuarios. Con una comunidad activa y diversa, Roblox ofrece una experiencia de juego única y personalizable.",

    "En Roblox, los jugadores pueden explorar millones de juegos creados por otros usuarios, que abarcan una amplia variedad de géneros y estilos. Desde juegos de rol y aventuras hasta simuladores y minijuegos, hay algo para todos en Roblox.",

    "El modo de creación de Roblox permite a los usuarios diseñar y compartir sus propios juegos utilizando herramientas intuitivas y un motor de juego potente. Los creadores pueden monetizar sus juegos a través de microtransacciones, creando una economía vibrante dentro de la plataforma."
  ],
  systemRequirements:[
    "SO: Windows 7",
    "Procesador: Procesador reciente (2005+) con velocidad de reloj de 1.6 GHz o mejor",
    "Memoria: 1 GB RAM",
    "Gráficos: DirectX 10 o superior con una tarjeta gráfica con Shader Model 2.0",
    "DirectX: 10",
    "Almacenamiento: Al menos 20 MB de espacio disponible"
  ],
  },

{
  _id: "66469619cf29fe32661290df",
  name: "Minecraft",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a3eeb8039be59161eb637",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png",
    "https://www.lifewire.com/thmb/TqLkviC4FT2b4knH_tS3-wtUzcY=/1920x1080/filters:no_upscale():max_bytes(150000):strip_icc()/kidsfunonlinegames-minecraft-5c02672646e0fb0001deb5c6.jpg",
  ],
  cover:"https://www.mobygames.com/images/covers/l/591553-minecraft-playstation-vita-edition-ps-vita-front-cover.png",
  videoId: "MmB9b5njVbA",
  price: 20,
  description:[
    "Minecraft es un juego de construcción y aventuras en un mundo abierto compuesto por bloques. Los jugadores pueden explorar, recolectar recursos, construir estructuras y enfrentar a criaturas en un entorno dinámico y completamente personalizable.",

    "En el modo de supervivencia de Minecraft, los jugadores deben recolectar recursos, construir refugios y luchar contra criaturas peligrosas para mantenerse con vida. La creatividad y la estrategia son clave para sobrevivir en este mundo lleno de desafíos.",

    "El modo creativo de Minecraft permite a los jugadores construir libremente sin restricciones de recursos ni amenazas de enemigos. Este modo es ideal para aquellos que desean enfocarse en la construcción y la exploración sin preocuparse por la supervivencia.",

    "Minecraft también ofrece un modo multijugador, donde los jugadores pueden unirse a servidores en línea para colaborar o competir con otros jugadores. Los servidores de Minecraft albergan una gran variedad de minijuegos y actividades comunitarias, fomentando una experiencia social y cooperativa."
  ],
  systemRequirements:[
    "SO: Windows 7 y superior",
    "Procesador: Intel Core i3-3210 o AMD A8-7600 APU o equivalente",
    "Memoria: 4 GB RAM",
    "Gráficos: Intel HD Graphics 4000 o AMD Radeon R5",
    "DirectX: 11",
    "Almacenamiento: 1 GB"
  ],
    typeoffer: "665fcb5e9953ee0ba1099484",
},

{
  _id: "66469625cf29fe32661290e1",
  name: "Terraria",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "66484719a7e41a4b4a090abf",
  gender: "667a1a826029915da03f68ee",
  theme: "6682b48f6e737adf9e6b047f",
  developer: "6647c929d5b0a90daa03fe31",
  image: [
    "https://images.g2a.com/300x400/1x1x1/terraria-steam-gift-global-i10000000238003/5ebbabf646177c06a555f152",
    "https://assets.vg247.com/current/2013/11/terrariamobmp_screen186.jpg",
  ],
  cover:"https://forums.terraria.org/index.php?attachments/terrariajealbumcover-png.279585/",
  videoId: "w7uOhFTrrq0",
  price: 10,
  description:[
    "Terraria es un juego de aventura y construcción en 2D, donde los jugadores pueden explorar, excavar, construir y luchar en un mundo generado de manera procedimental. Con una mezcla de jugabilidad de sandbox y elementos de RPG, Terraria ofrece una experiencia rica y variada.",

    "En el modo de un jugador de Terraria, los jugadores pueden recolectar recursos, construir estructuras y enfrentarse a una amplia variedad de enemigos y jefes. La exploración es clave, ya que cada mundo generado es único y está lleno de secretos y tesoros por descubrir.",

    "El modo multijugador de Terraria permite a los jugadores colaborar con amigos para construir, explorar y combatir juntos. Los servidores en línea facilitan la creación de comunidades donde los jugadores pueden compartir sus creaciones y embarcarse en aventuras conjuntas.",

    "Terraria también incluye eventos y actualizaciones periódicas que introducen nuevos contenidos, desafíos y características, manteniendo el juego fresco y emocionante para los jugadores veteranos y nuevos por igual."
  ],
  systemRequirements:[
    "SO: Windows 7, 8/8.1, 10",
    "Procesador: Dual Core a 3.0 GHz",
    "Memoria: 4 GB RAM",
    "Gráficos: DirectX 10 compatible con 512 MB VRAM",
    "DirectX: 10",
    "Almacenamiento: 200 MB"
  ],
  },

{
  _id: "66469632cf29fe32661290e3",
  name: "Portal 2",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "66484719a7e41a4b4a090abf",
  gender: "667a1d3a12c3b76a4dc04ef4",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c916d5b0a90daa03fe2f",
  image: [
    "https://m.media-amazon.com/images/I/811ZPN+7KML.jpg",
    "https://2.bp.blogspot.com/-R_W_dCz8gLw/U-bx1MKouXI/AAAAAAAAAys/ozkEOoCeWxY/s1600/portal-2-videogame-review-5_11.jpg",
  ],
  cover:"https://www.premadepixels.com/wp-content/uploads/2022/06/Portal-2-Album-Cover-PP1.jpg",
  videoId: "tax4e4hBBZc",
  price: 12,
  description: [
    " Portal 2 continúa con esa fórmula ganadora consistente en una innovadora mecánica de juego, historia y música que condujeron al Portal original a ganar más de 70 galardones y lo convirtieron en un nuevo mito de la industria.",

    "En el modo de un jugador de Portal 2 conoceremos a un nuevo elenco de personajes, gran cantidad de innovadores rompecabezas y un número mucho mayor de enrevesadas salas de pruebas. Los jugadores podrán explorar zonas de Aperture Science Labs nunca vistas anteriormente y volverán a encontrarse a GLaDOS, ese compañero computarizado y, en ocasiones con tendencias asesinas, que los guio a lo largo del juego original.",

    "El modo cooperativo para dos jugadores tiene su propia campaña totalmente independiente, con una historia única, salas de pruebas y dos nuevos personajes con los que podremos jugar. Este nuevo modo obliga a los jugadores a reconsiderar todo lo que creían saber acerca de los portales. Para tener éxito no solo deberán trabajar codo con codo, también tendrán que pensar de forma cooperativa.",
  ],
  systemRequirements:[
    "SO: Windows 7 / Vista / XP",
    "Procesador: 3.0 GHz P4, Dual Core 2.0 (o superior) o AMD64X2 (o superior)",
    "Memoria: 2 GB RAM",
    "Gráficos: Video con 128 MB o más y con soporte para Shader Model 2.0",
    "DirectX: 9.0c",
    "Almacenamiento: Al menos 8 GB de espacio disponible"
  ],
},

{
  _id: "66469671cf29fe32661290e5",
  name: "The last of us",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "6682b48f6e737adf9e6b047f",
  developer: "6647c916d5b0a90daa03fe2f",
  image: [
    "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png",
    "https://i.ytimg.com/vi/ZfZGe_C4vN0/maxresdefault.jpg",
  ],
  cover:"https://th.bing.com/th/id/OIP.kBxaxEZ6nGcj2syPh_kq4QHaKd?rs=1&pid=ImgDetMain",
  videoId: "W01L70IGBgE",
  price: 50,
  description:[
    "The Last of Us es un juego de acción y aventura en tercera persona desarrollado por Naughty Dog. Ambientado en un mundo post-apocalíptico, los jugadores siguen la historia de Joel y Ellie mientras intentan sobrevivir en un entorno devastado por una pandemia fúngica.",

    "En el modo de un jugador de The Last of Us, los jugadores experimentan una narrativa intensa y emotiva mientras exploran entornos peligrosos, resuelven rompecabezas y enfrentan a enemigos tanto humanos como infectados. La relación entre Joel y Ellie es el corazón de la historia, ofreciendo momentos conmovedores y decisiones difíciles.",

    "El modo multijugador de The Last of Us, conocido como Factions, permite a los jugadores unirse a una de las dos facciones y competir en modos de juego tácticos y estratégicos. Los jugadores deben recolectar recursos, crear armas y trabajar en equipo para sobrevivir en un mundo hostil.",

    "The Last of Us destaca por su impresionante narrativa, gráficos realistas y una jugabilidad que combina elementos de sigilo, combate y exploración. El juego ha sido aclamado por su profunda caracterización y su capacidad para sumergir a los jugadores en su mundo devastado y lleno de peligros."
  ],
  systemRequirements:[
    "SO: Windows 7 (Service Pack 1)",
    "Procesador: Intel Core i5-2500K o AMD FX-6300",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 580 o AMD Radeon HD 7870",
    "DirectX: 11",
    "Almacenamiento: 50 GB"
  ],
    typeoffer: "665fcb5e9953ee0ba1099484",
},

{
  _id: "66469686cf29fe32661290e7",
  name: "The last of us part 2",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "6682b48f6e737adf9e6b047f",
  developer: "6647c929d5b0a90daa03fe31",
  image: [
    "https://m.media-amazon.com/images/M/MV5BODUwNWY5YjctNDZkNy00ZTY1LWEzMzItZGVkYTllOWVjOTc3XkEyXkFqcGdeQXVyNjU4NTIxNzI@._V1_FMjpg_UX1000_.jpg",
    "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/03/last-of-us-2-5.jpg",
  ],
  cover:"https://th.bing.com/th/id/OIP.mxQFqz82VcNLMPQcshuLYwHaJx?rs=1&pid=ImgDetMain",
  videoId: "vhII1qlcZ4E",
  price: 65,
  description:[
    "The Last of Us Part II continúa la historia de Ellie y Joel en un mundo post-apocalíptico devastado por una pandemia. Desarrollado por Naughty Dog, el juego ofrece una narrativa emocionante y gráficos impresionantes que llevan a los jugadores a un viaje de venganza y redención.",

    "En el modo de un jugador de The Last of Us Part II, los jugadores asumen el papel de Ellie, una joven luchadora en busca de justicia en un mundo implacable. La jugabilidad se centra en la exploración, el sigilo y el combate intenso, mientras Ellie se enfrenta a enemigos humanos y infectados.",

    "El combate en The Last of Us Part II es brutal y visceral, con un sistema de combate mejorado que ofrece más opciones tácticas y realismo. Los jugadores deben usar el entorno a su favor y tomar decisiones difíciles mientras luchan por sobrevivir en un mundo lleno de peligros.",

    "Además de la campaña principal, The Last of Us Part II cuenta con un modo multijugador, Factions, que se lanzará como un juego independiente. En este modo, los jugadores pueden unirse a una de las facciones y competir en intensos enfrentamientos tácticos para sobrevivir y reclamar el control del territorio."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-3470 o AMD Ryzen 3 1200",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 1060 6GB / GTX 1660 Super o AMD Radeon RX 580 8GB",
    "DirectX: 11",
    "Almacenamiento: 100 GB"
  ],
  },

{
  _id: "664696cecf29fe32661290e9",
  name: "Cyberpunk 2077",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c929d5b0a90daa03fe31",
  image: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouB_E-m8Z_Q5o5YnuBlgx-5sReea38Z7e5g&s",
    "https://th.bing.com/th/id/OIP.EV7RaSj2vNr9i4SfYuVeqAHaEK?rs=1&pid=ImgDetMain",
  ],
  cover:"https://cdn.mobygames.com/covers/10676751-cyberpunk-2077-playstation-4-front-cover.jpg",
  videoId: "8X2kIfS6fb8",
  price: 45,
  description:[
    "Cyberpunk 2077 es un juego de rol de mundo abierto desarrollado por CD Projekt Red, ambientado en Night City, una metrópolis futurista obsesionada por el poder, la moda y la tecnología. Los jugadores asumen el papel de V, un mercenario en busca de un implante único que promete la clave de la inmortalidad.",

    "En el mundo vibrante y peligroso de Cyberpunk 2077, los jugadores pueden explorar una vasta ciudad llena de vida, intrigas y peligros. La libertad de elección es fundamental, ya que las decisiones de los jugadores influirán en la historia y el destino de Night City.",

    "El combate en Cyberpunk 2077 es variado y emocionante, con opciones para enfrentamientos cuerpo a cuerpo, combate a distancia y hackeo de dispositivos electrónicos. Los jugadores pueden personalizar a su personaje con habilidades y mejoras cibernéticas para adaptarse a su estilo de juego.",

    "Además de la historia principal, Cyberpunk 2077 ofrece una gran cantidad de misiones secundarias, actividades y opciones de personalización para mantener a los jugadores entretenidos durante horas. Con su impresionante mundo abierto y su narrativa envolvente, Cyberpunk 2077 es una experiencia única en el género de los juegos de rol."
  ],
  systemRequirements:[
    "SO: Windows 7 / 10 (64-bit)",
    "Procesador: Intel Core i5-3570K / AMD FX-8310",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GTX 780 3GB / AMD Radeon RX 470",
    "DirectX: 12",
    "Almacenamiento: 70 GB"
  ],
    typeoffer: "665fcb5e9953ee0ba1099484",
},

{
  _id: "664696e5cf29fe32661290eb",
  name: "Halo Reach",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c929d5b0a90daa03fe31",
  image: [
    "https://media.vandal.net/m/79436/halo-reach-201912316245316_2.jpg",
    "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2019/03/halo-reach-multiplayer-1.jpg",
  ],
  cover:"https://mir-s3-cdn-cf.behance.net/project_modules/fs/f16db193304569.5e61168a64764.jpg",
  videoId: "s3MabEog3yQ",
  price: 12,
  description:[
    "Halo Reach es un videojuego de disparos en primera persona desarrollado por Bungie Studios y publicado por Microsoft Game Studios. Se ambienta en el universo de ciencia ficción de la serie Halo y sirve como precuela de los eventos del primer juego de la saga. Los jugadores asumen el papel de Noble Six, un soldado Spartan enviado a defender el planeta Reach de la invasión alienígena.",

    "En el modo de un jugador de Halo Reach, los jugadores se embarcan en una emocionante campaña militar contra las fuerzas del Covenant, enfrentándose a una variedad de enemigos y misiones mientras intentan salvar Reach de la destrucción total. La historia se desarrolla con giros inesperados y momentos emocionantes que mantienen a los jugadores inmersos en la acción.",

    "El modo multijugador de Halo Reach ofrece una experiencia competitiva y cooperativa, con una variedad de modos de juego, mapas y opciones de personalización. Los jugadores pueden unirse a partidas en línea con amigos o competir en torneos para demostrar su habilidad en el combate Spartano.",

    "Halo Reach también incluye un modo Forge, que permite a los jugadores crear y personalizar sus propios mapas y modos de juego. Con herramientas intuitivas y una comunidad activa, Forge ofrece infinitas posibilidades para la creatividad y la diversión."
  ],
  systemRequirements:[
    "SO: Windows 7 o superior (64-bit)",
    "Procesador: Intel Core i7-8750H / AMD Ryzen 7 3750H",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560X",
    "DirectX: 11",
    "Almacenamiento: 20 GB"
  ],
  },

{
  _id: "664696facf29fe32661290ed",
  name: "Gears of War 2",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c929d5b0a90daa03fe31",
  image: [
    "https://th.bing.com/th/id/R.cdb1e6c83a52222cb21bcbcff9812b42?rik=RoBPp5HGIkWOGg&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.4ef14de6700c99c370dca3a8660210c0?rik=AaF9eNAqe1%2bL1Q&pid=ImgRaw&r=0",
  ],
  cover:"https://cdn.gearsofwar.com/gearsofwar/sites/9/2020/02/gears-of-war-2-5e4712bb05532-1024x1024.jpg",
  videoId: "rNCF6sDymRc",
  price: 10,
  description:[
    "Gears of War 2 es un videojuego de disparos en tercera persona desarrollado por Epic Games y publicado por Microsoft Game Studios. Es la secuela del aclamado Gears of War y sigue la historia del escuadrón Delta mientras luchan contra la horda Locust para salvar al planeta Sera. Los jugadores asumen el papel de Marcus Fenix, un soldado de la COG, en su misión para encontrar una cura para la plaga que amenaza con destruir a la humanidad.",

    "En el modo de un jugador de Gears of War 2, los jugadores se sumergen en una campaña épica llena de acción, emoción y momentos cinematográficos. La historia se desarrolla a través de una serie de intensas batallas y encuentros con enemigos formidables, mientras el escuadrón Delta lucha contra probabilidades imposibles.",

    "El modo multijugador de Gears of War 2 ofrece una experiencia competitiva y cooperativa, con una variedad de modos de juego, mapas y opciones de personalización. Los jugadores pueden unirse a partidas en línea con amigos o competir en torneos para demostrar su habilidad en el combate contra los Locust.",

    "Además del modo de un jugador y multijugador, Gears of War 2 también incluye el modo Horda, donde los jugadores pueden unirse para enfrentarse a oleadas de enemigos cada vez más difíciles. Este modo ofrece una experiencia cooperativa intensa y desafiante que pone a prueba la resistencia y la estrategia de los jugadores."
  ],
  systemRequirements:[
    "SO: Windows 7",
    "Procesador: Intel Core i3-2115C 2.0GHz / AMD Athlon II X3 455",
    "Memoria: 4 GB RAM",
    "Gráficos: NVIDIA GeForce GT 720 v2 / AMD Radeon R7 240 2GB",
    "DirectX: 11",
    "Almacenamiento: 80 GB"
  ],
  },

{
  _id: "66469710cf29fe32661290ef",
  name: "Call of Duty Black Ops II",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2c0a55c56098a0045b9",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c929d5b0a90daa03fe31",
  image: [
    "https://th.bing.com/th/id/OIP.Get7mZfbhvfwjI21SXgAFAHaEK?rs=1&pid=ImgDetMain",
    "https://mattbrett.com/wp-content/uploads/2013/02/blackops2-hero.jpg",
  ],
  cover:"https://i.redd.it/s8bxj8h89by31.jpg",
  videoId: "x3tedlWs1XY",
  price: 15,
  description:[
    "Call of Duty: Black Ops II es un juego de disparos en primera persona desarrollado por Treyarch y publicado por Activision. Es la secuela del exitoso Call of Duty: Black Ops y se ambienta en un futuro cercano durante la Guerra Fría del siglo XXI. La historia se desarrolla en dos líneas de tiempo diferentes, siguiendo las acciones de Alex Mason en la década de 1980 y su hijo David en 2025, mientras enfrentan una nueva amenaza global.",

    "En el modo de un jugador de Call of Duty: Black Ops II, los jugadores se sumergen en una emocionante campaña que abarca dos períodos de tiempo distintos. La narrativa se desarrolla a través de misiones llenas de acción y giros inesperados, llevando a los jugadores a lugares exóticos y enfrentándolos a enemigos poderosos.",

    "El modo multijugador de Call of Duty: Black Ops II ofrece una experiencia competitiva y adictiva, con una variedad de modos de juego, mapas y opciones de personalización. Los jugadores pueden competir en línea con amigos o contra otros jugadores de todo el mundo, desbloqueando armas y accesorios mientras suben de rango.",

    "Además del modo de un jugador y multijugador, Call of Duty: Black Ops II incluye el modo Zombis, donde los jugadores pueden unirse para enfrentarse a hordas de no-muertos en una variedad de mapas temáticos. Este modo ofrece una experiencia cooperativa y desafiante que pone a prueba la destreza y la estrategia de los jugadores."
  ],
  systemRequirements:[
    "SO: Windows 7",
    "Procesador: Intel Core 2 Duo E8200 2.66 GHz / AMD Phenom X3 8750 2.4 GHz",
    "Memoria: 2 GB RAM",
    "Gráficos: NVIDIA GeForce 8800GT 512 MB / ATI Radeon HD 3870 512 MB",
    "DirectX: 9.0c",
    "Almacenamiento: 16 GB"
  ],
  },

{
  _id: "6646975fcf29fe32661290f1",
  name: "Elden Ring",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c916d5b0a90daa03fe2f",
  image: [
    "https://th.bing.com/th/id/R.088d596111ae3357718c84b63e9fbcef?rik=8q6rIco0f32BBg&pid=ImgRaw&r=0",
    "https://www.dsogaming.com/wp-content/uploads/2022/01/Elden-Ring-new-screenshots-1.jpg",
  ],
  cover:"https://image.api.playstation.com/vulcan/ap/rnd/202107/0902/8ew9QqHI1eLFFq5XdIOhN2Q2.jpg",
  videoId: "E3Huy2cdih0",
  price: 50,
  description:[
    "Elden Ring es un próximo videojuego de acción y rol desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Dirigido por Hidetaka Miyazaki, el creador de la serie Souls, y con la colaboración del autor de fantasía George R. R. Martin, Elden Ring promete llevar a los jugadores a un vasto mundo de fantasía oscuro y misterioso.",

    "En Elden Ring, los jugadores explorarán un mundo abierto lleno de ruinas antiguas, peligrosos enemigos y secretos por descubrir. La jugabilidad se centra en el combate desafiante y estratégico, donde los jugadores deberán dominar el tiempo de sus ataques, esquivas y paradas para sobrevivir en un mundo lleno de peligros.",

    "La narrativa de Elden Ring promete ser profunda y envolvente, con una historia rica en mitología y personajes memorables. Los jugadores podrán tomar decisiones que influirán en el curso de la historia, enfrentándose a dilemas morales y desafíos éticos mientras exploran el mundo de Elden Ring.",

    "Con su atmósfera única, diseño de nivel intrincado y desafíos que pondrán a prueba incluso a los jugadores más habilidosos, Elden Ring se presenta como un título altamente esperado que promete ofrecer una experiencia de juego inmersiva y emocionante para los aficionados a los juegos de rol y acción."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-8400 / AMD Ryzen 5 1500X",
    "Memoria: 12 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
    "DirectX: 11",
    "Almacenamiento: 60 GB"
  ],
    typeoffer: "665fcb959953ee0ba1099486",
},

{
  _id: "6646976acf29fe32661290f3",
  name: "GTA 5",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://i.pinimg.com/originals/bf/27/84/bf278488ae0e3a42c1621345c5e44f57.jpg",
    "https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_auto,f_auto/redbullcom/2017/04/07/1331852866239_2/gta-6-ecco-dove-vorremmo-fosse-ambientato-1",
  ],
  cover:"https://th.bing.com/th/id/R.641d6e5eef3fedb4c0af6986a0bec50e?rik=7g%2bnaGNfnw3yUQ&pid=ImgRaw&r=0",
  videoId: "QkkoHAzjnUs",
  price: 20,
  description:[
   "Grand Theft Auto V es un videojuego de acción y aventura desarrollado por Rockstar North y publicado por Rockstar Games. Situado en la ficticia ciudad de Los Santos y sus alrededores, GTA V ofrece a los jugadores un vasto mundo abierto donde pueden explorar, interactuar y participar en una variedad de actividades criminales.",

    "En GTA V, los jugadores asumen el papel de tres protagonistas: Michael, un ex ladrón de bancos que vive una vida de lujo en los suburbios; Franklin, un joven pandillero que busca escapar de la vida de crimen de Los Santos; y Trevor, un psicópata impredecible con una inclinación por la violencia extrema.",

    "El modo historia de GTA V sigue las vidas entrelazadas de estos tres personajes mientras buscan oportunidades de robo y venganza en el mundo del crimen organizado. La narrativa está llena de giros y vueltas, ofreciendo momentos de comedia, drama y acción a lo largo de la trama.",

    "Además de la historia principal, GTA V cuenta con un modo multijugador en línea, conocido como GTA Online, donde los jugadores pueden crear su propio personaje y embarcarse en una amplia variedad de actividades, como misiones cooperativas, competiciones de carreras, y actividades delictivas en un mundo compartido con otros jugadores."
  ],
  systemRequirements:[
    "SO: Windows 7, 8, 8.1, 10 (64-bit)",
    "Procesador: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
    "DirectX: 11",
    "Almacenamiento: 72 GB"
  ],
    typeoffer: "665fcb5e9953ee0ba1099484",
},

{
  _id: "6646977ecf29fe32661290f5",
  name: "Resident Evil 4",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://media.vandal.net/m/36874/resident-evil-4-201683095332_1.jpg",
    "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/07/RDR2-PS2-Games-RE4.jpg",
  ],
  cover:"https://th.bing.com/th/id/R.f033e808cde5d4dc091d5adcd4b7293f?rik=3jodoHZokFypVA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-hfBYlebhta4%2fWPDdTtekQUI%2fAAAAAAAAA4E%2f1ApWBLXTjMIyGuKQUZW3TcmJAEm6tKiVwCK4B%2fs1600%2fRE4PCCover.jpg&ehk=O%2fc546%2fgr0by0C898JVH%2bNTyqLKewvNO5qcFQW4I0qg%3d&risl=&pid=ImgRaw&r=0",
  videoId: "JpSOccC5sV0",
  price: 35,
  description:[
    "Resident Evil 4 es un juego de acción y supervivencia desarrollado por Capcom. Es la sexta entrega principal de la serie Resident Evil y sigue al agente especial Leon S. Kennedy mientras investiga la desaparición de la hija del presidente en una aldea rural de Europa. Pronto descubre que la aldea está infectada por un extraño parásito que convierte a sus habitantes en criaturas violentas y peligrosas.",

    "En Resident Evil 4, los jugadores se sumergen en una experiencia de terror de supervivencia en tercera persona, enfrentándose a enemigos siniestros y resolviendo acertijos mientras luchan por sobrevivir. La atmósfera tensa y el diseño del juego ofrecen momentos de tensión y emoción a medida que los jugadores exploran entornos oscuros y claustrofóbicos.",

    "El combate en Resident Evil 4 es intenso y satisfactorio, con una variedad de armas y tácticas disponibles para los jugadores. Desde pistolas y escopetas hasta lanzagranadas y rifles de francotirador, los jugadores deben usar sabiamente sus recursos para enfrentarse a una variedad de enemigos, incluidos jefes desafiantes.",

    "Con su jugabilidad innovadora, atmósfera inquietante y una historia envolvente, Resident Evil 4 es ampliamente considerado como uno de los mejores juegos de la serie y uno de los mejores juegos de terror de todos los tiempos."
  ],
  systemRequirements:[
    "SO: Windows XP / Vista",
    "Procesador: Intel Core 2 Duo 2.4 GHz o AMD Athlon X2 2.8 GHz",
    "Memoria: 2 GB RAM",
    "Gráficos: NVIDIA GeForce 8800GTS / ATI Radeon HD 4850",
    "DirectX: 9.0c",
    "Almacenamiento: 15 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290da",
  name: "The Legend of Zelda: Breath of the Wild",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484719a7e41a4b4a090abf",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://zelda.nintendo.com/breath-of-the-wild/assets/media/wallpapers/tablet-1.jpg",
    "https://th.bing.com/th/id/R.ff9dbae2b54ae58fb2d16654ef92d20b?rik=U35OItdkDrlG6Q&riu=http%3a%2f%2fimages.nintendolife.com%2fscreenshots%2f81284%2flarge.jpg&ehk=gvflXaFFV8Alz9esdw98X%2fJfvDcKob%2fj185fitS0rE0%3d&risl=&pid=ImgRaw&r=0",
  ],
  cover:"https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_75/MNS/NOE/70010000000023/SQ_NSwitch_TheLegendOfZeldaBreathOfTheWild_E",
  videoId: "zw47_q9wbBE",
  price: 60,
  description:[
    "The Legend of Zelda: Breath of the Wild rompe con las convenciones de los juegos anteriores de la serie The Legend of Zelda y te transporta a un mundo de descubrimiento, exploración y aventura. Viaja a través de vastos campos, bosques y picos de montañas mientras descubres qué ha sido del reino de Hyrule en esta impresionante aventura al aire libre.",

    "En Breath of the Wild, los jugadores tienen total libertad para explorar el mundo abierto y descubrir nuevos desafíos y secretos en cada rincón. El juego ofrece una jugabilidad innovadora y desafiante que recompensa la creatividad y la exploración, con una historia épica que se revela gradualmente mientras avanzas en tu viaje.",

    "El combate en Breath of the Wild es fluido y emocionante, con una variedad de armas y tácticas disponibles para los jugadores. Desde espadas y arcos hasta bombas y poderes mágicos, los jugadores pueden enfrentarse a una variedad de enemigos y desafíos de formas creativas y estratégicas.",

    "Con su impresionante diseño artístico, mecánicas de juego innovadoras y mundo abierto expansivo, The Legend of Zelda: Breath of the Wild ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de la serie y uno de los mejores juegos de todos los tiempos."
  ],
  systemRequirements:[
    "SO: Windows 7 o superior (64-bit)",
    "Procesador: Intel Core i5-3470 o AMD FX-6300",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 760 / AMD Radeon R7 260X",
    "DirectX: 11",
    "Almacenamiento: 13 GB"
  ],
    typeoffer: "665fcb959953ee0ba1099486",
},

{
  _id: "664695bacf29fe32661290db",
  name: "Minecraft Dungeons",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a1a826029915da03f68ee",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://i.pinimg.com/736x/aa/e9/c3/aae9c33a756621b8209bdf7ce51b076a.jpg",
    "https://image.api.playstation.com/vulcan/ap/rnd/202107/1210/mmWERw3tksap8GbYMpt2X2IT.jpg",
  ],
  cover:"https://www.mobygames.com/images/covers/l/661055-minecraft-dungeons-nintendo-switch-front-cover.jpg",
  videoId: "KCbE47v1qVk",
  price: 18,
  description:[
    "Minecraft Dungeons es un juego de acción y aventuras desarrollado por Mojang Studios y publicado por Xbox Game Studios. Ambientado en el universo de Minecraft, Dungeons ofrece una nueva perspectiva del mundo familiar de bloques, centrándose en la exploración de mazmorras y la lucha contra monstruos.",

    "En Minecraft Dungeons, los jugadores se aventuran en misiones generadas proceduralmente llenas de enemigos, trampas y tesoros ocultos. Con mecánicas de juego simples pero satisfactorias, el juego ofrece una experiencia accesible para jugadores de todas las edades y niveles de habilidad.",

    "El combate en Minecraft Dungeons es rápido y estratégico, con una variedad de armas y artefactos mágicos que los jugadores pueden usar para derrotar a sus enemigos. A medida que avanzan, los jugadores pueden mejorar sus habilidades y personalizar su equipo para enfrentarse a desafíos más difíciles.",

    "Con su encantador estilo visual y su jugabilidad adictiva, Minecraft Dungeons ofrece una experiencia única en el mundo de Minecraft, invitando a los jugadores a sumergirse en emocionantes aventuras llenas de acción y sorpresas."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-4690 / AMD FX-4350",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 660 / AMD Radeon HD 7850",
    "DirectX: 11",
    "Almacenamiento: 6 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290dc",
  name: "Fortnite",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "66484719a7e41a4b4a090abf",
  gender: "6647c2afa55c56098a0045b5",
  theme: "6682b48f6e737adf9e6b047f",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://assetsio.gnwcdn.com/co2ekt.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    "https://gamerant.com/wp-content/uploads/Fortnite-gameplay-screenshot-7.jpg",
  ],
  cover:"https://th.bing.com/th/id/R.674280ccb397eb6648e4c2817e2be5e7?rik=ie21oLCTOBarnw&pid=ImgRaw&r=0",
  videoId: "WJW-bzXZM8M",
  price: 0,
  description:[
    "Fortnite es un juego de batalla real desarrollado por Epic Games que ha capturado la atención de millones de jugadores en todo el mundo. Ambientado en un colorido mundo de estilo caricaturesco, Fortnite ofrece una experiencia única que combina elementos de construcción, supervivencia y combate en línea.",

    "En Fortnite, los jugadores pueden elegir entre varios modos de juego, incluido el popular modo Battle Royale, donde compiten en un mapa con hasta 100 jugadores para ser el último en pie. Además, el juego ofrece modos creativos donde los jugadores pueden construir y diseñar sus propias islas y modos de juego personalizados.",

    "El aspecto distintivo de Fortnite es su sistema de construcción, que permite a los jugadores recolectar recursos y construir estructuras para protegerse y alcanzar ventaja táctica sobre sus oponentes. Esta mecánica añade una capa estratégica adicional al juego, diferenciándolo de otros títulos de batalla real.",

    "Con su constante flujo de actualizaciones, eventos en el juego y colaboraciones con franquicias populares, Fortnite ha mantenido su relevancia y su base de jugadores activa desde su lanzamiento. Es ampliamente conocido por su comunidad activa, torneos competitivos y su presencia en la cultura pop."
  ],
  systemRequirements:[
    "SO: Windows 10 de 64 bits, versión 1703",
    "Procesador: Core i3-3225 de 3,3 GHz",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GTX 960 o AMD R9 280",
    "DirectX: 11",
    "Almacenamiento: 90 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290dd",
  name: "Super Mario Odyssey",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.b97b172584c13f0fdf97233e462862be?rik=y1n8RGX3Tqo7sQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.N9fK1UcplY1uC8bFVA0e3AHaEK?rs=1&pid=ImgDetMain",
  ],
  cover:"https://images.igdb.com/igdb/image/upload/t_1080p/co1mxf.jpg",
  videoId: "5kcdRBHM7kM",
  price: 60,
  description:[
 "Super Mario Odyssey es un juego de plataformas desarrollado y publicado por Nintendo para la consola Nintendo Switch. En esta emocionante aventura, los jugadores acompañan a Mario en un viaje por todo el mundo mientras intenta rescatar a la Princesa Peach de las garras de Bowser, quien planea casarse con ella.",

    "En Super Mario Odyssey, los jugadores exploran una amplia variedad de reinos coloridos y llenos de vida, desde soleadas playas hasta bulliciosas ciudades urbanas. Utilizando su gorra mágica, Cappy, Mario puede poseer una variedad de objetos y enemigos para superar obstáculos y resolver acertijos.",

    "La jugabilidad de Super Mario Odyssey es una combinación perfecta de acción de plataformas clásica y mecánicas innovadoras. Los jugadores pueden recolectar Power Moons para alimentar la nave Odyssey de Mario y viajar a nuevos reinos, mientras disfrutan de desafiantes desafíos y encuentros con jefes.",

    "Con su encantador diseño artístico, banda sonora memorable y mecánicas de juego sólidas, Super Mario Odyssey ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de plataformas de todos los tiempos, capturando la esencia del legado de Super Mario de una manera fresca y emocionante."
  ],
  systemRequirements:[
    "SO: No disponible para Windows (es exclusivo de Nintendo Switch)",
    "Procesador: No disponible para PC",
    "Memoria: No disponible para PC",
    "Gráficos: No disponible para PC",
    "DirectX: No disponible para PC",
    "Almacenamiento: No disponible para PC"
  ],
  },

{
  _id: "664695bacf29fe32661290de",
  name: "Red Dead Redemption 2",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "667a1b39dd02289afc20d218",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://hardzone.es/app/uploads-hardzone.es/2018/10/Red_dead_redemption_2-930x487.jpg",
    "https://www.pwrdown.com/wp-content/uploads/2018/10/Screenshot-2018-10-01-at-8.00.04-PM-1920x1066.jpg",
  ],
  cover:"https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
  videoId: "gmA6MrX81z4",
  price: 60,
  description:[
    "Red Dead Redemption 2 es un videojuego de acción-aventura desarrollado y publicado por Rockstar Games. Ambientado en el salvaje oeste americano en 1899, el juego sigue la historia de Arthur Morgan, un forajido y miembro de la banda Van der Linde, mientras lucha por sobrevivir en un mundo cambiante y en decadencia.",

    "En Red Dead Redemption 2, los jugadores exploran un vasto y detallado mundo abierto lleno de vida y peligro. Desde las majestuosas montañas hasta las bulliciosas ciudades fronterizas, cada rincón del mundo de Red Dead Redemption 2 está lleno de personajes memorables, actividades y secretos por descubrir.",

    "La jugabilidad de Red Dead Redemption 2 ofrece una mezcla de acción, exploración y narrativa inmersiva. Los jugadores pueden participar en una variedad de actividades, como cazar, pescar, jugar al póker y realizar misiones para la banda, mientras navegan por un mundo lleno de decisiones morales y consecuencias.",

    "Con su impresionante atención al detalle, narrativa envolvente y mecánicas de juego profundas, Red Dead Redemption 2 ha sido aclamado como uno de los mejores juegos de la generación. Desde su lanzamiento, ha cautivado a jugadores de todo el mundo con su ambientación épica y su capacidad para sumergir a los jugadores en la vida del salvaje oeste."
  ],
  systemRequirements:[
    "SO: Windows 7/8/10 (64-bit)",
    "Procesador: Intel Core i5-2500K / AMD FX-6300",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
    "DirectX: 11",
    "Almacenamiento: 150 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290df",
  name: "The Witcher 3: Wild Hunt",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://www.wallpaperflare.com/static/392/775/711/the-witcher-3-wild-hunt-witcher-wild-hunt-wallpaper.jpg",
    "https://th.bing.com/th/id/R.5d391ba29add6f16f649b307ae06bf32?rik=T4DnWzqm%2fpdOJg&pid=ImgRaw&r=0",
  ],
  cover:"https://th.bing.com/th/id/R.84c3624e244ec843f28bf4c2dc4a5aa9?rik=qTgnteFq0C27hw&riu=http%3a%2f%2fwww.mobygames.com%2fimages%2fcovers%2fl%2f392214-the-witcher-3-wild-hunt-xbox-one-front-cover.png&ehk=FhkZ8Sj0i8xgY8nnLgtlb5yaCrPmyNfe%2b9QN3TgDwfY%3d&risl=&pid=ImgRaw&r=0",
  videoId: "c0i88t0Kacs",
  price: 40,
  description:[
    "The Witcher 3: Wild Hunt es un videojuego de rol de acción desarrollado por CD Projekt Red. Ambientado en un mundo de fantasía oscuro y lleno de peligros, el juego sigue la historia de Geralt de Rivia, un cazador de monstruos conocido como un Witcher, mientras busca a su hija adoptiva perdida en un mundo asolado por la guerra.",

    "En The Witcher 3, los jugadores exploran un vasto mundo abierto lleno de ciudades bulliciosas, aldeas remotas, yermos desolados y bosques misteriosos. A medida que Geralt, los jugadores encontrarán una gran variedad de personajes, cada uno con sus propias historias, misiones y secretos.",

    "La jugabilidad de The Witcher 3 combina combate táctico, exploración y toma de decisiones significativas que afectan al mundo y a sus habitantes. Los jugadores pueden usar una variedad de armas, magia y habilidades de Witcher para enfrentarse a monstruos y enemigos humanos mientras investigan el misterio que rodea a Ciri, la hija adoptiva de Geralt.",

    "Con su impresionante narrativa, personajes complejos y elecciones morales difíciles, The Witcher 3 ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de rol de todos los tiempos. Desde su lanzamiento, ha ganado numerosos premios y ha sido elogiado por su mundo inmersivo y su profunda experiencia de juego."
  ],
  systemRequirements:[
    "SO: Windows 7/8/10 (64-bit)",
    "Procesador: Intel Core i5-2500K 3.3GHz / AMD Phenom II X4 940",
    "Memoria: 6 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
    "DirectX: 11",
    "Almacenamiento: 35 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e0",
  name: "Overwatch 2",
  gamemode: "667a100a86306cb5cd120f7f",
  pegi: "66484719a7e41a4b4a090abf",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://assetsio.gnwcdn.com/co5tkm.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    "https://i2-prod.dailystar.co.uk/incoming/article20796138.ece/ALTERNATES/s1227b/0_Overwatch-2_Blizzcon_2019_Screenshot_Rio_Group_3P_Gameplay_02_png_jpgcopy.jpg",
  ],
  cover:"https://th.bing.com/th/id/OIP.DDKYts7qK22GqfvH1J52YwAAAA?rs=1&pid=ImgDetMain",
  videoId: "BowIDnsNvjs",
  price: 40,
  description:[
    "Overwatch 2 es un próximo juego de disparos en equipo desarrollado por Blizzard Entertainment, continuando la exitosa franquicia Overwatch. Ambientado en un futuro heroico y colorido, Overwatch 2 lleva a los jugadores a un mundo lleno de héroes dispuestos a defender la paz en medio del caos.",

    "En Overwatch 2, los jugadores se unen en equipos de seis para enfrentarse en intensas batallas multijugador en línea. Con una variedad de héroes únicos, cada uno con sus propias habilidades y estilos de juego, los jugadores deben trabajar en equipo para cumplir objetivos y superar a sus oponentes.",

    "Además del modo multijugador competitivo, Overwatch 2 presenta una nueva experiencia cooperativa llamada Historias, donde los jugadores pueden unirse para enfrentarse a desafíos PvE. Esta modalidad ofrece una narrativa envolvente y misiones emocionantes que exploran el lore del universo Overwatch.",

    "Con su vibrante estética, jugabilidad táctica y comunidad activa, Overwatch 2 promete llevar la experiencia de juego de Overwatch al siguiente nivel, ofreciendo a los jugadores nuevas formas de disfrutar del universo y de competir en línea."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-6700K / AMD Ryzen 5 1500X",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 590",
    "DirectX: 12",
    "Almacenamiento: 50 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e1",
  name: "Call of Duty: Modern Warfare",
  gamemode: "667a100a86306cb5cd120f7f",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "6682b48f6e737adf9e6b047f",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.eEFqCaZ5WrLQmdVCOnfHCAAAAA?rs=1&pid=ImgDetMain",
    "https://www.videogameschronicle.com/files/2020/04/Modern-Warfare-multiplayer-f.jpg",
  ],
  cover:"https://esports.as.com/2020/08/21/call-of-duty/Todas-portadas-Call-of-Duty_1384671549_481767_1024x1289.jpg",
  videoId: "bH1lHCirCGI",
  price: 60,
  description:[
  "Call of Duty: Modern Warfare es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision. Se trata de un reinicio suave de la serie Modern Warfare, presentando una campaña intensa y realista, un multijugador competitivo y un modo cooperativo de Operaciones Especiales.",

    "En la campaña de Call of Duty: Modern Warfare, los jugadores se sumergen en una narrativa moderna y relevante, donde asumen roles de operadores de fuerzas especiales enfrentándose a una serie de amenazas terroristas globales. La historia está llena de giros emocionantes y momentos impactantes que mantienen a los jugadores al borde de sus asientos.",

    "El multijugador de Call of Duty: Modern Warfare ofrece una experiencia de juego rápida y táctica, con una variedad de modos de juego y mapas diseñados para fomentar la estrategia y el trabajo en equipo. Los jugadores pueden personalizar sus loadouts y desbloquear una amplia gama de armas y equipos para adaptarse a su estilo de juego.",

    "Además, Call of Duty: Modern Warfare presenta el modo cooperativo de Operaciones Especiales, donde los jugadores pueden unirse con amigos para completar misiones desafiantes en una variedad de entornos. Este modo ofrece una experiencia cooperativa emocionante y gratificante que complementa la intensa acción de la campaña y el multijugador."
  ],
  systemRequirements:[
    "SO: Windows 7/10 (64-bit)",
    "Procesador: Intel Core i5-2500K / AMD Ryzen R5 1600X",
    "Memoria: 12 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 970 / GTX 1660 or AMD Radeon R9 390 / RX 580",
    "DirectX: 12",
    "Almacenamiento: 175 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e2",
  name: "Grand Theft Auto San Adreas",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.Wzr8nEGQLRLrPJk1ZUdJPQHaD4?rs=1&pid=ImgDetMain",
    "https://wccftech.com/wp-content/uploads/2021/12/Grand-Theft-Auto-San-Andreas-%E2%80%93-The-Definitive-Edition-scaled.jpg",
  ],
  cover:"https://i11b.3djuegos.com/juegos/1012/grand_theft_auto_san_andreas/fotos/ficha/grand_theft_auto_san_andreas-3785649.jpg",
  videoId: "H4rYVsJ4v9Y",
  price: 30,
  description:[
    "Grand Theft Auto: San Andreas es un videojuego de acción y aventura desarrollado por Rockstar North y publicado por Rockstar Games. Situado en el estado ficticio de San Andreas, el juego sigue la historia de Carl (CJ) Johnson mientras lucha por tomar el control de las calles y desentrañar los misterios detrás del asesinato de su madre.",

    "En Grand Theft Auto: San Andreas, los jugadores se sumergen en un vasto mundo abierto lleno de oportunidades y peligros. Desde las bulliciosas calles de Los Santos hasta los campos rurales de Flint County, San Andreas ofrece un entorno diverso para que los jugadores exploren y disfruten.",

    "La jugabilidad de Grand Theft Auto: San Andreas ofrece una mezcla de acción, conducción, disparos y elementos de RPG. Los jugadores pueden participar en una variedad de actividades, incluidas misiones principales, misiones secundarias, mini-juegos y actividades de mundo abierto mientras avanzan en la historia y construyen la reputación de CJ en la comunidad criminal.",

    "Con su icónica banda sonora, personajes memorables y libertad de juego sin restricciones, Grand Theft Auto: San Andreas ha dejado una marca indeleble en la cultura del videojuego. Es ampliamente considerado como uno de los mejores juegos de la serie y uno de los mejores juegos de mundo abierto de todos los tiempos."
  ],
  systemRequirements:[
    "SO: Windows 2000/XP",
    "Procesador: Intel Pentium 4 o AMD Athlon XP (o procesador superior)",
    "Memoria: 256 MB RAM",
    "Gráficos: Tarjeta gráfica de 64 MB (Geforce 3 o superior)",
    "DirectX: 9.0",
    "Almacenamiento: 3.6 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e3",
  name: "Animal Crossing: New Horizons",
  gamemode: "6647bb759c8f74c7a883b5b4",
  pegi: "664846fda7e41a4b4a090abb",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.lrRCxMRjchSpEOb3dlGyhQEsCo?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.DQpsQwJItvJZSgIpQSgU0gHaE8?rs=1&pid=ImgDetMain",
  ],
  cover:"https://th.bing.com/th/id/OIP.g5ADkUXpfhz-k1lLfzYjqwAAAA?rs=1&pid=ImgDetMain",
  videoId: "u9TY741PSh8",
  price: 60,
  description:[
    "Animal Crossing: New Horizons es un juego de simulación de vida desarrollado y publicado por Nintendo para la consola Nintendo Switch. En este encantador juego, los jugadores se embarcan en una nueva vida en una isla desierta, donde pueden construir, decorar y personalizar su propio paraíso tropical.",

    "En Animal Crossing: New Horizons, los jugadores pueden explorar su isla, recolectar recursos, pescar, atrapar insectos y socializar con los entrañables aldeanos animales que llaman hogar a la isla. El juego se desarrolla en tiempo real, con eventos estacionales y cambios en el clima que reflejan el mundo real.",

    "La jugabilidad de Animal Crossing: New Horizons es relajante y gratificante, con una amplia variedad de actividades para disfrutar y objetivos para alcanzar. Los jugadores pueden personalizar su personaje, su casa y su isla, creando un espacio único que refleje su estilo y personalidad.",

    "Con su estética encantadora, banda sonora relajante y sentido de comunidad, Animal Crossing: New Horizons ha sido un refugio bienvenido para muchos jugadores, especialmente durante tiempos difíciles. Es un juego que fomenta la creatividad, la amistad y la exploración, ofreciendo una escapada virtual a un mundo de tranquilidad y diversión."
  ],
  systemRequirements:[
    "SO: No disponible para Windows (es exclusivo de Nintendo Switch)",
    "Procesador: No disponible para PC",
    "Memoria: No disponible para PC",
    "Gráficos: No disponible para PC",
    "DirectX: No disponible para PC",
    "Almacenamiento: No disponible para PC"
  ],
  },

{
  _id: "664695bacf29fe32661290e4",
  name: "Doom Eternal",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: ["66484bf01593a60f58e0c0a3", "6682b4a56e737adf9e6b0481"],
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.B_ez2BKkakSwe8KlxZq31wHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7",
    "https://www.dsogaming.com/wp-content/uploads/2020/01/Doom-Eternal-new-3.jpg",
  ],
  cover:"https://th.bing.com/th/id/R.f4278cd65095df6435cb4e86d1fa86cd?rik=z%2fJW1Nc10dfTwA&pid=ImgRaw&r=0",
  videoId: "F0tekG2XP_A",
  price: 60,
  description:[
    "Doom Eternal es un juego de disparos en primera persona desarrollado por id Software y publicado por Bethesda Softworks. Es la secuela directa de Doom (2016) y continúa la historia del Doom Slayer mientras lucha contra las fuerzas del infierno que han invadido la Tierra.",

    "En Doom Eternal, los jugadores se enfrentan a hordas de demonios en intensos combates llenos de acción. Con una variedad de armas poderosas y habilidades mejoradas, el Doom Slayer debe abrirse paso a través de niveles intrincados y desafiantes mientras se enfrenta a enemigos cada vez más difíciles.",

    "La jugabilidad de Doom Eternal se centra en el movimiento fluido y la ejecución rápida, fomentando un estilo de juego agresivo y frenético. Los jugadores deben dominar el uso de armas, ataques cuerpo a cuerpo y habilidades de movimiento para sobrevivir a los encuentros y avanzar en la historia.",

    "Con su diseño de niveles ingenioso, banda sonora épica y acción vertiginosa, Doom Eternal ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de disparos de la generación. Es un regreso triunfante para la franquicia Doom, ofreciendo una experiencia que satisfará a los veteranos y atraerá a nuevos jugadores por igual."
  ],
  systemRequirements:[
    "SO: Windows 7/10 (64-bit)",
    "Procesador: Intel Core i5 @ 3.3 GHz / AMD Ryzen 3 @ 3.1 GHz",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 970 (4 GB) / AMD Radeon R9 290 (4 GB)",
    "DirectX: 11",
    "Almacenamiento: 50 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e5",
  name: "GTA Vice City",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.073f31b561a32112470747c4dac0556d?rik=Bo%2fQaqdr7Ghwww&pid=ImgRaw&r=0",
    "https://wallpapercave.com/wp/wp4893166.jpg",
  ],
  cover:"https://th.bing.com/th/id/OIP.5Zy-pog_QbRjALPiBADZugHaLH?rs=1&pid=ImgDetMain",
  videoId: "iP7fIzDH6nY",
  price: 20,
  description:[
    "Grand Theft Auto: Vice City es un videojuego de acción y aventura desarrollado por Rockstar North y publicado por Rockstar Games. Ambientado en la década de 1980 en la ficticia ciudad de Vice City, el juego sigue la historia de Tommy Vercetti, un mafioso recién liberado de la prisión que busca establecerse en el mundo del crimen.",

    "En Grand Theft Auto: Vice City, los jugadores se sumergen en un mundo abierto lleno de acción, corrupción y ambición. Desde las playas soleadas hasta los barrios marginales, Vice City ofrece un entorno diverso para que los jugadores exploren mientras completan misiones, realizan robos y construyen un imperio criminal.",

    "La jugabilidad de Grand Theft Auto: Vice City combina elementos de conducción, disparos, exploración y narrativa no lineal. Los jugadores pueden robar una variedad de vehículos, participar en tiroteos intensos, realizar misiones para una variedad de personajes y sumergirse en la vida nocturna de la ciudad.",

    "Con su vibrante estética de los años 80, banda sonora icónica y personajes memorables, Grand Theft Auto: Vice City ha dejado una huella indeleble en la cultura del videojuego. Es ampliamente considerado como uno de los mejores juegos de la serie y uno de los mejores juegos de mundo abierto de su época."
  ],
  systemRequirements:[
    "SO: Windows 98/2000/XP",
    "Procesador: Intel Pentium IV o AMD Athlon XP",
    "Memoria: 256 MB RAM",
    "Gráficos: Tarjeta gráfica con 32 MB y compatible con DirectX 9.0",
    "DirectX: 9.0",
    "Almacenamiento: 1.5 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e6",
  name: "Halo Infinite",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://i.pinimg.com/originals/c4/7b/4a/c47b4ad92855b3d31c8c20988e5082c1.png",
    "https://th.bing.com/th/id/R.80e54d3d5b1aac307e4acd288df072a3?rik=4oONhUmwfZ6P5Q&pid=ImgRaw&r=0",
  ],
  cover:"https://th.bing.com/th/id/R.580b7703c72ae29faeaa2b3f20bcb00a?rik=PdKnH1uasznnFQ&pid=ImgRaw&r=0",
  videoId: "rFh2i4AlPD4",
  price: 60,
  description:[
    "Halo Infinite es un próximo juego de disparos en primera persona desarrollado por 343 Industries y publicado por Xbox Game Studios. Es la sexta entrega principal de la serie Halo y continúa la historia del Jefe Maestro mientras lucha contra una nueva amenaza en el universo Halo.",

    "En Halo Infinite, los jugadores se embarcarán en una emocionante aventura en un vasto y misterioso anillo de Halo. Con un enfoque en el mundo abierto y la exploración, el juego promete ofrecer una experiencia de juego expansiva y llena de acción que atraerá tanto a los fans veteranos como a los nuevos jugadores.",

    "La jugabilidad de Halo Infinite se basa en los pilares fundamentales de la serie: combate épico, vehículos icónicos y una historia envolvente. Los jugadores enfrentarán a enemigos formidables, desafíos tácticos y momentos emocionantes mientras luchan por salvar la galaxia.",

    "Con su impresionante motor gráfico, mecánicas de juego pulidas y un universo rico en lore, Halo Infinite promete ser una adición épica a la franquicia Halo. Con la esperanza de reinventar la serie y ofrecer una experiencia memorable para los jugadores de todas las edades, Halo Infinite es uno de los juegos más esperados del año."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-4440 / AMD Ryzen 5 2600",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 570",
    "DirectX: 12",
    "Almacenamiento: 50 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e7",
  name: "Assassin's Creed Valhalla",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.32f33c3f26f1044ff2ab5ebda5132b3e?rik=y22MNLr3%2bh9O5w&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.a3edeca9e100b12c07243b324ecdf65a?rik=t7A2GmzqPs4C0Q&pid=ImgRaw&r=0",
  ],
  cover:"https://images-na.ssl-images-amazon.com/images/I/91lmTAVXgHL.jpg",
  videoId: "rKjUAWlbTJk",
  price: 60,
  description:[
   "Assassin's Creed Valhalla es un videojuego de acción y aventura desarrollado por Ubisoft Montreal y publicado por Ubisoft. Ambientado en el siglo IX durante la era vikinga, el juego sigue la historia de Eivor, un guerrero vikingo que lidera su clan en busca de un nuevo hogar en Inglaterra.",

    "En Assassin's Creed Valhalla, los jugadores exploran un vasto mundo abierto lleno de misterios, peligros y oportunidades. Desde las exuberantes tierras de Inglaterra hasta los gélidos fiordos de Noruega, los jugadores vivirán la vida de un vikingo mientras forjan alianzas, saquean asentamientos y luchan por el poder.",

    "La jugabilidad de Assassin's Creed Valhalla combina elementos de acción, exploración y sigilo en un mundo lleno de actividades y desafíos. Los jugadores pueden personalizar a Eivor con una variedad de armas, habilidades y opciones de progresión para adaptarse a su estilo de juego y estrategia preferidos.",

    "Con su impresionante diseño artístico, narrativa envolvente y mecánicas de juego profundas, Assassin's Creed Valhalla ha sido aclamado como uno de los mejores juegos de la serie. Ofrece una experiencia épica que sumerge a los jugadores en la cultura y el conflicto de la era vikinga."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-4460 / AMD Ryzen 3 1200",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 960 / AMD Radeon R9 380",
    "DirectX: 12",
    "Almacenamiento: 50 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e8",
  name: "Resident Evil Village",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: ["6682b48f6e737adf9e6b047f", "6682b4a56e737adf9e6b0481"],
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://www.gamerfocus.co/wp-content/uploads/2021/01/revillage.png",
    "https://cdn.mos.cms.futurecdn.net/zVBKKaVz8rdCGRM7b46voA.jpg",
  ],
  cover:"https://www.residentevil.com/village/ge/assets/images/common/share-gl.png",
  videoId: "dRpXEc-EJow",
  price: 60,
  description:[
    "Resident Evil Village es un videojuego de terror y supervivencia desarrollado y publicado por Capcom. Es la secuela directa de Resident Evil 7: Biohazard y sigue la historia de Ethan Winters mientras se enfrenta a horrores inimaginables en un misterioso pueblo europeo.",

    "En Resident Evil Village, los jugadores se aventuran en un mundo oscuro y peligroso lleno de criaturas grotescas y enemigos aterradores. Desde callejones estrechos hasta castillos siniestros, el juego ofrece una variedad de entornos para explorar mientras los jugadores descubren los secretos ocultos detrás del misterioso pueblo.",

    "La jugabilidad de Resident Evil Village combina elementos de exploración, combate y resolución de acertijos en una experiencia de terror inmersiva. Los jugadores deben usar sus habilidades de supervivencia y su ingenio para enfrentarse a los horrores que acechan en cada esquina y descubrir la verdad detrás de la oscuridad que envuelve al pueblo.",

    "Con su atmósfera inquietante, narrativa envolvente y diseño de nivel intrincado, Resident Evil Village ofrece una experiencia de terror emocionante y desafiante para los fanáticos de la serie. Es un título que cautiva y aterroriza a los jugadores, llevando la franquicia Resident Evil a nuevas alturas de horror y suspenso."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-7500 / AMD Ryzen 3 1200",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 1050 Ti / AMD Radeon RX 560",
    "DirectX: 12",
    "Almacenamiento: 50 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290e9",
  name: "Hades",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484719a7e41a4b4a090abf",
  gender: "6647c2afa55c56098a0045b5",
  theme: "6682b48f6e737adf9e6b047f",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://ninten-switch.com/wp-content/uploads/2022/12/hades-ii-announce-for-the-game-awards-2022.jpg",
    "https://th.bing.com/th/id/R.f093cef64e15b30307f075efcce5c868?rik=SXkbCNjtFutNug&pid=ImgRaw&r=0",
  ],
  cover:"https://assets-prd.ignimgs.com/2020/09/17/hades-button-fin-1600382124693.png",
  videoId: "91t0ha9x0AE",
  price: 25,
  description:[
    "Hades es un roguelike de acción desarrollado y publicado por Supergiant Games. Ambientado en la mitología griega, el juego sigue la historia de Zagreus, el hijo del dios del inframundo, mientras intenta escapar del reino de Hades y alcanzar la superficie para reunirse con su madre, Perséfone.",

    "En Hades, los jugadores exploran una serie de mazmorras generadas proceduralmente, enfrentándose a hordas de enemigos y jefes desafiantes en cada intento de escape. Con un combate fluido y dinámico, los jugadores pueden desbloquear una variedad de armas, habilidades y bendiciones divinas para mejorar sus posibilidades de éxito.",

    "La jugabilidad de Hades se centra en la repetición y la progresión, con cada intento de escape ofreciendo nuevas oportunidades para mejorar y descubrir la historia del juego. A medida que los jugadores interactúan con los personajes del inframundo y toman decisiones en su viaje, se sumergen en una narrativa rica y emocionante.",

    "Con su hermoso arte estilo cómic, banda sonora memorable y mecánicas de juego adictivas, Hades ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos independientes de los últimos años. Es una experiencia única que combina acción, narrativa y desafío de una manera que atrae a jugadores de todas las habilidades."
  ],
  systemRequirements:[
    "SO: Windows 7/8/10 (64-bit)",
    "Procesador: Dual Core a 3.0 GHz",
    "Memoria: 4 GB RAM",
    "Gráficos: DirectX 11 compatible con 1 GB VRAM",
    "DirectX: 11",
    "Almacenamiento: 15 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290ea",
  name: "Among Us",
  gamemode: "667a100a86306cb5cd120f7f",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a1bed62299d1cc5339373",
  theme: "66484c121593a60f58e0c0a7",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://metropolitanmagazine.it/wp-content/uploads/2020/11/among-us-cover-1068x534.jpg",
    "https://images.pushsquare.com/screenshots/119570/large.jpg",
  ],
  cover:"https://errekgamer.com/wp-content/uploads/2021/12/Among-Us-portada.jpg",
  videoId: "9pyYq9lpjls",
  price: 5,
  description:[
  "Among Us es un juego en línea de supervivencia y misterio desarrollado por InnerSloth. Ambientado en una nave espacial, los jugadores asumen roles de tripulantes o impostores. Los tripulantes deben completar tareas y descubrir al impostor, mientras que el impostor debe sabotear la nave y eliminar a los tripulantes sin ser descubierto.",

    "En Among Us, la mecánica principal gira en torno a la comunicación y la deducción. Los jugadores deben discutir entre ellos, acusar a los sospechosos y votar para expulsar al jugador que creen que es el impostor. El juego ofrece una experiencia social única, donde la confianza y la traición juegan un papel crucial en cada partida.",

    "La jugabilidad de Among Us es simple pero adictiva, con partidas rápidas y emocionantes que fomentan la repetición. Con una variedad de mapas y configuraciones personalizables, el juego ofrece una experiencia fresca y emocionante cada vez que se juega.",

    "Con su estilo artístico colorido y su naturaleza accesible, Among Us se ha convertido en un fenómeno cultural, atrayendo a jugadores de todas las edades y habilidades. Es un juego que promueve la cooperación, la astucia y la diversión, creando momentos memorables y situaciones hilarantes en cada partida."
  ],
  systemRequirements:[
    "SO: Windows 7 SP1+",
    "Procesador: SSE2 instruction set support",
    "Memoria: 1 GB RAM",
    "Gráficos: DirectX 10 compatible",
    "DirectX: 10",
    "Almacenamiento: 250 MB"
  ],
  },

{
  _id: "664695bacf29fe32661290eb",
  name: "Ghost of Tsushima",
  gamemode: "667a0f04858fd4b34849958e",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.43In1DavhOep4vNZ25JW4QHaEK?rs=1&pid=ImgDetMain",
    "https://sm.ign.com/ign_br/gallery/g/ghost-of-t/ghost-of-tsushima-gameplay-screenshots-state-of-play_19gh.jpg",
  ],
  cover:"https://noespaisparafrikis.com/wp-content/uploads/2020/07/analisis-ghost-of-tsushima-portada.jpg",
  videoId: "Zbq7BnsQhrw",
  price: 60,
  description:[
    "Ghost of Tsushima es un juego de acción y aventura desarrollado por Sucker Punch Productions y publicado por Sony Interactive Entertainment. Ambientado en el Japón feudal durante la invasión mongol del siglo XIII, el juego sigue la historia de Jin Sakai, un samurái que se convierte en el legendario 'fantasma' para luchar contra los invasores.",

    "En Ghost of Tsushima, los jugadores exploran un vasto mundo abierto lleno de belleza y peligro. Desde exuberantes paisajes naturales hasta campos de batalla devastados por la guerra, Tsushima ofrece un entorno diverso para que los jugadores exploren mientras completan misiones, enfrentan desafíos y forjan su propio camino como guerreros.",

    "La jugabilidad de Ghost of Tsushima combina combate táctico, exploración y narrativa envolvente en una experiencia inmersiva. Los jugadores pueden personalizar las habilidades y el equipo de Jin, utilizando una variedad de armas y tácticas para enfrentarse a los enemigos y desafíos que encuentren en su viaje.",

    "Con su impresionante diseño artístico, banda sonora evocadora y mecánicas de juego sólidas, Ghost of Tsushima ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de la generación. Es una experiencia épica que transporta a los jugadores a un momento y lugar histórico, ofreciendo una aventura emocionante y conmovedora."
  ],
  systemRequirements:[
    "SO: No disponible para Windows (es exclusivo de PlayStation)",
    "Procesador: No disponible para PC",
    "Memoria: No disponible para PC",
    "Gráficos: No disponible para PC",
    "DirectX: No disponible para PC",
    "Almacenamiento: No disponible para PC"
  ],
  },

{
  _id: "664695bacf29fe32661290ec",
  name: "God of War",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.0c2bbbc5d0759d2eceade56658704ae2?rik=jmkk3Uqtutbt0g&riu=http%3a%2f%2fselectstartgames.files.wordpress.com%2f2010%2f05%2fgod-of-war-iii_2010_03-27-10_03.jpg&ehk=fYx47kNNA2EeNShF4C2ofiM4MdWKk9POi7yCPsYCWWU%3d&risl=&pid=ImgRaw&r=0",
    "https://wallpaperaccess.com/full/788582.jpg",
  ],
  cover:"https://assets-prd.ignimgs.com/2022/01/07/god-of-war-1-button-1641590922128.jpg",
  videoId: "-bQyqPr71KY",
  price: 60,
  description:[
    "God of War es un videojuego de acción y aventura desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment. En este juego, los jugadores asumen el papel de Kratos, un guerrero espartano que busca venganza contra los dioses griegos después de que estos le traicionaran.",

    "En God of War, los jugadores se sumergen en un mundo inspirado en la mitología griega, lleno de dioses, monstruos y criaturas legendarias. Utilizando sus habilidades de combate y sus armas, Kratos enfrenta una serie de desafíos y enemigos épicos mientras viaja a través de paisajes impresionantes y peligrosos.",

    "La jugabilidad de God of War combina combate hack and slash con elementos de exploración y resolución de acertijos. Los jugadores pueden desatar devastadores combos y ejecuciones contra sus enemigos, mientras resuelven acertijos ambientales y descubren secretos ocultos en el mundo.",

    "Con su narrativa emocionante, gráficos impresionantes y acción intensa, God of War ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de su género. Es una experiencia épica que cautiva a los jugadores desde el principio hasta el final, dejando una impresión duradera en aquellos que lo juegan."
  ],
  systemRequirements:[
    "SO: No disponible para Windows (es exclusivo de PlayStation)",
    "Procesador: No disponible para PC",
    "Memoria: No disponible para PC",
    "Gráficos: No disponible para PC",
    "DirectX: No disponible para PC",
    "Almacenamiento: No disponible para PC"
  ],
  },

{
  _id: "664695bacf29fe32661290ed",
  name: "Splatoon 2",
  gamemode: "667a100a86306cb5cd120f7f",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a19d75a9c4856b2a85504",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.ufz8A_bwj51_cXuKNGR9fAHaGj?rs=1&pid=ImgDetMain",
    "https://m.media-amazon.com/images/S/aplus-media/sota/e0654109-2c99-43c1-a42b-e431b2ccef43.jpg",
  ],
  cover:"https://th.bing.com/th/id/R.386faff5491962e1ee1d4ce3d281f913?rik=ltHbxq3AxUq5NQ&pid=ImgRaw&r=0",
  videoId: "qN4w5D2tzME",
  price: 60,
  description:[
    "Splatoon 2 es un videojuego de disparos en tercera persona desarrollado y publicado por Nintendo para la consola Nintendo Switch. Es la secuela del exitoso Splatoon y se centra en emocionantes batallas multijugador entre equipos de jugadores, conocidos como Inklings, que pueden transformarse entre formas humanoides y de calamar.",

    "En Splatoon 2, los jugadores se sumergen en coloridas y caóticas batallas de pintura donde el objetivo principal no es eliminar a los oponentes, sino cubrir la mayor parte del terreno con la tinta del equipo. Los Inklings pueden usar una variedad de armas y habilidades especiales para pintar, atacar y moverse por el campo de batalla.",

    "La jugabilidad de Splatoon 2 incluye una variedad de modos multijugador, como Turf War, Tower Control y Rainmaker, así como un modo historia para un jugador que sigue las aventuras del agente 4 en su lucha contra los Octarianos. Además, el juego ofrece eventos y actualizaciones regulares que mantienen fresca la experiencia.",

    "Con su estilo artístico único, mecánicas de juego frescas y vibrante comunidad en línea, Splatoon 2 ha sido aclamado como uno de los mejores juegos multijugador de la consola Nintendo Switch. Es una experiencia divertida y emocionante que atrae a jugadores de todas las edades con su enfoque innovador en el género de disparos."
  ],
  systemRequirements:[
    "SO: No disponible para Windows (es exclusivo de Nintendo Switch)",
    "Procesador: No disponible para PC",
    "Memoria: No disponible para PC",
    "Gráficos: No disponible para PC",
    "DirectX: No disponible para PC",
    "Almacenamiento: No disponible para PC"
  ],
  },

{
  _id: "664695bacf29fe32661290ee",
  name: "Persona 5",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "667a1b39dd02289afc20d218",
  theme: "66484be21593a60f58e0c0a1",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://wallpaperaccess.com/full/2228899.png",
    "https://nintendoeverything.com/wp-content/uploads/sites/1/nggallery/persona-5-scramble-nov-12/p5s-10.jpg",
  ],
  cover:"https://i5.walmartimages.com/asr/0ee378c4-0334-467c-83d5-f3dff13cadb8.506cbe2da96e3db0f4a90d36369b689b.jpeg",
  videoId: "QnDzJ9KzuV4",
  price: 60,
  description:[
    "Persona 5 es un videojuego de rol desarrollado por Atlus y publicado por Sega. Es el sexto título principal de la serie Persona y sigue la historia de un grupo de estudiantes de secundaria en Tokio que se convierten en ladrones fantasma para combatir la corrupción en la sociedad.",

    "En Persona 5, los jugadores asumen el papel del protagonista, conocido como Joker, que se une a un grupo de amigos conocidos como los Phantom Thieves of Hearts. Juntos, exploran mazmorras generadas proceduralmente conocidas como Palacios y luchan contra manifestaciones de la psique distorsionada de los antagonistas.",

    "La jugabilidad de Persona 5 combina elementos de rol tradicionales con simulación de vida diaria y combate por turnos. Los jugadores gestionan su tiempo entre explorar los Palacios, mejorar habilidades sociales y académicas, y establecer relaciones con otros personajes. El juego también presenta una historia compleja y ramificada con múltiples finales.",

    "Con su estilo visual único, banda sonora pegadiza y mecánicas de juego profundas, Persona 5 ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de rol de la generación. Es una experiencia inmersiva que combina una narrativa emocionante con una jugabilidad gratificante, atrayendo a jugadores de todas las edades con su encanto y profundidad."
  ],
  systemRequirements:[
    "SO: Windows 10",
    "Procesador:  Intel Core i7-4790, 3.4 GHz | AMD Ryzen 5 1500X, 3.5 GHz",
    "Memoria: 8 GB de RAM",
    "Gráficos:  Nvidia GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB",
    "DirectX: Versión 11",
    "Almacenamiento: 41 GB "
  ],
  },

{
  _id: "664695bacf29fe32661290ef",
  name: "Final Fantasy VII Remake",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "667a1d74a1f46f310a7c8008",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://i.etsystatic.com/11277520/r/il/d7d838/2924310836/il_fullxfull.2924310836_qle2.jpg",
    "https://cdn.wccftech.com/wp-content/uploads/2019/08/Final-Fantasy-VII-Remake-Sector-8.jpg",
  ],
  cover:"https://gamefaqs.gamespot.com/a/box/8/5/3/746853_front.jpg",
  videoId: "sz9QWTcbXYE",
  price: 60,
  description:[
    "Final Fantasy VII Remake es un juego de rol de acción desarrollado y publicado por Square Enix. Es una reimaginación del clásico juego de rol de 1997, Final Fantasy VII, que sigue la historia del ex-soldado Cloud Strife y su lucha contra la malévola corporación Shinra y el temible Sephiroth.",

    "En Final Fantasy VII Remake, los jugadores exploran la vibrante ciudad de Midgar y sus alrededores, enfrentándose a enemigos en combates en tiempo real y resolviendo acertijos ambientales. El juego presenta un sistema de combate híbrido que combina elementos de acción en tiempo real con mecánicas de juego táctico y estratégico.",

    "La jugabilidad de Final Fantasy VII Remake se centra en la exploración, la narrativa rica y la personalización de personajes. Los jugadores pueden mejorar las habilidades de sus personajes, desbloquear nuevas habilidades y equipar una variedad de armas y equipos para adaptarse a su estilo de juego.",

    "Con su impresionante diseño visual, emocionante banda sonora y una historia épica, Final Fantasy VII Remake ha sido aclamado como una de las mejores reimaginaciones de un clásico de la historia de los videojuegos. Es una experiencia que cautiva a los fans de la serie y atrae a nuevos jugadores con su mundo rico en detalles y personajes memorables."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-3330 / AMD Ryzen 3 1200",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 760 / AMD Radeon R9 280",
    "DirectX: 11",
    "Almacenamiento: 100 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290f0",
  name: "Sekiro: Shadows Die Twice",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://www.mobygames.com/images/covers/l/547415-sekiro-shadows-die-twice-windows-front-cover.jpg",
    "https://gamingbolt.com/wp-content/uploads/2019/03/Sekiro-Shadows-Die-Twice_03.jpg",
  ],
  cover:"https://th.bing.com/th/id/OIP.8hTIlUM1aggT1EneCN4S8wHaJS?rs=1&pid=ImgDetMain",
  videoId: "rXMX4YJ7Lks",
  price: 60,
  description:[
    "Sekiro: Shadows Die Twice es un juego de acción y aventura desarrollado por FromSoftware y publicado por Activision. Ambientado en el Japón feudal del siglo XVI, el juego sigue la historia de un guerrero shinobi conocido como Sekiro, que busca vengar la pérdida de su señor y rescatar a su joven señor secuestrado.",

    "En Sekiro: Shadows Die Twice, los jugadores se enfrentan a desafiantes combates de espada y exploran un mundo oscuro y peligroso lleno de enemigos mortales y jefes intimidantes. El juego presenta un sistema de combate fluido y táctico que requiere precisión, tiempo y habilidad para dominar.",

    "La jugabilidad de Sekiro: Shadows Die Twice se centra en la exploración, el combate y la resolución de acertijos ambientales. Los jugadores pueden utilizar una variedad de habilidades shinobi, herramientas y tácticas furtivas para enfrentarse a sus enemigos y superar los desafíos que encuentren en su camino.",

    "Con su impresionante diseño artístico, mecánicas de juego desafiantes y una narrativa intrigante, Sekiro: Shadows Die Twice ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de la generación. Es una experiencia que pone a prueba la habilidad y la determinación de los jugadores, ofreciendo una satisfacción inigualable cuando se superan sus desafíos."
  ],
  systemRequirements:[
    "SO: Windows 7/8.1/10 (64-bit)",
    "Procesador: Intel Core i3-2100 / AMD FX-6300",
    "Memoria: 4 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 760 / AMD Radeon HD 7950",
    "DirectX: 11",
    "Almacenamiento: 25 GB"
  ],
    typeoffer: "665fcb959953ee0ba1099486",
},

{
  _id: "664695bacf29fe32661290f1",
  name: "Mario Kart 8 Deluxe",
  gamemode: "6647baff9c8f74c7a883b5b0",
  pegi: "664846fda7e41a4b4a090abb",
  gender: "667a4481700ae902f877064f",
  theme: "66484c121593a60f58e0c0a7",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.YT9Yj5HGZyMHPNGHgtuDyQHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.2f883d5279c640e5408b70ed0ff20233?rik=vRvOeoUxB3CzRw&pid=ImgRaw&r=0",
  ],
  cover:"https://external-preview.redd.it/eQDrGAx61Azyz9TARuuDVNrQavH3TSru-EvPZjTbTmU.jpg?auto=webp&s=78c39bb611859451f6332a5fab109d6fd330ec82",
  videoId: "tKlRN2YpxRE",
  price: 60,
  description:[
    "Mario Kart 8 Deluxe es un juego de carreras desarrollado y publicado por Nintendo para la consola Nintendo Switch. Es una versión mejorada y expandida de Mario Kart 8, que incluye todos los DLCs lanzados para el juego original, junto con nuevas características y contenido adicional.",

    "En Mario Kart 8 Deluxe, los jugadores compiten en emocionantes carreras de karts a través de una variedad de pistas coloridas y emocionantes inspiradas en el universo de Mario. Pueden elegir entre una amplia selección de personajes clásicos de Nintendo, cada uno con sus propias habilidades y vehículos únicos.",

    "La jugabilidad de Mario Kart 8 Deluxe es accesible y divertida para jugadores de todas las edades y habilidades. Los jugadores pueden competir en una variedad de modos de juego, incluidos Grand Prix, Batalla, Contrarreloj y Multijugador en línea, ofreciendo una experiencia de juego emocionante y gratificante para todos.",

    "Con su diseño visual encantador, banda sonora pegadiza y mecánicas de juego sólidas, Mario Kart 8 Deluxe es uno de los juegos de carreras más populares y aclamados de la actualidad. Es una experiencia multijugador perfecta para disfrutar con amigos y familiares, ofreciendo diversión sin fin y momentos emocionantes en cada carrera."
  ],
  systemRequirements:[
    "SO: No disponible para Windows (es exclusivo de Nintendo Switch)",
    "Procesador: No disponible para PC",
    "Memoria: No disponible para PC",
    "Gráficos: No disponible para PC",
    "DirectX: No disponible para PC",
    "Almacenamiento: No disponible para PC"
  ],
  },

{
  _id: "664695bacf29fe32661290f2",
  name: "Horizon Zero Dawn",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.d995230ecc0850cdaa55933fe562256e?rik=oG4zP6JMw6On4g&pid=ImgRaw&r=0",
    "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/horizon-zero-dawn-aloy.jpg",
  ],
  cover:"https://th.bing.com/th/id/OIP.1rIAUaR_Wwif2zOaWYhmQwHaJn?rs=1&pid=ImgDetMain",
  videoId: "_BvZvkT5QHw",
  price: 50,
  description:[
    "Horizon Zero Dawn es un juego de acción y aventura desarrollado por Guerrilla Games y publicado por Sony Interactive Entertainment. Ambientado en un mundo post-apocalíptico dominado por máquinas, el juego sigue la historia de Aloy, una joven cazadora en busca de su pasado y del misterio que rodea la desolada Tierra.",

    "En Horizon Zero Dawn, los jugadores exploran un vasto mundo abierto lleno de ruinas antiguas, paisajes deslumbrantes y criaturas mecánicas imponentes. Utilizando un arco, una variedad de armas y tácticas de sigilo, Aloy debe enfrentarse a los desafíos que se presentan en su viaje y descubrir la verdad detrás del cataclismo que asoló el mundo.",

    "La jugabilidad de Horizon Zero Dawn combina combate táctico, exploración y resolución de acertijos en una experiencia inmersiva. Los jugadores pueden utilizar habilidades mejoradas, equipamiento personalizable y la capacidad de hackear y controlar máquinas para superar a sus enemigos y desafíos.",

    "Con su impresionante diseño visual, historia cautivadora y mecánicas de juego sólidas, Horizon Zero Dawn ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de la generación. Es una experiencia épica que transporta a los jugadores a un mundo rico en detalles y peligros, ofreciendo una aventura emocionante y emocional."
  ],
  systemRequirements:[
    "SO: Windows 10 (64-bit)",
    "Procesador: Intel Core i5-2500K / AMD FX 6300",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 780 (3 GB) / AMD Radeon R9 290 (4 GB)",
    "DirectX: 12",
    "Almacenamiento: 100 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290f3",
  name: "Bloodborne",
  gamemode: "667a0facbb334619d489172c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "667a1a826029915da03f68ee",
  theme: "6682b4a56e737adf9e6b0481",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.d436b06aa4f89a4c230a003bb74f404b?rik=mqDhuZRNlrWqkA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.esxlcV6_JUR7vT6sNOfCegHaEK?rs=1&pid=ImgDetMain",
  ],
  cover:"https://th.bing.com/th/id/R.ef5fbd69ae110ee61fc75916cc02d086?rik=fGyCNlg6gKv0Lw&riu=http%3a%2f%2fwww.gamefront.de%2farchiv01-2016-gamefront%2fbloodborne-artbook-01.jpg&ehk=ZJUIl6yOiV1b95WhNvMFJvpwYYWyg%2fikg7Iq10alGhA%3d&risl=&pid=ImgRaw&r=0",
  videoId: "G203e1HhixY",
  price: 20,
  description:[
    "Bloodborne es un juego de acción y rol desarrollado por FromSoftware y publicado por Sony Computer Entertainment. Ambientado en la ciudad gótica de Yharnam, el juego sigue la historia de un cazador en busca de una cura para una misteriosa enfermedad que ha devastado la ciudad y la mente de sus habitantes.",

    "En Bloodborne, los jugadores exploran un mundo oscuro y peligroso lleno de horrores indescriptibles y criaturas grotescas. Utilizando armas de fuego y armas blancas únicas, los cazadores enfrentan combates desafiantes y enfrentan a enemigos formidables mientras descubren los secretos oscuros que acechan en las sombras de la ciudad.",

    "La jugabilidad de Bloodborne se centra en el combate rápido y agresivo, la exploración de entornos intrincados y la resolución de acertijos ambientales. Los jugadores deben aprender a adaptarse a los ataques de los enemigos y utilizar su ingenio para sobrevivir en un mundo lleno de peligros y trampas mortales.",

    "Con su atmósfera inquietante, mecánicas de juego desafiantes y una narrativa intrigante, Bloodborne ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de la generación. Es una experiencia que pone a prueba la habilidad y la determinación de los jugadores, ofreciendo una satisfacción inigualable cuando se superan sus desafíos."
  ],
  systemRequirements:[
    "SO: No disponible para Windows (es exclusivo de PlayStation)",
    "Procesador: No disponible para PC",
    "Memoria: No disponible para PC",
    "Gráficos: No disponible para PC",
    "DirectX: No disponible para PC",
    "Almacenamiento: No disponible para PC"
  ],
    typeoffer: "665fcb959953ee0ba1099486",
},

{
  _id: "664695bacf29fe32661290f4",
  name: "The Elder Scrolls V: Skyrim",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "667a1dc306d8dc892b3f5c66",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.760825390d76627719e0496ca280e2ca?rik=Y1cNSIQ2k46T5w&riu=http%3a%2f%2fportal.zwame.pt%2fwp-content%2fuploads%2f2011%2f08%2felder-scrolls-skyrim.jpg&ehk=RJEBy1gYIWNoyi%2bcIgwEDQtGd0tj07M3gOoG0medQzc%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.b75fbad4c248e4102544878129810059?rik=hFSJ5XUYfaIRJA&riu=http%3a%2f%2fwww.gamepur.com%2ffiles%2fimages%2f2011%2felder-scrolls-v-skyrim-screen.jpg&ehk=mOCiyf3qcyJba%2fcAhOmyBvKdl22%2bOdyeilXW%2flm8tJI%3d&risl=&pid=ImgRaw&r=0",
  ],
  cover:"https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg",
  videoId: "JSRtYpNRoN0",
  price: 40,
  description:[
    "The Elder Scrolls V: Skyrim es un juego de rol de mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. Ambientado en la provincia de Skyrim, el juego sigue la historia del Sangre de Dragón, un personaje que se embarca en un épico viaje para derrotar al dragón Alduin, el devorador del mundo.",

    "En Skyrim, los jugadores exploran un vasto y detallado mundo abierto lleno de ciudades, mazmorras, montañas y vastas llanuras. Pueden unirse a diferentes facciones, realizar misiones secundarias y principales, e interactuar con una amplia variedad de personajes, criaturas y elementos del mundo.",

    "La jugabilidad de Skyrim se centra en la libertad y la personalización, permitiendo a los jugadores crear su propio camino y estilo de juego. Pueden elegir entre una variedad de razas, habilidades y habilidades, y utilizar magia, combate cuerpo a cuerpo o a distancia para enfrentarse a los desafíos que encuentren en su viaje.",

    "Con su mundo rico en detalles, mecánicas de juego profundas y una comunidad de mods activa, Skyrim ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de rol de todos los tiempos. Es una experiencia inmersiva que ofrece horas de juego emocionante y una libertad sin igual para explorar y crear."
  ],
  systemRequirements:[
    "SO: Windows 7/8.1/10 (64-bit)",
    "Procesador: Intel Core i5-750 / AMD Phenom II X4-945",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GTX 470 1GB / AMD HD 7870 2GB",
    "DirectX: 11",
    "Almacenamiento: 12 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290f5",
  name: "Dark Souls III",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://ovicio.com.br/wp-content/uploads/dark_souls_3_bonus_pre_venda_2.jpg",
    "https://i.ytimg.com/vi/jsSQzMyw6yI/maxresdefault.jpg",
  ],
  cover:"https://cdr.cz/sites/default/files/dark_souls_iii_-_image_01.jpg",
  videoId: "cWBwFhUv1-8",
  price: 60,
  description:[
    "Dark Souls III es un juego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. Ambientado en un oscuro y desolado mundo de fantasía, el juego sigue la historia de un no-muerto en su búsqueda para enlazar el fuego y salvar al reino de la maldición de la no-muerte.",

    "En Dark Souls III, los jugadores exploran una vasta y peligrosa tierra llena de enemigos letales, trampas mortales y jefes desafiantes. Utilizando una variedad de armas y habilidades, deben enfrentarse a los horrores que acechan en cada rincón del mundo y descubrir los secretos ocultos detrás de la oscuridad.",

    "La jugabilidad de Dark Souls III se centra en el combate desafiante y táctico, la exploración de entornos intrincados y la resolución de acertijos ambientales. Los jugadores deben aprender a leer los patrones de ataque de los enemigos y a utilizar su ingenio para superar los obstáculos que se interponen en su camino.",

    "Con su atmósfera opresiva, mecánicas de juego desafiantes y una narrativa misteriosa, Dark Souls III ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de la serie. Es una experiencia que pone a prueba la habilidad y la paciencia de los jugadores, ofreciendo una sensación de logro incomparable cuando se superan sus desafíos."
  ],
  systemRequirements:[
    "SO: Windows 7 SP1 / 8.1 / 10 (64-bit)",
    "Procesador: Intel Core i3-2100 / AMD FX-6300",
    "Memoria: 4 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 750 Ti / ATI Radeon HD 7950",
    "DirectX: 11",
    "Almacenamiento: 25 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290f6",
  name: "Celeste",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c041593a60f58e0c0a5",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://gaming-cdn.com/images/products/8003/screenshot/celeste-pc-mac-juego-steam-wallpaper-1.jpg?v=1652434948",
    "https://th.bing.com/th/id/OIP.WXdpNSblE46qS7mEnhyjnAHaEK?rs=1&pid=ImgDetMain",
  ],
  cover:"https://www.laps4.com/wp-content/uploads/2019/02/Celeste-portada.jpg",
  videoId: "iofYDsA2yqg",
  price: 20,
  description:[
    "Celeste es un juego de plataformas desarrollado por Matt Makes Games. En este título, los jugadores asumen el papel de Madeline, una joven que se aventura en la montaña Celeste, enfrentándose a desafíos difíciles y a sus propios miedos internos en un intento por alcanzar la cima.",

    "En Celeste, los jugadores atraviesan una serie de niveles ingeniosamente diseñados llenos de obstáculos mortales, rompecabezas intrincados y secretos ocultos. Utilizando habilidades de salto y escalada, deben sortear cada desafío mientras descubren la historia conmovedora de Madeline y su viaje de autodescubrimiento.",

    "La jugabilidad de Celeste se caracteriza por su precisión y su dificultad gratificante. Aunque el juego puede ser desafiante, ofrece una curva de aprendizaje suave que permite a los jugadores mejorar con cada intento. Además, incluye una amplia variedad de opciones de accesibilidad para adaptarse a diferentes estilos de juego y habilidades.",

    "Con su encantador estilo de arte pixelado, banda sonora evocadora y narrativa emotiva, Celeste ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos independientes de los últimos años. Es una experiencia que desafía tanto a la mente como al corazón, dejando una impresión duradera en aquellos que lo juegan."
  ],
  systemRequirements:[
    "SO: Windows 7 or newer",
    "Procesador: Intel Core i3 M380",
    "Memoria: 2 GB RAM",
    "Gráficos: Integrated GPU",
    "DirectX: Version 10",
    "Almacenamiento: 1200 MB available space"
  ],
  },

{
  _id: "664695bacf29fe32661290f7",
  name: "Control",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "667a1b39dd02289afc20d218",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.fade042a84993703e81bdc14f4a97589?rik=3WqPxCVEMsDF5g&pid=ImgRaw&r=0",
    "https://gamingbolt.com/wp-content/uploads/2019/07/control-image-5.jpeg",
  ],
  cover:"https://gamepreorders.com/wp-content/uploads/2019/03/cover-art-6.jpg",
  videoId: "-oXCMFX9H8g",
  price: 30,
  description:[
    "Control es un juego de acción y aventura desarrollado por Remedy Entertainment y publicado por 505 Games. En este título, los jugadores asumen el papel de Jesse Faden, la nueva Directora del Federal Bureau of Control (FBC), una agencia secreta encargada de investigar fenómenos paranormales.",

    "En Control, los jugadores exploran la misteriosa sede del FBC, conocida como el Edificio Federal, que ha sido invadido por una fuerza sobrenatural conocida como el Plano Astral. Utilizando habilidades sobrenaturales y un arma cambiante llamada el Servicio de Asuntos Públicos, Jesse debe enfrentarse a enemigos desafiantes y descubrir los secretos del Edificio Federal.",

    "La jugabilidad de Control combina combate frenético, exploración y resolución de acertijos en una experiencia inmersiva y atmosférica. Los jugadores pueden mejorar las habilidades de Jesse, desbloquear nuevas habilidades y personalizar su estilo de juego mientras descubren la verdad detrás del misterioso mundo del FBC.",

    "Con su intrigante historia, diseño visual único y mecánicas de juego sólidas, Control ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de su año de lanzamiento. Es una experiencia que desafía la mente y los sentidos, ofreciendo una sensación de misterio y maravilla en cada rincón del Edificio Federal."
  ],
  systemRequirements:[
    "SO: Windows 7/8/10 (64-bit)",
    "Procesador: Intel Core i5-4690 / AMD FX 4350",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 780 / AMD Radeon R9 280X",
    "DirectX: 11",
    "Almacenamiento: 42 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290f8",
  name: "Nier: Automata",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648473ba7e41a4b4a090ac3",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.0e003bc85572c48a87542424a7693a10?rik=JryYjjTo1xCiTA&riu=http%3a%2f%2fwww.godisageek.com%2fwp-content%2fuploads%2fNA_Screenshot_29102915_01_1446129012.jpg&ehk=olRQOQ2%2bEx%2f%2ftozlNktMpSz619de1U73H4IEYqPI%2bSk%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.b8c994de179186865fb2f5c09e3a3bfb?rik=9H3xRGdG44S6hA&riu=http%3a%2f%2fwww.gamersglobal.de%2fsites%2fgamersglobal.de%2ffiles%2fnews%2fteaser%2f803%2fNieR-Automata_201604_SS_2B9SA2_01_ONLINE.jpg&ehk=r7im%2bMBuSZ8SoSm3K8seFvY8%2fq1iBHyRRq9%2fJMZ0jsw%3d&risl=&pid=ImgRaw&r=0",
  ],
  cover:"https://gameday.bg/wp-content/uploads/2020/11/nier-automata-goty-pc-01-600x835.jpg",
  videoId: "wJxNhJ8fjFk",
  price: 40,
  description:[
    "Nier: Automata es un juego de rol de acción desarrollado por PlatinumGames y publicado por Square Enix. Ambientado en un futuro distópico donde la humanidad ha sido expulsada de la Tierra por invasores mecánicos, el juego sigue la historia de androides de combate creados por los humanos para luchar contra las máquinas.",

    "En Nier: Automata, los jugadores asumen el papel de 2B, un androide de combate, y su compañero 9S, mientras exploran un mundo abierto lleno de ruinas y peligros. A través de una combinación de combate de acción fluida y exploración, los jugadores descubren la verdad detrás de la guerra entre androides y máquinas.",

    "La jugabilidad de Nier: Automata combina elementos de rol, acción y hack and slash en una experiencia emocionante y envolvente. Los jugadores pueden mejorar las habilidades de combate de sus personajes, desbloquear nuevas armas y habilidades, y personalizar su estilo de juego mientras luchan por el destino de la humanidad.",

    "Con su emocionante narrativa, diseño de mundo único y banda sonora inolvidable, Nier: Automata ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de su generación. Es una experiencia que desafía las expectativas y emociona a los jugadores con su profunda exploración de temas como la humanidad y la identidad."
  ],
  systemRequirements:[
    "SO: Windows 7/8.1/10 (64-bit)",
    "Procesador: Intel Core i3 2100 o AMD A8-6500",
    "Memoria: 4 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 770 VRAM 2GB o AMD Radeon R9 270X VRAM 2GB",
    "DirectX: 11",
    "Almacenamiento: 50 GB"
  ],
    typeoffer: "665fcb959953ee0ba1099486",
},

{
  _id: "664695bacf29fe32661290f9",
  name: "Monster Hunter: World",
  gamemode: "667a103e1e8e1ad8cc7ffc9c", 
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.3efcd4b5acf08ed17df6ddcb10b9cb4d?rik=DXXxGw0HpHVEmw&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.1873cca7f4ab9d440d072bf1de3bc402?rik=%2fw5E1RwN%2bpodzA&pid=ImgRaw&r=0",
  ],
  cover:"https://1.bp.blogspot.com/-uZ6c1w8RAzw/XkYOeXeJQUI/AAAAAAAADWA/jjwZBulmRTMuMTSFvS61qGbcKsIOZj5jwCLcBGAsYHQ/s1600/monster-hunter-world-cover.jpg",
  videoId: "SE_FnuD9zJc",
  price: 30,
  description:[
   "Monster Hunter: World es un juego de acción y caza desarrollado y publicado por Capcom. Situado en un vasto mundo lleno de monstruos feroces y vida salvaje, el juego sigue la historia de cazadores que buscan desafiar y derrotar a las criaturas más grandes y peligrosas del mundo.",

    "En Monster Hunter: World, los jugadores asumen el papel de un cazador que viaja a través de diferentes regiones del Nuevo Mundo para investigar y enfrentarse a monstruos de todo tipo y tamaño. Utilizando una variedad de armas y tácticas, los jugadores cazan monstruos, recolectan recursos y mejoran su equipo para enfrentarse a desafíos cada vez más grandes.",

    "La jugabilidad de Monster Hunter: World se centra en la caza de monstruos y en la cooperación entre jugadores en partidas multijugador. Los jugadores pueden unirse a otros cazadores en línea para enfrentarse a monstruos más poderosos y obtener recompensas valiosas, fomentando la camaradería y el trabajo en equipo.",

    "Con su impresionante diseño de criaturas, mecánicas de juego profundas y una variedad de contenido para explorar, Monster Hunter: World ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de su género. Es una experiencia emocionante y gratificante que ofrece horas de diversión y emoción para los amantes de la caza de monstruos."
  ],
  systemRequirements:[
    "SO: Windows 7/8/10 (64-bit)",
    "Procesador: Intel Core i5-4460 3.20 GHz o AMD FX-6300",
    "Memoria: 8 GB RAM",
    "Gráficos: NVIDIA GeForce GTX 760 / AMD Radeon R7 260x (2 GB VRAM)",
    "DirectX: 11",
    "Almacenamiento: 48 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290fa",
  name: "Star Wars Jedi: Fallen Order",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484c121593a60f58e0c0a7",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.12149cf708e4cfd86faa5cc201aa8a8d?rik=QcxlZAUZY2BKjA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.47a8d2a9ac8a08ebe0a9fc71979331d5?rik=TYnIIBUq6xPkiQ&riu=http%3a%2f%2fimages.gamersyde.com%2fimage_star_wars_jedi_fallen_order-40409-4090_0001.jpg&ehk=SadaFoPOtsC62DW6AfvOEScIbj6ehL8vdj3xhFjBjvk%3d&risl=&pid=ImgRaw&r=0",
  ],
  cover:"https://i.blogs.es/0f6803/jfo_key_deluxe_rgb/1366_2000.jpeg",
  videoId: "0GLbwkfhYZk",
  price: 60,
  description:[
    "Star Wars Jedi: Fallen Order es un juego de acción y aventura desarrollado por Respawn Entertainment y publicado por Electronic Arts. Ambientado en el universo de Star Wars, el juego sigue la historia de Cal Kestis, un joven padawan que sobrevive a la Orden 66 y busca reconstruir la Orden Jedi mientras lucha contra el Imperio Galáctico.",

    "En Star Wars Jedi: Fallen Order, los jugadores exploran una galaxia vasta y peligrosa mientras siguen la historia de Cal y se enfrentan a enemigos poderosos, incluidos los Inquisidores Sith y bestias mortales. Utilizando la Fuerza y un sable de luz, los jugadores luchan contra el lado oscuro y descubren los secretos de la antigua Orden Jedi.",

    "La jugabilidad de Star Wars Jedi: Fallen Order combina combate de sable de luz, exploración y resolución de acertijos en una experiencia inmersiva. Los jugadores pueden mejorar las habilidades de Cal, desbloquear nuevos poderes de la Fuerza y personalizar su sable de luz mientras recorren mundos icónicos de Star Wars y descubren nuevos lugares.",

    "Con su emocionante narrativa, combate emocionante y fidelidad al universo de Star Wars, Star Wars Jedi: Fallen Order ha sido aclamado por la crítica y los fanáticos como uno de los mejores juegos de Star Wars en años. Es una experiencia que transporta a los jugadores a una galaxia muy, muy lejana, ofreciendo una aventura épica y llena de acción en cada momento."
  ],
  systemRequirements:[
    "SO: Windows 7/8.1/10 (64-bit)",
    "Procesador: AMD FX-6100 / Intel i3-3220 o equivalente",
    "Memoria: 8 GB RAM",
    "Gráficos: AMD Radeon HD 7750 / NVIDIA GeForce GTX 650 o equivalente",
    "DirectX: 11",
    "Almacenamiento: 55 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290fb",
  name: "Cuphead",
  gamemode: "6647bb759c8f74c7a883b5b4",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.95f7f6a9949df6bb0a6ba63bb848cb56?rik=dv0tPererVNnoQ&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.5312d0ce838a39a37a97b609f539a83e?rik=%2fRrJhSKtweOTRw&riu=http%3a%2f%2fcdn.wccftech.com%2fwp-content%2fuploads%2f2017%2f10%2fCuphead-coop.jpg&ehk=6da98lSB4NOPthni6iX0MucodVvrB%2bLm%2f76EWulEuTo%3d&risl=&pid=ImgRaw&r=0",
  ],
  cover:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/ae06dc63-c2dc-4715-a84e-624ca36052b7/dc05jjr-77d2bedb-512e-4d0c-af9c-badf1f85b638.jpg",
  videoId: "NN-9SQXoi50",
  price: 20,
  description:[
    "Cuphead es un juego de plataformas y acción desarrollado por StudioMDHR Entertainment. Inspirado en los clásicos dibujos animados de los años 30, el juego sigue las desventuras de Cuphead y Mugman, dos tazas con forma de taza que deben enfrentarse a una serie de jefes para saldar una deuda con el diablo.",

    "En Cuphead, los jugadores atraviesan una serie de niveles desafiantes llenos de enemigos peculiares y jefes difíciles. Con un estilo artístico único que recuerda a los dibujos animados de la época de la animación dorada, el juego ofrece una experiencia visualmente impresionante y una jugabilidad desafiante.",

    "La jugabilidad de Cuphead se centra en combates intensos y batallas contra jefes que requieren precisión y reflejos rápidos. Los jugadores deben aprender los patrones de ataque de los jefes y dominar las habilidades especiales de Cuphead y Mugman para avanzar a través de los desafíos del juego.",

    "Con su estilo visual distintivo, banda sonora pegadiza y desafíos gratificantes, Cuphead ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos independientes de la última década. Es una experiencia única que captura la esencia de la era dorada de la animación mientras ofrece una jugabilidad desafiante y satisfactoria."
  ],
  systemRequirements:[
    "SO: Windows 7",
    "Procesador: Intel Core2 Duo E8400, 3.0GHz or AMD Athlon 64 X2 6000+, 3.0GHz or better",
    "Memoria: 2 GB RAM",
    "Gráficos: Geforce 9600 GT or AMD HD 3870 512MB or better",
    "DirectX: Version 9.0",
    "Almacenamiento: 20 GB"
  ],
  },

{
  _id: "664695bacf29fe32661290fc",
  name: "Apex Legends",
  gamemode: "667a100a86306cb5cd120f7f",
  pegi: "66484727a7e41a4b4a090ac1",
  gender: "6647c2afa55c56098a0045b5",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/R.9fdcae1b7d5308567ddd3c135da7ea05?rik=cpu35ji0KBgVFA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.w-03ZksivGSXJwHm9FYlJAHaEK?rs=1&pid=ImgDetMain",
  ],
  cover:"https://assets.vg247.com/current/2019/02/apex_legends_main_art_2.jpg",
  videoId: "UMJb_mkqynU",
  price: 0,
  description:[
    "Apex Legends es un juego de disparos en primera persona desarrollado por Respawn Entertainment y publicado por Electronic Arts. Ambientado en el universo Titanfall, el juego se centra en el género de battle royale, donde los jugadores compiten en partidas multijugador para ser el último equipo en pie en un campo de batalla lleno de acción.",

    "En Apex Legends, los jugadores forman equipos de tres personajes únicos, conocidos como leyendas, cada uno con habilidades especiales y roles distintivos. Juntos, los equipos luchan por la supremacía en partidas intensas y rápidas donde la estrategia y la coordinación son clave para la victoria.",

    "La jugabilidad de Apex Legends se destaca por su enfoque en el trabajo en equipo y la verticalidad, con mecánicas de movimiento fluidas y tiroteos emocionantes. Los jugadores pueden utilizar una variedad de armas y equipos para superar a sus oponentes, mientras trabajan juntos para asegurar la victoria para su equipo.",

    "Con su acción frenética, personajes carismáticos y constantes actualizaciones de contenido, Apex Legends ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos de battle royale disponibles. Es una experiencia emocionante y competitiva que ofrece diversión sin fin para jugadores de todos los niveles de habilidad."
  ],
  systemRequirements:[
    "SO: Windows 7/8.1/10 (64-bit)",
    "Procesador: Intel Core i3-6300 3.8GHz / AMD FX-4350 4.2 GHz Quad-Core Processor",
    "Memoria: 6 GB RAM",
    "Gráficos: NVIDIA GeForce GT 640 / Radeon HD 7730",
    "DirectX: 11",
    "Almacenamiento: 22 GB"
  ],
  },

{
  _id: "664695bacf29fe3266129126",
  name: "Hyper Light Drifter",
  gamemode: "6647bb759c8f74c7a883b5b4",
  pegi: "66484719a7e41a4b4a090abf",
  gender: "667a1a826029915da03f68ee",
  theme: "66484bf01593a60f58e0c0a3",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.clWQsys5NU2yZthBg241YAHaEL?rs=1&pid=ImgDetMain",
    "https://steamcdn-a.akamaihd.net/steam/apps/257850/ss_0875859b9cf2db668a658d26c9a783e7765631a5.1920x1080.jpg?t=1500086492",
  ],
  cover:"https://www.mobygames.com/images/covers/l/354283-hyper-light-drifter-playstation-4-front-cover.jpg",
  videoId: "uYZ8mrnb_wg",
  price: 19.99,
  description:[
   "Hyper Light Drifter es un juego de rol y acción desarrollado por Heart Machine. Ambientado en un mundo post-apocalíptico y misterioso, el juego sigue la historia de un Drifter, un guerrero errante en busca de conocimiento y una cura para una enfermedad mortal.",

    "En Hyper Light Drifter, los jugadores exploran un mundo abierto lleno de ruinas antiguas, tecnología avanzada y peligros mortales. Utilizando habilidades de combate ágiles y una variedad de armas únicas, los jugadores luchan contra enemigos desafiantes y resuelven acertijos ambientales mientras desentrañan los secretos del mundo.",

    "La jugabilidad de Hyper Light Drifter se caracteriza por su combate rápido y frenético, su exploración no lineal y su estilo artístico distintivo. Los jugadores pueden mejorar las habilidades de su personaje, desbloquear nuevas armas y descubrir secretos ocultos mientras recorren el mundo del juego.",

    "Con su atmósfera inmersiva, mecánicas de juego gratificantes y narrativa sugerente, Hyper Light Drifter ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos independientes de su año de lanzamiento. Es una experiencia que desafía la mente y los reflejos, ofreciendo una sensación de logro y descubrimiento en cada paso del camino."
  ],
  systemRequirements:[
    "SO: Windows 7/8/10",
    "Procesador: 1.2 GHz processor",
    "Memoria: 4 GB RAM",
    "Gráficos: DirectX 10-compatible graphics card",
    "DirectX: Version 10",
    "Almacenamiento: 2 GB"
  ],
  },

{
  _id: "664695bacf29fe3266129148",
  name: "Hollow Knight",
  gamemode: "667a103e1e8e1ad8cc7ffc9c",
  pegi: "6648470ca7e41a4b4a090abd",
  gender: "667a1a826029915da03f68ee",
  theme: "66484c191593a60f58e0c0a9",
  developer: "6647c8f0d5b0a90daa03fe2d",
  image: [
    "https://th.bing.com/th/id/OIP.iXn2CtE5BDXaIyIuFuvkUwHaEK?w=1500&h=844&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.043f329ea152996a623806c32b946162?rik=NKgelk%2fOl06Gpg&pid=ImgRaw&r=0",
  ],
  cover:"https://th.bing.com/th/id/R.b79bdfea7e63169282d15f70c01cb41f?rik=8KxDkOSOn5Dcdg&pid=ImgRaw&r=0",
  videoId: "yQxwbZsL14Y",
  price: 14.99,
  description:[
    "Hollow Knight es un juego de acción y aventura desarrollado y publicado por Team Cherry. Ambientado en un vasto y misterioso mundo subterráneo, el juego sigue la historia de un pequeño caballero en su viaje para explorar las ruinas de Hallownest, enfrentándose a peligros y desentrañando sus secretos.",

    "En Hollow Knight, los jugadores exploran un laberinto de cavernas, ciudades olvidadas y paisajes oscuros llenos de enemigos desafiantes y misterios por descubrir. Con un estilo de arte dibujado a mano y una banda sonora atmosférica, el juego ofrece una experiencia inmersiva y evocadora.",

    "La jugabilidad de Hollow Knight se centra en la exploración, el combate y la resolución de acertijos en un mundo interconectado y lleno de secretos. Los jugadores pueden mejorar las habilidades de su personaje, adquirir nuevas armas y enfrentarse a jefes épicos mientras desentrañan la historia del reino en ruinas.",

    "Con su encantador diseño visual, mecánicas de juego desafiantes y una narrativa rica en detalles, Hollow Knight ha sido aclamado por la crítica y los jugadores como uno de los mejores juegos independientes de los últimos años. Es una experiencia que cautiva a los jugadores con su mundo rico en atmósfera y su jugabilidad adictiva."
  ],
  systemRequirements:[
    "SO: Windows 7/8/10 (64-bit)",
    "Procesador: Intel Core 2 Duo E5200",
    "Memoria: 4 GB RAM",
    "Gráficos: GeForce 9800GTX+ (1GB)",
    "DirectX: Version 10",
    "Almacenamiento: 9 GB"
  ],
  },
];
await VideoGame.create(videogames); 
console.log("Juegos creados exitosamente");
}

export default seedVideogames
