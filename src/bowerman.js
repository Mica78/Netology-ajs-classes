import Character from './character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}
