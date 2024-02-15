import Undead from '../undead';

test('Undead create', () => {
  const obj = new Undead('Bob');
  const correct = {
    name: 'Bob',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(obj).toEqual(correct);
});
