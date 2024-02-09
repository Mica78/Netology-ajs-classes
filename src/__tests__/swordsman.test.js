import Swordsman from '../swordsman';

test('Swordsman type', () => {
  const obj = new Swordsman('Bob');
  expect(obj.type).toBe('Swordsman');
});

test('Swordsman name', () => {
  const obj = new Swordsman('Bob');
  expect(obj.name).toBe('Bob');
});

test('Swordsman health', () => {
  const obj = new Swordsman('Bob');
  expect(obj.health).toEqual(100);
});

test('Swordsman level', () => {
  const obj = new Swordsman('Bob');
  expect(obj.level).toEqual(1);
});

test('Swordsman attack', () => {
  const obj = new Swordsman('Bob');
  expect(obj.attack).toEqual(40);
});

test('Swordsman defence', () => {
  const obj = new Swordsman('Bob');
  expect(obj.defence).toEqual(10);
});
