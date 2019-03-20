
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsServices {

  private products: Product[] = [
    {
      codigo: 5464,
      imagen: "assets/img/exterior/IMG_5464.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."

    },

    {
      codigo: 5467,
      imagen: "assets/img/exterior/IMG_5467.JPG",
      nombre: "FILODENDRO CORDATUM",
      nombreCientifico: "Philodendro Cordatum",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Planta trepadora cultivada por su follaje."

    },



    {
      codigo: 5469,
      imagen: "assets/img/exterior/IMG_5469.JPG",
      nombre: "CALLISIA",
      nombreCientifico: "Callisia Repens",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Pequeño vivaz frondosa, de largos tallos menudos, primero erguidos o rastreros y luego colgantes cuando alcanzan unos 20 cm de largo. Una planta ideal para cesta colgante."

    },

    {
      codigo: 5471,
      imagen: "assets/img/exterior/IMG_5471.JPG",
      nombre: "HELECHO ESPADA",
      nombreCientifico: "Nephrolepis exaltata",
      luz: "Luz indirecta o tamizada",
      riego: "Regar sumergiendo el recipiente en agua ",
      categoria: "Plantas Exterior",
      otros: "Si se cultiva en interior es importante mantener un ambiente húmedo colocando el recipiente sobre una bandeja con el fondo cubierto por bolas de arcilla húmedas y vaporizando regularmente el follaje."

    },


    {
      codigo: 5472,
      imagen: "assets/img/exterior/IMG_5472.JPG",
      nombre: "CISSUS",
      nombreCientifico: "Cissus rhombifolia",
      luz: "Luz directa  por pocas horas o tamizada",
      riego: "2 veces en semana en verano y cada 10 días en invierno.",
      categoria: "Plantas Exterior",
      otros: "Si tiene un soporte, la planta se sujeta con zarcillos; si no hay soporte, los tallos caerán en cascada y el aspecto se hace más compacto. Hojas compuestas por tres foliolos dentados, verde oscuro brillante por su parte superior y más claro y satinado por debajo."

    },



    {
      codigo: 5473,
      imagen: "assets/img/exterior/IMG_5473.JPG",
      nombre: "HELECHO BOTÓN",
      nombreCientifico: "Pellaea rotundifolia",
      luz: "Un sitPlantas Exterior iluminado resultará excelente, pero tolerará otro sombrío. Toleran el sol siempre que no le falte humedad al suelo. En verano téngala apartada de los rayos solares directos.",
      riego: "Regar sumergiendo el recipiente en agua (Moderado)			otros:		Verde oscuro, con hojillas brillantes y redondeadas; sus frondes no superan los 30 cm. Los soros son marginales y redondeados.",

      categoria: "Plantas Exterior",
      otros:		"Verde oscuro, con hojillas brillantes y redondeadas; sus frondes no superan los 30 cm. Los soros son marginales y redondeados."

    },



    {
      codigo: 5474,
      imagen: "assets/img/exterior/IMG_5474.JPG",
      nombre: "TRADESCANTIA PURPÚREA",
      nombreCientifico: "TRADESCANTIA PURPÚREA",
      luz: "Luz Alta",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "La purpurina o amor de hombre es una planta muy llamativa por su colorido púrpura. A finales de verano emite unas florecillas rosa-violáceo. Estas exterior cubren el terreno en pequeñas superficies, secas o húmedas, soleadas o umbrosas, pero eso sí, sólo para climas sin heladas o heladas débiles. Buena para macetas con porte colgante."

    },


    {
      codigo: 5475,
      imagen: "assets/img/exterior/IMG_5475.JPG",
      nombre: "Dieffenbachia",
      nombreCientifico: "Dieffenbachia",
      luz: "Indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros:		"s un género de exterior tropicales de la familia de las aráceas, notables por las características manchas claras en sus hojas. Se conocen cerca de 30 especies."

    },



    {
      codigo: 5477,
      imagen: "assets/img/exterior/IMG_5477.JPG",
      nombre: "SINGONIO VARIAGADO",
      nombreCientifico: "Syngonium Podophyllun",
      luz: "Indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros:		"Planta herbácea trepadora por medio de raíces adventicias, con entrenudos de 10 cm. de largo."

    },



    {
      codigo: 5480,
      imagen: "assets/img/exterior/IMG_5480.JPG",
      nombre: "FILODENDRO CORDATUM VARIEGADO",
      nombreCientifico: "Philodendro Cordatum",
      luz: "Indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros:		"Planta trepadora cultivada por su follaje."

    },



    {
      codigo: 5481,
      imagen: "assets/img/exterior/IMG_5481.JPG",
      nombre: "SCINDAPSUS AUREUS",
      nombreCientifico: "Scindapsus aureus o Pothos",
      luz: "Indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros:		"Además de ser una clásica dentro de las exterior de interior, es una planta muy longeva si se la trata con un poco de cuidado. Entre las exterior para purificar el aire, el Scindapsus aureus es una de los 20 más efectivas."

    },



    {
      codigo: 5482,
      imagen: "assets/img/exterior/IMG_5482.JPG",
      nombre: "TRANDESCANTIA",
      nombreCientifico: "Tradescantia pallida",
      luz: "Luz Alta",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros:		"La purpurina o amor de hombre es una planta muy llamativa por su colorido púrpura. A finales de verano emite unas florecillas rosa-violáceo. Estas exterior cubren el terreno en pequeñas superficies, secas o húmedas, soleadas o umbrosas, pero eso sí, sólo para climas sin heladas o heladas débiles. Buena para macetas con porte colgante"

    },



    {
      codigo: 5483,
      imagen: "assets/img/exterior/IMG_5483.JPG",
      nombre: "HELECHO ASPLENIUM VIVIPARA",
      nombreCientifico: "Asplenium viviparum",
      luz: "Luz indirecta o tamizada",
      riego: "Regar sumergiendo el recipiente en agua (Moderado)",
      categoria: "Plantas Exterior",
      otros:		"Los helechos son unas exterior con características muy peculiares: algunos, parecen palmeras con su tronco y sus frondes, y otros, la mayoría, crecen hasta alcanzar una altura no superior a los 40cm. Hay unos, los Pteris, que son muy decorativos, ya que se desarrollan de tal manera que puede decirse que son colgantes."

    },



    {
      codigo: 5484,
      imagen: "assets/img/exterior/IMG_5484.JPG",
      nombre: "FLOR DE PORCELANA",
      nombreCientifico: "Hoya Carnosa o Clepia",
      luz: "Luz indirecta o tamizada",
      riego: "Regar sumergiendo el recipiente en agua (Moderado)",
      categoria: "Plantas Exterior",
      otros:		"La Flor de cera es una planta trepadora fácil de cultivar que te puede durar muchos años. - Hay variedades con hojas bordeadas de blanco o amarillo ('Variegata')."

    },


    {
      codigo: 5485,
      imagen: "assets/img/exterior/IMG_5485.JPG",
      nombre: "CUCHARITA",
      nombreCientifico: "Peperomia Polybrota",
      luz: "Luz indirecta o tamizada",
      riego: "Escaso",
      categoria: "Plantas Exterior",
      otros:		""

    },


    {
      codigo: 5487,
      imagen: "assets/img/exterior/IMG_5487.JPG",
      nombre: "Tradescantia Zebrina",
      nombreCientifico: "Tradescantia Zebrina",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Necesita luz. Tradescantia no soporta los sitios oscuros; se vuelve alargada y las hojas tienden a perder su variegado y a ponerse completamente verdes. Tampoco le va el sol directo porque la decolora."

    },


    {
      codigo: 5489,
      imagen: "assets/img/exterior/IMG_5489.JPG",
      nombre: "Oxalis",
      nombreCientifico: "Oxalis",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "El género Oxalis, de la familia de las Oxalidaceae, está integrado por unas 600 especies de exterior herbáceas procedentes de regiones templadas y cálidas de todos los continentes."

    },


    {
      codigo: 5490,
      imagen: "assets/img/exterior/IMG_5490.JPG",
      nombre: "SINGONIO",
      nombreCientifico: "SINGONIO",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Planta herbácea trepadora por medio de raíces adventicias, con entrenudos de 10 cm. de largo."

    },

    {
      codigo: 5491,
      imagen: "assets/img/exterior/IMG_5491.JPG",
      nombre: "DRACENA CORDYLINE",
      nombreCientifico: "Cordyline Terminalis",
      luz: "Luz alta o Semisombra",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Planta arborescente, perennifolia, poco ramificada, con tallo muy engrosado en la base."

    },


    {
      codigo: 5494,
      imagen: "assets/img/exterior/IMG_5494.JPG",
      nombre: "CROTON NORMA",
      nombreCientifico: "Codiaeum variegatum",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Riega 2 ó 3 veces por semana en primavera y verano y cada 4 ó 5 días en invierno, con agua tibia. Nunca dejes secar a estas exterior."

    },


    {
      codigo: 5495,
      imagen: "assets/img/exterior/IMG_5495.JPG",
      nombre: "CROTON SPIRALE",
      nombreCientifico: "Codiaeum variegatum",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Riega 2 ó 3 veces por semana en primavera y verano y cada 4 ó 5 días en invierno, con agua tibia. Nunca dejes secar a estas exterior."

    },

    {
      codigo: 5496,
      imagen: "assets/img/exterior/IMG_5496.JPG",
      nombre: "PILEA",
      nombreCientifico: "Pilea Cadierei, Madre Perla",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Planta bonita y fácil de cuidar."

    },


    {
      codigo: 5497,
      imagen: "assets/img/exterior/IMG_5497.JPG",
      nombre: "MONEDA CHINA",
      nombreCientifico: "Pilea Peperomioides",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Pertenece a la familia Urticaceae y al género Pilea spp. el género más extenso de esta familia que comprende entre 500 a 700 especies"

    },


    {
      codigo: 5501,
      imagen: "assets/img/exterior/IMG_5501.JPG",
      nombre: "PEPEROMIA OBTUFOLIA",
      nombreCientifico: "Peperomia Obtufolia",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Planta herbácea estolonífera, de hasta 20 cm. de altura, con un tallo de unos 5 mm. de diámetro. Cultivada por su follaje. Es más vistosa en sus formas variegadas."

    },

    {
      codigo: 5502,
      imagen: "assets/img/exterior/IMG_5502.JPG",
      nombre: "PEPEROMIA PEPPERSPOT",
      nombreCientifico: "Peperomia Pepperspot",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Es una especie muy especial y versátil. Sus hojas de color verde brillante crearán una bola muy frondosa de hojas. Es muy decorativa gracias a los tallos de color marrón rojizo que destacan con el verde de sus hojas. Con el tiempo los brotes se harán más largos y crearán una cascada preciosa. Es una planta muy fácil de cuidar."

    },

    {
      codigo: 5503,
      imagen: "assets/img/exterior/IMG_5503.JPG",
      nombre: "FICUS RASTRERO",
      nombreCientifico: "Ficus Repens",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: ""

    },


    {
      codigo: 5504,
      imagen: "assets/img/exterior/IMG_5504.JPG",
      nombre: "Plectranthus",
      nombreCientifico: "Plectranthus",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Es un género de la familia Lamiaceae con unas 1000 especies descritas, de las cuales solo 325 son aceptadas, 650 meros sinónimos y unas 35 todavía sin resolver."

    },


    {
      codigo: 5505,
      imagen: "assets/img/exterior/IMG_5505.JPG",
      nombre: "PHILODENDRO MONSTERA",
      nombreCientifico: "Philodendro Monstera o Costilla de Adán",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "El nombreCientifico 'monstera' se debe al gran parecido que los indígenas de las selvas amazónicas veían entre las hojas adultas y las manos de un gigante. El siguiente nombreCientifico 'deliciosa' sin embargo hace alusión a sus frutos comestibles, cuyo sabor es similar al del plátano."

    },


    {
      codigo: 5507,
      imagen: "assets/img/exterior/IMG_5507.JPG",
      nombre: "FICUS ELÁSTICA",
      nombreCientifico: "Ficus Elástica",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Es una de esas exterior de interior irresistible. Por un lado, su belleza ornamental es capaz de decorar con la elegancia de sus hojas intensamente verdes. Por otro, los cuidados del ficus elástica son tan sencillos que hacen de esta planta una poco trabajosa."

    },

    {
      codigo: 5508,
      imagen: "assets/img/exterior/IMG_5508.JPG",
      nombre: "CEROPEGIA",
      nombreCientifico: "Ceropegia Woodii",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "La ceropegia es una planta colgante que alcanza de 150 a 200 cm de largo. Sushojas son cordiformes, verdes, jaspeadas de gris. Se desarrollan sobre un tallo flexible con hinchazones parecidas a pequeños bulbos pardos y rugosos. Las flores, de colo malva, se abren en primavera."

    },

    {
      codigo: 5511,
      imagen: "assets/img/exterior/IMG_5511.JPG",
      nombre: "FICUS ELÁSTICA LEMON",
      nombreCientifico: "Ficus Elástica Lemon",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Es una de esas exterior de interior irresistible. Por un lado, su belleza ornamental es capaz de decorar con la elegancia de sus hojas intensamente verdes. Por otro, los cuidados del ficus elástica son tan sencillos que hacen de esta planta una poco trabajosa."

    },

    {
      codigo: 5513,
      imagen: "assets/img/exterior/IMG_5513.JPG",
      nombre: "PHILODENDRO PARAGUAYO",
      nombreCientifico: "Philodendron bipinnatifidum",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Esta especies de Philodendron posee hojas de gran tamaño que pueden llegar a medir hasta 60 cm de longitud."

    },


    {
      codigo: 5514,
      imagen: "assets/img/exterior/IMG_5514.JPG",
      nombre: "PHILODENDRO OBLICUO",
      nombreCientifico: "Philodendron adansonii",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: ""

    },

    {
      codigo: 5515,
      imagen: "assets/img/exterior/IMG_5515.JPG",
      nombre: "MARANTA CENANTE",
      nombreCientifico: "Philodendron Oblicuo",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: ""

    },

    {
      codigo: 5517,
      imagen: "assets/img/exterior/IMG_5517.JPG",
      nombre: "FICUS LYRATA",
      nombreCientifico: "Ficus Lyrata o Gomero Pera",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Su lugar de origen se centra en el África tropical. Por lo tanto, sus necesidades climatológicas son más asociadas a climas cálidos, mostrando un oscurecimiento de las hojas cuando las temperaturas invernales son bajas. De hecho, estos se hielan con facilidad si la temperatura baja demasiado."

    },



    {
      codigo: 5518,
      imagen: "assets/img/exterior/IMG_5518.JPG",
      nombre: "CHEFLERA",
      nombreCientifico: "Schefflera arboricola",
      luz: "Luz indirecta o tamizada",
      riego: "Moderado",
      categoria: "Plantas Exterior",
      otros: "Es de crecimiento lento, con un solo tallo y hojas de color verde oliva, que están divididas en tres o cinco hojuelas ovaladas. Éstas nacen desde un punto central y caen en forma de un paraguas abierto."

    },

]

  constructor() {
  console.log("Servi");
  }

  getProducts(){
    return this.products
  }

  getProduct( idx:string ){
    return this.products[idx]
  }

  getRandomProduct(){
    return this.products[Math.floor(Math.random()*this.products.length)]
  }
}

  export interface Product{
    codigo: number,
    imagen: string,
    nombre: string,
    nombreCientifico: string,
    luz: string,
    riego: string,
    categoria: string,
    otros: string,


  }
