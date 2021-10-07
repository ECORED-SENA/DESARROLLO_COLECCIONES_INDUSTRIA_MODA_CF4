<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-0
    .px-4.pt-4.px-md-5.pt-md-5

      .titulo-principal
        .titulo-principal__numero
          span 1
        h1 Investigación de la moda

      figure.tarjeta.mb-5
        img(src='@/assets/curso/t1-01.jpg')

      .row.justify-content-center
        .col-md-8.mb-4.mb-md-0
          p.eb La investigación de moda, desde su definición, se constituye en parte 
            b importante 
            | del 
            b proceso 
            | creativo. 
          p.eb Desde su comienzo como fuente de inspiración, procesando información en cada etapa y llevándola a lo relevante y necesario para realizar una colección de productos indumentarios, a través de 
            b herramientas de interpretación visual
            |, teniendo siempre en cuenta a quién va dirigida, con información original y de primera mano, validando el proceso con preguntas y elementos clave y concretando el concepto claro, se llevará a la materialización del producto. Lo que le permite al diseñador de modas que todos los productos de la colección 
            b hablen el mismo lenguaje y se enfoquen en el concepto desarrollado.
        .col-md
          img(src='@/assets/curso/t1-02.svg')

      Separador

      #t1-1.titulo-segundo
        h2 1.1 Introducción a la investigación en el mundo de la moda, ¿Qué, por qué y para quién investigar?

    .row
      .col-lg.p-0.mb-2.mb-lg-0
        .card-color.color-1
          .card-color__header
            img(src='@/assets/curso/t1-03.svg')
          .card-color__content.px-4.pb-3.pt-4
            .pt-3
            p.mb-0.text-center.text-small La investigación hace parte 
              b fundamental 
              | de cualquier proceso creativo, pues es fuente de inspiración e información.
      .col-lg.p-0.mb-2.mb-lg-0
        .card-color.color-2
          .card-color__header
            img(src='@/assets/curso/t1-04.svg')
          .card-color__content.px-4.pb-3.pt-4
            .pt-3
            p.mb-0.text-center.text-small Su principal objetivo es la 
              b solución de problemas prácticos. 
      .col-lg.p-0.mb-2.mb-lg-0
        .card-color.color-3
          .card-color__header
            img(src='@/assets/curso/t1-05.svg')
          .card-color__content.px-4.pb-3.pt-4
            .pt-3
            p.mb-0.text-center.text-small Es un proceso experimental, que conlleva diferentes etapas, las cuales son imprescindibles si se quiere llegar a un resultado exitoso.
      .col-lg.p-0.mb-2.mb-lg-0
        .card-color.color-4
          .card-color__header
            img(src='@/assets/curso/t1-06.svg')
          .card-color__content.px-4.pb-3.pt-4
            .pt-3
            p.mb-0.text-center.text-small En el caso de la investigación de moda, el 
              b enfoque 
              | va 
              b dirigido hacia la inspiración visual de la colección
              | , el tema, el Mood, los materiales e insumos a trabajar, siempre teniendo como eje central al consumidor.
      .col-lg.p-0
        .card-color.color-5
          .card-color__header
            img(src='@/assets/curso/t1-07.svg')
          .card-color__content.px-4.pb-3.pt-4
            .pt-3
            p.mb-0.text-center.text-small Es decir, se investigan los posibles cambios que se estén presentando en las sociedades, los temas emergentes, las tendencias, las influencias externas hacia el mundo de la moda, con el fin de crear 
              b nuevas colecciones 
              | acordes con el contexto y el usuario final al momento de su lanzamiento.
    .row.mb-5
      .col.p-0
        .py-1.tarjeta--gris
          p.mb-0.text-center.text-small (Manterola & Tamara, O. 2013; Seivewright. 2013).

    .px-4.pb-4.px-md-5.pb-md-5
      .row.justify-content-center
        .col-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/t1-08.svg')
        .col-md
          p Revise los siguientes contenidos para profundizar sobre la investigación de moda:

          .tarjeta.color-primario.p-3.mb-4
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2
                img(src='@/assets/curso/t1-09.svg' style="max-width: 80px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0.text-center Página web. Investigación de campo
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(href="https://www.questionpro.com/es/investigacion-de-campo.html" target="_blank")
                      span Ver más
                      i.fas.fa-link
          .text-center
            a.anexo.d-inline-block(:href="obtenerLink('/downloads/Anexo B_U1_Por_ que_Investigar_y_Como_Conducir_una_Investigacion.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.text-small
                  b Artículo. 
                  | Porqué Investigar y cómo conducir una Investigación

      Separador

      #t1-2.titulo-segundo
        h2 1.2 Indagar y elegir tema de investigación

      .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0.p-0
            img(src='@/assets/curso/t1-10.jpg')
          .col-lg-8.p-0
            .bloque-texto-a__texto.p-4
              p.mb-3.eb Las ideas o iniciativas de investigación surgen de la necesidad de 
                b ahondar sobre un tema 
                | del cual no se tiene el suficiente conocimiento o se desea ampliar su nivel de profundidad. Al elegir el tema se debe 
                b indagar 
                | un poco sobre:
              
              ul.lista-ul
                li.eb
                  b.me-2
                    i.fas.fa-angle-right
                  | ¿Quién lo ha investigado antes? 
                li.eb
                  b.me-2
                    i.fas.fa-angle-right
                  | ¿Cómo se ha abordado en otros contextos? 
                li.eb
                  b.me-2
                    i.fas.fa-angle-right
                  | ¿Qué diferencia hace investigar sobre este tema?
              p.eb En fin, todo ayuda a hacerse una idea al respecto del tema antes de adentrarse en el proceso de investigación. 
                b Una vez se tiene claro qué investigar se procede a buscar en las fuentes de información.
              p.mb-0 (Hernández et al., 2014; Manterola & Tamara Otzen, 2013)


      p.mb-5.text-center Revise los siguientes contenidos para comprender un poco mejor cuál es el proceso para indagar y elegir el tema de investigación:

      .row.justify-content-center.mb-4
        .col-md-6
          a.anexo(href="https://www.esic.edu/rethink/management/la-investigacion-analisis-tendencias-nueva-aliada-la-estrategia" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p.text-small
                b Enlace web. 
                | La investigación y análisis de tendencias como nueva aliada en la estrategia.

      .row.justify-content-center
        .col-md-8
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2
                img(src='@/assets/curso/t1-12.svg' style="max-width: 80px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0.text-center Vídeo. Cómo elegir y delimitar el tema.
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=zsqemeClPqQ" target="_blank")
                      span Ver más
                      i.fas.fa-link

      Separador

      #t1-3.titulo-segundo
        h2 1.3 Fuentes de información e investigación: Introducción a las macrotendencias y microtendencias, fuentes de inspiración

      .row.justify-content-center
        .col-6.mb-4.mb-lg-0
          img(src='@/assets/curso/t1-13.jpg')
        .col-lg-6
          .linea-tiempo-d
            .linea-tiempo-d__item.row
              .col-auto.linea-tiempo-d__item__col-number
                .linea-tiempo-d__item__number.tarjeta.color-primario
                  span 1
                .linea-tiempo-d__item__dots

              .col.pb-3
                .linea-tiempo-d__item__content.tarjeta.tarjeta--azul
                  .linea-tiempo-d__item__content__slot.p-3
                    p.mb-0.eb.text-small Al abordar la 
                      b investigación de moda
                      |, como en cualquier proceso de investigación, se inicia 
                      b incluyendo todo el material referencial posible
                      |, para lo cual se acude a las fuentes de información, las cuales se clasifican en primarias y secundarias.

            .linea-tiempo-d__item.row
              .col-auto.linea-tiempo-d__item__col-number
                .linea-tiempo-d__item__number.tarjeta.color-primario
                  span 2
                .linea-tiempo-d__item__dots

              .col.pb-3
                .linea-tiempo-d__item__content.tarjeta.tarjeta--azul
                  .linea-tiempo-d__item__content__slot.p-3
                    p.mb-0.eb.text-small Las 
                      b fuentes primarias 
                      | son de primera mano, información original, ideas o conceptos resultados de investigaciones que no han sido interpretadas o que surgen a partir de un trabajo directo de campo por primera vez. 

            .linea-tiempo-d__item.row
              .col-auto.linea-tiempo-d__item__col-number
                .linea-tiempo-d__item__number.tarjeta.color-primario
                  span 3
                .linea-tiempo-d__item__dots

              .col.pb-3
                .linea-tiempo-d__item__content.tarjeta.tarjeta--azul
                  .linea-tiempo-d__item__content__slot.p-3
                    p.mb-0.eb.text-small Las 
                      b fuentes secundarias
                      |, son las fuentes de información que ya ha sido registrada o interpretada por otros autores previamente. Para el caso de 
                      b la moda
                      |, se cuenta con 
                      b investigación de campo
                      |, en la que el investigador mismo toma fotografías, videos, se entrevista con personas conocedoras sobre el tema o directamente con los usuarios.

            .linea-tiempo-d__item.row
              .col-auto.linea-tiempo-d__item__col-number
                .linea-tiempo-d__item__number.tarjeta.color-primario
                  span 4
                .linea-tiempo-d__item__dots

              .col.pb-3
                .linea-tiempo-d__item__content.tarjeta.tarjeta--azul
                  .linea-tiempo-d__item__content__slot.p-3
                    p.mb-0.eb.text-small Se cuenta como 
                      b fuente 
                      | de información los 
                      b informes de macrotendencias, tendencias y microtendencias 
                      | publicados por las agencias internacionales, donde se interpreta la 
                      b información emergente 
                      | en cuanto a la moda se refiere.

            
            .linea-tiempo-d__item.row
              .col-auto.linea-tiempo-d__item__col-number
                .linea-tiempo-d__item__number.tarjeta.color-primario
                  span 5
                .linea-tiempo-d__item__dots

              .col.pb-3
                .linea-tiempo-d__item__content.tarjeta.tarjeta--azul
                  .linea-tiempo-d__item__content__slot.p-3
                    p.eb.text-small.mb-0 Además de lo anteriormente mencionado, se incluyen las 
                      b fuentes de inspiración
                      | , estas se encuentran en revistas, vídeos, películas, personajes, la naturaleza y en todo aquello que pueda constituirse como el origen de la inspiración del diseñador al momento de elaborar sus propuestas. 

            .linea-tiempo-d__item.row
              .col-auto.linea-tiempo-d__item__col-number
                .linea-tiempo-d__item__number.tarjeta.color-primario
                  span 6
                .linea-tiempo-d__item__dots

              .col.pb-3
                .linea-tiempo-d__item__content.tarjeta.tarjeta--azul
                  .linea-tiempo-d__item__content__slot.p-3
                    p.eb.text-small El SENA cuenta con un amplio abanico de posibilidades, tanto para las fuentes de información, como para las de inspiración, condensadas en el sistema de bibliotecas, accediendo a las bases de datos como e-libro (base de datos para consultar libros en línea), Fashion Snoop (base de datos de tendencias de moda), Pasalapágina (base de datos de revistas), IRIS (sistema de consulta bibliográfica nacional). 
                    p.text-small.mb-0 Adaptado de: Fradera, s.f.; Roselló. s.f.; Seivewright. 2013; Silvestrini & Vargas. 2008.
            
            .linea-tiempo-d__item.row
              .col-auto.linea-tiempo-d__item__col-number
                .linea-tiempo-d__item__number.tarjeta.color-primario
                  span 7
                .linea-tiempo-d__item__dots

              .col.pb-3
                .linea-tiempo-d__item__content.tarjeta.tarjeta--azul
                  .linea-tiempo-d__item__content__slot.p-3
                    p.eb.text-small Revise este material para la profundización del tema.

                    a.anexo(:href="obtenerLink('/downloads/CF4_U1_T3_Profundizacion.docx')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-doc.svg")
                      .anexo__texto
                        p.text-small
                          b Material complementario para profundizar. 
                          | Profundización

      Separador

      #t1-4.titulo-segundo
        h2 1.4 Metodologías para la gestión de la información: coolhunting y cooltsearching, bloggers y trendsetters, comunidades o grupos de consumo, herramientas para cazar tendencias

      p.eb En la investigación de moda se pueden encontrar diferentes 
        b roles 
        | y con ellos sus 
        b funciones. 

      img.mb-5(src='@/assets/curso/t1-14.jpg')

      .row.justify-content-center
        .col-lg-10
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/t1-15.svg')
            .tarjeta.color-rosado
              .p-4
                p.mb-0 Coolhunting (en español caza tendencias) y coolsearching (en español buscador de tendencias), son personas o agencias del medio de la moda, que se encargan de buscar, observar, analizar y clasificar de manera temprana la información del entorno (contexto mundial, nacional o local en todos sus aspectos) con el fin de simplificar y extraer la tendencia antes de que esta se produzca para saber invertir en ella en el momento oportuno. Son personas que ponen su creatividad estratégica al servicio de la innovación, publicando informes de tendencias que le sirven a las empresas y profesionales del medio.

        .col-lg-10
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/t1-16.svg')
            .tarjeta.color-rosado
              .p-4
                p.mb-0 Los bloggers (blogueros) y trendsetters (pioneros) son (en su mayoría) personas naturales que adoptan las tendencias de manera temprana (en inglés early adopters), sirven como puente entre los cazadores de tendencias y los consumidores, validado las propuestas de los informes e innovando con la aplicación, mezcla y looks (en español atuendo completo) en sus publicaciones (blogs o videoblogs), convirtiéndose en prescriptores de moda.

        .col-lg-10
          .tarjeta-avatar-b.mb-5
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/t1-17.svg')
            .tarjeta.color-rosado
              .p-4
                p Luego se encuentran las comunidades de consumo o la masa, quienes acceden a las tendencias de la moda una vez validada por los anteriores.
                p.mb-0 (Coolhunting, cazadores de tendencias, s.f.; Estaún, 2018; Fernández, 2017; López, s.f.; Skotnicka, 2013; Wikipedia, s.f.-a)

      p.mb-5.text-center En el documento adjunto encontrará información que le permitirá explorar un poco más el rol de quienes se han destacado como prescriptores de moda.   

      .row.justify-content-center
        .col-md-6
          a.anexo(:href="obtenerLink('/downloads/CF4_U1_T4_GestionDeLaInformacion.docx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-doc.svg")
            .anexo__texto
              p.text-small
                b Material complementario para profundizar. 
                | Profundización

      Separador

      #t1-5.titulo-segundo
        h2 1.5 Recopilación y análisis de datos: cuaderno de bocetos, técnicas de dibujo, el collage, yuxtaposición deconstrucción, referencias cruzadas, análisis de la investigación, centrarse en elementos claves (moodboards, storyboards, concepbook).

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--azul.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p.mb-0 En la tarea de obtener información de las fuentes de inspiración y de las metodologías utilizadas, ya se puede iniciar a validar y analizar los contenidos para lograr identificar puntos de valor. En esta fase del proceso se obtienen conclusiones y a veces se podrán encontrar ciertas dificultades o por el contrario decidir acciones a implementar. 
              .col-5
                img(src='@/assets/curso/t1-18.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--azul.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-md-7.mb-4.mb-md-0
                p.mb-0 Para llevar a cabo la búsqueda de información se emplean técnicas como el análisis de datos cualitativos y cuantitativos. El primero se centra en las opiniones, actitudes y creencias y en preguntas y respuestas como: ¿por qué? ¿cómo? y el segundo en los datos duros e información que pueda contabilizarse, obtenido mediante preguntas similares a ¿cuántos?, ¿quién?, ¿con qué frecuencia? y ¿dónde?
              .col-5
                img(src='@/assets/curso/t1-19.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.tarjeta--azul.p-4.p-md-5
            p.mb-5 Para reunir la información y construir el concepto de la colección, el diseñador se vale de diferentes herramientas, siempre centrándose en los elementos clave de la investigación, según su experiencia o preferencia utiliza:

            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                ul.lista-ul--color.lista-ul--separador.mb-0
                  li 
                    i.fas.fa-atom
                    | El cuaderno de bocetos: es un libro que el investigador va construyendo con ideas gráficas, datos escritos, posibles materiales, fotografías, referencias abordadas, en fin, todo lo que crea conveniente para el desarrollo del pensamiento reflexivo durante el desarrollo de la creación.
                  li 
                    i.fas.fa-atom
                    | Las técnicas de dibujo: sirven como herramientas de exploración de las ideas, plasmando los procesos mentales y llevando un hilo conductor. Se emplean desde técnicas tradicionales, hasta las más modernas, a elección del profesional.
                  li 
                    i.fas.fa-atom
                    | El collage: es el método mediante el cual se construyen imágenes a partir de recortes, ensamblado y pegado, es empleada por los creativos como alternativa al dibujo.
                  li 
                    i.fas.fa-atom
                    | Yuxtaposición: es similar al collage, emplea la recolección y ensamblado, en este caso incluyendo objetos que compartan similitudes o conexiones con el tema.
                  li 
                    i.fas.fa-atom
                    | La deconstrucción: consiste en descomponer la información, para luego ensamblarla y crear nuevos resultados.
                  li.mb-0
                    i.fas.fa-atom
                    | Referencias cruzadas o relaciones forzadas: se utiliza para unir conceptualmente ideas que a simple vista no tienen similitud, es útil en momentos en que el proceso creativo parece estancarse.
                    br
                    br
                    | Adaptado de Definicion.de, s.f.-b; Hernández, Fernández & Baptista, 2014; Melo, 2018; QuestionPro, s.f.-a; Seivewright, 2013.
              .col-6
                img(src='@/assets/curso/t1-20.jpg')

      p.mb-5.text-center Para conocer detalles sobre cada una de estas herramientas se le sugiere revisar el siguiente material:
      
      .row.justify-content-center
        .col-md-6
          a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-ppt.svg")
            .anexo__texto
              p.text-small Material complementario para profundizar.

      Separador

      #t1-6.titulo-segundo
        h2 1.6 Estructura y forma de la colección: interpretación del concepto de la colección, cartas de color, formas, texturas, materiales, siluetas, procesos y acabados)

      .row.justify-content-center.mb-4
        .col-md-6
          .cajon-b.color-primario.p-3.mb-4
            p.eb Luego de tener el 
              b concepto claro
              | , este 
              b se deberá traducir en productos
              | , para lo cual se realiza una estructura previa de la colección, identificando los tipos de productos y cómo se interrelacionan entre sí, con el fin de darle forma a la colección y mantener un hilo conductor, el cual se logra mediante una estrecha relación con el concepto, teniendo en cuenta o formulando 
              b las cartas de color, formas, texturas, materiales, siluetas, procesos y acabados, que se harán tangibles en el producto final
              | . Es decir, cada uno de los productos de la colección corresponderá al concepto desarrollado y entre todos hablarán el mismo lenguaje.
            p Para el desarrollo de los productos algunos diseñadores recurren al prototipado sobre maniquí, también conocido como drapeado (en inglés Draping), otros al dibujo o a técnicas de sobreposición de imágenes (técnicas vistas en el tema anterior).
            p.mb-0 Adaptado de Castillo. s.f.; Corona. 2010; ESME Escuela de moda y empresa. s.f.; Seivewright. 2013; Tutoriales con la Miss. 2018

        .col-6
          img(src='@/assets/curso/t1-21.jpg')

      p.mb-5.text-center Por medio de la consulta del siguiente material será posible ampliar los conocimientos de este tema.


      .row.justify-content-center
        .col-md-10
          .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2
                img(src='@/assets/curso/t1-12.svg' style="max-width: 80px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0.text-center Video. ¿Cómo definir el concepto de una colección de moda?
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=fkjgvkujtpk&feature=youtu.be" target="_blank")
                      span Ver más
                      i.fas.fa-link

        .col-md-4.mb-4.mb-md-0
          a.anexo(href="https://fashionandillustration.com/bases-para-disenar-una-coleccion-de-moda/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p.text-small
                b Material complementario. 
                | Bases para diseñar una colección de moda: Guía completa con imágenes y ejemplos.
        .col-md-4.mb-4.mb-md-0
          a.anexo(href="https://www.esme.es/los-pasos-para-desarrollar-una-coleccion-de-moda/" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p.text-small 
                b Material complementario. 
                | Los pasos para desarrollar una colección de moda | ESME Escuela de Moda y Empresa
        .col-md-4
          a.anexo(href="https://issuu.com/corona_baos/docs/thesis" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p.text-small
                b Material complementario. 
                | Desarrollo de colecciones de moda en la industria textil

      Separador

      #t1-7.titulo-segundo
        h2 1.7 Comunicación de las ideas: dibujo aplicado al diseño, plantillas, ilustraciones, collage, dibujo de prototipo, composición, tablero de dibujo

      p.mb-5.eb Llegó la hora de 
        b plasmar los conceptos a través de la comunicación creativa
        | , moldeando de forma gráfica todo aquello que se encontró en la investigación.          

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4.mb-lg-0
                p.mb-0.eb El concepto de comunicación proviene del prefijo “com” de compartir algo con otros; entonces, donde su verdadero sentido está en la intención de 
                  b enviar mensajes 
                  | para 
                  b estimular una respuesta 
                  | en la demás y dicha respuesta es la que permitirá saber que se fue comprendido por los demás. 
              .col-6.col-lg-3
                img(src='@/assets/curso/t1-22.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4.mb-lg-0
                p.mb-0.eb La palabra expresión proviene del término latino expressus es manifestar los pensamientos y las impresiones de nuestra realidad por medio de la palabra, gestos o actitudes”; “es la representación, a través de símbolos e imágenes de una manifestación de nuestra propia individualidad, y puede estar dirigida o no a otro sujeto” (Hiebaum, 2017).
              .col-6.col-lg-3
                img(src='@/assets/curso/t1-23.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4.mb-lg-0
                p.mb-0.eb 
                  b Todos los signos, símbolos y medios por los cuales transmitimos significados y valores a otros seres humanos, constituyen lo que llamamos formas de expresión 
                  | (Paoli. 1985; pág. 67).
              .col-6.col-lg-3
                img(src='@/assets/curso/t1-24.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4.mb-lg-0
                p.mb-0.eb El dibujo es una de las 
                  b principales herramientas para la comunicación de ideas y de expresión gráfica
                  | , acercado en todas sus técnicas a la realidad y a la forma del producto. Este se realiza en forma de boceto o croquis a mano alzada y en algunos casos se obtiene de un software o programa de diseño para tal fin.
              .col-6.col-lg-3
                img(src='@/assets/curso/t1-25.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4.mb-lg-0
                p.mb-0.eb 
                  b Las plantillas 
                  | son dibujos o ilustraciones 
                  b prediseñadas 
                  | sobre las cuales, los diseñadores plasman sus ideas originales, lo que las convierte en una importante ayuda. En el software o programa de diseño la plantilla cumple la 
                  b función de edición avanzada
                  | , lo cual permite lograr un sinnúmero de elementos. A las plantillas se les complementa con el dibujo del prototipo que es un acercamiento más a la realidad, pero limitada del producto y donde se permite validar una y otra vez hasta su aprobación final.
              .col-6.col-lg-3
                img(src='@/assets/curso/t1-26.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4.mb-lg-0
                p.mb-0.eb Luego de usar plantillas y de tener 
                  b el dibujo prototipo 
                  | se pasa a 
                  b la ilustración técnica
                  | , en la que se representan gráficamente las prendas con detalles exactos, logrando con sus técnicas la realidad necesaria para entenderlas y llevarlas a cabo.
              .col-6.col-lg-3
                img(src='@/assets/curso/t1-27.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-9.mb-4.mb-lg-0
                p.mb-0.eb Al igual que para el proceso investigativo, para el de comunicación algunos diseñadores acuden al collage como técnica de expresión.
              .col-6.col-lg-3
                img(src='@/assets/curso/t1-28.svg')

      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario--claro.p-4.p-md-5
            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4.mb-lg-0
                p.eb Al final del proceso investigativo se encuentra 
                  b el tablero de dibujo 
                  | llamado trends board (paneles de tendencias o de indumentaria), una de las herramientas fundamentales de un investigador de moda. 
                  b Ayuda a interpretar y delimitar todo aquello que se convertirá en tendencia
                  | . En él se plasma, de manera gráfica, concreta y clara: la colección, imágenes conceptuales, referentes de la fuente de inspiración, el concepto que comunica la tendencia y los elementos de diseño que se desprenden de ella como la imagen de usuario actual y el aspiracional, la morfología (silueta), texturas visuales y táctiles, paleta de color y su proporción de uso sugerida, sistemas de acceso y cierre de los productos, prenda fetiche o must y los complementos de moda que completarán los atuendos.
              .col-lg-4.mb-4.mb-lg-0
                img(src='@/assets/curso/t1-29.svg')

              .col-12
                p.mb-0 Adaptado de Cámara Industrial Argentina de la Indumentaria (CIAI). s.f.-a, s.f.-b; Emprende a conciencia, s.f.; Escuela Superior de Diseño de Barcelona, 2018a, 2018b; GonzáLez, s.f.; Hiebaum, 2017; Ras, 2015

      .row.justify-content-center
        .col-lg-8
          .tarjeta.color-primario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2
                img(src='@/assets/curso/t1-09.svg' style="max-width: 80px")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.mb-0.text-center Material complementario
                  .col-sm-auto
                    a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      span Ver más
                      i.fas.fa-link

















</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
