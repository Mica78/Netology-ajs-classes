import Zombie from '../zombie';

test('Zombie create', () => {
  const obj = new Zombie('Bob');
  const correct = {
    name: 'Bob',
    type: 'Zombie',
    health: 100,
    level: 1,
    selfAttack: 40,
    defence: 10,
  };
  expect(obj).toEqual(correct);
});
