/**********************
 *      IMAGENES      *
 **********************/
// Cargar SpriteSheet
var overWorldSpriteSheet = []; 

// Esta variable guarda a las imagenes
var overWorldImg = [];

function preload() {
  // Link
  link_up_0    = loadImage("img/link/movement/link_up_0.png");
  link_up_1    = loadImage("img/link/movement/link_up_1.png");
  link_down_0  = loadImage("img/link/movement/link_down_0.png");
  link_down_1  = loadImage("img/link/movement/link_down_1.png");
  link_right_0 = loadImage("img/link/movement/link_right_0.png");
  link_right_1 = loadImage("img/link/movement/link_right_1.png");
  link_left_0  = loadImage("img/link/movement/link_left_0.png");
  link_left_1  = loadImage("img/link/movement/link_left_1.png");

  link_attack_right = loadImage("img/link/attack/link-attack_right.png");
  link_attack_left  = loadImage("img/link/attack/link-attack_left.png");
  link_attack_up    = loadImage("img/link/attack/link-attack_up.png");
  link_attack_down  = loadImage("img/link/attack/link-attack_down.png");

  wood_sword_right = loadImage("img/items/wood_sword_right.png");
  wood_sword_left  = loadImage("img/items/wood_sword_left.png");
  wood_sword_up    = loadImage("img/items/wood_sword_up.png");
  wood_sword_down  = loadImage("img/items/wood_sword_down.png");

  // Bloques
  overWorldSpriteSheet = loadImage('img/overworld/32_overworld.png');
  // Objetos en el mundo


  // UI
  game_ui = loadImage("img/ui/player_ui.png");

  hp_img = loadImage("img/ui/heart_full.png");

  octorock_0_img = loadImage("img/enemys/octorok/octorok_0.png");
  octorock_1_img = loadImage("img/enemys/octorok/octorok_1.png");
}