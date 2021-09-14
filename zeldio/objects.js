
/**********************
 *       CLASES       *
 **********************/

// Objeto principal
class Objeto {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;

    this.w = w;
    this.h = h;

    this.img = img;

    // Movimiento
  }

  dibujar(mode, xpos = 0, ypos = 0) {
    imageMode(CORNER);

    if (mode === 'mask') {
      stroke('red');
      fill('white');
      rect(this.x, this.y, this.w, this.h);
    }

    image(this.img, this.x + xpos, this.y + ypos);

    imageMode(CORNER);
  }

  chocando(x, y, obj) {
     for (let i of obj) {
      if (i.solid == true) {
        if (
          x < i.x + i.w &&
          y < i.y + i.h &&
          i.x < x + this.w &&
          i.y < y + this.h
        ) {
          return true;
        }
      }
    }
  }
}


class sword extends Objeto {
  constructor(x, y, w, h, img)  {
    super(x, y, w, h, img);
    this.w = 32;
    this.h = 32;
  }
  dibujar2() {
    image(this.img, this.x, this.y-16);
  }
}

espada_madera = new sword(0, 0, 32, 32);