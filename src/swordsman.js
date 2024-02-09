import Character from './character';

export default class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
