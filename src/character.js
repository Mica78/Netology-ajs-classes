export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Deamon', 'Magician', 'Undead', 'Zombie'];
    if (
      typeof name !== 'string' || name.length < 2 || name.length > 10
    ) {
      throw new Error('Invalid character');
    }
    if (!types.includes(type)) {
      throw new Error('Invalid type');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.selfAttack = null;
    this.defence = null;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.selfAttack *= 1.2;
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

  get attack() {
    return this.selfAttack;
  }

  set attack(x) {
    if (['Deamon', 'Magician'].includes(this.type) && (x > 1 && x <= 5)) {
      this.selfAttack = Math.round(this.selfAttack * (1 - (x - 1) / 10) - Math.log2(x) * 5);
      Object.defineProperty(this, 'stoned', {
        value: true, configurable: true, writable: true, enumerable: true,
      });
    } else {
      this.selfAttack = x;
    }
  }
}
