import Deamon from '../deamon';

test('Deamon create', () => {
  const obj = new Deamon('Bob');
  const correct = {
    name: 'Bob',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(obj).toEqual(correct);
});
