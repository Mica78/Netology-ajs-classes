export default class Character {
  constructor(name) {
    if (
      typeof name === 'string'
      && name.length >= 2
      && name.length <= 10
    ) {
    //   this.name = name;
      this.type = String();
      this.health = 100;
      this.level = 1;
      this.attack = Number();
      this.defence = Number();
    } else {
      throw new Error('Invalid character');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Invalid health');
    }
  }

  damage(points) {
    if (this.health - points * (1 - this.defence / 100) >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      this.health = 0;
    }
  }
}
