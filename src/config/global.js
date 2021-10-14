export default {
  global: {
    componenteFormativo: 'Fundamentos del mercado I',
    descripcionCurso:
      'Se inicia el abordaje de las temáticas asociadas al <b>mercado de la moda</b>, las cuales son de vital importancia para el contexto del desarrollo de colecciones, ya que es a través del conocimiento del mercado que es posible conseguir el éxito esperado para los productos de moda.<br><br>Por tales motivos, en este componente formativo se hablará de la <b>investigación de mercados centrada en el sector moda</b> que es el eje de aprendizaje.',
    imagenBannerPrincipal: require('@/assets/curso/inicio.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Investigación de la moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Introducción a la investigación en el mundo de la moda, ¿Qué, por qué y para quién investigar?',
            hash: 't1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Indagar y elegir tema de investigación',
            hash: 't1-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Fuentes de información e investigación: Introducción a las macrotendencias y microtendencias, fuentes de inspiración',
            hash: 't1-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Metodologías para la gestión de la información: <em>coolhunting</em> y <em>cooltsearching</em>, <em>bloggers</em> y <em>trendsetters</em>, comunidades o grupos de consumo, herramientas para cazar tendencias',
            hash: 't1-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Recopilación y análisis de datos: cuaderno de bocetos, técnicas de dibujo, el collage, yuxtaposición deconstrucción, referencias cruzadas, análisis de la investigación, centrarse en elementos claves (<em>moodboards, storyboards, concepbook</em>).',
            hash: 't1-5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo:
              'Estructura y forma de la colección: interpretación del concepto de la colección, cartas de color, formas, texturas, materiales, siluetas, procesos y acabados)',
            hash: 't1-6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo:
              'Comunicación de las ideas: dibujo aplicado al diseño, plantillas, ilustraciones, collage, dibujo de prototipo, composición, tablero de dibujo',
            hash: 't-7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El mercado y sus segmentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Fundamentos de mercadeo: definición de consumidor, usuario, cliente, competencia, mix de mercado, mercado objetivo',
            hash: 't2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Segmentos de mercado, nichos de mercado',
            hash: 't2-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Segmentos emergentes',
            hash: 't2-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'El cliente: estilos, necesidades, características',
            hash: 't2-4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Estrategias de mercadeo, 4p´s del mercado',
            hash: 't2-5',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Anna&Co. (2019, 28 de mayo). ¿Qué-es-un <em>moodboard</em> de que sirve como se hace? | Anna&Co. Anna&Co. ',
      link:
        'https://annaand.co/post/que-es-un-moodboard-de-que-sirve-como-se-hace',
    },
    {
      referencia:
        'Arteneo. (2016, 13 de diciembre). El cuaderno de bocetos de los grandes artistas | Arteneo. Arteneo.Com. ',
      link:
        'https://www.arteneo.com/blog/el-cuaderno-de-bocetos-de-grandes-artistas/',
    },
    {
      referencia:
        'Blog de DSIGNO. (2017, 9 de mayo). El <em>moodboard</em>: qué es y para qué sirve. Dsigno.Es. ',
      link:
        'https://www.dsigno.es/blog/diseno-de-moda/moodboard-que-es-y-para-que-sirve',
    },
    {
      referencia: 'Castaño, P. (s.f.). Paneles de indumentaria - Pinterest. ',
      link: 'https://ar.pinterest.com/castapablo/paneles-de-indumentaria/',
    },
    {
      referencia:
        'Castillo, P. (s.f.). Bases para diseñar una colección de moda: Guía completa con imágenes y ejemplos. Fashion & Illustration. ',
      link:
        'https://fashionandillustration.com/bases-para-disenar-una-coleccion-de-moda/',
    },
    {
      referencia:
        'Céspedes Sáenz, A. (2010). Principios de mercadeo (5a. ed.). Ecoe Ediciones. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/69059?page=76',
    },
    {
      referencia: 'CEIPA. (2011). Fundamentos de Mercadeo.',
    },
    {
      referencia:
        'CIAI Cámara Industrial Argentina de la Indumentaria. (s.f.-a). La Ilustración de Moda. Ciaindumentaria.Com.Ar. ',
      link:
        'http://www.ciaindumentaria.com.ar/plataforma/la-ilustracion-de-moda/',
    },
    {
      referencia:
        'CIAI Cámara Industrial Argentina de la Indumentaria. (s.f.-b). Paneles de tendencia. Ciaindumentaria.Com.Ar. ',
      link:
        'http://www.ciaindumentaria.com.ar/plataforma/paneles-de-tendencia/',
    },
    {
      referencia:
        'Comunicaciones Oui-we. (2014, 17 de mayo). Teorica de diseño de paneles para indumentaria 2014. SlideShare. ',
      link:
        'https://es.slideshare.net/comunionesouiwe/teorica-de-diseode-paneles-para-indumentaria-2014',
    },
    {
      referencia:
        '<em>Coolhunting</em>, cazadores de tendencias. (s.f.). Tribuna Salamanca. ',
      link:
        'https://www.tribunasalamanca.com/blogs/campamento-marketing/posts/coolhunting-cazadores-de-tendencias',
    },
    {
      referencia:
        'Corona, C. (2010). Desarrollo de colecciones de moda en la industria textil [Centro Superior de Diseño de Moda de Madrid]. ',
      link: 'https://issuu.com/corona_baos/docs/thesis',
    },
    {
      referencia: 'Definicion.de. (s.f.-a). Definicion.de. Definicion.De. ',
      link: 'https://definicion.de/sastre/',
    },
    {
      referencia:
        'Definicion.de. (s.f.-b). Definición de recolección de datos - Qué es, Significado y Concepto. Definicion.De. ',
      link: 'https://definicion.de/recoleccion-de-datos/',
    },
    {
      referencia:
        'Durazo, B. (2018). La macrotendencia, uso y función dentro de una empresa de moda. Artículos Técnicos APTT Perú, 40–42. ',
      link:
        'http://apttperu.com/la-macrotendencia-uso-y-funcion-dentro-de-una-empresa-de-moda/',
    },
    {
      referencia:
        'El nuevo Empresario. (2020). Nicho de Mercado. ¿Cómo encontrarlo? ',
      link:
        'https://elnuevoempresario.com/nicho-de-mercado-como-encontrarlo#gs.cnt6n6',
    },
    {
      referencia:
        'Emprende a conciencia. (s.f.). Diseño de Prototipo — Emprende A Conciencia. Emprende a Conciencia. ',
      link: 'https://www.emprendeaconciencia.com/diseno-prototipo',
    },
    {
      referencia:
        'Escuela Superior de Diseño de Barcelona. (2018a, 22 de junio). 5 técnicas de dibujo que han marcado tendencia en el diseño | ESDESIGN. ESDESIG. ',
      link:
        'https://www.esdesignbarcelona.com/int/expertos-diseno/5-tecnicas-de-dibujo-que-han-marcado-tendencia-en-el-diseno',
    },
    {
      referencia:
        'Escuela Superior de Diseño de Barcelona. (2018b, 20 de octubre). ¿Qué es el diseño creativo y como adquirir buenas ideas? | ESDESIGN. ESDESING. ',
      link:
        'https://www.esdesignbarcelona.com/int/expertos-diseno/que-es-el-diseno-creativo-y-como-adquirir-buenas-ideas',
    },
    {
      referencia:
        'ESIC Business Marketing School. (2018). La investigación y análisis de tendencias como nueva aliada en la estrategia. ESIC. ',
      link:
        'https://www.esic.edu/rethink/management/la-investigacion-analisis-tendencias-nueva-aliada-la-estrategia',
    },
    {
      referencia:
        'ESME Escuela de moda y empresa. (s.f.). Los pasos para desarrollar una colección de moda | ESME Escuela de Moda y Empresa. Esme.Es. ',
      link:
        'https://www.esme.es/los-pasos-para-desarrollar-una-coleccion-de-moda/',
    },
    {
      referencia:
        'Estaún, M. (2018). Qué es el <em>Coolhunting</em>: Ventajas, Personajes, Fases y Etapas. Marketing Digital IEBS. ',
      link: 'https://www.iebschool.com/blog/coolhunting-marketing-digital/',
    },
    {
      referencia:
        'Fandom. (s.f.). ¿Que es el proceso creativo? | El Proceso Creativo Wiki | Fandom. ',
      link:
        'https://el-proceso-creativo.fandom.com/es/wiki/¿Que_es_el_proceso_creativo%3F',
    },
    {
      referencia:
        'Fashion Snoops. (s.f.). Bases de datos SENA - Acceso a Fashion Snoop . Sistema de Bibliotecas SENA. ',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https%3A%2F%2Fwww.fashionsnoops.com',
    },
    {
      referencia:
        'Fernández, E. (2017, 31 de mayo). <em>Coolhunting</em>: el poder detrás de las tendencias - INCRENTA - Blog Colombia. Increnta. ',
      link:
        'http://increnta.com/co/blog/coolhunting-el-poder-detras-de-las-tendencias/',
    },
    {
      referencia:
        'Foto news. (2019, 10 de junio). 27 ejemplos de yuxtaposición en la fotografía - Fotocreativo. Fotocreativo.Com. ',
      link: 'https://fotocreativo.com/27-ejemplos-de-yuxtaposicion/',
    },
    {
      referencia:
        'Fradera, G. (s.f.). Tipos de tendencias: macrotendencias y microtendencias | Gemma Fradera. 2018. ',
      link:
        'http://gemmafraderabcn.com/tipos-de-tendencias-macrotendencias-y-microtendencias/',
    },
    {
      referencia:
        'FUDE. (s.f.). Principales técnicas del dibujo artístico | FUDE. Educativo.Net. s ',
      link:
        'https://www.educativo.net/articulos/principales-tecnicas-del-dibujo-artistico-1226.html',
    },
    {
      referencia:
        'Gallegos, Di. (2016). Tendencia y Megatendencia. [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=PAb6BTBW6X4&feature=youtu.be',
    },
    {
      referencia:
        'Girela, J. (2020). Tendencias: qué son, quién las decide y cuánto duran | GQ España. Revista GQ. ',
      link:
        'https://www.revistagq.com/moda/articulo/tendencias-que-son-comos-se-deciden-cuanto-duran',
    },
    {
      referencia:
        'Girela, J. & G. Q Spain. (2020). Qué son las tendencias, quién las decide y cuánto duran | Está to guapo | GQ España. [video]. Youtube. ',
      link: 'https://www.youtube.com/watch?v=y2F71c9Pi_8&feature=youtu.be',
    },
    {
      referencia:
        'Gómez, D. (2010). <em>Coolhunting</em> editorial, buscando tendencias. ',
    },
    {
      referencia:
        'González, S. (s.f.). La importancia del dibujo en el diseño. EADE. Retrieved August 3, 2020, from ',
      link:
        'https://www.eade.es/blog/185-la-importancia-del-dibujo-en-el-diseno',
    },
    {
      referencia:
        'Grose, V. (2013). Merchandising de moda. Editorial Gustavo Gili. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45491?page=68',
    },
    {
      referencia:
        'Guerrero, J. A. (200). Nuevas tecnologías aplicadas a la moda: diseño, producción, marketing y comunicación. Parramón. ',
    },
    {
      referencia:
        'Hernández, R., Fernández, C., & Baptista, P. (2014). Metodología de la investigación. In Journal of Chemical Information and Modeling (Vol. 53, Issue 9). ',
      link: 'https://doi.org/10.1017/CBO9781107415324.004',
    },
    {
      referencia:
        'Hiebaum, K. (2017, 29 de noviembre). Comunicación, expresión y lenguaje • GestioPolis. Gestiopolis. ',
      link: 'https://www.gestiopolis.com/comunicacion-expresion-lenguaje/',
    },
    {
      referencia:
        'López, V. (s.f.). Taller de <em>coolhunting</em>. Academia.Edu, 26. ',
      link:
        'https://www.academia.edu/36524596/Taller_de_coolhunting_Cazadores_de_tendencias',
    },
    {
      referencia:
        'Manterola, C. & Tamara Otzen, H. (2013). Por qué investigar y cómo conducir una investigación. International Journal of Morphology, 31(4), 1498–1504. ',
      link: 'https://doi.org/10.4067/S0717-95022013000400056',
    },
    {
      referencia:
        'Marin, C. & Telas Lafayette. (2017). ¿Qué es una macrotendencia?. ',
      link: 'https://www.youtube.com/watch?v=ZL4H8EYoRUo&feature=youtu.be',
    },
    {
      referencia:
        'Massarik. (2018). Cómo ELEGIR y DELIMITAR el TEMA (PROYECTO DE INVESTIGACIÓN). ',
      link: 'https://www.youtube.com/watch?v=zsqemeClPqQ',
    },
    {
      referencia:
        'Martorell, N. (2020). Qué son y para qué sirven las 4 Ps y 7 Ps del Marketing Mix. ',
      link: 'https://noeliamartorell.com/marketing-mix/',
    },
    {
      referencia:
        'Massarik. (2020). QUÉ SON LAS FUENTES DE INFORMACIÓN PRIMARIAS EN UNA INVESTIGACIÓN DOCUMENTAL',
      link: 'https://www.youtube.com/watch?v=SWCeVdlYnDA',
    },
    {
      referencia:
        'Martínez, G. (2018). Marketing y comunicación de moda. ESIC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/123405?page=104',
    },
    {
      referencia:
        'Mc Graw Hill. Unidad 2. Los consumidores, clientes y usuarios. ',
      link: 'https://www.mheducation.es/bcv/guide/capitulo/8448175840.pdf',
    },
    {
      referencia:
        'Melo, S. (2018, 29 de marzo). Los diferentes métodos de recopilación de datos | DataScope. DataScope. ',
      link:
        'https://mydatascope.com/blog/es/2018/03/29/conoce-los-diferentes-metodos-de-recopilacion-de-datos/',
    },
    {
      referencia:
        'Mendoza, N. (2017). Macrotendencias: direccionando a la moda y los negocios en el contexto mundial. Business a La Mode. ',
      link:
        'https://www.businessalamode.com/post/2017/09/08/macrotendencias-direccionando-a-la-moda-y-los-negocios-en-el-contexto-mundial',
    },
    {
      referencia:
        'Montalvo, L. (s.f.). Ilustraciones de diseño de moda - Pinterest. Pinterest. ',
      link:
        'https://www.pinterest.es/lauramontalvope/ilustraciones-de-diseño-de-moda/',
    },
    {
      referencia:
        'NEXTLAB institute. (01 20-21). Informe de tendencias Lafayette. ',
      link: 'https://nextlab.lafayette.com/',
    },
    {
      referencia:
        'Pasalapágina. (s.f.). Bases de datos acceso a Pasalapágina. Sistema de Bibliotecas SENA. ',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=http%3A%2F%2Fpasalapagina.com%2Fhome-sena.html',
    },
    {
      referencia:
        'Pinterest. (s.f.). Plantillas - Templates - Figurines - Pinterest.Retrieved August 3, 2020, ',
      link:
        'https://www.pinterest.es/figurinesdemoda/plantillas-templates-figurines/',
    },
    {
      referencia:
        'Posner, H. (2015). Marketing de moda (2a. ed.). Editorial Gustavo Gili.',
      link: 'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/',
    },
    {
      referencia:
        'QuestionPro. (s.f.-a). Análisis de Datos | QuestionPro. QuestionPro. ',
      link: 'https://www.questionpro.com/es/analisis-de-datos.html',
    },
    {
      referencia:
        'QuestionPro. (s.f.-b). Investigación de Campo. QuestionPro. ',
      link: 'https://www.questionpro.com/es/investigacion-de-campo.html',
    },
    {
      referencia:
        'Ras, J. (2015, 26 de marzo). ¿Quieres prototipar? Crea, dibuja, haz, prueba... ¡y vuelve a empezar! Sdli Sociedad de La Innovación. ',
      link:
        'https://www.sociedaddelainnovacion.es/quieres-prototipar-crea-dibuja-haz-prueba-y-vuelve-a-empezar/',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). DRAE | Diccionario de la lengua española | Edición del Tricentenario | RAE - ASALE. ',
      link: 'https://dle.rae.es/',
    },
    {
      referencia:
        'Roselló, E. (s.f.). ¿Cómo son las tendencias? El tamaño importa un poco, pero solo a veces - ELISABET ROSELLÓ. Elisabetrosello. ',
      link:
        'http://elisabetrosello.com/como-son-las-tendencias-el-tamano-importa-un-poco-pero-solo-a-veces/',
    },
    {
      referencia:
        'Santiago. (2020, 8 de junio). ¿Cuáles Son las Diferentes Técnicas para Dibujar? Superprof. ',
      link:
        'https://www.superprof.co/blog/aprender-a-dibujar-que-especialidad/',
    },
    {
      referencia:
        'Seivewright, S. (2013). Diseño e investigación (2ª. ed.). Editorial Gustavo Gili.',
    },
    {
      referencia:
        'SENA. (s.f.). Sistema de Bibliotecas. Biblioteca.Sena.Edu.Co. ',
      link: 'http://biblioteca.sena.edu.co/paginas/bases.html',
    },
    {
      referencia:
        'Silvestrini, M. & Vargas, J. (2008). Fuentes de información primarias, secundarias y terciarias. Fuentes de Información, 1–8. ',
      link: 'http://ponce.inter.edu/cai/manuales/FUENTES-PRIMARIA.pdf',
    },
    {
      referencia:
        'Skotnicka, I. (2013). <em>Coolhunting</em>, o cómo entender y cazar las tendencias. Emotools, 1–3. ',
      link:
        'http://www.emotools.com/contents/articulos-y-blogs/ines-skotnicka-coolhunting-o-como-entender-y-cazar/',
    },
    {
      referencia:
        'Tutoriales con la Miss. (2018, 28 noviembre). ¿Cómo definir el concepto de una colección de moda?. ',
      link: 'https://www.youtube.com/watch?v=fkjgvkujtpk&feature=youtu.be',
    },
    {
      referencia: 'Wikipedia. (s.f.-a). <em>Coolhunting</em>. Wikipedia',
      link:
        'http://queesunpersonalshopper.com/2015/09/09/quien-es-quien-en-el-mundo-de-la-moda-2-coolhunter/',
    },
    {
      referencia:
        'Wikipedia. (s.f.-b). Wikipedia, la enciclopedia libre. Wikipedia. ',
      link: 'https://es.wikipedia.org/wiki/Código_de_vestimenta',
    },
  ],
  glosario: [
    {
      termino: 'Análisis',
      significado:
        '1. m. Distinción y separación de las partes de algo para conocer su composición. 2. m. Estudio detallado de algo, especialmente de una obra o de un escrito. (Real Academia Española, s.f.).<br>Consiste en identificar los componentes de un todo, separarlos y examinarlos para lograr acceder a sus principios más elementales. (Definicion.de, s.f.-a).',
    },
    {
      termino: 'Análisis cualitativo',
      significado:
        '1. m. Quím. Análisis que tiene por objeto identificar los componentes de una sustancia. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Análisis cuantitativo',
      significado:
        '1. m. Quím. Análisis que se emplea para determinar la cantidad de cada elemento o ingrediente en una sustancia. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Canales',
      significado:
        'Se denomina canal de distribución al camino seguido en el proceso de comercialización de un producto desde el fabricante hasta el usuario industrial o consumidor final.',
    },
    {
      termino: 'Cliente',
      significado:
        'Un cliente (del Latín cliens, -entis) es la persona o empresa receptora de un bien, servicio, producto o idea, a cambio de dinero u otro artículo de valor.',
    },
    {
      termino: 'Colección',
      significado: `1.f. Conjunto ordenado de cosas, por lo común de una misma clase y reunidas por su especial interés o valor. Colección de escritos, de medallas, de mapas.
      <br>4. f. Conjunto de las creaciones que presenta un diseñador de moda para una temporada. Colección primavera-verano. (Real Academia Española, s.f.).
      `,
    },
    {
      termino: 'Comportamiento',
      significado:
        'Es el estudio del comportamiento que los consumidores muestran al buscar, comprar, utilizar, evaluar y desechar los productos y servicios que, consideran, satisfarán sus necesidades. Se enfoca en la forma que los individuos toman decisiones para gastar sus recursos disponibles (tiempo, dinero y esfuerzo) en artículos relacionados con el consumo.',
    },
    {
      termino: 'Comunicación',
      significado: `2. f. Trato, correspondencia entre dos o más personas.
      <br>3. f. Transmisión de señales mediante un código común al emisor y al receptor. (Real Academia Española, s.f.).
      <br>“Compartir algo, poner en común”. Por lo tanto, la comunicación es un fenómeno inherente a la relación que los seres vivos mantienen cuando se encuentran en grupo. A través de la comunicación, las personas o animales obtienen información respecto a su entorno y pueden compartirla con el resto. (Definicion.de, s.f.).
      `,
    },
    {
      termino: 'Consumidor',
      significado: `En economía, un consumidor es una persona u organización que demanda bienes o servicios a cambio de dinero proporcionados por el productor o el proveedor de bienes o servicios. Es decir, es un agente económico con una serie de necesidades. También se define como aquel que consume o compra productos para el consumo; es por tanto el actor final de diversas transacciones productivas.`,
    },
    {
      termino: 'Distribución  ',
      significado: `Es aquel conjunto de actividades, que se realizan desde que el producto ha sido elaborado por el fabricante hasta que ha sido comprado. La distribución de productos de marca, puede llegar a una relación ruin e insana entre proveedor y distribuidor pudiendo generar controversia dentro de la empresa, que tiene por objeto precisamente hacer llegar el producto (bien o servicio) hasta el consumidor, de cualquier forma a cualquier precio y desprestigiando la marca que representa en la mayoría de los casos pudiendo incluso interponerse entre el fabricante y consumidor final.`,
    },
    {
      termino: 'Emergentes',
      significado: `Emergente puede referirse a:
      <br>●	Emergente, un sistema cuyas propiedades o procesos no son reducibles a las de sus partes constituyentes.
      <br>●	País emergente, aquel cuya economía aún no alcanza el estatus de desarrollada, pero ha avanzado más que sus competidores del mundo en desarrollo.
      <br>●	Economía emergente, un término macroeconómico.
      <br>●	Compañía emergente, negocio de limitada historia y grandes posibilidades de crecimiento.
      `,
    },
    {
      termino: 'Escaparatismo',
      significado:
        'Desarrollado por los escaparatistas, como conjunto de técnicas aplicadas al diseño y montaje de vitrinas y escaparates.',
    },
    {
      termino: 'Esencia',
      significado:
        'Es aquello invariable y permanente que constituye la naturaleza de las cosas. El término proviene del latín essentia, que a su vez deriva de un concepto griego. Se trata de una noción que hace referencia a lo característico y más importante de una cosa. (Definicion.de, s.f.).',
    },
    {
      termino: 'Estilismo',
      significado:
        '2. m. En el mundo de la moda y de la decoración especialmente, actividad profesional que se ocupa del estilo y de la imagen. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Estrategia',
      significado:
        'Es el elemento que define y encuadra las líneas maestras de comunicación y comercialización de la empresa, para aprovechar las oportunidades del mercado.',
    },
    {
      termino: 'Expresión',
      significado: `2. f. Especificación, declaración de algo para darlo a entender. (Real Academia Española, s.f.).
      <br>Del latín expressio, una expresión es una declaración de algo para darlo a entender. Puede tratarse de una locución, un gesto o un movimiento corporal. La expresión permite exteriorizar sentimientos o ideas: cuando el acto de expresar trasciende la intimidad del sujeto, se convierte en un mensaje que el emisor transmite a un receptor. (Definicion.de, s.f.) 
      `,
    },
    {
      termino: 'Fuente de Inspiración',
      significado: `7. f. Principio, fundamento u origen de algo.
      <br>8. f. Persona o cosa que proporciona información. (Real Academia Española, s.f.). 
      <br>d (=raíz) material, obra o autor que provee información. (Diccionario.reverso.net).
      `,
    },
    {
      termino: 'Hábitos',
      significado:
        'Es la acción y efecto de consumir o gastar, sean productos, bienes o servicios, como por ejemplo la energía, entendiendo por consumir, como el hecho de utilizar estos productos y servicios para satisfacer necesidades primarias y secundarias.',
    },
    {
      termino: 'Indagar',
      significado: `1.tr. Intentar averiguar algo discurriendo o con preguntas. (Real Academia Española, s.f.). 
      <br>Verbo que procede de la lengua latina (indagāre). El término se utiliza para nombrar a la intención de conocer algo a través de una investigación o mediante preguntas. (Definicion.de, s.f.).
      `,
    },
    {
      termino: 'Individualidad',
      significado:
        '1. f. Cualidad particular de alguien o algo, por la cual se da a conocer o se señala singularmente. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Innovación',
      significado:
        '2. f. Creación o modificación de un producto, y su introducción en un mercado. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Inspiración',
      significado:
        'Del latín inspiratĭo, la inspiración es el proceso o el resultado de inspirarse o inspirar (hacer que el aire del exterior ingrese a los pulmones, impulsar pensamientos en la mente). Hace referencia a la iluminación que una divinidad o una fuerza sobrenatural aporta a una persona. La inspiración está vinculada al estímulo espontáneo que surge en el interior de un artista o creativo. La inspiración no aparece por esfuerzo o voluntad; por lo tanto, se diferencia del trabajo o del entrenamiento. (Definicion.de, s.f.).',
    },
    {
      termino: 'Investigación',
      significado: `1.f. Investigación que tiene por fin ampliar el conocimiento científico, sin perseguir, en principio, ninguna aplicación práctica. (Real Academia Española, s.f.).
      <br>(vocablo que tiene su origen en el latín investigare), este verbo se refiere al acto de llevar a cabo estrategias para descubrir algo. También permite hacer mención al conjunto de actividades de índole intelectual y experimental de carácter sistemático, con la intención de incrementar los conocimientos sobre un determinado asunto. (Definicion.de, s.f.).
      `,
    },
    {
      termino: 'Macrotendencia',
      significado:
        'Cuando una tendencia es adoptada por un colectivo muy reducido. O dura un poco más que una moda. (Roselló, s.f.).',
    },
    {
      termino: 'Mentalidades',
      significado:
        'Este término se ha usado desde principios del siglo XX para la representación de la cultura y estructuras sociales que los individuos de una determinada sociedad tienen sobre el mundo social. Su estudio parte de la historiografía moderna ha sido llamado también historia de la sensibilidad y abarca todas las expresiones de vida cotidiana como complemento del estudio de la macro-historia.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Acción de mercadear. Conjunto de operaciones por las que ha de pasar una mercancía del productor al consumidor.',
    },
    {
      termino: 'Mercado',
      significado:
        'En economía, un mercado es un conjunto de transacciones de procesos o intercambio de bienes o servicios entre individuos.',
    },
    {
      termino: 'Metodología',
      significado: `1. f. Ciencia del método.
      <br>2. f. Conjunto de métodos que se siguen en una investigación científica o en una exposición doctrinal. (Real Academia Española, s.f.).
      <br>Vocablo generado a partir de tres palabras de origen griego:metà (“más allá”), odòs (“camino”) y logos (“estudio”). El concepto hace referencia al plan de investigación que permite cumplir ciertos objetivos en el marco de una ciencia. (Definicion.de, s.f.)
      `,
    },
    {
      termino: 'Microtendencia',
      significado:
        'Lleva poco tiempo de existencia (unas pocas semanas o meses) como para confirmar que es eso, una tendencia pequeña sin más. (Roselló, s.f.)',
    },
    {
      termino: 'Mix de mercadeo',
      significado:
        'Se denomina mezcla de mercadotecnia o mix comercial (conocido en el mundo como marketing mix) a las herramientas o variables de las que dispone el responsable de la mercadotecnia para cumplir con los objetivos de la compañía. Son las estrategias de marketing, o esfuerzo de mercadotecnia y deben incluirse en el plan de marketing (plan 0c). La empresa usa esta estrategia cuando busca acaparar mayor clientela. Y por eso se lo considera importante. Como la rama más esencial.',
    },
    {
      termino: 'Nicho de mercado',
      significado:
        'Es un término de mercadotecnia utilizado para referirse a una porción de un segmento de mercado en la que los individuos poseen características y necesidades homogéneas, y estas últimas no están del todo cubiertas por la oferta general del mercado.',
    },
    {
      termino: 'Plantilla',
      significado: `Una plantilla o dispositivo de interfaz, suele proporcionar una separación entre la forma o estructura y el contenido. Es un medio o aparato o sistema, que permite guiar, portar, o construir, un diseño o esquema predefinido.
      <br>Una plantilla agiliza el trabajo de reproducción o de muchas copias idénticas o casi idénticas (que no tiene que ser tan elaborado, sofisticado o personal). Si se utilizan plantillas en todos los terrenos de la industria y la tecnología. Una plantilla puede servir como muestra base de una diversidad sobre la que comparten elementos comunes (patrón) y que en sí es lo que constituye la plantilla.
      <br>En relación con la edición o composición de textos o imágenes, se compone de cajas y líneas, con unos tamaños y márgenes, para facilitar la escritura de artículos o cartas, con títulos, fotos y diagramas. (Wikipedia, s.f.-b)
      `,
    },
    {
      termino: 'Proceso creativo',
      significado:
        'Se refiere a las fases que se deben seguir para la aplicación de la creatividad y la generación de ideas entorno a un reto o un problema a resolver. (Fandom, s.f.)',
    },
    {
      termino: 'Segmento de mercado',
      significado:
        'Como su propio nombre indica, se trata de identificar segmentos de [Mercado (Marketing)(mercado)] o grupos uniformes más pequeños, pues la segmentación de un mercado en muchos mercados se puede asociar, de acuerdo a sus características o variables que puedan influir en su comportamiento de compra.',
    },
    {
      termino: 'Tema',
      significado: `9. m. Ling. Parte de un enunciado que presenta cierta información como conocida, por oposición al rema. (Real Academia Española, s.f.).
      <br>Es la cuestión que capta la atención de los científicos al realizar un trabajo de campo. (Definicion.de, s.f.)
      `,
    },
    {
      termino: 'Transacción',
      significado:
        'Una transacción financiera es un acuerdo, comunicación o movimiento llevado a cabo entre un comprador y un vendedor en la que se intercambian un activo contra un pago. Implica un cambio en el estatus en las finanzas de dos o más negocios o individuos. El comprador y el vendedor son entidades u objetos separados, que generalmente intercambian productos de valor, como información, bienes, servicios o dinero. Seguiría siendo una transacción el intercambio de bienes en un momento dado y del dinero en otro diferente. Este tipo de operación se conoce como una transacción de dos partes, siendo la primera parte la entrega de dinero y la parte segunda la recepción de bienes.',
    },
    {
      termino: 'Usuario',
      significado:
        'Persona que usa habitualmente un servicio. "Los usuarios de los transportes públicos".',
    },
  ],
  complementario: [
    {
      texto:
        'Manterola & Tamara Otzen, (2013) Por qué investigar y cómo conducir una investigación.',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo B_U1_Por_ que_Investigar_y_Como_Conducir_una_Investigacion.pdf',
    },
    {
      texto:
        'Durazo, (2018), La macrotendencia, uso y función dentro de una empresa de moda',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_H_U1_LaMacrotendeciaUsoYFuncion.pdf',
    },
    {
      texto: 'López, (s.f.), Taller de <em>Coolhunting</em>',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo_W_U1Taller_de_coolhunting_Cazadores_de_tende.pdf',
    },
    {
      texto:
        ' Skotnicka, (2013), <em>Coolhunting</em>, o cómo entender y cazar las tendencias',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo_V_U1Taller_de_coolhunting_Cazadores_de_tende.pdf',
    },
    {
      texto:
        'Comunicaciones Oui-we, (2014), Teórica de diseño de paneles para indumentaria 2014.',
      tipo: 'PDF',
      descarga:
        'downloads/Anexo SS_U1_TeoricaDeDiseñoDePanelesParaIndumentaria2014.pdf',
    },
    {
      texto:
        'Zapata, O, (2005), ¿Cómo encontrar un tema y construir un tema de investigación?',
      tipo: 'PDF',
      descarga: '/downloads/ComoEncontrarUnTemaZapataOscar.pdf',
    },
    {
      texto:
        'Iglesias, J, (2015). El papel de las marcas de moda en la construcción de la identidad personal.',
      tipo: 'PDF',
      descarga:
        '/downloads/ElPapelDeLasMarcasDeModaEnLaConstruccionDeIdentidadPersonal.pdf',
    },
    {
      texto:
        'Silvestrini, M.,(2008), Fuentes de información primarias, secundarias y terciarias.',
      tipo: 'PDF',
      descarga: '/downloads/FuentesDeInformacion.pdf',
    },
    {
      texto: '(s.f.), El storyboard o guion gráfico.',
      tipo: 'PDF',
      descarga: '/downloads/StoryBoard.pdf',
    },
    {
      texto: 'Comunicación, expresión y lenguaje • GestioPolis (Hiebaum, 2017)',
      tipo: 'PDF',
      link: 'https://www.gestiopolis.com/comunicacion-expresion-lenguaje/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
