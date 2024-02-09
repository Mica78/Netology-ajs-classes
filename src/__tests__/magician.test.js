import Magician from '../magician';

test('Magician type', () => {
  const obj = new Magician('Bob');
  expect(obj.type).toBe('Magician');
});

test('Magician name', () => {
  const obj = new Magician('Bob');
  expect(obj.name).toBe('Bob');
});

test('Magician health', () => {
  const obj = new Magician('Bob');
  expect(obj.health).toEqual(100);
});

test('Magician level', () => {
  const obj = new Magician('Bob');
  expect(obj.level).toEqual(1);
});

test('Magician attack', () => {
  const obj = new Magician('Bob');
  expect(obj.attack).toEqual(10);
});

test('Magician defence', () => {
  const obj = new Magician('Bob');
  expect(obj.defence).toEqual(40);
});
