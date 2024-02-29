import Deamon from '../deamon';

test('Deamon create', () => {
  const obj = new Deamon('Bob');
  const correct = {
    name: 'Bob',
    type: 'Deamon',
    health: 100,
    level: 1,
    selfAttack: 10,
    defence: 40,
  };
  expect(obj).toEqual(correct);
});

test('Deamon get attack', () => {
  const obj = new Deamon('Bob');
  obj.attack = 100;
  expect(obj.attack).toEqual(100);
});

test('Deamon set attack', () => {
  const obj = new Deamon('Bob');
  obj.attack = 100;
  obj.attack = 2;
  expect(obj.attack).toEqual(85);
});

test('Deamon set stoned', () => {
  const obj = new Deamon('Bob');
  obj.attack = 100;
  obj.attack = 2;
  expect(obj.stoned).toEqual(true);
});

test('Deamon not stoned', () => {
  const obj = new Deamon('Bob');
  obj.attack = 100;
  expect(obj.stoned).toEqual(undefined);
});
