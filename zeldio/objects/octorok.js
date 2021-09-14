
class Octorok extends Objeto {
  constructor(x, y, w, h, img) {
    super(x, y, w, h, img);
    // Propiedades
    this.v = 1;

    this.timer = 0;
    this.chg = true;

    this.dirRandom = 0;
    //this.decidir();
  }
  animation(v1, v2) {
    this.timer++;
    if (this.timer > 4) {
      // Cambio de look!
      if (this.chg === true) {
        this.img = v1;
        this.chg = false;
      } else if (this.chg === false) {
        this.img = v2;
        this.chg = true;
      }
      this.timer = 0;
    }
  }
  decidir() {
    let bll = 0;
    let bb = 0;

    let xpos = this.x;
    // ¿Estoy chocando con algo?
    let pos = [
      this.chocando(this.x, this.y - this.v, bloques),
      this.chocando(this.x + this.v, this.y, bloques),
      this.chocando(this.x, this.y + this.v, bloques),
      this.chocando(this.x - this.v, this.y, bloques),
    ];
    let dir = [];

    for (var i = 0; i < 4; i++) {
      if (!pos[i]) {
        dir.push(i);
      }
    }
    // Cuantos bloques tengo disponibles

    // Decidir a donde moverse
    this.dirRandom = dir[int(random(0, dir.length))];
/*     

    if (this.dirRandom === 0) {
      while(!this.chocando(this.x + bll, this.y, bloques)) {
        bll += 32;
        bb++;
      }
    } else if (this.dirRandom === 1) {

      while(!this.chocando(this.x + bll, this.y, bloques)) {
          bll += 32;
          bb++;
        }
    } else if (dir == 2) {
      while(!this.chocando(this.x + bll, this.y, bloques)) {
        bll += 32;
        bb++;
      }
    } else if (dir == 3) {
      while(!this.chocando(this.x + bll, this.y, bloques)) {
        bll += 32;
        bb++;
      }
    }
    console.log(bb); */
  }
  moverse() {

    if (this.dirRandom === 0) {
      // Arriba
      this.y -= this.v;
      if (this.chocando(this.x, this.y - this.v, bloques)
      || this.y <= 128 - 16) {
        this.decidir();
      }
    } else if (this.dirRandom === 1) {
      // Abajo
      this.x += this.v;
      if (this.chocando(this.x + this.v, this.y, bloques) || this.x >= 480) {
        this.decidir();
      }
    } else if (this.dirRandom === 2) {
      // Izquierda
      this.y += this.v;
      if (this.chocando(this.x, this.y + this.v, bloques)) {
        this.decidir();
      }
    } else if (this.dirRandom === 3 ) {
      // Derecha
      this.x -= this.v;
      if (this.chocando(this.x - this.v, this.y, bloques) || this.x <= 0) {
        this.decidir();
      }
  }
  }
  dibujar2() {
    //scale(-1,1);
    //scale(1, -1, 1);

    //translate(32, -32);
    //rotate(10);
    imageMode(CENTER);
    //rotate(10);
    fill('red');
    rect(this.x, this.y, 32);
    imageMode(CORNER);
    //image(this.img, this.x + 16, this.y + 16);
    //imageMode(CORNER);
    //sscale(1);
    //rotate(0);
    //scale(1,1);
  }
}