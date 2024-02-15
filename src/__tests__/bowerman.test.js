import Bowerman from '../bowerman';

test('Bowerman create', () => {
  const obj = new Bowerman('Bob');
  const correct = {
    name: 'Bob',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(obj).toEqual(correct);
});
