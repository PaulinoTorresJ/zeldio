/* eslint-disable no-undef, no-unused-vars */

class Game {
  constructor() {
    this.mapaPos = {
      x: 9,
      y: 5
    };
    this.mapa = overWorld[this.mapaPos.y][this.mapaPos.x];
  }
  loop() {
    this.dev(dev);
    this.ui();
    this.mapManager(overWorldImg);
  }
  worldGenerator(map, objs) {
    for (var y = 0; y < 11; y++) {
      for (var x = 0; x < 16; x++) {
        if (map[x + y * 16] !== 0) {
          if (map[x + y * 16] === 83 || map[x + y * 16] === 8 || map[x + y * 16] === 55) {
            bloques.push(new rocon_Verde(32 * x, 112 + 32 * y, 32, 32, false,objs[map[x + y * 16] - 1]));
          } else {
            bloques.push(new rocon_Verde(32 * x, 112 + 32 * y, 32, 32, true,objs[map[x + y * 16] - 1]));
          }
          
        }
      }
    }
  }
  ui() {
    imageMode(CORNER);
    image(game_ui, 0, 0);

    for (var i = 0; i < link.hp / 2; i++) {
      if (i > 7) {
        // Segundo
        image(hp_img, 352 + 16 * i - 128, 64 + 16);
      } else {
        // Primero
        image(hp_img, 352 + 16 * i, 64);
      }
    }


    imageMode(CORNER);
  }
  dev() {
    let fps = frameRate();

    document.getElementById("dev").innerHTML = `
    Link x:  ${link.x} <br />
    Link y:  ${link.y} <br />
  
    Objetos: ${bloques.length}    <br />
    FPS: ${fps.toFixed(0)}
    `;
  }
  /*   this.mapaPos = {
    x: 7,
    y: 7,
  }; */

  changeMap() {
    this.mapa = overWorld[this.mapaPos.y][this.mapaPos.x];

    // Metodo que cambia de mapa
    bloques = new Array(0);
    // Cambiar de mapa
    this.worldGenerator(this.mapa, overWorldImg);
  }
  mapManager(objs) {
    if (link.x >= 489) { // Derecha
      this.mapaPos.x += 1;

      link.x = 0;
      link.hspd = 0;
      link.vspd = 0;

      this.changeMap();
    } else if (link.x < 0) { // Izquierda
      this.mapaPos.x -= 1;

      link.x = 480;
      link.hspd = 0;
      link.vspd = 0;

      this.changeMap();
    } else if (link.y <= 128) { // Va arriba
      this.mapaPos.y -= 1;

      link.y = 448;
      link.hspd = 0;
      link.vspd = 0;

      this.changeMap();
    } else if (link.y >= 448) { // abajo
      this.mapaPos.y += 1;

      link.y = 126;
      link.hspd = 0;
      link.vspd = 0;

      this.changeMap();
    }
  }
}