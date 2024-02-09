import Undead from '../undead';

test('Undead type', () => {
  const obj = new Undead('Bob');
  expect(obj.type).toBe('Undead');
});

test('Undead name', () => {
  const obj = new Undead('Bob');
  expect(obj.name).toBe('Bob');
});

test('Undead health', () => {
  const obj = new Undead('Bob');
  expect(obj.health).toEqual(100);
});

test('Undead level', () => {
  const obj = new Undead('Bob');
  expect(obj.level).toEqual(1);
});

test('Undead attack', () => {
  const obj = new Undead('Bob');
  expect(obj.attack).toEqual(25);
});

test('Undead defence', () => {
  const obj = new Undead('Bob');
  expect(obj.defence).toEqual(25);
});
