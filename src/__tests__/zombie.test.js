import Zombie from '../zombie';

test('Zombie type', () => {
  const obj = new Zombie('Bob');
  expect(obj.type).toBe('Zombie');
});

test('Zombie name', () => {
  const obj = new Zombie('Bob');
  expect(obj.name).toBe('Bob');
});

test('Zombie health', () => {
  const obj = new Zombie('Bob');
  expect(obj.health).toEqual(100);
});

test('Zombie level', () => {
  const obj = new Zombie('Bob');
  expect(obj.level).toEqual(1);
});

test('Zombie attack', () => {
  const obj = new Zombie('Bob');
  expect(obj.attack).toEqual(40);
});

test('Zombie defence', () => {
  const obj = new Zombie('Bob');
  expect(obj.defence).toEqual(10);
});
