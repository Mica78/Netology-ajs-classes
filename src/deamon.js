import Character from './character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
