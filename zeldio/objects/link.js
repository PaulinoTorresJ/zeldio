
// LINK //

class Link extends Objeto {
  constructor(x, y, img) {
    // Propiedades
    super(x, y, img);

    this.w = 30;
    this.h = 16;

    this.v = 2.5;

    this.hp = 6;

    this.timer_anim = 0;
    this.timer_sword = 0;

    this.chg = true;

    this.hspd = 0;
    this.vspd = 0;

    this.up = 0;
    this.right = 0;
    this.down = 0;
    this.left = 0;

    this.facing = 0;

    this.atacando = false;
  }
  loop() {
    this.controls();
    this.actions();
    this.dibujar('', 0, -16);
  }
  animation(v1, v2) {
    this.timer_anim++;
    if (this.timer_anim > 6) {
      // Cambio de look!
      if (this.chg === true) {
        this.img = v1;
        this.chg = false;
      } else if (this.chg === false) {
        this.img = v2;
        this.chg = true;
      }
      this.timer_anim = 0;
    }
  }
  hit(b) {
    return collideRectRect(this.x, this.y, 32, 32, b.x, b.y, 32, 32);
  }
  controls() {
    let up, down, right, left, vspd, hspd;

    up    = keyIsDown(87);
    down  = keyIsDown(83);
    right = keyIsDown(68);
    left  = keyIsDown(65);

    // Movimiento

    vspd = 0;
    hspd = 0;

    hspd = (right - left) * this.v;
    vspd = (down - up)    * this.v;

    if (Math.sign(hspd) === 1) {
      this.facing = "derecha";
      if (!this.atacando) this.animation(link_right_1, link_right_0);
    } else if (Math.sign(hspd) === -1) {
      this.facing = "izquierda";
      if (!this.atacando) this.animation(link_left_1, link_left_0);
    } else if (Math.sign(vspd) === 1) {
      this.facing = "abajo";
      if (!this.atacando) this.animation(link_down_1, link_down_0);
    } else if (Math.sign(vspd) === -1) {
      this.facing = "arriba";
      if (!this.atacando) this.animation(link_up_1, link_up_0);
    }


    // Colision Horizontal
    if (this.chocando(this.x + hspd, this.y, bloques)) {
      while (!this.chocando(this.x + Math.sign(hspd), this.y, bloques)) {
        this.x += Math.sign(hspd);
      }
      hspd = 0;
    }

    this.x += hspd;

    // Colision Vertical
    if (this.chocando(this.x, this.y + vspd, bloques)) {
      while (!this.chocando(this.x, this.y + Math.sign(vspd), bloques)) {
        this.y += Math.sign(vspd);
      }
      vspd = 0;
    }
    this.y += vspd; 
  }
  actions() {
    let a, b;

    a = keyIsDown(77);
    b = keyIsDown(78);

    // anim
    if (this.atacando === true) {
      this.timer_sword++;
      if (this.timer_sword >= 5) {
        this.v = 4;
        this.timer_sword = 0;
        this.atacando = false;

        espada_madera.x = -32;
        espada_madera.y = -32;

        // Volver a su estado anterior
        if (this.facing === "derecha") {
          this.img = link_right_0;
        } else if (this.facing === "izquierda") {
          this.img = link_left_0;
        } else if (this.facing === "arriba") {
          this.img = link_up_0;
        } else if (this.facing === "abajo") {
          this.img = link_down_0;
        }
      }
    }

    if (a && this.atacando === false) {
      this.atacando = true;

      this.v = 0;

      //console.log('-');

      if (this.facing === "derecha") {
        this.img = link_attack_right;

        espada_madera.img = wood_sword_right;
        espada_madera.x = link.x + 32;
        espada_madera.y = link.y;
      } else if (this.facing === "izquierda") {
        this.img = link_attack_left;

        espada_madera.img = wood_sword_left;
        espada_madera.x = link.x - 32;
        espada_madera.y = link.y;
      } else if (this.facing === "arriba") {
        this.img = link_attack_up;

        espada_madera.img = wood_sword_up;
        espada_madera.x = link.x;
        espada_madera.y = link.y - 32;
      } else if (this.facing === "abajo") {
        this.img = link_attack_down;

        espada_madera.img = wood_sword_down;
        espada_madera.x = link.x;
        espada_madera.y = link.y + 32;
      }
    }
  }

}


link = new Link(256-32, 304 + 16, 0); 


/*
    if (this.atacando === true) {
      this.timer_sword++;
      if (this.timer_sword >= 5) {
        this.v = 4;
        this.timer_sword = 0;
        this.atacando = false;

        espada_madera.x = -32;
        espada_madera.y = -32;

        // Volver a su estado anterior
        if (this.facing === "derecha") {
          this.img = link_right_0;
        } else if (this.facing === "izquierda") {
          this.img = link_left_0;
        } else if (this.facing === "arriba") {
          this.img = link_up_0;
        } else if (this.facing === "abajo") {
          this.img = link_down_0;
        }
      }
      console.log("TIMER:" + this.timer_sword);
    }

    if (a && this.atacando === false) {
      this.atacando = true;

      this.v = 0;

      //console.log('-');

      if (this.facing === "derecha") {
        this.img = link_attack_right;

        espada_madera.img = wood_sword_right;
        espada_madera.x = link.x + 32;
        espada_madera.y = link.y;
      } else if (this.facing === "izquierda") {
        this.img = link_attack_left;

        espada_madera.img = wood_sword_left;
        espada_madera.x = link.x - 32;
        espada_madera.y = link.y;
      } else if (this.facing === "arriba") {
        this.img = link_attack_up;

        espada_madera.img = wood_sword_up;
        espada_madera.x = link.x;
        espada_madera.y = link.y - 32;
      } else if (this.facing === "abajo") {
        this.img = link_attack_down;

        espada_madera.img = wood_sword_down;
        espada_madera.x = link.x;
        espada_madera.y = link.y + 32;
      }
    }

    if (Math.sign(hspd) === 1) {
      this.facing = "derecha";
      if (!a) this.animation(link_right_1, link_right_0);
    } else if (Math.sign(hspd) === -1) {
      this.facing = "izquierda";
      if (!a) this.animation(link_left_1, link_left_0);
    } else if (Math.sign(vspd) === 1) {
      this.facing = "abajo";
      if (!a) this.animation(link_down_1, link_down_0);
    } else if (Math.sign(vspd) === -1) {
      this.facing = "arriba";
      if (!a) this.animation(link_up_1, link_up_0);
    }
*/