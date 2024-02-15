import Character from '../character';

test('Character name lenght shorter 2', () => {
  expect(() => new Character('V', 'Bowerman')).toThrow('Invalid character');
});

test('Character name lenght longer 10', () => {
  expect(() => new Character('Valsghjksdjhgh;askjdg', 'Bowerman')).toThrow('Invalid character');
});

test('Character name not string', () => {
  expect(() => new Character(1, 'Bowerman')).toThrow('Invalid character');
});

test('Character type not string', () => {
  expect(() => new Character('Bop', 1)).toThrow('Invalid type');
});

test('Character type not included', () => {
  expect(() => new Character('Bop', 'Bop')).toThrow('Invalid type');
});

test('correct Character', () => {
  const character = new Character('Bop', 'Bowerman');
  expect(character).toBe(character);
});

test('correct Character health', () => {
  const character = new Character('Bop', 'Bowerman');
  expect(character.health).toEqual(100);
});

test('correct Character level', () => {
  const character = new Character('Bop', 'Bowerman');
  expect(character.level).toEqual(1);
});

test('Character levelUp', () => {
  const character = new Character('Bop', 'Bowerman');
  character.levelUp();
  expect(character.level).toEqual(2);
});

test('Character defence up', () => {
  const character = new Character('Bop', 'Bowerman');
  character.defence = 1;
  character.levelUp();
  expect(character.defence).toEqual(1.2);
});

test('Character attack up', () => {
  const character = new Character('Bop', 'Bowerman');
  character.attack = 1;
  character.levelUp();
  expect(character.attack).toEqual(1.2);
});

test('Character health up', () => {
  const character = new Character('Bop', 'Bowerman');
  character.health = 1;
  character.levelUp();
  expect(character.health).toEqual(100);
});

test('Character health not up', () => {
  const character = new Character('Bop', 'Bowerman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Invalid health');
});

test('Character maximum damage', () => {
  const character = new Character('Bop', 'Bowerman');
  character.damage(1000000);
  expect(character.health).toEqual(0);
});

test('Character damage', () => {
  const character = new Character('Bop', 'Bowerman');
  character.damage(1);
  expect(character.health).toEqual(99);
});
