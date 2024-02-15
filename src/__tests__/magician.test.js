import Magician from '../magician';

test('Magician create', () => {
  const obj = new Magician('Bob');
  const correct = {
    name: 'Bob',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(obj).toEqual(correct);
});
