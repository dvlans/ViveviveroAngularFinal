
import { Injectable } from '@angular/core';

@Injectable()
export class InteriorServices{

  private interiores: Interior[] = [
    {
      codigo: 5464,
      imagen: "assets/img/interior/IMG_5464.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5467,
      imagen: "assets/img/interior/IMG_5467.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5469,
      imagen: "assets/img/interior/IMG_5469.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5471,
      imagen: "assets/img/interior/IMG_5471.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5472,
      imagen: "assets/img/interior/IMG_5472.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5473,
      imagen: "assets/img/interior/IMG_5473.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5474,
      imagen: "assets/img/interior/IMG_5474.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5475,
      imagen: "assets/img/interior/IMG_5475.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5477,
      imagen: "assets/img/interior/IMG_5477.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5480,
      imagen: "assets/img/interior/IMG_5480.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5481,
      imagen: "assets/img/interior/IMG_5481.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5482,
      imagen: "assets/img/interior/IMG_5482.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5483,
      imagen: "assets/img/interior/IMG_5483.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5484,
      imagen: "assets/img/interior/IMG_5484.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5485,
      imagen: "assets/img/interior/IMG_5485.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5487,
      imagen: "assets/img/interior/IMG_5487.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5489,
      imagen: "assets/img/interior/IMG_5489.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5490,
      imagen: "assets/img/interior/IMG_5490.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5491,
      imagen: "assets/img/interior/IMG_5491.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5494,
      imagen: "assets/img/interior/IMG_5494.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5495,
      imagen: "assets/img/interior/IMG_5495.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5496,
      imagen: "assets/img/interior/IMG_5496.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5497,
      imagen: "assets/img/interior/IMG_5497.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5498,
      imagen: "assets/img/interior/IMG_5498.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5500,
      imagen: "assets/img/interior/IMG_5500.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5501,
      imagen: "assets/img/interior/IMG_5501.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5502,
      imagen: "assets/img/interior/IMG_5502.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5503,
      imagen: "assets/img/interior/IMG_5503.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5504,
      imagen: "assets/img/interior/IMG_5504.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5505,
      imagen: "assets/img/interior/IMG_5505.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5507,
      imagen: "assets/img/interior/IMG_5507.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5508,
      imagen: "assets/img/interior/IMG_5508.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5510,
      imagen: "assets/img/interior/IMG_5510.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5511,
      imagen: "assets/img/interior/IMG_5511.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5513,
      imagen: "assets/img/interior/IMG_5513.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5514,
      imagen: "assets/img/interior/IMG_5514.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5515,
      imagen: "assets/img/interior/IMG_5515.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5517,
      imagen: "assets/img/interior/IMG_5517.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5518,
      imagen: "assets/img/interior/IMG_5518.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5520,
      imagen: "assets/img/interior/IMG_5520.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5521,
      imagen: "assets/img/interior/IMG_5521.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5522,
      imagen: "assets/img/interior/IMG_5522.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 5523,
      imagen: "assets/img/interior/IMG_5523.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },
  ]

  constructor() {
  }

  getInteriores(){
    return this.interiores;
  }

  getInterior( idx:string ){
    return this.interiores[idx];
  }

  getRandomInterior(){
    return this.interiores[Math.floor(Math.random()*this.interiores.length)]
  }

}

export interface Interior{
  codigo: number,
  imagen: string,
  nombre: string,
  nombreCientifico: string,
  luz: string,
  riego: string,
  categoria: string,
  otros: string
}
