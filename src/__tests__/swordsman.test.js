import Swordsman from '../swordsman';

test('Swordsman create', () => {
  const obj = new Swordsman('Bob');
  const correct = {
    name: 'Bob',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(obj).toEqual(correct);
});
