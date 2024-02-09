import Character from '../character';

test('Character name lenght shorter 2', () => {
  expect(() => new Character('V')).toThrow('Invalid character');
});

test('Character name lenght longer 10', () => {
  expect(() => new Character('Valsghjksdjhgh;askjdg')).toThrow('Invalid character');
});

test('Character name not string', () => {
  expect(() => new Character(1)).toThrow('Invalid character');
});

test('correct Character', () => {
  const character = new Character('Bop');
  expect(character).toBe(character);
});

test('correct Character health', () => {
  const character = new Character('Bop');
  expect(character.health).toEqual(100);
});

test('correct Character level', () => {
  const character = new Character('Bop');
  expect(character.level).toEqual(1);
});

test('Character levelUp', () => {
  const character = new Character('Bop');
  character.levelUp();
  expect(character.level).toEqual(2);
});

test('Character defence up', () => {
  const character = new Character('Bop');
  character.defence = 1;
  character.levelUp();
  expect(character.defence).toEqual(1.2);
});

test('Character attack up', () => {
  const character = new Character('Bop');
  character.attack = 1;
  character.levelUp();
  expect(character.attack).toEqual(1.2);
});

test('Character health up', () => {
  const character = new Character('Bop');
  character.health = 1;
  character.levelUp();
  expect(character.health).toEqual(100);
});

test('Character health not up', () => {
  const character = new Character('Bop');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Invalid health');
});

test('Character maximum damage', () => {
  const character = new Character('Bop');
  character.damage(1000000);
  expect(character.health).toEqual(0);
});

test('Character damage', () => {
  const character = new Character('Bop');
  character.damage(1);
  expect(character.health).toEqual(99);
});
