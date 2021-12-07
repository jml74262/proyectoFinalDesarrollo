import { Component, OnInit } from '@angular/core';
import{Articulo} from '../../models/articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: Articulo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articulos = [
      {
        titulo:'El mundo se compromete a acabar con la contaminación en Cumbre de Nairobi',
        ruta:'articuloCompleto',
        autor: 'Tom Harrison',
        contenido : "El mundo se comprometió en Nairobi a acabar con la contaminación al cierre de la Asamblea de la ONU para el medio Ambiente, donde se registraron casi 2.5 millones de promesas de gobiernos, sociedad civil, empresas e individuos que potencialmente mejorarán la vida de millones de personas en todo el planeta."+
        "Si se cumplen todos los compromisos asumidos en la cumbre, 1490 millones más de personas respirarán aire puro, 480.0000 kilómetros de costas en el mundo estarán limpias y se dispondrá de 18.6 millones de dólares para la investigación y el desarrollo de programas innovadores en contra de la contaminación."+
        "En la Asamblea también se aprobaron 13 resoluciones no vinculantes y tres decisiones. Entre ellas, medidas para enfrentar la basura marina y los micro plásticos, prevenir y reducir la contaminación del aire, eliminar el plomo de la pintura y las baterías, proteger los ecosistemas hídricos y controlar la polución en las zonas afectadas por los conflictos y el terrorismo."+
        "Asimismo, por primera vez en la historia de la cumbre, los ministros de medio ambiente emitieron una declaración. El documento indica que las naciones honrarán los esfuerzos para prevenir, mitigar y gestionar la contaminación del aire, de la tierra y el suelo, del agua dulce y de los océanos, que perjudica nuestra salud, sociedades, ecosistemas, economías y seguridad."+
        "Durante la Asamblea que duró tres días y junto con decenas de otros países, Chile se unió a la campaña #MaresLimpios para liberar a los océanos de plástico y Colombia a la de #RespiraLaVida, que busca combatir la contaminación del aire."+
        "«Hoy hemos puesto la lucha contra la contaminación en un lugar destacado de la agenda política mundial. Tenemos una larga lucha por delante, pero la Asamblea mostró que hay un apetito real por un significativo cambio positivo”, dijo Erik Solheim, director ejecutivo del Programa de la ONU para el Medio Ambiente."+   
        "La degradación ambiental causa 12.6 millones de muertes al año, además de la destrucción generalizada de ecosistemas clave. La contaminación del aire es la principal causa de muerte por motivos ambientales, con 6.5 millones de defunciones asociadas cada año.",
        imagen: 'assets/img/Articulo_1.jpg',
        referencia : 'https://www.un.org/sustainabledevelopment/es/2017/12/el-mundo-se-compromete-acabar-con-la-contaminacion-en-cumbre-de-nairobi/',
        
      },
      {
        titulo:'Una década (2021-2030) para impulsar las ciencias oceánicas en todo el mundo',
        ruta:'articuloCompleto2',
        autor: 'James Joyce',
        contenido : "La ONU proclama el período 2021-2030 como la Década de las Ciencias Oceánicas para el Desarrollo Sostenible."+
        "El objetivo es movilizar a la comunidad científica, pero también a los políticos, a las empresas y a la sociedad civil en torno a un programa común de investigación y de innovación tecnológica."+
        "Una de las prioridades durante esos diez años será «reforzar y diversificar las fuentes de financiación."+
        "En la actualidad los países dedican a las ciencias oceánicas entre el 0,04 % y el 4 % del dinero invertido en investigación y desarrollo (I+D)."+
        "Sin embargo, hay casi 3.000 millones de personas que dependen de la biodiversidad marina y costera para su subsistencia, y los océanos absorben casi un tercio del dióxido de carbono generado por el hombre y atenúan así el impacto del calentamiento climático."+
        "La Organización de Naciones Unidas para la Educación, la Ciencia y la Cultura (UNESCO) destaca que pese a la importancia que tiene, la ciencia no ha conseguido evaluar los efectos acumulativos que tienen las actividades humanas en los océanos y sus consecuencias en términos de contaminación, de calentamiento o de acidificación.",
        imagen: 'assets/img/Articulo_2.jpg',
        referencia : 'https://www.un.org/sustainabledevelopment/es/2017/12/una-decada-2021-2030-para-impulsar-las-ciencias-oceanicas/',
        
      },
      {
        titulo:'Bachelet premiada por la ONU por su impacto positivo en el medio ambiente',
        ruta:'articuloCompleto3',
        autor: 'Jaime Aguiñaga',
        contenido : 'Seis líderes recibieron hoy el premio Campeones de la Tierra durante la celebración de la tercera Asamblea de la ONU para el Medio Ambiente, en Nairobi, Kenia.'+
        'Es el reconocimiento ambiental más importante de las Naciones Unidas y este año lo han recibido la presidenta de Chile, Michelle Bachelet, y el Centro de vuelo espacial Goddard de la NASA, entre otros, por su importante impacto positivo en el medio ambiente.'+
        'Bachelet fue premiada en la categoría de liderazgo político por la creación de áreas marinas protegidas y por su impulso a las energías renovables.'+
        'En octubre de 2015, la presidenta chilena estableció varios parques marinos que han llevado la cobertura total de áreas protegidas de Chile a superar el millón de km2, la más grande del mundo.'+   
        'Además de la protección del medio ambiente marino, sus políticas han estimulado el aumento de la producción de energía renovable de 6% a 17% del total de la combinación energética de Chile en solo 4 años.',
       
        imagen: 'assets/img/Articulo_3.jpg',
        referencia : 'https://www.un.org/sustainabledevelopment/es/2017/12/bachelet-y-la-nasa-premiados-por-la-onu-por-su-impacto-positivo-en-el-medio-ambiente/'
      },
      {
        titulo:'España se une a la campaña Mares Limpios de ONU Medio Ambiente',
        ruta:'articuloCompleto4',
        autor: 'Gabriela Nuñez',
        contenido : 'España anunció este miércoles que se suma a la campaña Mares Limpios de ONU Medio Ambiente.'+
        'La 14° economía más grande del mundo se une a la iniciativa que busca limpiar los mares de plásticos y que cuenta con el respaldo de 32 estados miembros.'+
        '“En los últimos seis años hemos desarrollado la nueva Estrategia Marina de España y uno de sus objetivos principales es abordar la cuestión de la basura que termina en los océanos», dijo Raquel Orts Nebot, Directora General de Sostenibilidad de la costa y el mar de España. «En este sentido, confirmo que España se une a la campaña de ONU Medio Ambiente sobre la limpieza de los mares, con el firme propósito de apoyar esta iniciativa global y contribuir a su impacto en todo el mundo».'+
        '“El compromiso de España con esta campaña envía un mensaje importante a toda la región mediterránea y al mundo”, dijo el Director Ejecutivo de ONU Medio Ambiente, Erik Solheim. “Los océanos son fundamentales para nuestra supervivencia y debemos hacer todo lo que podamos para protegerlos”.'+
        'El plástico causa importante de daños ambientales y problemas de salud. Contamina el medio ambiente; mata aves, peces y otros animales que lo confunden con alimentos y perjudica los destinos turísticos y la pesca.',
        imagen: 'assets/img/Articulo_4.jpg',
        referencia : 'https://www.un.org/sustainabledevelopment/es/2017/10/espana-se-une-a-la-campana-mares-limpios-de-onu-medio-ambiente/'
      },
      {
        titulo:'La FAO pide que más países se unan al tratado contra la pesca ilegal',
        ruta:'articuloCompleto5',
        autor: 'Rodrigo Lara',
        contenido : 'Todos los países deberían unirse al Acuerdo sobre medidas del Estado Rector del Puerto (PSMA, por sus siglas en inglés) para que tenga éxito contra la pesca ilegal, una práctica que mueve miles de millones de dólares y perjudica la sostenibilidad de los océanos y la alimentación.'+
        'Es el mensaje que el director general de la FAO transmitió en la conferencia «Nuestro Océano» que se celebra en Malta. José Graziano da Silva dijo que hasta ahora 47 países, más la Unión Europea han ratificado el tratado.'+
        '«Pero necesitamos más. Necesitamos que todos los países del mundo sean parte de este acuerdo para que sea efectivo en todas las regiones».'+
        'Uno de los últimos países en unirse al tratado fue Perú a finales de septiembre.'+
        'La FAO considera que la pesca no declarada y no reglamentada representa hasta 26 millones de toneladas de pescado al año, lo que equivale a más del 15 % de las capturas totales en el mundo. Genera, en ese sentido, pérdidas económicas anuales por más de 23.000 millones de dólares a nivel mundial.'+
        'También en la conferencia Nuestro Océano, la UNESCO ha anunciado varios compromisos para fomentar la investigación científica y crear más conciencia sobre la conservación de los océanos. Entre esas iniciativas está la celebración de una Década para la Ciencia Oceánica y el Desarrollo sostenible de 2021 a 2030.',
        imagen: 'assets/img/Articulo_5.jpg',
        referencia : 'https://www.un.org/sustainabledevelopment/es/2017/10/la-fao-pide-que-mas-paises-se-unan-al-tratado-contra-la-pesca-ilegal/'
      },
      {
        titulo:'Peter Thomson, nuevo enviado especial de la ONU para los océanos del pacífico',
        ruta:'articuloCompleto6',
        autor: 'Joaquín Cosío',
        contenido : 'El Secretario General de la ONU nombró hoy a Peter Thomson, nacional de Fiji y presidente saliente del 71º periodo de sesiones de la Asamblea General, como enviado especial de Naciones Unidas para los Océanos, según informó el portavoz de la Organización, Stephan Dujarric.'+

        'Con este cargo, António Guterres trata de impulsar y dar seguimiento a los esfuerzos conseguidos durante la Conferencia de las Naciones Unidas sobre los Océanos, celebrada en junio pasado y, a la vez, de apoyar la Agenda 2030 para el desarrollo sostenible.'+
        
        'Dujarric explicó que Thomson dirigirá las actividades de promoción y divulgación pública en materia de protección de los océanos tanto dentro como fuera del sistema de las Naciones Unidas.'+
        
        '“Thomson velará por que se analicen y apliquen plenamente los numerosos resultados positivos de la Conferencia Oceánica, incluidos los cerca de 1.400 compromisos voluntarios”, indicó.'+
        
        'El portavoz añadió que colaborará con la sociedad civil, la comunidad científica, el sector privado y otras partes relevantes para fomentar sus actividades orientadas a la consecución del Objetivo de Desarrollo Sostenible número 14, que busca la conservación y el uso sustentable de los océanos.',
        imagen: 'assets/img/Articulo_6.jpg',
        referencia : 'https://www.un.org/sustainabledevelopment/es/2017/09/peter-thomson-nuevo-enviado-especial-de-la-onu-para-los-oceanos/'
      }
    ]
  }

}
