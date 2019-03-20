
import { Injectable } from '@angular/core';

@Injectable()
export class CactusServices{

  private cactuses: Cactus[] = [
    {
      codigo: 7165,
      imagen: "assets/img/cactus/IMG_7165.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7202,
      imagen: "assets/img/cactus/IMG_7204.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7205,
      imagen: "assets/img/cactus/IMG_7205.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7206,
      imagen: "assets/img/cactus/IMG_7206.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7207,
      imagen: "assets/img/cactus/IMG_7207.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7208,
      imagen: "assets/img/cactus/IMG_7208.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7209,
      imagen: "assets/img/cactus/IMG_7209.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7210,
      imagen: "assets/img/cactus/IMG_7210.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7212,
      imagen: "assets/img/cactus/IMG_7212.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7213,
      imagen: "assets/img/cactus/IMG_7213.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7214,
      imagen: "assets/img/cactus/IMG_7214.jpg",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7216,
      imagen: "assets/img/cactus/IMG_7216.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7217,
      imagen: "assets/img/cactus/IMG_7217.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7218,
      imagen: "assets/img/cactus/IMG_7218.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7219,
      imagen: "assets/img/cactus/IMG_7219.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7220,
      imagen: "assets/img/cactus/IMG_7220.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7221,
      imagen: "assets/img/cactus/IMG_7221.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7222,
      imagen: "assets/img/cactus/IMG_7222.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7223,
      imagen: "assets/img/cactus/IMG_7223.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7224,
      imagen: "assets/img/cactus/IMG_7224.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7225,
      imagen: "assets/img/cactus/IMG_7225.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7226,
      imagen: "assets/img/cactus/IMG_7226.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7227,
      imagen: "assets/img/cactus/IMG_7227.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7228,
      imagen: "assets/img/cactus/IMG_7228.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7229,
      imagen: "assets/img/cactus/IMG_7229.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7230,
      imagen: "assets/img/cactus/IMG_7230.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7231,
      imagen: "assets/img/cactus/IMG_7231.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7232,
      imagen: "assets/img/cactus/IMG_7232.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7233,
      imagen: "assets/img/cactus/IMG_7233.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7234,
      imagen: "assets/img/cactus/IMG_7234.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7235,
      imagen: "assets/img/cactus/IMG_7235.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7236,
      imagen: "assets/img/cactus/IMG_7236.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7237,
      imagen: "assets/img/cactus/IMG_7237.jpg",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7238,
      imagen: "assets/img/cactus/IMG_7238.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7239,
      imagen: "assets/img/cactus/IMG_7239.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7240,
      imagen: "assets/img/cactus/IMG_7240.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    },

    {
      codigo: 7241,
      imagen: "assets/img/cactus/IMG_7241.JPG",
      nombre: "HIEDRA HELIX VARIEGADA",
      nombreCientifico: "Hedera Helix Variegada",
      luz: "Alta",
      riego: "Moderado",
      categoria: "Plantas Interior",
      otros: "La hiedra es una trepadora muy resistente y de muy rápido crecimiento que se puede utilizar tanto para cubrir muros o paredes, como para crear una alfombra verde. Es muy adaptable, y no necesita riegos frecuentes para poder mantenerse preciosa."
    }

  ]

  constructor() {
  }

  getCactuses(){
    return this.cactuses;
  }

  getCactus( idx:string ){
    return this.cactuses[idx];
  }

  getRandomCactus(){
    return this.cactuses[Math.floor(Math.random()*this.cactuses.length)]
  }

}

export interface Cactus{
  codigo: number,
  imagen: string,
  nombre: string,
  nombreCientifico: string,
  luz: string,
  riego: string,
  categoria: string,
  otros: string
}
