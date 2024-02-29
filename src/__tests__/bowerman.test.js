import Bowerman from '../bowerman';

test('Bowerman create', () => {
  const obj = new Bowerman('Bob');
  const correct = {
    name: 'Bob',
    type: 'Bowerman',
    health: 100,
    level: 1,
    selfAttack: 25,
    defence: 25,
  };
  expect(obj).toEqual(correct);
});

test('Bowerman not stoned', () => {
  const obj = new Bowerman('Bob');
  obj.attack = 100;
  obj.attack = 2;
  expect(obj.stoned).toEqual(undefined);
});
