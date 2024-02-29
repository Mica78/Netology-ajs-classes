import Magician from '../magician';

test('Magician create', () => {
  const obj = new Magician('Bob');
  const correct = {
    name: 'Bob',
    type: 'Magician',
    health: 100,
    level: 1,
    selfAttack: 10,
    defence: 40,
  };
  expect(obj).toEqual(correct);
});

test('Magician get attack', () => {
  const obj = new Magician('Bob');
  obj.attack = 100;
  expect(obj.attack).toEqual(100);
});

test('Magician set attack', () => {
  const obj = new Magician('Bob');
  obj.attack = 100;
  obj.attack = 2;
  expect(obj.attack).toEqual(85);
});

test('Magician set stoned', () => {
  const obj = new Magician('Bob');
  obj.attack = 100;
  obj.attack = 2;
  expect(obj.stoned).toEqual(true);
});

test('Magician not stoned', () => {
  const obj = new Magician('Bob');
  obj.attack = 100;
  expect(obj.stoned).toEqual(undefined);
});
