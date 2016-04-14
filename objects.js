//file for all classes with Objects like players, platforms, enemies, everything

function Hero(){
  this.hp = 20;
  this.damage = 5;
  this.weapon = 1; //1 is spear; 2 is 1H sword
}
Hero.prototype = new PhysicsObject();
